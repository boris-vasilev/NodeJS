/**
 * Created by boris on 6/2/2017.
 */
const http = require('http')
const url = require('url')
const fs = require('fs')
// const imageMemory =require('./handlers/images_handler.js').imageMemory
const handlers = require('./handlers/handlers.js')
http.createServer((req,res)=>{
    ////////////////////////IT IS CHANGED HERE LOOK NON-MODULAR(attaching path to req so that handlers can access it)
    req.path = url.parse(req.url).pathname
    //MODULES RETURN TRUE IF THEY CANNOT HANDLE THE FILE AND IF THEY SUCCEED THEY DONT RETURN ANYTHING (undefined) WHICH IS FALSY
    //AND !next becomes true and the loop breaks otherwise !next - false and it continues
    for (let handler of handlers){
        let next = handler(req,res)
        if(!next){
            break
        }
    }
}).listen(5555)
console.log('Server listening on port 5555...')