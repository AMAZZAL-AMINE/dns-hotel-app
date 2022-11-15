import {schema} from './BusinessDetails.services'

test("BusinessDetails - Return object when there`s valid data", async () => {
    const data = {
        reason : "company of the world",
        address : "everywhere and anywhere"
    };
    const validation = await schema.isValid(data);
    expect(validation).toBe(true);
});

test("BusinessDetails - Return Error when data si less than 3", async () => {
    const data = {
        reason : "co",
        address : "ev"
    };
    const validation = await schema.isValid(data);
    expect(validation).toBe(false);
});

test("BusinessDetails - Return Error when there`s empty data", async () => {
    const data = {
        reason : "",
        address : ""
    };
    const validation = await schema.isValid(data);
    expect(validation).toBe(false);
});