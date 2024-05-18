import { mount, type VueWrapper } from '@vue/test-utils'
import { describe, expect, beforeEach, it } from 'vitest'
import LayoutFooter from '@/layouts/components/LayoutFooter.vue'

describe('LayoutFooter', () => {
  let wrapper: VueWrapper<LayoutFooter>

  beforeEach(() => {
    wrapper = mount(LayoutFooter)
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
