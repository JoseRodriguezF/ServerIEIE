import {Request, Response } from 'express';
import cnn from '../database';

class LoginController {
    public async getLogin(req: Request, res: Response){
        const {user} = req.params;
        const {pass} = req.params;
       
        cnn.query('SELECT * FROM t_login WHERE USER = ? and PASS = ?', [user,pass], function (err, result, fields) {
            if (err)
            throw err;
            res.json(result);
         console.log('entré');
               });
        }
}
export const loginController = new LoginController();