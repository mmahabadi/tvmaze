import { mount, type VueWrapper } from '@vue/test-utils'
import { describe, it, beforeEach, expect } from 'vitest'
import RatingStar from '../RatingStar.vue'
import StarIconOutline from '../icons/StarIconOutline.vue'
import StarIcon from '../icons/StarIcon.vue'

describe('RatingStar', () => {
  let wrapper: VueWrapper<any>
  const props = { rating: 7 }

  beforeEach(() => {
    wrapper = mount(RatingStar, {
      props,
      global: {
        stubs: {
          StarIconOutline,
          StarIcon
        }
      }
    })
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders correct filled and empty stars', () => {
    // Arrange
    const filledStars = wrapper.findAllComponents(StarIcon)
    const emptyStars = wrapper.findAllComponents(StarIconOutline)

    // Log the filled stars
    console.log('Filled Stars:', filledStars.length)
    console.log('Empty Stars:', emptyStars.length)

    // Assert
    expect(filledStars).toHaveLength(3)
    expect(emptyStars).toHaveLength(2)
  })
})
