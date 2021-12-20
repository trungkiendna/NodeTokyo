const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
var cookieParser = require('cookie-parser');

const authMiddleWare = require('./middleware/auth.middleware');

const app = express()
const port = 3000

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('public'))

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req,res) => {
    res.render('index', {
        name: 'Trung Kiên'
    })
})

app.use('/users', authMiddleWare.requireAuth, userRoute);
app.use('/auth', authRoute);

app.listen(port, () => {
    console.log(`Đã get thành công từ http://localhost:${port}`)
})