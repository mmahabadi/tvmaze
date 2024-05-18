import { describe, it, expect, beforeEach } from 'vitest'
import { createRouter, createWebHistory, type Router } from 'vue-router'
import { routes } from '@/router'
import HomeView from '@/views/HomeView.vue'

describe('Router', () => {
  let routerInstance: Router

  beforeEach(() => {
    routerInstance = createRouter({
      history: createWebHistory(import.meta.env.BASE_URL),
      routes
    })
  })

  it('should have a home route', () => {
    const route = routerInstance.resolve('/')
    expect(route.name).toBe('home')
    expect(route.matched.length).toBe(1)
    expect(route.matched[0].components.default).toBe(HomeView)
  })

  it('should have a details route', () => {
    const route = routerInstance.resolve('/details/1')
    expect(route.name).toBe('details')
    expect(route.matched.length).toBe(1)
    expect(route.matched[0].components.default).toBeInstanceOf(Function) // lazy component
  })

  it('should have a search route', () => {
    const route = routerInstance.resolve('/search')
    expect(route.name).toBe('search')
    expect(route.matched.length).toBe(1)
    expect(route.matched[0].components.default).toBeInstanceOf(Function) // lazy component
  })
})
