/**
 * Created by boris on 6/25/2017.
 */
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = (config) => {
    mongoose.connect(config.connectionString)
    let db = mongoose.connection
    db.once('open', (err) => {
        if (err) {
            console.log(err)
            return
        }
        console.log('MongoDB is ready!')
    })
    db.on('err', (err) => {
        console.log(err)
    })
    require('../models/Recipe')
}