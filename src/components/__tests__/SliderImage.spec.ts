import { describe, it, expect, beforeEach } from 'vitest'
import { mount, RouterLinkStub, VueWrapper } from '@vue/test-utils'
import SliderItem from '../slider/SliderItem.vue'
import DateIcon from '@/@ui/components/icons/CalendarIcon.vue'
import ClockIcon from '@/@ui/components/icons/ClockIcon.vue'
import IconPlay from '@/components/icons/IconPlay.vue'
import Image from '@/@ui/components/Image.vue'

describe('SliderImage', () => {
  let wrapper: VueWrapper<SliderItem>
  const props = {
    title: 'The Simpsons',
    genres: 'Animation, Comedy',
    year: '1989',
    time: '20:00',
    days: 'Monday',
    status: 'Running',
    image: 'https://image.tmdb.org/t/p/original/2IWouZK4gkgHhJa3oyYuS5f2n3l.jpg'
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
