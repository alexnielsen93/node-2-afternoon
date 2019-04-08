const express = require('express')
const MessageCtrl = require('./controllers/messages_controller')
let app = express()

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

app.post('/api/messages', MessageCtrl.create)
app.get('/api/messages', MessageCtrl.read)
app.put('/api/messages/:id', MessageCtrl.update)
app.delete('/api/messages/:id', MessageCtrl.delete)
let port = 3001
app.listen(port, ()=>{
  console.log(`listening at port ${port}`)
})