import { describe, it, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import ShareBox from '../details/ShareBox.vue'
import ShareIcon from '@/@ui/components/icons/ShareIcon.vue'
import IconPlay from '@/components/icons/IconPlay.vue'

describe('DetailsPoster', () => {
  let wrapper: VueWrapper<unknown>

  beforeEach(() => {
    wrapper = mount(ShareBox, {
      props: { language: 'English' },
      global: {
        stubs: {
          ShareIcon,
          IconPlay
        }
      }
    })
  })
  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
