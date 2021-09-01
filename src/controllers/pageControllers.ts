import { Request, Response } from "express";
import {createMenuObject} from '../helpers/createMenuObject';

interface Page {
    banner:{
        title:string;
        background:string;
    };
    menu:{};
}


export const home = (req: Request, res: Response)=>{

    let data: Page = {
        menu:createMenuObject('all'),
        banner:{
            title:'Todos os animais',
            background:'allanimals.jpg'
        },
    }

    res.render('pages/page',{data});
}
export const dogs = (req: Request, res: Response)=>{
    let data: Page = {
        menu:createMenuObject('dog'),
        banner:{
            title:'Cachorros',
            background:'banner_dog.jpg'
        },
    }

    res.render('pages/page',{data});
}
export const cats = (req: Request, res: Response)=>{
    let data: Page = {
        menu:createMenuObject('cat'),
        banner:{
            title:'Gatos',
            background:'banner_cat.jpg'
        },
    }

    res.render('pages/page',{data});
}
export const fishes = (req: Request, res: Response)=>{
    let data: Page = {
        menu:createMenuObject('fish'),
        banner:{
            title:'Peixes',
            background:'banner_fish.jpg'
        },
    }

    res.render('pages/page',{data});
}