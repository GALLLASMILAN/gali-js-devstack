import { IPepa, pepa } from './dedicnost';

class HodnyProgramator implements pepa { // IPepa
    name;
    type;
    constructor() {
        this.name = 'PaliGali';
        this.type = 'fullStack';
    }
    test() {
        console.log('test');
    }
    test2() {
        console.log('test');
    }
}