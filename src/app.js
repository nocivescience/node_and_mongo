import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import config from './config';
const app=express()
app.set('port',config.PORT)