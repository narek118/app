import express from "express"
import bodyParser from "body-parser"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import path from "path"
import {init as initDB} from "./mongoose.js"
import api from '../api/index.js';

initDB();

var app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

api.use('/api',api);

app.get("*",(req,res) => {
    res.sendFile(path.join(process.cwd(), 'public/index.html'));
})

export default app;