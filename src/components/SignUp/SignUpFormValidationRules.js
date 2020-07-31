const validate = values => {
    let errors = {};
    
    if(!values.email) {
        errors.email = 'É necessário inserir um endereço de e-mail';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'O endereço de e-mail é inválido';
    }

    if(!values.username) {
        errors.username = 'É necessário inserir um nome'
    }
    
    if(!values.passwordOne) {
        errors.passwordOne = 'É necessário inserir uma senha'
    } else if(values.passwordOne.length < 8) {
        errors.passwordOne = 'A senha deve ter, no mínimo, 8 caracteres'
    }

    if(!values.passwordTwo) {
        errors.passwordTwo = 'É necessário confirmar a sua senha'
    } else if(values.passwordTwo !== values.passwordOne) {
        errors.passwordTwo = 'Senha diferente da anterior'
    }

    return errors;
}

export default validate;