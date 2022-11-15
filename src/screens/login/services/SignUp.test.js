import {schema} from './SignUp.services';

test("Signup - return object when there`s valid data", async () => {
    const signup = {name: 'test', lastName : 'test', phone : 9876549867, email: 'test@gmail.com', password: 'testtesttest',}
    const validation = await schema.isValid(signup);
    expect(validation).toBe(true);
});


test("Signup - return Error when there`s no valid data", async () => {
    const signup = {name: '', lastName : '', phone : '', email: '', password: '',}
    const validation = await schema.isValid(signup);
    expect(validation).toBe(false);
});

test("Signup - return Error when email is not a valid email", async () => {
    const signup = {name: 'Amine', lastName : 'Amazzale', phone : '0612345678', email: 'test@', password: 'testtesttest',}
    const validation = await schema.isValid(signup);
    expect(validation).toBe(false);
});

test("Signup - return Error when phone is not a valid phone number", async () => {
    const signup = {name: 'test', lastName : 'test', phone : 'ttt', email: 'test@dns.com', password: 'testtesttest',}
    const validation = await schema.isValid(signup);
    expect(validation).toBe(false);
});