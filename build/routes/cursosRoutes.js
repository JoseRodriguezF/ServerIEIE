"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CursosController_1 = require("../Controller/CursosController");
class CursosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', CursosController_1.cursosController.list);
        this.router.get('/:id', CursosController_1.cursosController.getOne);
        this.router.get('/:Nom', CursosController_1.cursosController.getOnebn);
        this.router.post('/', CursosController_1.cursosController.create);
        this.router.delete('/:id', CursosController_1.cursosController.delete);
        this.router.put('/:id', CursosController_1.cursosController.update);
    }
}
const cursosRoutes = new CursosRoutes();
exports.default = cursosRoutes.router;
