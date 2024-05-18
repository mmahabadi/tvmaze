import { mount, VueWrapper } from '@vue/test-utils'
import { describe, it, beforeEach, expect } from 'vitest'
import ListByGenre from '../ListByGenre.vue'
import SectionTitle from '@/@ui/components/SectionTitle.vue'
import ThumbnailSwiper from '@/components/thumbnail/ThumbnailSwiper.vue'
import { createPinia, setActivePinia } from 'pinia'
import { provide } from 'vue'

describe('ListByGenre', () => {
  let wrapper: VueWrapper<ListByGenre>
  provide('appSettings', {
    itemsInEachGenreSection: 20
  })

  beforeEach(() => {
    setActivePinia(createPinia())

    wrapper = mount(ListByGenre, {
      props: {
        genre: 'Action'
      },
      global: {
        stubs: {
          SectionTitle,
          ThumbnailSwiper
        }
      }
    })
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders SectionTitle with correct props', () => {
    expect(wrapper.findComponent(SectionTitle).props('title')).toBe('Action')
  })

  it('renders ThumbnailSwiper with correct props', () => {
    expect(wrapper.findComponent(ThumbnailSwiper).props('loading')).toBe(false)
    expect(wrapper.findComponent(ThumbnailSwiper).props('slidesPerView')).toBe(7)
    expect(wrapper.findComponent(ThumbnailSwiper).props('slides')).toEqual([])
  })
})
