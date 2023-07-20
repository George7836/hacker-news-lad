export async function getOneNews(id: string) {
  const response = await fetch(`https://api.hnpwa.com/v0/item/${id}.json`)
    .then((data) => data.json())
  return response
}