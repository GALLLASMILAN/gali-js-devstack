export interface IInputStream {
    input: string;
    next(): string;
    peek(): string;
    eof(): boolean;
    croak(msg: string): void;
}

export type Token = {
    type: string;
    value: any;
}

export interface ITokenStream {
    current: Token|undefined;
    inputStream: IInputStream;
    isKeyword(word: string): boolean;
    isDigit(char: string): boolean;
    isIdStart(char: string): boolean;
    isId(char: string): boolean;
    isOperationChar(char: string): boolean;
    isPunch(char:string): boolean;
    isWhitespace(char: string): boolean;
    readWhile(conditionCb: (source: string) => void): string;
    readNumber(): Token;
    readIdent(): Token;
    readEscaped(end: string): string;
    readString(): Token;
    skipComment(): void;
    readNext(): Token;
    peek(): Token;
    next(): Token;
    eof(): boolean;
}