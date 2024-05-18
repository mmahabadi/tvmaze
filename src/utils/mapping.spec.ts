import { describe, it, expect } from 'vitest'
import type { Movie, SlideItem, Image } from '../types'
import { mapToSlideItems } from '../utils/mapping'

describe('mapToSlideItems', () => {
  it('maps an array of movies to an array of slide items', () => {
    const movies: Partial<Movie>[] = [
      {
        id: 1,
        name: 'Movie 1',
        image: { medium: 'image1.jpg', original: 'image1.jpg' } as Image,
        rating: { average: 7.5 }
      },
      {
        id: 2,
        name: 'Movie 2',
        image: { medium: 'image2.jpg', original: 'image2.jpg' } as Image,
        rating: { average: 8.0 }
      }
    ]

    const expectedSlideItems: SlideItem[] = [
      { id: 1, image: 'image1.jpg', name: 'Movie 1', rating: 7.5 },
      { id: 2, image: 'image2.jpg', name: 'Movie 2', rating: 8.0 }
    ]

    const result = mapToSlideItems(movies as Movie[])

    expect(result).toEqual(expectedSlideItems)
  })

  it('returns an empty array when input is empty', () => {
    const result = mapToSlideItems([])

    expect(result).toEqual([])
  })

  it('returns an empty array when input is null', () => {
    const result = mapToSlideItems(null as unknown as Movie[])

    expect(result).toEqual([])
  })
})
