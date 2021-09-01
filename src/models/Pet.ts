
import {data} from '../database/data';

type PetType = 'dog' |'cat'| 'fish';

interface Pet {
    type:PetType;
    image:string;
    name: string;
    color: string;
    sex: 'Masculino' |'Feminino';
};




//Filtrar os pets por tipo


//Filtra os pets pelo nome

export const Pet = {

    //Pegar todos os Pets
    getAll: (): Pet[]=>{
        return data;
    },

    //Filtrar os pets por tipo
    getFromType: (type:PetType): Pet[]=>{
        return data.filter(item=> item.type === type );
        //se for igual retorna true se nao for retorna falso
    },

    getFromName: (name: string): Pet[]=>{
        return data.filter(item=> 
            item.name.toLowerCase().indexOf(name.toLowerCase()) > -1  );
        //index off nao achar nada que vc colocou ele retorna -1
        // jefferson onde ta o j ta na posição 0 quando ele nao acha retorna -1
        //para achar qualquer coisa minusculo ou maiúsculo e so usar loLowercase
    }

};