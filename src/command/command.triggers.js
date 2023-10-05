import {review} from './handlers/review.command'

const commands = {
    help: () => {
    },
    review
}

export const commandHandler = async (req) => {
    const comment = req.body.comment.body
    const tokens = comment.split(' ')
    if (tokens[0].trim() !== '/bot') {
        return
    }

    const command = tokens[1].trim()
    const args = tokens.slice(2)

    const commandHandler = commands[command]
    if (commandHandler === undefined) {
        return
    }
    await commandHandler(req)
}