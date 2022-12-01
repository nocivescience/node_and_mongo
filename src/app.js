import express from 'express';
import path from 'path';
import session from 'express-session';
import methodOverride from 'method-override';
import flash from 'connect-flash';
import passport from 'passport';
import morgan from 'morgan';
import MongoStore from 'connect-mongo';
import config from './config.js';
import {engine} from 'express-handlebars';
import router from './routes.js';
const app= express()
const __dirname=path.resolve();
app.set('port', process.env.PORT||3000);
// app.set('views', path.join(__dirname,'views'));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'views')))
app.use(router);
app.engine(
    'hbs',
    engine({
        extname: 'hbs',
        layoutsDir: path.join(app.get('views'), 'layout'),
        partialDir: path.join(app.get('views'),'partial'),
    })
)
app.set('view engine' ,'hbs')
export default app;
