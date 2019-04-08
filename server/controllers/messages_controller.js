let messages = []

let id = 0
let name = 'Alex';
module.exports ={
  create: (req, res)=>{

    let {text,time} = req.body

    text = `${name}  --  ${text}`
    
    messages.push({id, text, time})
    id++
    res.send(messages)
   
  
    console.log(messages)
  },
  read: (req, res)=>{
    res.status(200).send(messages)
  },
  update: (req, res)=>{
    const {text} = req.body
    const updateId = req.params.id
    console.log(`updateId = ${updateId}`)
    
    const index = messages.findIndex((message)=>{
      console.log(`message.id = ${message.id}`)
      console.log(`updateId = ${updateId}`)
     return  +message.id === +updateId

    })
    console.log(`index = ${index}`)

    let message = messages[index]
    console.log(index)
    console.log(message)
    messages[index] = {
      id: message.id,
      text: `${name}  --  ${text}` || text,
      time: message.time
    }
    res.status(200).send(messages)
  },
  delete: (req, res)=>{
    let id = req.params.id
    let index = messages.findIndex((message)=>{
      return +message.id === +id
    })
    messages.splice(index,1)
    res.status(200).send(messages)
  }


}