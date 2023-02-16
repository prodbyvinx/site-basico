'use scrict'

const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);
});
    function logar(){

        var Login = document.getElementById('Login').value;
        var Senha = document.getElementById('Senha').value;

        if(Login == "admin" && Senha == "admin"){
            alert('Sucesso!');
            location.href = "index2.html";
        }else{
            alert('Usuário ou senha incorretos.')
        }

    }
