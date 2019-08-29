const fs = require('fs')
const request = require('request')

const downloadImages = [
    /*{ name: "bagno", folder: "bagni", files: 34 },
    { name: "cucina", folder: "cucine", files: 21 },
    { name: "finestra", folder: "finestre", files: 28 },
    { name: "porta", folder: "porte", files: 39 },
    { name: "portoncino", folder: "portoncini", files: 24 },
    { name: "casa", folder: "cantieri", files: 21 }*/
]

/**
 * Downloads images from the given array of URLs
 * @param {[String]} urlArray Array of URLs
 */
function download() {
    console.log("Download in corso...")
    downloadImages.forEach(el => {
        const path = `./downloaded-images/${el.folder}/`
        fs.mkdirSync(path)
        for(let i = 1; i <= el.files; i++) {
            const url = `http://www.falegnameriavoltan.it/${el.folder}/${el.name}${i < 10 ? '0' + i : i}.jpg`
            request.get(url).pipe(fs.createWriteStream(`${path}${el.name}${i}.jpg`)).on('close', () => {})
        }
    })
}

//download()

const downloadImages2 = [
    { name: "scala", folder: "scale", files: 11 },
]

function download2() {
    console.log("Download in corso...")
    downloadImages2.forEach(el => {
        const path = `./downloaded-images/${el.folder}/`
        fs.mkdirSync(path)
        for(let i = 1; i <= el.files; i++) {
            const url = `http://www.falegnameriavoltan.it/${el.folder}/${i < 10 ? '0' + i : i}${el.name}.jpg`
            request.get(url).pipe(fs.createWriteStream(`${path}${el.name}${i}.jpg`)).on('close', () => {})
        }
    })
}

download2()
