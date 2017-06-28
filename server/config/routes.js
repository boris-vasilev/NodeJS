/**
 * Created by boris on 6/28/2017.
 */
const controllers = require('../controllers/index')
module.exports=(app)=>{
    app.get('/', controllers.home.index)
    app.get('/about', controllers.home.about)
    app.all('*',(req,res)=>{
        res.status(404)
        res.send('404 Not found')
        res.end()
    })
}