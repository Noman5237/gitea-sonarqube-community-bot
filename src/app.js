import express from 'express'

import {giteaRouter} from './gitea/gitea.router.js'
import {GLOBALS} from "./globals";

const app = express()
const port = GLOBALS.PORT

app.use(express.json())

app.use('/gitea', giteaRouter)

app.get('/', (req, res) => {
    res.send('Bot is running!')
})

app.listen(port, () => {
    console.log(`Bot is listening on port ${port}`)
})