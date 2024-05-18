import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import DetailsPoster from '../details/DetailsPoster.vue'
import Image from '@/@ui/components/Image.vue'
import BackButton from '../details/BackButton.vue'
import ShowInfoBox from '../details/ShowInfoBox.vue'
import ShareBox from '../details/ShareBox.vue'
import type { Movie } from '@/types'

describe('DetailsPoster', () => {
  let wrapper: VueWrapper<unknown>
  const props = {
    item: {
      id: 525,
      name: 'Gilmore Girls',
      language: 'English',
      genres: ['Drama', 'Comedy', 'Romance'],
      status: 'Ended',
      ended: '2007-05-15',
      schedule: {
        time: '21:00',
        days: ['Tuesday']
      },
      rating: {
        average: 8.1
      },
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/4/11308.jpg',
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/4/11308.jpg'
      },
      summary:
        '<p><b>Gilmore Girls</b> is a drama centering around the relationship between a thirtysomething single mother and her teen daughter living in Stars Hollow, Connecticut.</p>'
    } as Movie
  }

  beforeEach(() => {
    wrapper = mount(DetailsPoster, {
      props,
      global: {
        stubs: {
          Image,
          ShowInfoBox,
          ShareBox,
          BackButton
        }
      }
    })
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
