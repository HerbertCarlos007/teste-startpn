const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, './.env')})
const express = require('express')
const cors = require('cors')
import {sequelize} from './src/database/db'
import {Request, Response} from 'express'



const app = express()

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(cors())
app.use(express.json())


app.get('/', (req: Request,res: Response) => {
    res.json({message: 'Oi Express!'})
})



app.listen(process.env.PORT, async () => {
    await sequelize.sync()
    console.log(`Porta: ${process.env.PORT}`)
})