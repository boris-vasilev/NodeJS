/**
 * Created by boris on 6/6/2017.
 */
var qs = require('querystring')
var fs =require('fs')
let database = require('../data/images')
let imageMemory='';
module.exports= {func:(req, res) => {
    if (req.path === '/images/add' && req.method === 'GET') {
        fs.readFile('./content/add.html', (err, data) => {
            if (err) {
                console.log(err)
            }
            res.writeHead('200', {"content-type": "text/html"})
            res.write(data)
            res.end()
        })
    } else if (req.path === '/images/add' && req.method === 'POST') {
        let body = ''
        req.on('data', (data) => {
            body += data
            // Too much POST data, kill the connection!
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6)
                request.connection.destroy();
        })
        req.on('end', () => {
            let image = qs.parse(body);

            if (!image.name || !image.url) {
                res.writeHead(200);
                res.write('Some of the fields are not filled.');
                res.end();
            } else {
                database.images.add(image)
                res.writeHead(302, {
                    Location: '/'
                });
                // res.end();
                fs.readFile('./content/add.html', (err, data) => {
                    if (err) {
                        console.log(err)
                    }
                    res.writeHead('200', {"content-type": "text/html"})
                    res.write(data)
                    res.end()
                })
            }
        })
    }else if(req.path==='/images/all'&& req.method ==='GET'){
        fs.readFile('./content/all.html',(err,data)=>{
            if(err){
                console.log(err)
            }
            res.writeHead(200)
            res.write(data)
            res.end()
        })
    }else if(req.path==='/images/data'&& req.method ==='GET'){
        res.writeHead(200,{"content-type":"application/javascript"})
        fs.readFile('./data/images.json',(err,data)=>{
            if(err){
                console.log(err)
            }
            res.write(data)
            res.end()
        })
        // console.log(imageMemory)
        // console.log(JSON.parse(imageMemory))
    }else if(req.path.startsWith('/images/details/')&&req.method ==='GET'){
        fs.readFile('./content/details.html',(err,data)=>{
            if(err){
                console.log(err)
            }
            res.writeHead(200)
            res.write(data)
            res.end()
        })
    }else{
        return true
    }
},
    imageMemory:imageMemory
}