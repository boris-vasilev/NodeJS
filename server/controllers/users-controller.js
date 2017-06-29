/**
 * Created by boris on 6/29/2017.
 */
const encryption = require('../utilities/encryption')
const User = require('mongoose').model('User')
module.exports = {
    registerGet: (req, res) => {
        res.render('users/register')
    },
    registerPost: (req, res) => {
        let reqUser = req.body
        // Add validations!

        let salt = encryption.generateSalt()
        let hashedPassword = encryption.generateHashedPassword(salt, reqUser.password)
        User.findOne({username:reqUser.username}).then((user)=>{
            if(user){
                res.render('users/register', {globalError: `User ${reqUser.username} already exists`})
                return
            }
            User.create({
                username: reqUser.username,
                firstName: reqUser.firstName,
                lastName: reqUser.lastName,
                salt: salt,
                hashedPass: hashedPassword
            }).then(user => {
                req.logIn(user, (err, user) => {
                    if (err) {
                        res.locals.globalError = err
                        res.render('users/register', user)
                    }

                    res.redirect('/')
                })
            })
        })
    },
    loginGet:(req,res)=>{
        res.render('users/login')
    },
    loginPost:(req,res)=>{
        let reqUser = req.body
        User.findOne({username:reqUser.username}).then(user=> {
            if (!user) {
                res.render('users/login', {globalError: 'Invalid username or password'})
                return
            }
            if (!user.authenticate(reqUser.password)) {
                res.render('users/login', {globalError: 'Invalid username or password'})
                return
            }
            req.logIn(user, (err, user) => {
                if(err){

                }
                res.redirect('/')
            })
        })
    },
    logout:(req,res)=>{
        req.logout()
        res.redirect('/')
    },
    profileGet:(req,res)=>{
        User.findOne({username:req.params.username}).then((profile)=>{
            // console.log(profile)
            let articles = []
            for(let i =0; i<profile.articlesID.length;i++){
                articles.push({id:profile.articlesID[i],name:profile.articlesNames[i]})
            }
            let passedProfile = {
                username:profile.username,
                firstName:profile.firstName,
                lastName:profile.lastName
            }
            console.log(passedProfile)
            res.render('users/profile',{profile:passedProfile,articles:articles})
        })
    }
}