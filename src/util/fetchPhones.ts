import { Phone } from "src/types"

export const fetchPhones = (offset: number): Promise<Phone[]> => {
  return new Promise((resolve, reject) => {
    const uri = `http://192.168.1.52:8080/api/phones?offset=${offset}`
    console.log(uri)
    fetch(uri)
      .then(res => {
        if (!res.ok) return reject('Cannot get phones')
        else return res.json()
      })
      .then(data => {
        if (data.code !== 0 || !data.success) return reject(data.message)
        setTimeout(() => resolve(data.mobiles), 2000)
      })
      .catch(reject)
  })
}