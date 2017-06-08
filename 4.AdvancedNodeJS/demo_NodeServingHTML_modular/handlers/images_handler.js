/**
 * Created by boris on 6/6/2017.
 */
const qs = require('querystring')
const fs = require('fs')
const formidable = require('formidable')
const zlib = require('zlib')
const shortid = require('shortid')
let form = new formidable.IncomingForm()
let database = require('../data/images')
let imageMemory = '';
module.exports = {
    func: (req, res) => {
        if (req.path === '/images/add' && req.method === 'GET') {
            fs.readFile('./content/add.html', (err, data) => {
                if (err) {
                    console.log(err)
                }
                res.writeHead('200', {"content-type": "text/html"})
                res.write(data)
                res.end()
            })
        }
        else if (req.path === '/images/add' && req.method === 'POST') {
            form.parse(req, (err, fields, files) => {
                if (err) {
                    console.log(err)
                    return
                }
                if (fields.name === '' || files.img.name === '') {
                    res.writeHead(400)
                    res.write('400 - Input information missing')
                    res.end()
                }
                else {
                    let imageName = fields.name
                    let imageFile = files.img
                    let readStream = fs.createReadStream(imageFile.path)
                    let writeStream = fs.createWriteStream('./content/images/' + imageFile.name)
                    readStream
                        .pipe(writeStream)
                    let imageObj = {name: imageName, path: './content/images/' + imageFile.name}
                    database.images.add(imageObj)
                    fs.readFile('./content/add.html', (err, data) => {
                        if (err) {
                            console.log(err)
                        }
                        else {
                            res.writeHead('200', {"content-type": "text/html"})
                            res.write(data)
                            res.end()
                        }
                    })
                }
            })
        }
        else if (req.path === '/images/all' && req.method === 'GET') {
            fs.readFile('./content/all.html', (err, data) => {
                if (err) {
                    console.log(err)
                }
                res.writeHead(200)
                res.write(data)
                res.end()
            })
        } else if (req.path === '/images/data' && req.method === 'GET') {
            res.writeHead(200, {"content-type": "application/javascript",})
            fs.readFile('./data/images.json', (err, data) => {
                if (err) {
                    console.log(err)
                }
                res.write(data)
                res.end()
            })
            // console.log(imageMemory)
            // console.log(JSON.parse(imageMemory))
        } else if (req.path.startsWith('/images/A') && req.method === 'GET') {
            fs.readFile('./content/details.html', (err, data) => {
                if (err) {
                    console.log(err)
                }
                res.writeHead(200)
                res
                    .write(data)
                res.end()
            })
        } else {
            return true
        }
    },
    imageMemory: imageMemory
}