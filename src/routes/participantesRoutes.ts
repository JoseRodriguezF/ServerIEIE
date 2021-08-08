import { Router } from 'express';
import { participantesController} from '../Controller/ParticipantesController';


class ParticipantesRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void {
        this.router.get('/', participantesController.list);
        this.router.get('/:id', participantesController.getinfo);
        this.router.post('/', participantesController.create);
        this.router.delete('/:id', participantesController.delete);
        this.router.put('/:id', participantesController.update);
    }
}

const participantesRoutes = new ParticipantesRoutes();
export default participantesRoutes.router;