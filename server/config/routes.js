/**
 * Created by boris on 6/28/2017.
 */
const controllers = require('../controllers/index')
module.exports=(app)=>{
    app.get('/', controllers.home.index)
    app.get('/about', controllers.home.about)
    app.get('/users/register',controllers.users.registerGet)
    app.post('/users/register',controllers.users.registerPost)
    app.get('/users/login',controllers.users.loginGet)
    app.post('/users/login',controllers.users.loginPost)
    app.post('/users/logout',controllers.users.logout)
    app.all('*',(req,res)=>{
        res.status(404)
        res.send('404 Not found')
        res.end()
    })
}