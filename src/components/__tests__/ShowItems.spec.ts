import { describe, it, expect, beforeEach } from 'vitest'
import { mount, RouterLinkStub, VueWrapper } from '@vue/test-utils'
import ShowItem from '../ShowItem.vue'
import IconPlay from '@/components/icons/IconPlay.vue'
import Image from '@/@ui/components/Image.vue'

describe('ShowItem.vue', () => {
  let wrapper: VueWrapper<unknown>
  const props = {
    id: 1,
    name: 'Inception',
    image: 'inception.jpg'
  }

  beforeEach(() => {
    wrapper = mount(ShowItem, {
      props,
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
          IconPlay,
          Image
        }
      }
    })
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('renders details', () => {
    expect(wrapper.find('h3').text()).toBe('Inception')
    expect(wrapper.findComponent(Image).props('src')).toBe(props.image)
    expect(wrapper.findComponent(Image).props('alt')).toBe(props.name)
    expect(wrapper.findComponent(IconPlay).exists()).toBe(true)
  })

  it('renders the RouterLink with the correct URL', () => {
    const routerLink = wrapper.findComponent(RouterLinkStub)
    expect(routerLink.props().to).toBe(`/details/${props.id}`)
  })
})
