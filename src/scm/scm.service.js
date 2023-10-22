import fs from 'fs'
import path from "path";

import {checkout, clone, fetch, pull} from 'isomorphic-git'
import http from 'isomorphic-git/http/node'

import {log} from '../util/logger'

const cloneRepo = async (traceId, repo, ref) => {
    log(traceId, `Cloning ${repo.full_name} on ref: ${ref}`)
    // if repos directory does not exist, create it
    if (!fs.existsSync('./repos')) {
        fs.mkdirSync('./repos');
    }
    const dir = repo.full_name.replace('/', '-')
    log(traceId, 'Cloning...')
    await clone({
        fs,
        http,
        dir: path.join('./repos', dir),
        url: `${repo.clone_url}`,
        ref: ref,
        singleBranch: true,
        depth: 1,
    });
    log(traceId, `Cloned ${repo.full_name}!`)
}

const fetchRepo = async (traceId, repo, ref) => {
    const dir = repo.full_name.replace('/', '-')
    await fetch({
        fs,
        http,
        dir: path.join('./repos', dir),
        remoteRef: ref,
        singleBranch: true,
    });
    log(traceId, `Pulled ${repo.full_name}!`)
}

const pullBranch = async (traceId, repo, ref) => {
    log(traceId, `Pulling ${repo.full_name} on ref: ${ref}`)
    const dir = repo.full_name.replace('/', '-')
    await pull({
        fs,
        http,
        dir: path.join('./repos', dir),
        remoteRef: ref,
        singleBranch: true,
        author: {
            name: 'gitea-sq-bot',
            email: 'gitea-sq-bot.fintech@brainstation-23.com'
        },
    });
    log(traceId, `Pulled ${repo.full_name}!`)
}

const checkoutBranch = async (traceId, repo, ref) => {
    log(traceId, `Checkout ${repo.full_name} on ref: ${ref}`)
    const dir = repo.full_name.replace('/', '-')
    await checkout({
        fs,
        http,
        dir: path.join('./repos', dir),
        ref,
    });
    log(traceId, `checkout ${repo.full_name}!`)
}

export const scmServices = {
    cloneRepo,
    pullBranch,
    checkoutBranch,
    fetchRepo
}