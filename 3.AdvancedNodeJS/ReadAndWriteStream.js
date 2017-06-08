/**
 * Created by boris on 6/8/2017.
 */
const fs = require('fs')
const readStream =fs.createReadStream('ReadAndWriteStream.js')
let writeStream = fs.createWriteStream('ReadAndWriteStream-copy.js')
// readStream.on('data',(data)=>{writeStream.write(data)})
// readStream.on('end',()=>{consolel.log('Done!')})
readStream.pipe(writeStream)