import { Movie } from '@/types/movie'
import { SlideItem } from '@/@ui/types/slide'

export const mapToSlideItems = (recentMovies: Movie[]): SlideItem[] => {
  return recentMovies.map((item) => ({
    id: item.id,
    image: item.image?.medium,
    name: item.name,
    rating: item.rating?.average || 0
  }))
}
