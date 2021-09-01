import { Request, Response } from "express";
import {createMenuObject} from '../helpers/createMenuObject';

import {Pet} from '../models/Pet'
/* =================================================================== */

interface Page {
    banner:{
        title:string;
        background:string;
    };
    menu:{};
    list?:{}[];
}
/* =================================================================== */
/* =================================================================== */
/* =================================================================== */

export const home = (req: Request, res: Response)=>{

    let list = Pet.getAll();

    let data: Page = {
        menu:createMenuObject('all'),
        banner:{
            title:'Todos os animais',
            background:'allanimals.jpg'
        },
        list
    }

    res.render('pages/page',{data});
}
/* =================================================================== */
/* =================================================================== */
/* =================================================================== */
export const dogs = (req: Request, res: Response)=>{
    let list = Pet.getFromType('dog');


    let data: Page = {
        menu:createMenuObject('dog'),
        banner:{
            title:'Cachorros',
            background:'banner_dog.jpg'
        },
        list
    }

    res.render('pages/page',{data});
}
/* =================================================================== */
/* =================================================================== */
/* =================================================================== */
export const cats = (req: Request, res: Response)=>{
    let list = Pet.getFromType('cat');
    let data: Page = {
        menu:createMenuObject('cat'),
        banner:{
            title:'Gatos',
            background:'banner_cat.jpg'
        },
        list
    }

    res.render('pages/page',{data});
}
/* =================================================================== */
/* =================================================================== */
/* =================================================================== */
export const fishes = (req: Request, res: Response)=>{

    let list = Pet.getFromType('fish');
    let data: Page = {
        menu:createMenuObject('fish'),
        banner:{
            title:'Peixes',
            background:'banner_fish.jpg'
        },
        list
    }

    res.render('pages/page',{data});
}
/* =================================================================== */
/* =================================================================== */
/* =================================================================== */