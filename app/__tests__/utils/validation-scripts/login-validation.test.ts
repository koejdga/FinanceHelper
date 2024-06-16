import {emailChecker, passwordChecker, nameChecker} from "@/app/utils/validation-scripts/login-validation";

test('Email without domain must be invalid', () => {
    let email = 'someEmail';
    let isEmailValid = emailChecker(email).isValid;
    expect(isEmailValid).toBeFalsy();
})

test('Email with only domain must be invalid', () => {
    let email = '@gmail.com';
    let isEmailValid = emailChecker(email).isValid;
    expect(isEmailValid).toBeFalsy();
})

test('Email with domain without dot must be invalid', () => {
    let email = 'someEmail@gmail';
    let isEmailValid = emailChecker(email).isValid;
    expect(isEmailValid).toBeFalsy();
})

test('Normal email must be valid', () => {
    let email = 'someEmail@gmail.com';
    let isEmailValid = emailChecker(email).isValid;
    expect(isEmailValid).toBeTruthy();
})

test('Password with less than 8 characters must be invalid', () => {
    let password = 'four';
    let isPasswordValid = passwordChecker(password).isValid;
    expect(isPasswordValid).toBeFalsy();
})

test('Password with more than 128 characters must be invalid', () => {
    let password = '';
    for (let i = 0; i < 129; i++){
        password += 'a';
    }
    let isPasswordValid = passwordChecker(password).isValid;
    expect(isPasswordValid).toBeFalsy();
})

test('Password with length in range 8 - 128 characters must be valid', () => {
    let password = 'coolPassword';
    let isPasswordValid = passwordChecker(password).isValid;

    expect(isPasswordValid).toBeTruthy();
})

test('Empty name must be invalid', () => {
    let name = '';
    let isNameValid = nameChecker(name).isValid;

    expect(isNameValid).toBeFalsy();
})

test('Not empty name must be valid', () => {
    let name = 'John';
    let isNameValid = nameChecker(name).isValid;

    expect(isNameValid).toBeTruthy();
})