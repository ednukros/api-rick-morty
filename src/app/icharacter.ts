export interface ICharacter {

    id: number;
    name: string;
    image: string;
    status: string;
}

export interface CharacterResponseInterface {

    info: {
        count: number;
        next: string;
        pages: number;
        prev: string;
    };
    results: ICharacter[];
}

