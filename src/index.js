const express = require('express');
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task');

const app = express()
const port = process.env.PORT 

// app.use((req, res, next) => {
//     console.log(req.method, req.path)
//     next()
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// const jwt = require('jsonwebtoken')

// const myFunction = async() => {
//     const token = jwt.sign({_id: 'abc123'}, 'nodecourse')
//     console.log(token)

//     const data = jwt.verify(token, 'nodecourse')
//     console.log(data)
// }
// myFunction()

app.listen(port,() => {
    console.log('Server is up on port' + port)
})

