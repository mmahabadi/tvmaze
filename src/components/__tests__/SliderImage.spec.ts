import { describe, it, expect, beforeEach } from 'vitest'
import { mount, RouterLinkStub, VueWrapper } from '@vue/test-utils'
import SliderItem from '../slider/SliderItem.vue'
import DateIcon from '@/@ui/components/icons/CalendarIcon.vue'
import ClockIcon from '@/@ui/components/icons/ClockIcon.vue'
import IconPlay from '@/@ui/components/icons/IconPlay.vue'
import Image from '@/@ui/components/Image.vue'

describe('SliderImage', () => {
  let wrapper: VueWrapper<unknown>
  const props = {
    id: 1,
    name: 'The Simpsons',
    image: 'The Simpsons.jpg',
    endDate: '1989',
    rating: 8.7,
    genre: 'Animation'
  }

  beforeEach(() => {
    wrapper = mount(SliderItem, {
      props,
      global: {
        stubs: {
          DateIcon,
          ClockIcon,
          IconPlay,
          Image,
          'router-link': RouterLinkStub
        }
      }
    })
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
