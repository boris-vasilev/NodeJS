/**
 * Created by boris on 6/25/2017.
 */
const path = require('path')

module.exports = {
    development: {
        connectionString: 'mongodb://localhost:27017/foodapp',
        rootPath: path.normalize(path.join(__dirname, '../'))
    }
}