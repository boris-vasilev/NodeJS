/**
 * Created by boris on 6/2/2017.
 */
const fs = require('fs')
module.exports=(req,res)=> {
    if (req.path === '/') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                console.log(err)
                return
            } else {
                res.writeHead(200, {"content-encoding": "text/html"})
                res.write(data)
                res.end()
            }
        })
    }else{
        return true
    }
}

