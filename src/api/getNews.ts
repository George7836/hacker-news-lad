export async function getNews() {
  const arr = new Array(4).fill(null);
  const res = await Promise.all(
    arr.map((_, page) => {
      return fetch(`https://api.hnpwa.com/v0/newest/${page + 1}.json`, {cache: 'no-store'})
        .then((res) => {
          if(!res.ok) {
            throw new Error('Error!')
          }
          return res.json()
        })
    })
  )
    .then((data) => data.flat().slice(0,100))
    return res
}