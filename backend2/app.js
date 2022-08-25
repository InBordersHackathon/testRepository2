
const express = require('express')
const app = express()
const port = 3002

app.get('/app2', (req, res) => {
  res.json({ data: 'Hello World 2!' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
