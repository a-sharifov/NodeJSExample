import express from 'express'
import fetch from 'node-fetch'
// import bodyParser from 'body-parser'
// import departments from './departments'

const app = express()
const port = 3000

// app.use((req, res, next) => {
//     const data = req.body
//     next();
// })

app.get('/', async (_, res) => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let weatherJson = await response.json();
        res.send(weatherJson);
    } catch (error) {

    }
})

app.listen(port, (err) => {
    err ? console.log(err) :
        console.log(`Server is running at http://localhost:${port}`);
})