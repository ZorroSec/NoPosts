const { express, app, routes } = require('./routes.js')
const PORT = 3000
app.use('/public', express.static('./public'))
app.use('/styles', express.static('./styles'))
app.use('/view', express.static('./view'))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/view/index.html')
})

app.get('/about', (req, res)=>{
    res.sendFile(__dirname + "/view/about.html")
})
app.get('/blog', (req, res)=>{
    res.sendFile(__dirname + '/view/blog.html')
})
app.listen(PORT, (err)=>{
    if(!err){
        console.log({ message: 'success'})
    }
})