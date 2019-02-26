import { IInputStream } from './types';

export default class TokenStream {
    protected keywords: string = ' if then else lambda λ true false ';
    protected current = undefined;
    protected inputStream: IInputStream;

    constructor(inputStream: IInputStream) {
        this.inputStream = inputStream;
    }

    readNext() {
        // ignore white spaces

        // return undefined if input.eof()

        const char = this.inputStream.peek();
        // skip if (char == #) => comment

        // when "" then return string

        // when number, return number

        // when char => indentificator or keyword

        // puch => (){}[];

        // operator => +-*/ atd..

        this.inputStream.croak(`Can't handle character: ${char}`);
    }

    peek() {
        return this.current || (this.current = this.readNext());
    }

    next() {
        var token = this.current;
        this.current = null;
        return token || this.readNext();
    }
    eof() {
        return this.peek() == null;
    }
}
