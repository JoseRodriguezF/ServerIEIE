import { Router } from 'express';
import {loginController} from '../Controller/LoginController';


class LoginRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
    this.router.post('/:user/:pass', loginController.getLogin);
    }
}


const loginRoute = new LoginRoutes();
export default loginRoute.router;