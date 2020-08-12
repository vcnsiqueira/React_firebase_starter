const validatePasswordForget = (email) => {
    let errors = {};
    
    if(!email) {
        errors.email = 'É necessário inserir um endereço de e-mail';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'O endereço de e-mail é inválido';
    }
    
    return errors;
}

export default validatePasswordForget;