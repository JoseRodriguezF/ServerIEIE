"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LoginController_1 = require("../Controller/LoginController");
class LoginRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/:user/:pass', LoginController_1.loginController.getLogin);
    }
}
const loginRoute = new LoginRoutes();
exports.default = loginRoute.router;
