import { schema } from "./EditProfile.services";

test("EditProfile - Return Object When Values exist", async () => {
    const form = {
        name : "test name",
        email : "test@gmail.con",
        phone : "9834756",
        cin : "jc985f",
        city : "agadir",
        address : "hello",
        birthDay : "44",
        birthMonth : "45",
        birthYear : "20000",
        password : "testtest",
        newPassword : "testtesttest",
        confirmPassword : "testtesttest"
    };

    const validationSchema = await schema.isValid(form);
    expect(validationSchema).toBe(true);
})

test("EditProfile - Return Error When Values Empty", async () => {
    const form = {
        name : "",
        email : "",
        phone : "",
        cin : "",
        city : "",
        address : "",
        birthDay : "",
        birthMonth : "",
        birthYear : "",
        password : "",
        newPassword : "",
        confirmPassword : ""
    };
    const validationSchema = await schema.isValid(form);
    expect(validationSchema).toBe(false);
})

test("EditProfile - Return Error When Confirm Password not match with new password", async () => {
    const form = {
        name : "test name",
        email : "test@gmail.con",
        phone : "9834756",
        cin : "jc985f",
        city : "agadir",
        address : "hello",
        birthDay : "44",
        birthMonth : "45",
        birthYear : "20000",
        password : "testtest",
        newPassword : "hellomanthisispassword",
        confirmPassword : "lolicanbekingoneday"
    };

    const validationSchema = await schema.isValid(form);
    expect(validationSchema).toBe(false);
})
