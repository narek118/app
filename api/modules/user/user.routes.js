import {Router} from 'express';
import * as Handlers from './user.handlers';

export function init(api){
    const router = Router();

    router.get('/',Handlers.getAllUsers);

    api.use('/',router);
}