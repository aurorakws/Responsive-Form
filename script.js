function logar(){
    var login = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if(login == 'admin' && senha == 'admin'){
        alert('Sucesso!');
        location.href = "./loading/loading.html";
    }else{
        alert('Usu\u00e1rio ou senha incorretos.');
    }
}