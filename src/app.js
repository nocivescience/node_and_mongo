const express= require('express');
const app=express();
const path= require('path');
const config= require('./config');
const {engine}= require('express-handlebars');
const morgan= require('morgan')
// const __dirname=path.resolve();
app.set('port', process.env.PORT||3000);
// app.use(express.static(path.join(__dirname, 'views')));
app.set('views',path.join(__dirname, '/views'));
app.engine(
    'hbs',
    engine({
        extname: 'hbs',
        layoutsDir: path.join(app.get('views'), 'layout'),
        partialDir: path.join(app.get('views'),'partial'),
    })
)
app.set('view engine' ,'hbs')
app.use(express.static(path.join(__dirname,'/views')))
app.use(morgan('dev'));
app.use(require('./routes.js'));
module.exports= app;
