import {Request, Response } from 'express';

class IndexController {
    index (req: Request, res: Response){
        res.json({text: 'La base de datos funciona'});
    }
}

export const indexController = new IndexController();