export class MenuItem{
    id: string;
    title: string;
    category: string;
    description: string;
    availability: string;
    price: string;
    constructor(){}

}

export class MenuCategory{
    id: string;
    title: string;
    type: string;
    description: string;
    active: string;
    order: string
    constructor(){}
}

export class AddModifier{
    title: string;
    price: number;
    avaliability: boolean;

    constructor(){}
}

