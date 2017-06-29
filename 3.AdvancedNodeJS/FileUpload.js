/**
 * Created by boris on 6/8/2017.
 */
const fs =require('fs')
const http = require('http')
const formidable = require('formidable')
let form = new formidable.IncomingForm()
http
    .createServer((req,res)=>{
        if(req.method ==='GET'){
            console.log('Hi')
            fs.readFile('./file_upload.html',(err,data)=>{
                if(err){
                    console.log(err)
                    return
                }
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write(data)
                res.end()
            })
        }
        if(req.method ==='POST'){
            form.parse(req,(err,fields,files)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log(fields)
                fs.rename(files.upload.path,'./'+files.upload.name)
                fs.readFile('./file_upload.html',(err,data)=>{
                    if(err){
                        console.log(err)
                        return
                    }
                    res.writeHead(200,{'Content-Type':'text/html'})
                    res.write(data)
                    res.end()
                })
            })
        }
    })
    .listen('5555')
    console.log('Server listening on port 5555...')