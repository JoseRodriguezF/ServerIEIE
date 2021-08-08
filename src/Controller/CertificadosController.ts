import {Request, Response } from 'express';
import cnn from '../database';

class CertificadosController {

    public async getCercursos (req: Request, res: Response){
        const {cur} = req.params;
        const {nom} = req.params;
        cnn.query('SELECT `c`.Nombre as Curso, `t`.`Id_Certificado`, a.Nombre FROM `t_cursos` AS `c` LEFT JOIN `t_usuario_curso` AS `t` ON `t`.`Id_Curso` = `c`.`Id_Curso` INNER JOIN t_usuario as a on t.Id = a.Id WHERE`t`.`Id_Curso` = ?', [cur], function (err, result, fields) {
        if (err)
        throw err;
        res.json(result);

           });
        }


   public async list (req: Request, res: Response){

    cnn.query('SELECT * FROM T_USUARIO_CURSO', function (err, result, fields) {
           if (err)
               throw err;
           res.json(result);
       });
    }
   
    create (req: Request, res: Response){
        cnn.query('INSERT INTO T_USUARIO_CURSO set ?', [req.body]);
        res.json(req.body);
    
    }
    async delete (req: Request, res: Response){
        const {id} = req.params;
       await cnn.query('DELETE FROM T_USUARIO_CURSO WHERE Id_Certificado = ?', [id]);
       return;
    }
    async update (req: Request, res: Response){
        const {id} = req.params;
        await cnn.query('UPDATE T_USUARIO_CURSO set ? where ID = ?', [req.body, id ]);
        res.json({message: 'Se ha actualizado '});
     }
    public async getOne (req: Request, res: Response){
        const {id} = req.params;
        cnn.query('SELECT distinct t.id, g.Nombre FROM t_usuario_curso as t left JOIN t_cursos as g on t.Id_Curso = g.Id_Curso WHERE t.Id =  ?',[id], function (err, result, fields) {
        if (err)
        throw err;
        res.json(result);
           });

        }
        

    public async getinfo2(req: Request, res: Response){
    const {id} = req.params;
    const {curso} = req.params;
    const {cer} = req.params;
    console.log('entré');
    cnn.query('SELECT * from t_usuario_curso where id = ? and Id_Curso = ?', [id, curso], function (err, result, fields) {
        if (err)
        throw err;
        res.json(result);
    
           });
    }
    public async getinfo3(req: Request, res: Response){
        const {id} = req.params;
        const {year} = req.params;
        const {cer} = req.params;
        console.log('entré');
        cnn.query('SELECT `c`.Nombre as Curso, c.Director, c.IH, c.IH_letras, c.Mes, c.year, `t`.`Id_Certificado`, `t`.`Id`, a.Nombre FROM `t_cursos` AS `c` LEFT JOIN `t_usuario_curso` AS `t` ON `t`.`Id_Curso` = `c`.`Id_Curso` INNER JOIN t_usuario as a on t.Id = a.Id WHERE `t`.`Id_certificado` = ? AND `t`.`Id` = ? and `c`.`year` = ? ', [cer, id, year], function (err, result, fields) {
            if (err)
            throw err;
            res.json(result);
        
               });
        }
    


    public async getinfo(req: Request, res: Response){
        const {id} = req.params;
        const {Nombre} = req.params;
        cnn.query('SELECT `c`.Nombre as Curso, c.Director, c.IH, c.IH_letras, c.Mes, c.year, `t`.`Id_Certificado`, `t`.`Id`, a.Nombre FROM `t_cursos` AS `c` LEFT JOIN `t_usuario_curso` AS `t` ON `t`.`Id_Curso` = `c`.`Id_Curso` INNER JOIN t_usuario as a on t.Id = a.Id WHERE c.Nombre =  ? AND t.`Id` = ?', [Nombre, id], function (err, result, fields) {
            if (err)
            throw err;
            res.json(result);
            console.log('entré');
        
               });

     





        }
    
}
export const certificadosController = new CertificadosController();