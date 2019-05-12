describe('first test', () => {

let p1: number;

beforeEach(() => {
    p1 = 0;
});

it('should be zero', ()=>{
    //Arrange : (Preparing Part) 
    p1= 23;
    //Act : (Act on the tested object) 
    let result = p1 * 0;
    //Assert : (See Expected Results) 
    expect(result).toBe(0);
});

});

