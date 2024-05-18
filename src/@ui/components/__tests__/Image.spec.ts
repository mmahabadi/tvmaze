import { mount, type VueWrapper } from '@vue/test-utils'

import { beforeEach, describe, expect, it } from 'vitest'
import Image from '../Image.vue'

describe('Image', () => {
  let wrapper: VueWrapper<unknown>
  const props = { src: 'inception.jpg', alt: 'Inception' }

  beforeEach(() => {
    wrapper = mount(Image, {})
  })
  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders default image and alt when no props are passed', () => {
    const defaultSrc = '/src/assets/image-placeholder.jpg'
    const defaultAlt = 'image-placeholder'
    // const wrapper = mount(Image)
    const img = wrapper.find('img')

    expect(img.attributes('src')).toBe(defaultSrc)
    expect(img.attributes('alt')).toBe(defaultAlt)
  })

  it('renders with correct src and alt attributes', async () => {
    //Arrange
    await wrapper.setProps(props)
    const img = wrapper.find('img')

    //Assert
    expect(img.attributes('src')).toBe(props.src)
    expect(img.attributes('alt')).toBe(props.alt)
  })
})
