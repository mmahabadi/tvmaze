import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, it, expect } from 'vitest'
import SectionTitle from '../SectionTitle.vue'

describe('SectionTitle', () => {
  let wrapper: VueWrapper<SectionTitle>
  const props = { title: 'Top Rated Movies' }

  beforeEach(() => {
    wrapper = mount(SectionTitle, {
      props
    })
  })
  it('renders correctly', () => {
    expect('SectionTitle').toMatchSnapshot()
  })

  it('renders the correct title', () => {
    // Arrange
    const title = wrapper.find('h2')

    // Log the title
    console.log('Title:', title.text())

    // Assert
    expect(title.text()).toBe('Top Rated Movies')
  })
})
