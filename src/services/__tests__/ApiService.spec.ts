import { describe, it, expect, vi, beforeEach } from 'vitest'
import { getData, getDetails, search, getShowsByGenre } from '../ApiService'
import type { Movie } from '@/types'

const mockMovies: Partial<Movie>[] = [{ id: 1, name: 'Movie 1', genres: ['Action'] }]

const mockMovieDetails: Partial<Movie> = {
  id: 1,
  name: 'Movie 1',
  genres: ['Action'],
  _embedded: { cast: [] }
}

describe('API functions', () => {
  beforeEach(() => {})

  it('getData should fetch and return a list of movies', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockMovies)
    } as any)

    const result = await getData()
    expect(fetch).toHaveBeenCalledWith('/api/shows')
    expect(result).toEqual(mockMovies)
  })

  it('getDetails should fetch and return movie details', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockMovieDetails)
    } as any)

    const result = await getDetails(1)
    expect(fetch).toHaveBeenCalledWith('/api/shows/1?embed=cast')
    expect(result).toEqual(mockMovieDetails)
  })

  it('search should fetch and return a list of movies', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockMovies.map((movie) => ({ show: movie })))
    } as any)

    const result = await search('test')
    expect(fetch).toHaveBeenCalledWith('/api/search/shows?q=test')
    expect(result).toEqual(mockMovies)
  })

  it('getShowsByGenre should fetch and return a list of movies', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockMovies)
    } as any)

    const result = await getShowsByGenre('Action')
    expect(fetch).toHaveBeenCalledWith('/api/shows?genre=Action')
    expect(result).toEqual(mockMovies)
  })

  it('getShowsByGenre should throw an error if genre is not provided', async () => {
    await expect(getShowsByGenre('')).rejects.toThrow('Genre is required')
  })
})
