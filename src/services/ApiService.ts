const getData = async () => {
  const response = await fetch('https://api.tvmaze.com/shows')
  const result = await response.json()
  return result
}

export default {
  getData
}
