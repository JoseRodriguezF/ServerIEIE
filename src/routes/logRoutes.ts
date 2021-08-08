import { Router } from 'express';
import {logController } from '../Controller/LogController';


class LogRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void {
        this.router.get('/', logController.list);
        this.router.post('/', logController.create);
    }
}

const logRoutes = new LogRoutes();
export default logRoutes.router;