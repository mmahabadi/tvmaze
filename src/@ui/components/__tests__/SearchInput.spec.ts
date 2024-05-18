import { describe, it, expect, beforeEach } from 'vitest'
import { mount, RouterLinkStub, VueWrapper } from '@vue/test-utils'
import SearchInput from '../SearchInput.vue'
import SearchIcon from '../icons/SearchIcon.vue'
import SpinnerIcon from '../icons/SpinnerIcon.vue'

describe('SearchInput', () => {
  let wrapper: VueWrapper<unknown>
  const props = {
    modelValue: '',
    loading: false,
    results: []
  }

  beforeEach(() => {
    wrapper = mount(SearchInput, {
      props,
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
          SearchIcon,
          SpinnerIcon
        }
      }
    })
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('emits update:modelValue event when input value changes', async () => {
    // Arrange
    const input = wrapper.find('input[type="text"]')

    // Act
    await input.setValue('Inception')

    // Assert
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['Inception'])
  })

  it('input should have prop value when modelValue prop is set', async () => {
    // Arrange
    await wrapper.setProps({ modelValue: 'Inception' })
    const input = wrapper.find('input[type="text"]')

    // Assert
    expect((input.element as any).value).toBe('Inception')
  })

  it('emits update:modelValue event when input value changes', async () => {
    // Arrange
    const input = wrapper.find('input[type="text"]')

    // Act
    await input.setValue('Inception')

    // Assert
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['Inception'])
  })

  it('emits search event when search button is clicked', async () => {
    // Arrange
    const searchButton = wrapper.find('.search-btn')
    const input = wrapper.find('input[type="text"]')

    // Act
    await input.setValue('Inception')
    await searchButton.trigger('click')

    // Assert
    expect(wrapper.emitted('search')).toBeTruthy()
  })

  it('renders loading spinner when loading prop is true', async () => {
    // Arrange
    await wrapper.setProps({ loading: true })

    // Assert
    expect(wrapper.find('.loading').exists()).toBe(true)
  })
})
