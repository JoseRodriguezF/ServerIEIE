import {Request, Response } from 'express';
import cnn from '../database';

class LogController {
   public async list (req: Request, res: Response){

    cnn.query('SELECT * FROM T_LOG ORDER BY Fecha ASC', function (err, result, fields) {
           if (err)
               throw err;
           res.json(result);
       });
    }

    create (req: Request, res: Response){
        cnn.query('INSERT INTO t_log set ?', [req.body]);
        res.json(req.body);
        console.log ('si guard[o');
    
    }
}
export const logController = new LogController();