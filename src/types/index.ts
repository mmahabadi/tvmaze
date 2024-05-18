export type AppSettings = {
  itemsInEachGenreSection: number
  itemsInEachPage: number
  itemsToShowInHomePageSlider: number
  yearLimitToConsiderAsRecentToShowInHomePageSlider: number
}

export type Rating = {
  average: number
}

export type Schedule = {
  time: string
  days: string[]
}

export type Image = {
  medium: string
  original: string
}

export type ShowByGenre = {
  genre: string
  movies: Movie[]
  loading: boolean
  error: null | Error
}

export type Movie = {
  id: number
  name: string
  type: string
  language: string
  genres: string[]
  status: string
  ended: string
  officialSite: string
  schedule: Schedule
  rating: Rating
  image: Image
  summary: string
  _embedded: Embedded
}

export type Embedded = {
  cast: Cast[]
}

export type Cast = {
  person: Person
  character: Character
}

export type Person = {
  id: number
  url: string
  name: string
  country: Country
  birthday: string
  deathday: string | null
  image: Image
  gender: string
}

export type Country = {
  name: string
  code: string
  timezone: string
}

export type Character = {
  id: number
  url: string
  name: string
  image: Image
}

export type SlideItem = Pick<Movie, 'id' | 'name'> & { rating: number; image: string }

export type CastItemProps = Pick<Person, 'name'> & { image: string }
