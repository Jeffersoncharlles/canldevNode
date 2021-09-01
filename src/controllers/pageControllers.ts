import { Request, Response } from "express";

interface Page {
    banner:{
        title:string;
        background:string;
    };
}


export const home = (req: Request, res: Response)=>{

    let data: Page = {
        banner:{
            title:'Todos os animais',
            background:'allanimals.jpg'
        },
    }

    res.render('pages/page',{data});
}
export const dogs = (req: Request, res: Response)=>{
    let data: Page = {
        banner:{
            title:'Cachorros',
            background:'banner_dog.jpg'
        },
    }

    res.render('pages/page',{data});
}
export const cats = (req: Request, res: Response)=>{
    let data: Page = {
        banner:{
            title:'Gatos',
            background:'banner_cat.jpg'
        },
    }

    res.render('pages/page',{data});
}
export const fishes = (req: Request, res: Response)=>{
    let data: Page = {
        banner:{
            title:'Peixes',
            background:'banner_fish.jpg'
        },
    }

    res.render('pages/page',{data});
}