"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LogController_1 = require("../Controller/LogController");
class LogRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', LogController_1.logController.list);
        this.router.post('/', LogController_1.logController.create);
    }
}
const logRoutes = new LogRoutes();
exports.default = logRoutes.router;
