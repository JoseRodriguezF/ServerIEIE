"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ParticipantesController_1 = require("../Controller/ParticipantesController");
class ParticipantesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', ParticipantesController_1.participantesController.list);
        this.router.get('/:id', ParticipantesController_1.participantesController.getinfo);
        this.router.post('/', ParticipantesController_1.participantesController.create);
        this.router.delete('/:id', ParticipantesController_1.participantesController.delete);
        this.router.put('/:id', ParticipantesController_1.participantesController.update);
    }
}
const participantesRoutes = new ParticipantesRoutes();
exports.default = participantesRoutes.router;
