import type { Movie } from '@/types'

export const getData = async (): Promise<Movie[]> => {
  const response = await fetch('/api/shows')
  const result = await response.json()
  return result
}

export const getDetails = async (id: number): Promise<Movie> => {
  const response = await fetch(`/api/shows/${id}?embed=cast`)
  const result = await response.json()
  return result
}

export const search = async (q: string): Promise<Movie[]> => {
  const response = await fetch(`/api/search/shows?q=${q}`)
  const result = await response.json()
  return result?.map((item: any) => item.show as Movie) || []
}

export const getShowsByGenre = async (genre: string): Promise<Movie[]> => {
  if (!genre) throw new Error('Genre is required')
  const response = await fetch(`/api/shows?genre=${genre}`)
  const result = await response.json()
  return result
}
