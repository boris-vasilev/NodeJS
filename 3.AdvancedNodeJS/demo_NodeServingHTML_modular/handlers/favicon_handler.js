/**
 * Created by boris on 6/2/2017.
 */
const fs = require('fs')
module.exports=(req,res)=> {
    if (req.path === '/favicon.ico') {
        fs.readFile('./content/favicon.ico', (err, data) => {
            if (err) {
                console.log(err)
                return
            }
            res.write(data)
            res.end()
        })
    }else {
        return true
    }
}