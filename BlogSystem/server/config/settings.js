/**
 * Created by boris on 6/28/2017.
 */
const path = require('path')
let rootPath = path.normalize(path.join(__dirname,'/../../'))
module.exports={
    development:{
        rootPath:rootPath,
        db:'mongodb://localhost:27017/generictemplate',
        port:1337
    },
    staging:{

    },
    qa:{

    },
    production:{
        rootPath:rootPath,
        port:process.env.PORT
    }
}