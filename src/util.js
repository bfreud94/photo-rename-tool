export const getUpdatedFileName = (
    filePrefix,
    fileNumber,
    file
) => filePrefix + (fileNumber < 10 ? '000' : (fileNumber < 100 ? '00' : (fileNumber < 1000 ? '0' : ''))) + fileNumber + file.substring(file.indexOf('.'))