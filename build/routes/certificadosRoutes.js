"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CertificadosController_1 = require("../Controller/CertificadosController");
class CertificadosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', CertificadosController_1.certificadosController.list);
        this.router.get('/:id', CertificadosController_1.certificadosController.getOne);
        this.router.get('/:cur/:nom', CertificadosController_1.certificadosController.getCercursos);
        this.router.post('/', CertificadosController_1.certificadosController.create);
        this.router.delete('/:id', CertificadosController_1.certificadosController.delete);
        this.router.put('/:id', CertificadosController_1.certificadosController.update);
        this.router.get('/:id/:curso/:cer', CertificadosController_1.certificadosController.getinfo2);
        this.router.get('/:id/:cer/:year/:num', CertificadosController_1.certificadosController.getinfo3);
        this.router.get('/:Nombre/:id/:num/:num2/:num3', CertificadosController_1.certificadosController.getinfo);
    }
}
const certificadosRoutes = new CertificadosRoutes();
exports.default = certificadosRoutes.router;
