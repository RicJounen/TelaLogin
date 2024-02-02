function logar() {
    let usuario = document.getElementById('username').value;
    let senha = document.getElementById('senha').value;
    
    if (usuario === 'jounen' && senha === '123') {
        alert ('Login foi bem-sucedido!');

    }else {
        alert ('Ouve um erro :(');
    }
}