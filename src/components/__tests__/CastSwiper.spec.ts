import { describe, it, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import CastSwiper from '../casts/CastSwiper.vue'
import SwiperSlide from 'swiper/vue'
import SwiperWrapper from '@/@ui/components/SwiperWrapper.vue'
import CastItem from '../casts/CastItem.vue'
import UsersIcon from '@/@ui/components/icons/UsersIcon.vue'
import SectionTitle from '@/@ui/components/SectionTitle.vue'
import { type Image, type Person } from '@/types'

describe('CastSwiper.vue', () => {
  let wrapper: VueWrapper<unknown>
  const props = {
    slides: [
      {
        id: 1,
        name: 'Person 1',
        image: { medium: 'image1.jpg', original: 'image1.jpg' } as Image,
        url: ' ',
        country: ' ',
        birthday: '',
        gender: '',
        deathday: null
      } as unknown as Person
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
