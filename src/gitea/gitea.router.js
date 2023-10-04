import {Router} from 'express'
import {giteaService} from "./gitea.service";

export const giteaRouter = Router()

giteaRouter.post('/hooks', async (req, res) => {
    await giteaService.processHookCallback(req)
    res.send('Gitea hook callback is received!')
})
