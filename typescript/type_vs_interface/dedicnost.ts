interface IGali {
    type: string;
    test(): void
}

type Pali = {
    name: string,
    test2(): void
}

export interface IPepa extends IGali, Pali{
    mac: boolean
}

export type pepa = IGali & Pali & {
    mac: boolean
};