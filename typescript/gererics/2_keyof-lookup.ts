import { ITodo, todo } from './2_data';

/*
function getObjectValue(obj: ITodo, key: "id" | "name" | "completed") {
    return obj[key];
}*/

function getObjectValue(obj: ITodo, key: keyof ITodo) {
    return obj[key];
}

function getObjectValue2<T extends ITodo, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

interface IPupu { name: string };
const pupu: IPupu = { name: 'esmeralda' };

const result = getObjectValue2(todo, 'text');
const result2 = getObjectValue2(pupu, 'name');
console.log(result, result2);