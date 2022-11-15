import {schema} from './DeclarationEscriptoion.services';

test("DeclarationEscription - return object when ther`s a valid data", async () => {
    const form = {
        desc : "the test is the best wau to test lol", 
        qty : 30, 
        price : 1000,
        address : "block 30000 moon",
        city : "in the sun"
    }
    const validation = await schema.isValid(form);
    expect(validation).toBe(true);
})

test("DeclarationEscription - return Error when description length < 10 ", async () => {
    const form = {
        desc : "the test", 
        qty : 30, 
        price : 1000,
        address : "block 30000 moon",
        city : "in the sun"
    }
    const validation = await schema.isValid(form);
    expect(validation).toBe(false);
})

test("DeclarationEscription - return Error when Price Or qty Is Not number ", async () => {
    const form = {
        desc : "bro are you okay ? yes dude", 
        qty : "test", 
        price : 1000,
        address : "block 30000 moon",
        city : "in the sun"
    }
    const validation = await schema.isValid(form);
    expect(validation).toBe(false);
})