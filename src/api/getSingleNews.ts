export async function getOnePieceOfNews(id: string | undefined) {
  const response = await fetch(`https://api.hnpwa.com/v0/item/${id}.json`, {cache: 'no-store'})
  .then((data) => {
    if(!data.ok) {
      throw new Error('Error!')
    }
    return data.json()
  })
  return response
}