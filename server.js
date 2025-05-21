const fs = require('node:fs')
const http = require('node:http')
const https = require('node:https')

const PORT = process.env.PORT && Number(process.env.PORT) || 8888

// https://www.svgrepo.com/collection/vscode-icons/
// https://www.svgrepo.com/svg/373635/go-gopher
// https://www.svgrepo.com/svg/373965/pgsql
// https://www.svgrepo.com/svg/374016/python
const IMAGES = {
  golang: 'https://www.svgrepo.com/show/373635/go-gopher.svg',
  linux: 'https://www.svgrepo.com/show/448236/linux.svg',
  postgres: 'https://www.svgrepo.com/show/373965/pgsql.svg',
  python: 'https://www.svgrepo.com/show/374016/python.svg',
}

function requestListener(req, res) {
  console.log(req.method, req.url)

  if (req.url == '/') {
    fs.readFile('./skills.html', function (error, content) {
      if (error) {
        res.writeHead(500)
        res.end('Sorry')
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(content, 'utf-8')
      }
    })
    return
  }

  if (req.url.endsWith('.png')) {
    const url = IMAGES[req.url.substring(1, req.url.length - 4)]
    if (url) {
      const proxy = https.get(url, (response) => {
        res.writeHead(response.statusCode, response.headers)
        response.pipe(res, { end: true })
      })
      req.pipe(proxy, { end: true })
      return
    }
  }

  res.writeHead(404)
  res.end('Hello')
}

http.createServer(requestListener).listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
})
