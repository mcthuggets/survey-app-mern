require('dotenv').config()
const express = require('express')

//creates an express app
const app = express()

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()    
    }
)

app.get('/' , (req, res) => {
        res.json(
            {   
                mssg: 'Welcome to the app!',
                mssg2: 'Hello world!'
            }
        )
    }
)

//listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000 !!!')
    }
)