/**
 * Created by boris on 6/2/2017.
 */
const fs = require('fs')
//function for determining content-type
let getContentType =(url)=>{
    if(url.endsWith('.css')){
        return 'text/css'
    }else if(url.endsWith('.js')){
        return 'application/javascript'
    }else if(url.endsWith('.html')){
        return 'text/html'
    }else if(url.endsWith('.jpg')){
        return 'image/jpeg'
    }
    return false
}
module.exports=(req,res)=>{
    //req.path.lastIndexOf('/content',0) returns 0 if req.path begins with /content
    if((!req.path.lastIndexOf('/content',0)||!req.path.lastIndexOf('/images',0))&& getContentType(req.path)) {
        if (!req.path.lastIndexOf('/images', 0)) {
            fs.readFile('./content' + req.path, (err, data) => {
                if (err) {
                    res.writeHead(404)
                    res.write('404 PLEASE,CHECK YOUR URL')
                    res.end()
                    return
                } else {
                    let contentType = 'text/plain'

                    res.writeHead(200, {'content-type': getContentType(req.path)})
                    res.write(data)
                    res.end()
                }
            })
        } else {
            fs.readFile('.' + req.path, (err, data) => {
                if (err) {
                    res.writeHead(404)
                    res.write('404 PLEASE,CHECK YOUR URL')
                    res.end()
                    return
                } else {
                    let contentType = 'text/plain'

                    res.writeHead(200, {'content-type': getContentType(req.path)})
                    res.write(data)
                    res.end()
                }
            })
        }
    } else{
        res.writeHead(403)
        res.write('403 ACCESS DENIED! You can access only content')
        res.end()
    }
}