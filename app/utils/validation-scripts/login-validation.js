export const emailChecker = (email) => {
    let message = "";
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
        message = "Email is incorrect, please check it for mistakes";
    if(email.length < 1) message = "Please enter the email!";
    return {isValid: message==="", message: message};
}
export const passwordChecker = (password) => {
    let message = "";
    if(password.length < 8) message = "Password must contain at least 8 characters";
    if(password.length > 128) message = "Too long password";
    return {isValid: message==="", message: message};
}

export const nameChecker = (name) => {
    let message = "";
    if(name.length < 1) message = "Enter your name first!";
    return {isValid: message==="", message: message};
}