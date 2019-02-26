class Animal {
    numLegs: number;
    constructor(numLegs) {
        this.numLegs = numLegs;
    }
}

class Cat extends Animal {
    name: string;
}

class Lion extends Animal {
    fast: number;
}

function createInstance<A extends Animal>(c: new (numLegs: Number) => A): A {
    return new c(4);
}

createInstance(Lion).fast;

console.log(createInstance(Cat));