import { mount, type VueWrapper } from '@vue/test-utils'
import { describe, expect, beforeEach, it } from 'vitest'
import LayoutHeader from '@/layouts/components/header/LayoutHeader.vue'

describe('LayoutHeader', () => {
  let wrapper: VueWrapper<LayoutHeader>

  beforeEach(() => {
    wrapper = mount(LayoutHeader)
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
