import mongoose from 'mongoose';
import config from '../config';

mongoose.Promise = global.Promise;

export function init() {
    console.log('Connecting to MongoDb at', config.db);
    mongoose.connect(config.db);
    mongoose.set('debug', true);

}
