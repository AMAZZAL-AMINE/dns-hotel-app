import {schema} from './ChangePassword.services'

test("ChangePassword - RETURN passwords object  when confirmed Password is correct", async () => {

    const password = { password: "amineamazzal", confirmPassword: "amineamazzal" };

    const validation = await schema.validate(password);

    expect(validation).toBe(password);
});

test("ChangePassword - RETURN ERROR WHEN CONFIRM PASSWORD IS NOT CORRECT", async () => {
    const password = {password: "amineamazzal", confirmPassword: "amienonamazzal"}

    validation = await schema.isValid(password);

    expect(validation).toBe(false)
});

test("ChangePassword : Return Error when object is empty", async () => {
    const password = {password: "", confirmPassword: ""}

    validation = await schema.isValid(password);

    expect(validation).toBe(false)
})