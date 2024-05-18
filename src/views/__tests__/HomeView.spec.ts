import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import HomeView from '../HomeView.vue'
import { useMoviesStore } from '@/stores/movies'
import type { Movie } from '@/types'

const mockMovies: Movie[] = [
  {
    id: 1,
    name: 'Inception',
    genres: ['actions', 'comedy'],
    image: {
      medium: 'inception.jpg',
      original: 'inception.jpg'
    }
  } as Movie
]
describe('HomeView', () => {
  let wrapper: VueWrapper<HomeView>
  let store: ReturnType<typeof useMoviesStore>

  function render(store: ReturnType<typeof useMoviesStore>) {
    if (wrapper) wrapper.unmount()

    wrapper = mount(HomeView, {
      global: {
        stubs: {
          ImageSlider: true,
          ThumbnailSwiper: true,
          MainLayout: true,
          ListByGenre: true
        },
        provide: {
          store
        }
      }
    })
  }

  beforeEach(() => {
    setActivePinia(createPinia())

    store = useMoviesStore()
    store.movies = mockMovies
    store.fetchMovies = vi.fn()

    render(store)
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('calls fetchMovies on mount if genres are empty', () => {
    //Arrange
    store.movies = []
    const fetchMoviesSpy = vi.spyOn(store, 'fetchMovies')

    //Act
    render(store)

    //Assert
    expect(fetchMoviesSpy).toHaveBeenCalled()
  })

  it('does not call fetchMovies on mount if genres are not empty', () => {
    //Arrange
    store.movies = mockMovies
    const fetchMoviesSpy = vi.spyOn(store, 'fetchMovies')

    //Act
    render(store)

    expect(fetchMoviesSpy).not.toHaveBeenCalled()
  })

  it('calls nextPage when scrolled to the bottom', () => {
    const nextPageSpy = vi.spyOn(store, 'nextPage')

    // Mock scroll event
    document.documentElement.scrollTop = 1000
    Object.defineProperty(document.documentElement, 'clientHeight', { value: 600 })
    Object.defineProperty(document.documentElement, 'scrollHeight', { value: 1600 })

    const event = new Event('scroll')
    document.dispatchEvent(event)

    expect(nextPageSpy).toHaveBeenCalled()
  })
})
