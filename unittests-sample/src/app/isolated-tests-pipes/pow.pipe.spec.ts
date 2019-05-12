import { PowPipe } from "./pow.pipe";

describe('PowPipe Tests', () => {

let pipe: PowPipe;

beforeEach(() => {
    pipe = new PowPipe();
});

it('should be 4 if value is 2 and exponent 2', () => {

    expect(pipe.transform(2, '2')).toEqual(4);
});

it('should be 0 if value is null and exponent null', () => {

    expect(pipe.transform(null, null)).toEqual(0);
});

it('should be 1 if value is 1 and exponent non-numeric', () => {

    expect(pipe.transform(1, 'HAKAN')).toEqual(1);
});

});
