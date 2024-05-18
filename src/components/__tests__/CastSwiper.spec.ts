import { describe, it, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import CastSwiper from '../casts/CastSwiper.vue'
import SwiperSlide from 'swiper/vue'
import SwiperWrapper from '@/@ui/components/SwiperWrapper.vue'
import CastItem from '../casts/CastItem.vue'
import UsersIcon from '@/@ui/components/icons/UsersIcon.vue'
import SectionTitle from '@/@ui/components/SectionTitle.vue'

describe('CastSwiper.vue', () => {
  let wrapper: VueWrapper<CastSwiper>
  const props = {
    slides: [
      {
        id: 1,
        name: 'Person 1',
        image: { medium: 'image1.jpg' }
      },
      {
        id: 2,
        name: 'Person 2',
        image: { medium: 'image2.jpg' }
      }
    ]
  }

  beforeEach(() => {
    wrapper = mount(CastSwiper, {
      props,
      global: {
        components: {
          SwiperSlide,
          SwiperWrapper,
          CastItem,
          UsersIcon,
          SectionTitle
        }
      }
    })
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders the correct number of slides', () => {
    const slides = wrapper.findAllComponents(CastItem)
    expect(slides.length).toBe(props.slides.length)
  })
})
