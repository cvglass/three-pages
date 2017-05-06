const express = require('express')
const bodyParser = require('body-parser')
const { resolve } = require('path')

const app = express();

app.use(require('volleyball'))

module.exports = app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(resolve(__dirname, '..', 'public')))
  // .use('/api', require('./api'))
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', '..', 'public', 'index.html')))

  if (module === require.main) {
    const server = app.listen(3001, () => {
      console.log(`--- Started HTTP Server`)
    })
  }
