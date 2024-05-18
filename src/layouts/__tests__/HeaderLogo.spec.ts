import { mount, type VueWrapper } from '@vue/test-utils'
import { describe, expect, beforeEach, it } from 'vitest'
import HeaderLogo from '@/layouts/components/header/HeaderLogo.vue'

describe('HeaderLogo', () => {
  let wrapper: VueWrapper<unknown>

  beforeEach(() => {
    wrapper = mount(HeaderLogo, {
      global: {
        stubs: {
          RouterLink: true
        }
      }
    })
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
