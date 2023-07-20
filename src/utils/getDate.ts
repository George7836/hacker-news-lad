export function getDate(time: number | undefined) {
  if(time === undefined) return null
  return new Date(time * 1000).toLocaleString('ru')
}