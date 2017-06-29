/**
 * Created by boris on 6/25/2017.
 */
module.exports.index = (req, res) => {
    res.render('home/index')
}
module.exports.about = (req, res) => {
    res.render('home/about')
}
module.exports.contactUs = (req, res) => {
    res.render('home/contactUs')
}
