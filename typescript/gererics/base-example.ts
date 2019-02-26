function pushSomethingIntoCollection<T>(item: T, collection: T[]) {
    collection.push(item);
}

const numbers: Number[]= [1,4,6];
const names: String[] = ['Milan', 'Kuba'];

pushSomethingIntoCollection(50, numbers);
pushSomethingIntoCollection('Martin', names);

pushSomethingIntoCollection<String>(55, names);
pushSomethingIntoCollection<Number>('Pali', numbers);