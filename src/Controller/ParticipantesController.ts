import {Request, Response } from 'express';
import cnn from '../database';

class ParticipantesController {
   public async list (req: Request, res: Response){

    cnn.query('SELECT * FROM T_USUARIO ORDER BY Nombre ASC', function (err, result, fields) {
           if (err)
               throw err;
           res.json(result);
       });
    }
   
    create (req: Request, res: Response){
        cnn.query('INSERT INTO T_USUARIO set ?', [req.body]);
        res.json(req.body);
    
    }
    async delete (req: Request, res: Response){
        const {id} = req.params;
       await cnn.query('DELETE FROM T_USUARIO WHERE ID = ?', [id]);
    }
    async update (req: Request, res: Response){
        const {id} = req.params;
        await cnn.query('UPDATE T_USUARIO set ? where id = ?', [req.body, id ]);
        res.json({message: 'Se ha actualizado '});
     }
    public async getOne (req: Request, res: Response){
        const {id} = req.params;
        cnn.query('SELECT * FROM T_USUARIO where Id = ?', [id], function (err, result, fields) {
        if (err)
        throw err;
        res.json(result[0]);

           });
        }
 public async getinfo(req: Request, res: Response){
            const {id} = req.params;
            cnn.query('SELECT Id, Nombre FROM T_USUARIO where Id = ?', [id], function (err, result, fields) {
            if (err)
            throw err;
            res.json(result);
        
               });
            }



        }


export const participantesController = new ParticipantesController();