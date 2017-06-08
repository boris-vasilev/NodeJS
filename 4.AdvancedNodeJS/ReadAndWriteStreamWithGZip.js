/**
 * Created by boris on 6/8/2017.
 */
const fs = require('fs')
const zlib = require('zlib')
let readStream =fs.createReadStream('ReadAndWriteStreamWithGZip.js')
let writeStream = fs.createWriteStream('ReadAndWriteStreamWithGZip-copy.js.gz')
// readStream.on('data',(data)=>{writeStream.write(data)})
// readStream.on('end',()=>{consolel.log('Done!')})
let gzip = zlib.createGzip()
readStream
    .pipe(gzip)
    .pipe(writeStream)