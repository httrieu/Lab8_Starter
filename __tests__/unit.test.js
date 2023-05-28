// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('check valid phone numbers 1', () => {
    // TODO
    expect(functions.isPhoneNumber("(888)-555-3434")).toBe(true)
});

test('check valid phone numbers 2', () => {
    // TODO
    expect(functions.isPhoneNumber("(999)-232-3214")).toBe(true)
});

test('check invalid phone numbers 1', () => {
    // TODO
    expect(functions.isPhoneNumber("8885553434")).toBe(false)
});

test('check invalid phone numbers 2', () => {
    // TODO
    expect(functions.isPhoneNumber("123asd")).toBe(false)
});

test('check invalid phone numbers 3', () => {
    // TODO
    expect(functions.isPhoneNumber("ba;sjf;kja;")).toBe(false)
})

test('check valid email 1', () => {
    // TODO
    expect(functions.isEmail("httriew@ucsd.edu")).toBe(true)
});

test('check valid email 2', () => {
    // TODO
    expect(functions.isEmail("htt@gmail.com")).toBe(true)
});

test('check invalid email 1', () => {
    // TODO
    expect(functions.isEmail("httriew@ucsd.wrong")).toBe(false)
});

test('check invalid email 2', () => {
    // TODO
    expect(functions.isEmail("httriewucsd.wrong")).toBe(false)
});

test('check invalid email 3', () =>{
    expect(functions.isEmail("httriew.wrong")).toBe(false)
});

test('check if strong password 1', () => {
    // TODO
    expect(functions.isStrongPassword("strongPassword")).toBe(true)
});

test('check if strong password 2', () => {
    // TODO
    expect(functions.isStrongPassword("strong23word")).toBe(true)
});

test('check if weak password', () => {
    // TODO
    expect(functions.isStrongPassword("psd")).toBe(false)
});

test('check if invalid password', () => {
    // TODO
    expect(functions.isStrongPassword("1adsdpsd")).toBe(false)
});

test('check if valid date 1', () => {
    // TODO
    expect(functions.isDate("02/24/2004")).toBe(true)
});

test('check if valid date 2', () => {
    // TODO
    expect(functions.isDate("1/3/2998")).toBe(true)
});

test('check if invalid date 1', () => {
    // TODO
    expect(functions.isDate("as/23/2333")).toBe(false)
});

test('check if invalid date 2', () => {
    // TODO
    expect(functions.isDate("234/21/3245")).toBe(false)
});

test('check if invalid date 3', () => {
    expect(functions.isDate("12/144/2000")).toBe(false)
});

test('check if valid hex code 1', () => {
    // TODO
    expect(functions.isHexColor("#CD5C5C")).toBe(true)
});

test('check if valid hex code 2', () => {
    // TODO
    expect(functions.isHexColor("#023")).toBe(true)
});

test('check if invalid hex code 1', () => {
    // TODO
    expect(functions.isHexColor("02")).toBe(false)
});

test('check if invalid hex code 2', () => {
    // TODO
    expect(functions.isHexColor("#0232133")).toBe(false)
});

test('check if invalid hex code 3', () => {
    // TODO
    expect(functions.isHexColor("#0")).toBe(false)
})