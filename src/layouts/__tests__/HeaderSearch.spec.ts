import { mount, type VueWrapper } from '@vue/test-utils'
import { describe, expect, beforeEach, it, vi } from 'vitest'
import HeaderSearch from '@/layouts/components/header/HeaderSearch.vue'
import { createPinia, setActivePinia } from 'pinia'
import { useSearchStore } from '@/stores/search'
import type { Movie } from '@/types'
import { useRouter, useRoute } from 'vue-router'

// Mocking useRouter and useRoute
vi.mock('vue-router', () => ({
  useRouter: vi.fn(),
  useRoute: vi.fn()
}))

describe('HeaderSearch', () => {
  let wrapper: VueWrapper<unknown>

  beforeEach(() => {
    setActivePinia(createPinia())

    const searchStore = useSearchStore()
    searchStore.searchResults = [{ id: 1, name: 'Inception' } as Movie]

    const mockRouter = { push: vi.fn() }
    const mockRoute = { query: { q: '' } }

    ;(useRouter as any).mockReturnValue(mockRouter)
    ;(useRoute as any).mockReturnValue(mockRoute)

    wrapper = mount(HeaderSearch, {
      global: {
        stubs: {
          SearchInput: true
        },
        provide: {
          store: searchStore
        }
      }
    })
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
