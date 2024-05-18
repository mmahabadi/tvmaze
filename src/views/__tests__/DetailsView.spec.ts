import { describe, it, expect, beforeEach, vi, type MockInstance } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import DetailsView from '../DetailsView.vue'
import { createPinia, setActivePinia } from 'pinia'
import { useRoute } from 'vue-router'
import { useDetailsStore } from '@/stores/details'

vi.mock('vue-router', () => ({
  useRoute: vi.fn()
}))

const mockRoute = {
  params: {
    id: 1
  }
}

describe('DetailsView', () => {
  let wrapper: VueWrapper<DetailsView>
  let fetchDetailsSpy: MockInstance<[id: number], Promise<void>>

  beforeEach(() => {
    setActivePinia(createPinia())
    ;(useRoute as any).mockReturnValue(mockRoute)

    const store = useDetailsStore()
    fetchDetailsSpy = vi.spyOn(store, 'getShowDetails')

    wrapper = mount(DetailsView, {
      global: {
        stubs: {
          MainLayout: true,
          DetailsPoster: true,
          CasteSwiper: true
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

  it('calls fetchMovie on mount', () => {
    //Assert
    expect(fetchDetailsSpy).toHaveBeenCalledWith(mockRoute.params.id)
  })
})
