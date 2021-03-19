
import {
  createIPX,
  createIPXMiddleware
} from 'ipx'

const VERCEL_DOMAIN = 'https://zen-web-blond.vercel.app'

const ipx = createIPX({
  domains: [
    VERCEL_DOMAIN
  ]
})

const middleware = createIPXMiddleware(ipx)

export default (req, res) => {
  req.url = `${VERCEL_DOMAIN}/assets/img${req.url}`

  // ray test touch <
  console.log('ray : ***** req.url => ', req.url)
  // ray test touch >

  return middleware(req, res)
}
