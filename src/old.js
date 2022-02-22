const fs = require('fs')
const path = 'C:\\Users\\Ben\\Pictures\\2006\\Middle School Cross Country\\'

const renameFiles = (path) => {
    const files = fs.readdirSync(path)
    let fileNumber = 1
    for(const file of files) {
        let updatedFileName = 'akjlshdf_' + (fileNumber < 10 ? '000' : (fileNumber < 100 ? '00' : (fileNumber < 1000 ? '0' : ''))) + fileNumber++ + file.substring(file.indexOf('.'))
        fs.rename(path + file, path + updatedFileName, (err) => {
            if (err) console.log(err)
        })
    }
}

renameFiles(path)