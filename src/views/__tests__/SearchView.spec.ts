import { describe, it, expect, beforeEach, vi, type MockInstance } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import SearchView from '../SearchView.vue'
import { createPinia, setActivePinia } from 'pinia'
import { useRoute } from 'vue-router'
import { useSearchStore } from '@/stores/search'
import SectionTitle from '@/@ui/components/SectionTitle.vue'
import SearchIcon from '@/@ui/components/icons/SearchIcon.vue'
import ShowItem from '@/components/ShowItem.vue'

vi.mock('vue-router', () => ({
  useRoute: vi.fn()
}))

const mockRoute = {
  query: {
    q: 'test'
  }
}

describe('SearchView', () => {
  let wrapper: VueWrapper<unknown>
  let fetchShowsSpy: MockInstance<[q: string], Promise<void>>

  beforeEach(() => {
    setActivePinia(createPinia())
    ;(useRoute as any).mockReturnValue(mockRoute)

    const store = useSearchStore()
    fetchShowsSpy = vi.spyOn(store, 'searchShows')

    wrapper = mount(SearchView, {
      global: {
        stubs: {
          MainLayout: true,
          SectionTitle,
          SearchIcon,
          ShowItem
        },
        provide: {
          store
        }
      }
    })
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  // it('calls fetchShows on mount', () => {
  //   expect(fetchShowsSpy).toHaveBeenCalledWith(mockRoute.query.q)
  // })
})
