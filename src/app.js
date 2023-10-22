import express from 'express'
import {log} from './util/logger'

import {giteaRouter} from './gitea/gitea.router.js'
import {GLOBALS} from "./globals";
import {tracer} from "./util/tracer";

const app = express()
const port = GLOBALS.PORT

app.use(express.json())
app.use(tracer)

app.use('/gitea', giteaRouter)

app.get('/', (req, res) => {
    const running = 'Bot is running!';
    log(req.traceId, running)
    res.send(running)
})

app.listen(port, () => {
    console.log(`Bot is listening on port ${port}`)
})