import { mount, type VueWrapper } from '@vue/test-utils'
import { describe, expect, beforeEach, it } from 'vitest'
import MainLayout from '@/layouts/MainLayout.vue'
import LayoutHeader from '@/layouts/components/header/LayoutHeader.vue'
import HeaderLogo from '@/layouts/components/header/HeaderLogo.vue'
import HeaderNav from '@/layouts/components/header/HeaderNav.vue'
import LayoutFooter from '@/layouts/components/LayoutFooter.vue'
import Loading from '@/@ui/components/LoadingOverlay.vue'

describe('MainLayout', () => {
  let wrapper: VueWrapper<MainLayout>

  beforeEach(() => {
    wrapper = mount(MainLayout, {
      props: {
        loading: false
      },
      global: {
        stubs: {
          LayoutHeader,
          HeaderLogo,
          HeaderSearch: true,
          HeaderNav,
          LayoutFooter,
          Loading,
          RouterLink: true
        }
      }
    })
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('loading overlay is not rendered by default', () => {
    expect(wrapper.findComponent(Loading).exists()).toBe(false)
  })

  it('renders loading overlay when loading prop is true', async () => {
    await wrapper.setProps({ loading: true })

    expect(wrapper.findComponent(Loading).exists()).toBe(true)
  })
})
