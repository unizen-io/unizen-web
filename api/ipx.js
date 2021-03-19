
import {
  createIPX,
  createIPXMiddleware
} from 'ipx'

const ipx = createIPX({})

const middleware = createIPXMiddleware(ipx)

export default (req, res) => {
  req.url = `/assets/img${req.url}`

  // ray test touch <
  console.log('ray : ***** req.url => ', req.url)
  // ray test touch >

  return middleware(req, res)
}
