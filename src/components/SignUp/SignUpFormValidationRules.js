const validate = (username, email, passwordOne, passwordTwo) => {
    let errors = {};
    
    if(!email) {
        errors.email = 'É necessário inserir um endereço de e-mail';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'O endereço de e-mail é inválido';
    }

    if(!username) {
        errors.username = 'É necessário inserir um nome'
    }
    
    if(!passwordOne) {
        errors.passwordOne = 'É necessário inserir uma senha'
    } else if(passwordOne.length < 8) {
        errors.passwordOne = 'A senha deve ter, no mínimo, 8 caracteres'
    }

    if(!passwordTwo) {
        errors.passwordTwo = 'É necessário confirmar a sua senha'
    } else if(passwordTwo !== passwordOne) {
        errors.passwordTwo = 'Senha diferente da anterior'
    }

    return errors;
}

export default validate;