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

export type Movie = {
  id: number
  name: string
  type: string
  language: string
  genres: string[]
  status: string
  //   runtime: 60
  //   averageRuntime: 60
  //   premiered: '2013-06-24'
  ended: string //'2015-09-10'
  officialSite: string //'http://www.cbs.com/shows/under-the-dome/'
  schedule: Schedule
  rating: Rating
  //   weight: 99
  //   network: {
  //     id: 2
  //     name: 'CBS'
  //     country: {
  //       name: 'United States'
  //       code: 'US'
  //       timezone: 'America/New_York'
  //     }
  //     officialSite: 'https://www.cbs.com/'
  //   }
  //   webChannel: null
  //   dvdCountry: null
  //   externals: {
  //     tvrage: 25988
  //     thetvdb: 264492
  //     imdb: 'tt1553656'
  //   }
  image: Image
  summary: string
  //   updated: 1704794065
  //   _links: {
  //     self: {
  //       href: 'https://api.tvmaze.com/shows/1'
  //     }
  //     previousepisode: {
  //       href: 'https://api.tvmaze.com/episodes/185054'
  //       name: 'The Enemy Within'
  //     }
  //   }
}
