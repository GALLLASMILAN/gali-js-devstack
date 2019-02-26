interface IPet2 {
    name : string;
    age? : number;
}

type NOtOptionalReadPet = {
    readonly [K in keyof IPet2] -?: IPet2[K]
}

const gali: NOtOptionalReadPet = {
    name: 'dd',
    //age: 23
}

gali.age = 3;