import { describe, it, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import { SwiperSlide } from 'swiper/vue'
import ThumbnailSwiper from '../thumbnail/ThumbnailSwiper.vue'
import SwiperWrapper from '@/@ui/components/SwiperWrapper.vue'
import ThumbnailItem from '../thumbnail/ThumbnailItem.vue'
import { type SlideItem } from '@/types'

describe('ThumbnailSwiper', () => {
  let wrapper: VueWrapper<ThumbnailSwiper>
  const props = {
    items: [
      {
        id: 1,
        name: 'Inception',
        image: 'Inception.jpg',
        rating: 8.5
      }
    ] as SlideItem[]
  }

  beforeEach(() => {
    wrapper = mount(ThumbnailSwiper, {
      props,
      global: {
        components: {
          SwiperSlide,
          SwiperWrapper,
          ThumbnailItem
        }
      }
    })
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
