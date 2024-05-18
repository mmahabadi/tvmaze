import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import BackButton from '../details/BackButton.vue'

describe('BackButton', () => {
  let wrapper: VueWrapper<unknown>

  beforeEach(() => {
    wrapper = mount(BackButton)
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
