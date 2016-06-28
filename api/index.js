import path from 'path';
import glob from 'glob';
import express from 'express';

const api = express();

const models = glob.sync(path.join(process.cwd(), '/**/*/module.js'));
const routes = glob.sync(path.join(process.cwd(), '/**/*/routes.js'));

models.forEach(model => require(model));

routes.forEach(route => require(route).init(api));

export default api;