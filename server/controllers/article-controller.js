/**
 * Created by boris on 6/29/2017.
 */
const Article = require('mongoose').model('Article')
const User = require('mongoose').model('User')
module.exports={
    addGet:(req,res)=>{
        res.render('article/add')
    },
    addPost:(req,res)=>{
        let reqArticle = req.body
        req
        reqArticle.creator = req.user.username
        Article.create(reqArticle).then((article)=>{
            // User.findById(article.creator).then((user)=>{
            //     let art = user.article.push()
            // })
            User.findOne({username:article.creator})
                .exec()
                .then((user)=>{
                // console.log(user)
                    user.articlesID.push(article._id)
                    user.articlesNames.push(article.title)
                    user.save()
                })
            res.redirect('/')
        })
        //ADD SHORTID
    },
    allGet:(req,res)=>{
        let allArticles = Article.find({}).then((articles)=>{
            res.render('article/all',{articles:articles})
        })
    },
    myGet:(req,res)=>{
        User.findById(req.user._id).then((user)=>{
            console.log(user.articlesID)
            console.log('\n')
            let artArr = []
            for(let i =0; i<user.articlesID.length;i++){
                artArr.push({
                    articleID:user.articlesID[i],
                    articleName:user.articlesNames[i]
                })
            }
            console.log(artArr)
            res.render('article/my',{articles:artArr})
        })
    }
}