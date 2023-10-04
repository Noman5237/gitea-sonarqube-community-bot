import fs from 'fs'
import path from "path";

import {checkout, clone, fetch, pull} from 'isomorphic-git'
import http from 'isomorphic-git/http/node'

const cloneRepo = async (repo, ref) => {
    console.log(`Cloning ${repo}...`)
    console.log(`Ref: ${ref}`)
    // if repos directory does not exist, create it
    if (!fs.existsSync('./repos')) {
        fs.mkdirSync('./repos');
    }
    const dir = repo.full_name.replace('/', '-')
    console.log('Cloning...')
    await clone({
        fs,
        http,
        dir: path.join('./repos', dir),
        url: `${repo.clone_url}`,
        ref: ref,
        singleBranch: true,
        depth: 1,
        onProgress: (event) => {
            // when cloning is completed, resolve the promise
            console.log(event)
            if (event.loaded / event.total >= 1) {
                console.log(`Cloned ${repo}! event`)
            }
        }
    });
    console.log(`Cloned ${repo}!`)
}

const fetchRepo = async (repo, ref) => {
    const dir = repo.full_name.replace('/', '-')
    await fetch({
        fs,
        http,
        dir: path.join('./repos', dir),
        remoteRef: ref,
        singleBranch: true,
        onProgress: (event) => {
            // when cloning is completed, resolve the promise
            console.log(event)
            if (event.loaded / event.total >= 1) {
                console.log(`Pulled ${repo}! event`)
            }
        }
    });
    console.log(`Pulled ${repo}!`)
}

const pullBranch = async (repo, ref) => {
    console.log(`Pulling ${repo}...`)
    console.log(`Ref: ${ref}`)
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
        onProgress: (event) => {
            // when cloning is completed, resolve the promise
            console.log(event)
            if (event.loaded / event.total >= 1) {
                console.log(`Pulled ${repo}! event`)
            }
        }
    });
    console.log(`Pulled ${repo}!`)
}

const checkoutBranch = async (repo, ref) => {
    console.log(`Checkout ${repo}...`)
    console.log(`Ref: ${ref}`)
    const dir = repo.full_name.replace('/', '-')
    await checkout({
        fs,
        http,
        dir: path.join('./repos', dir),
        ref,
        onProgress: (event) => {
            // when cloning is completed, resolve the promise
            console.log(event)
            if (event.loaded / event.total >= 1) {
                console.log(`Checkout ${repo}! event`)
            }
        }
    });
    console.log(`checkout ${repo}!`)
}

export const scmServices = {
    cloneRepo,
    pullBranch,
    checkoutBranch,
    fetchRepo
}