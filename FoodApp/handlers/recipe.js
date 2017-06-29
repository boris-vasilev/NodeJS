/**
 * Created by boris on 6/26/2017.
 */
const Recipe = require('../models/Recipe')
module.exports.addGet=(req,res)=>{
    res.render('recipe/add')
}
module.exports.addPost = (req,res)=>{
    let recipeObj = req.body
    recipeObj.image = `/public/images/${req.file.filename}`
    Recipe.create(recipeObj).then(()=>{
        res.redirect('/')
    })
}
module.exports.allGet = (req,res)=>{
    Recipe.find({}).then((recipes)=>{
        res.render('recipe/all',{recipes:recipes})
    })
}