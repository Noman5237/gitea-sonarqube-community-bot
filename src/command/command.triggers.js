import {review} from './handlers/review.command'
import {log} from '../util/logger'

const commands = {
    help: () => {
    },
    review
}

export const commandHandler = async (req) => {
    log(req.traceId, 'handling command')
    const comment = req.body.comment.body
    const tokens = comment.split(' ')
    if (tokens[0].trim() !== '/bot') {
        return
    }

    const command = tokens[1].trim()
    log(req.traceId, `processing command: ${command}`)
    const args = tokens.slice(2)

    const commandHandler = commands[command]
    if (commandHandler === undefined) {
        log(req.traceId, 'command handler is not defined')
        return
    }
    log(req.traceId, `executing command: ${commandHandler.name}`)
    await commandHandler(req)
}