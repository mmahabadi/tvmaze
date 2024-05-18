import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, it, expect } from 'vitest'
import SwiperWrapper from '../SwiperWrapper.vue'
import type { SwiperOptions } from '@/@ui/types'

describe('SwiperWrapper', () => {
  let wrapper: VueWrapper<unknown>
  const props = {
    slidesPerView: 4,
    spaceBetween: 50
  } as SwiperOptions

  beforeEach(() => {
    wrapper = mount(SwiperWrapper, {
      props,
      global: {
        stubs: {
          Swiper: true
        }
      }
    })
  })
  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
