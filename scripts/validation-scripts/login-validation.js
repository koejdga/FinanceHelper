export const emailChecker = (email) => {
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
        return {isValid: false, message: "Email is not valid"};
    return {isValid: true, message: ""};
}
export const passwordChecker = (password) => {
    if(password.length < 8) return {isValid: false, message: "Password must contain at least 8 characters"};
    return {isValid: true, message: ""};
}