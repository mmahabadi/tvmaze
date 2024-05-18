import { mount, type VueWrapper } from '@vue/test-utils'
import { describe, expect, beforeEach, it } from 'vitest'
import HeaderNav from '@/layouts/components/header/HeaderNav.vue'

describe('HeaderNav', () => {
  let wrapper: VueWrapper<unknown>

  beforeEach(() => {
    wrapper = mount(HeaderNav)
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
