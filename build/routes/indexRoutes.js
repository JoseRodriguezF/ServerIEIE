"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const IndexContoller_1 = require("../Controller/IndexContoller");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', IndexContoller_1.indexController.index);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
