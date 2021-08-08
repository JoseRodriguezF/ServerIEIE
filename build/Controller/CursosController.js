"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cursosController = void 0;
const database_1 = __importDefault(require("../database"));
class CursosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.query('SELECT * FROM T_CURSOS', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    create(req, res) {
        database_1.default.query('INSERT INTO T_CURSOS set ?', [req.body]);
        res.json(req.body);
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM T_CURSOS WHERE ID_CURSO = ?', [id]);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE T_CURSOS set ? where ID_CURSO = ?', [req.body, id]);
            res.json({ message: 'Se ha actualizado ' });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            database_1.default.query('SELECT * FROM T_CURSOS where NOMBRE = ?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getOnebn(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Nom } = req.params;
            database_1.default.query('SELECT * FROM T_CURSOS where Nombre = ?', [Nom], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result[0]);
            });
        });
    }
}
exports.cursosController = new CursosController();
