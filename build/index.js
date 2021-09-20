"use strict";
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const participantesRoutes_1 = __importDefault(require("./routes/participantesRoutes"));
const cursosRoutes_1 = __importDefault(require("./routes/cursosRoutes"));
const certificadosRoutes_1 = __importDefault(require("./routes/certificadosRoutes"));
const loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
const logRoutes_1 = __importDefault(require("./routes/logRoutes"));


class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/participantes', participantesRoutes_1.default);
        this.app.use('/api/cursos', cursosRoutes_1.default);
        this.app.use('/api/certificados', certificadosRoutes_1.default);
        this.app.use('/api/login', loginRoutes_1.default);
        this.app.use('/api/log', logRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();

function loginRoutes(arg0, loginRoutes) {
    throw new Error('Function not implemented.');
}