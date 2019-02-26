interface IDog {}
interface ICat {}

type Martin = IDog | ICat;

type varSymb = 'VF' | 'PF';

enum varSymb2 {
    VF = 'vf',
    PF = 'pf'
}
