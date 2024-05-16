export const getData = async () => {
  const response = await fetch('/api/shows')
  const result = await response.json()
  return result
}

export const getDetails = async (id: number) => {
  const response = await fetch(`/api/shows/${id}?embed=cast`)
  const result = await response.json()
  return result
}
