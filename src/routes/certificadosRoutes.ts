import { Router } from 'express';
import {certificadosController } from '../Controller/CertificadosController';


class CertificadosRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void {
        this.router.get('/', certificadosController.list);
        this.router.get('/:id', certificadosController.getOne);
        this.router.get('/:cur/:nom', certificadosController.getCercursos);
        this.router.post('/', certificadosController.create);
        this.router.delete('/:id', certificadosController.delete);
        this.router.put('/:id', certificadosController.update);
        this.router.get('/:id/:curso/:cer',certificadosController.getinfo2);
        this.router.get('/:id/:cer/:year/:num',certificadosController.getinfo3);
        this.router.get('/:Nombre/:id/:num/:num2/:num3',certificadosController.getinfo );
    }
}

const certificadosRoutes = new CertificadosRoutes();
export default certificadosRoutes.router;