import { describe, it, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import ImageSlider from '../slider/ImageSlider.vue'
import SliderItem from '../slider/SliderItem.vue'
import SwiperWrapper from '@/@ui/components/SwiperWrapper.vue'
import { createPinia, setActivePinia } from 'pinia'

describe('ImageSlider', () => {
  let wrapper: VueWrapper<ImageSlider>

  beforeEach(() => {
    setActivePinia(createPinia())
    wrapper = mount(ImageSlider, {
      global: {
        components: {
          SliderItem,
          SwiperWrapper
        }
      }
    })
  })

  it('renders correctly', () => {
    console.log(wrapper.html())
    expect(wrapper.html()).toMatchSnapshot()
  })
})
