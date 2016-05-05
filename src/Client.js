import request from 'superagent'

export function post({ url, body }) {
  return new Promise((resolve, reject) => {
    request.post(url)
    .send(body)
    .end((error, res) => {
      if (!!error || !res.ok) {
        reject( error )
      }

      resolve( res )
    })

  })
}
