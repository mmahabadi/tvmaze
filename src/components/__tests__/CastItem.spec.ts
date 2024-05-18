import { describe, it, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import CastItem from '../casts/CastItem.vue'
import Image from '@/@ui/components/Image.vue'

describe('Component', () => {
  let wrapper: VueWrapper<CastItem>
  const props = {
    name: 'Mohsen',
    image: 'mohsen.jpg'
  }

  beforeEach(() => {
    wrapper = mount(CastItem, {
      props,
      global: {
        components: {
          Image
        }
      }
    })
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders details', () => {
    expect(wrapper.find('p.text-center').text()).toBe(props.name)
    expect(wrapper.findComponent(Image).props('src')).toBe(props.image)
    expect(wrapper.findComponent(Image).props('alt')).toBe(props.name)
  })
})
