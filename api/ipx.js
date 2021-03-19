
import {
  createIPX,
  createIPXMiddleware
} from 'ipx'

const ipx = createIPX({})

const middleware = createIPXMiddleware(ipx)

export default (req, res) => {
  req.url = `/assets/img/${req.url}`

  return middleware(req, res)
}
