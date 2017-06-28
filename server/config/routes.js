/**
 * Created by boris on 6/28/2017.
 */
module.exports=(app)=>{
    app.get('/', (req, res) => {
        res.render('index')
    })
    app.all('*',(req,res)=>{
        res.status(404)
        res.send('404 Not found')
        res.end()
    })
}