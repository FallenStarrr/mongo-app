const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')


const PORT = process.envPORT || 3000

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

async function start() {
    try {
      await mongoose.connect('mongodb+srv://Fallen:fallenstar@cluster0.6hch1.mongodb.net/todos', {
          useNewUrlParser: true,
          useFindAndModify:false
      })
      app.listen(PORT, () => {
        console.log('Serven has been started...')
    })
    } catch(e) {
        console.log(e)
    }
}

start()

