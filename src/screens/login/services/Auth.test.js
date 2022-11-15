import {schema} from './Auth.services';

test("Login - return object when ther`s valid Login data", async () => {
    const login = {email: 'aminepklsjgljg@gmail.com', password: 'rterter'}

    const validation = await schema.isValid(login);

    expect(validation).toBe(true);
});

test("Login - return Error when email is invalid", async () => {
    const login = {email: 'aminepklsjgljg', password: 'rterter'}

    const validation = await schema.isValid(login);

    expect(validation).toBe(false);
});

test("Login - return Error when password is less than 8 char", async () => {
    const login = {email: 'aminepklsjgljg@gmail.com', password: '22'}

    const validation = await schema.isValid(login);

    expect(validation).toBe(false);
});


test("Login - return Error when on of password or email is missing", async () => {
    const login = {email: null, password: 'testes'}

    const validation = await schema.isValid(login);

    expect(validation).toBe(false);
});


test("Login - return Error when  password and email is missing", async () => {
    const login = {email: null, password: null}

    const validation = await schema.isValid(login);

    expect(validation).toBe(false);
});