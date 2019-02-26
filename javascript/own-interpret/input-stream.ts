import { IInputStream } from './types';

export default class InputStream implements IInputStream {
    public input;
    protected line = 1;
    protected col = 0;
    protected pos = 0;
    constructor(input: string) {
        this.input = input;
    }
    /**
     * @description returns the next value but without removing it from the stream.
     * @returns
     */
    next() {
        const ch: string = this.input.charAt(this.pos++);
        if (ch == '\n') {
            this.line++;
            this.col = 0;
        }
        else {
            this.col++;
        }
        return ch;
    }

    /**
     * @description returns the next value and also discards it from the stream.
     * @returns
     */
    peek() {
        return this.input.charAt(this.pos);
    }

    /**
     * @description returns true if and only if there are no more values in the stream.
     * @returns
     */
    eof() {
        return this.peek() == '';
    }

    /**
     * @description - does throw new Error(msg).
     * @param {*} msg
     */
    croak(msg: string) {
        throw new Error(`${msg} (${this.line}:${this.col})`);
    }
}