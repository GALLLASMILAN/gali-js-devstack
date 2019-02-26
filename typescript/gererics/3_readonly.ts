interface IPet {
    name : string;
    age : number;
}

type ReadonlyPet = {
    +readonly [K in keyof IPet]: IPet[K]
}

type ReadonlyPet2 = Readonly<IPet>;


const readonlyPet : ReadonlyPet2 = {
    name: 'Buttons',
    age: 5
}

readonlyPet.age = 6;