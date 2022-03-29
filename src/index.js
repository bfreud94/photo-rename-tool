import { rename } from 'fs'
import { createInterface } from 'readline'
import { existsSync, readdirSync } from 'fs'
import { getUpdatedFileName } from './util.js'

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})

let path = ''
const filePrefix = 'IMG_'

const main = async () => {
    const isAvailablePath = await prompt()
    if (isAvailablePath) {
        renameFiles(path + '\\')
    } else {
        await prompt()
    }
}

const prompt = async () => {
    
    path = await new Promise((resolve, reject) => {
        rl.question('Enter a file path: ', resolve)
    })

    if (existsSync(path)) {
        console.log('This file path exists. Running rename tool')
        return true
    } else {
        console.log('Please re-enter a file path')
        return false
    }
}

const renameFiles = (path) => {
    const files = readdirSync(path)
    let fileNumber = 1
    files.forEach(file => {
        let updatedFileName = getUpdatedFileName(filePrefix, fileNumber++, file)
        rename(path + file, path + updatedFileName, (err) => {
            if (err) console.log(err)
        })
    })
    console.log('Process complete!')
    rl.close()
}

main()