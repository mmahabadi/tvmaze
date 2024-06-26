import { type Movie } from '@/types'
import { type SlideItem } from '@/types'

export const mapToSlideItems = (items: Movie[]): SlideItem[] => {
  if (!items || !items.length) return []
  return items.map((item) => ({
    id: item.id,
    image: item.image?.medium,
    name: item.name,
    rating: item.rating?.average || 0
  }))
}
