/**
 * @author Milan Gallas
 * @param {any} data 
 * @param {boolean} caseSensitive
 */
export default function arrayUnique(data, caseSensitive: boolean = true) {
    // type check
    if (!Array.isArray(data)) return undefined;

    // no caseSensitive
    if (!caseSensitive) return data.filter((value, index, self) => (self.indexOf(value) === index))

    // caseSensitive
    return data.filter((value, index, self) => (
        self
        .map(value => (lowerCase(value)))
        .indexOf(lowerCase(value)) === index)
    )
};

function lowerCase(value) {
    return (typeof value === 'string') ? value.toLowerCase() : value
}

/*
console.log(
    arrayUnique(['tt', 'dd', 'TT']),
    arrayUnique(['tt', 'dd', 'TT'], false),
    arrayUnique(1),
    arrayUnique({name: 'gali'}),
    arrayUnique([11, 33, 22], false),
    arrayUnique([11, 33, 22]),
    arrayUnique([11, 33, 22]),
    '\n',
    arrayUnique([{name: 'gali'}, {name: 'gali2'}, {name: 'Gali'}, {name: 'Gali'}])
);
*/
