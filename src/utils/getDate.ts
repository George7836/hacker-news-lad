export function getDate(time: number | undefined) {
  if(time === undefined) return null
  const publicationTime = new Date(time * 1000).toLocaleString('ru')
  return publicationTime.slice(0, publicationTime.length - 3)
}