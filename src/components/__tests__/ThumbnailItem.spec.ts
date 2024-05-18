import { describe, it, expect, beforeEach } from 'vitest'
import { mount, RouterLinkStub, VueWrapper } from '@vue/test-utils'
import ThumbnailItem from '../thumbnail/ThumbnailItem.vue'
import { type SlideItem } from '@/types'
import RatingStar from '@/@ui/components/RatingStar.vue'
import IconPlay from '@/components/icons/IconPlay.vue'
import Image from '@/@ui/components/Image.vue'

describe('ThumbnailItem', () => {
  let wrapper: VueWrapper<unknown>
  const props = {
    item: {
      id: 1,
      name: 'Inception',
      image: 'Inception.jpg',
      rating: 8.5
    } as SlideItem
  }

  beforeEach(() => {
    wrapper = mount(ThumbnailItem, {
      props,
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
          RatingStar,
          IconPlay,
          Image
        }
      }
    })
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
