const validateSignIn = (email, password) => {
    let errors = {};
    
    if(!email) {
        errors.email = 'É necessário inserir um endereço de e-mail';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'O endereço de e-mail é inválido';
    }
    
    if(!password) {
        errors.password = 'É necessário inserir uma senha'
    } else if(password.length < 8) {
        errors.password = 'A senha deve ter, no mínimo, 8 caracteres'
    }

    return errors;
}

export default validateSignIn;