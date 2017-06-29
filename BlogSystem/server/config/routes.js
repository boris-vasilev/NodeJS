/**
 * Created by boris on 6/28/2017.
 */
const auth = require('./auth')
const controllers = require('../controllers/index')
module.exports=(app)=>{
    app.get('/', controllers.home.index)
    app.get('/about', controllers.home.about)
    app.get('/users/register',controllers.users.registerGet)
    app.post('/users/register',controllers.users.registerPost)
    app.get('/users/login',controllers.users.loginGet)
    app.post('/users/login',controllers.users.loginPost)
    app.post('/users/logout',controllers.users.logout)
    app.get('/users/profile/:username',controllers.users.profileGet)
    app.get('/article/add',auth.isAuthenticated,controllers.article.addGet)
    app.post('/article/add',auth.isAuthenticated,controllers.article.addPost)
    app.get('/article/all',controllers.article.allGet)
    app.get('/article/my',auth.isAuthenticated,controllers.article.myGet)
    app.get('/article/details/:id',controllers.article.detailsGet)
    app.all('*',(req,res)=>{
        res.status(404)
        res.send('404 Not found')
        res.end()
    })
}