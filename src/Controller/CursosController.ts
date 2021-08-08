import {Request, Response } from 'express';
import cnn from '../database';

class CursosController {
   public async list (req: Request, res: Response){

    cnn.query('SELECT * FROM T_CURSOS', function (err, result, fields) {
           if (err)
               throw err;
           res.json(result);
       });
    }
   
    create (req: Request, res: Response){
        cnn.query('INSERT INTO T_CURSOS set ?', [req.body]);
        res.json(req.body);
    
    }
    async delete (req: Request, res: Response){
        const {id} = req.params;
       await cnn.query('DELETE FROM T_CURSOS WHERE ID_CURSO = ?', [id]);
    }
    async update (req: Request, res: Response){
        const {id} = req.params;
        await cnn.query('UPDATE T_CURSOS set ? where ID_CURSO = ?', [req.body, id ]);
        res.json({message: 'Se ha actualizado '});
     }
    public async getOne (req: Request, res: Response){
        const {id} = req.params;
        cnn.query('SELECT * FROM T_CURSOS where NOMBRE = ?', [id], function (err, result, fields) {
        if (err)
        throw err;
        res.json(result);

           });
        }
 
        public async getOnebn (req: Request, res: Response){
            const {Nom} = req.params;
            cnn.query('SELECT * FROM T_CURSOS where Nombre = ?', [Nom], function (err, result, fields) {
            if (err)
            throw err;
            res.json(result[0]);
    
               });
            }
    

}


export const cursosController = new CursosController();