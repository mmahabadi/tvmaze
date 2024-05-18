import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, it, expect } from 'vitest'
import Toaster from '../Toaster.vue'
import type { ToasterMessage } from '@/types'
import { createPinia, setActivePinia } from 'pinia'

describe('Toaster', () => {
  let wrapper: VueWrapper<unknown>
  const props: ToasterMessage = { id: 1, message: 'test', type: 'error' }

  beforeEach(() => {
    setActivePinia(createPinia())
    wrapper = mount(Toaster, {
      props
    })
  })
  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders correct icon based on type', async () => {
    expect(wrapper.find('.error').exists()).toBe(true)

    await wrapper.setProps({ type: 'warning' })
    expect(wrapper.find('.warning').exists()).toBe(true)

    await wrapper.setProps({ type: 'success' })
    expect(wrapper.find('.success').exists()).toBe(true)
  })
})
