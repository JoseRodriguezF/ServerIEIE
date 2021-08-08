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
exports.certificadosController = void 0;
const database_1 = __importDefault(require("../database"));
class CertificadosController {
    getCercursos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cur } = req.params;
            const { nom } = req.params;
            database_1.default.query('SELECT `c`.Nombre as Curso, `t`.`Id_Certificado`, a.Nombre FROM `t_cursos` AS `c` LEFT JOIN `t_usuario_curso` AS `t` ON `t`.`Id_Curso` = `c`.`Id_Curso` INNER JOIN t_usuario as a on t.Id = a.Id WHERE`t`.`Id_Curso` = ?', [cur], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.query('SELECT * FROM T_USUARIO_CURSO', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    create(req, res) {
        database_1.default.query('INSERT INTO T_USUARIO_CURSO set ?', [req.body]);
        res.json(req.body);
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM T_USUARIO_CURSO WHERE Id_Certificado = ?', [id]);
            return;
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE T_USUARIO_CURSO set ? where ID = ?', [req.body, id]);
            res.json({ message: 'Se ha actualizado ' });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            database_1.default.query('SELECT distinct t.id, g.Nombre FROM t_usuario_curso as t left JOIN t_cursos as g on t.Id_Curso = g.Id_Curso WHERE t.Id =  ?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getinfo2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { curso } = req.params;
            const { cer } = req.params;
            console.log('entré');
            database_1.default.query('SELECT * from t_usuario_curso where id = ? and Id_Curso = ?', [id, curso], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getinfo3(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { year } = req.params;
            const { cer } = req.params;
            console.log('entré');
            database_1.default.query('SELECT `c`.Nombre as Curso, c.Director, c.IH, c.IH_letras, c.Mes, c.year, `t`.`Id_Certificado`, `t`.`Id`, a.Nombre FROM `t_cursos` AS `c` LEFT JOIN `t_usuario_curso` AS `t` ON `t`.`Id_Curso` = `c`.`Id_Curso` INNER JOIN t_usuario as a on t.Id = a.Id WHERE `t`.`Id_certificado` = ? AND `t`.`Id` = ? and `c`.`year` = ? ', [cer, id, year], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getinfo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { Nombre } = req.params;
            database_1.default.query('SELECT `c`.Nombre as Curso, c.Director, c.IH, c.IH_letras, c.Mes, c.year, `t`.`Id_Certificado`, `t`.`Id`, a.Nombre FROM `t_cursos` AS `c` LEFT JOIN `t_usuario_curso` AS `t` ON `t`.`Id_Curso` = `c`.`Id_Curso` INNER JOIN t_usuario as a on t.Id = a.Id WHERE c.Nombre =  ? AND t.`Id` = ?', [Nombre, id], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
                console.log('entré');
            });
        });
    }
}
exports.certificadosController = new CertificadosController();
