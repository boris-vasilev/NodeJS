/**
 * Created by boris on 6/28/2017.
 */
const homeController = require('./home-controller')
const usersController = require('./users-controller')
const articleController = require('./article-controller')
module.exports={
    home:homeController,
    users:usersController,
    article:articleController
}