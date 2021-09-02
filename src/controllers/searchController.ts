import { Request, Response } from "express";
import {createMenuObject} from '../helpers/createMenuObject';

import {Pet} from '../models/Pet'



export const search = (req: Request, res: Response)=>{

    let query: string = req.query.q as string;

    let list = Pet.getFromName(query);

    if (!query) {
        //uma vez que nao tem o query 
        // ele redireciona para /
        //do retorno para parar tudo
        res.redirect('/');
        return;
    }

    let data =  {
        menu:createMenuObject(''),
        list,
        query
    }

    res.render('pages/page',{data});

}
