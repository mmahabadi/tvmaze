import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import ToasterProvider from '../ToasterProvider.vue'
import { useToasterStore } from '@/stores/toaster'
import Toaster from '../Toaster.vue'

vi.mock('@/stores/toaster', () => {
  return {
    useToasterStore: vi.fn()
  }
})

const mockToasters = [
  { id: 1, message: 'Test Message 1', type: 'success' },
  { id: 2, message: 'Test Message 2', type: 'error' }
]

describe('ToasterProvider', () => {
  let wrapper: VueWrapper<unknown>

  beforeEach(() => {
    ;(useToasterStore as any).mockReturnValue({
      toasters: mockToasters
    })

    // setActivePinia(createPinia())
    wrapper = mount(ToasterProvider)
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders the correct number of toasters', () => {
    const toasters = wrapper.findAllComponents(Toaster)
    expect(toasters).toHaveLength(mockToasters.length)
  })
})
