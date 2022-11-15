import {schema} from './VerifyEmail.sercvices'

test("VerifyEmail - Return Object When there`s valid otp", async () => { 
    const otps = {optOne : '2', optTwo : '0', optThree : '6', optFour : '5'}

    const validation = await schema.isValid(otps);

    expect(validation).toBe(true);
});

test("VerifyEmail - Return Error When One Otp Is missing", async () => { 
    const otps = {optOne : '2', optTwo : null, optThree : '6', optFour : '5'}

    const validation = await schema.isValid(otps);

    expect(validation).toBe(false);
})

test("VerifyEmail - Return Error When object Is empty", async () => { 
    const otps = {optOne : null, optTwo : null, optThree : null, optFour : null}

    const validation = await schema.isValid(otps);

    expect(validation).toBe(false);
})