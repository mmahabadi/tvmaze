const getData = async () => {
  const response = await fetch('/api/shows')
  const result = await response.json()
  return result
}

export default {
  getData
}
