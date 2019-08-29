const fs = require('fs')
const { promisify } = require('util')
const path = require('path')

const readDir = promisify(fs.readdir)
const renameFile = promisify(fs.rename)

const startScript = async () => {
    const dirpath = process.argv[2], newFileName = process.argv[3]
    console.log("All files must finish with a number (con due cifre rip) like 01, 05, 11, 13 etc")
    if (typeof dirpath !== "string" || typeof newFileName !== "string") {
        return console.error("Specify dirpath and new file name!")
    }
    await renameFilesInDirectory(dirpath, newFileName)
    console.log("DONE!")
}

const renameFilesInDirectory = async (dirpath, newFileName) => {
    let filenames = []
    try {
        filenames = await readDir(dirpath)
    } catch (err) {
        console.error("Error occured: ", err)
    }
    filenames = filenames.filter(el => !el.includes('.DS_Store'))
    let promises = []
    filenames.forEach(async (filename) => {
        try {
            const extension = path.extname(filename)
            const baseName = path.basename(filename, extension)
            const oldPath = dirpath + filename,
                newPath = dirpath + newFileName + convertToNumberingScheme(Number(baseName.substring(baseName.length - 2))) + extension
            console.log("Old path: ", oldPath)
            console.log("New path: ", newPath)
            promises.push(renameFile(oldPath, newPath))
        } catch (err) {
            console.error("Error: ", err)
        }

    })
    return await Promise.all(promises)
}

/*
1 => A
26 => Z
27 => AA
52 => AZ
53 => BA
*/
const convertToNumberingScheme = (number) => {
    if (typeof number !== 'number') console.log("ConvertToNumberingScheme error! Param must be a NUMBER")
    number = Number(number)
    number += Math.pow(26, 2) + 26 //Per avere tutti file almeno AAA (tre lettere finali)
    var baseChar = ("A").charCodeAt(0),
        letters = ""
    do {
        number -= 1
        letters = String.fromCharCode(baseChar + (number % 26)) + letters
        number = (number / 26) >> 0 // quick `floor`
    } while (number > 0)

    return letters
}

startScript()