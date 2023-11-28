const express = require('express')
const router = require('./routes/routes.js')

// тут задаем наш порт
const PORT  = 3001

const app = express()



// при запуске
app.listen(PORT , ()  => {

    console.log(`server is working on port ${PORT}`)
} )

// тут наши странички, откуда будем фетчить ответ
app.use(express.json())
app.use('/api' , router)


app.get('/api/123' , (request, response) => {

    response.send([1,2,3])
} )





