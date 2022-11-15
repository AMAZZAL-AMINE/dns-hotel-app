import { schema } from './GetEmail.services'

test("GetEmail - RETURN email object  when email correct", async () => {
    const email = {email : "test@gmail.com"};
    const validation = await schema.isValid(email);
    expect(validation).toBe(true);
})

test("GetEmail - Return Error When Object Is empty", async () => {
    const email = {email : ""};
    const validation = await schema.isValid(email);
    expect(validation).toBe(false);
})

test("GetEmail - Return Error When Object Is not a valid email", async () => {
    const email = {email : "testhello"};
    const validation = await schema.isValid(email);
    expect(validation).toBe(false);
})