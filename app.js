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

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        if(email == "admin@admin.com" && password == "admin"){
            alert('Sucesso!');
            location.href = "index2.html"
        }else{
            alert('E-mail ou senha incorretos.');
        }

    }
