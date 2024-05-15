import { type Movie } from '@/types'
import { type SlideItem } from '@/types'

export const mapToSlideItems = (recentMovies: Movie[]): SlideItem[] => {
  return recentMovies.map((item) => ({
    id: item.id,
    image: item.image?.medium,
    name: item.name,
    rating: item.rating?.average || 0
  }))
}
