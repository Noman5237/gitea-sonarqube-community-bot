import {Router} from 'express'
import {giteaService} from "./gitea.service";
import {log} from '../util/logger';

export const giteaRouter = Router()

giteaRouter.post('/hooks', (req, res) => {
    const receivedMessage = 'Gitea hook callback is receivedMessage!';
    log(req.traceId, receivedMessage)
    giteaService.processHookCallback(req)
    res.send(receivedMessage)
})
