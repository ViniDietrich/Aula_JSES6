// Erro normal 

class CustomError extends Error{
    constructor({message, data}) {
        super(message);
        this.data = data;
    }
}

try{
    const name = 'Vinicius';

    const myError = new CustomError({
        message: 'Mensagem customizada',
        data: { 
            type: 'Erro no Server'
        }
    });
    
    throw myError;
} catch (err) {
        console.log(err);
} finally {
    console.log('Keep going...')
}

