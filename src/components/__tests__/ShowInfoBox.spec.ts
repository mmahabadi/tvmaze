import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import ShowInfoBox from '../details/ShowInfoBox.vue'
import CalendarIcon from '@/@ui/components/icons/CalendarIcon.vue'
import ClockIcon from '@/@ui/components/icons/ClockIcon.vue'
describe('ShowInfoBox', () => {
  let wrapper: VueWrapper<ShowInfoBox>

  beforeEach(() => {
    const props = {
      genres: 'Drama, Comedy, Romance',
      time: '21:00',
      days: 'Tuesday',
      year: '2007',
      status: 'Ended'
    }
    wrapper = mount(ShowInfoBox, {
      props,
      global: {
        stubs: {
          CalendarIcon,
          ClockIcon
        }
      }
    })
  })
  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
