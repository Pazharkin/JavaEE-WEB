function auth(){        // TASK 1
    let users = [
        {'login':'ilyas', 'password' : 'qwerty'},
        {'login':'azhar', 'password' : '123'},
        {'login':'islam', 'password' : 'zxc'},
        {'login':'aisulu', 'password' : 'qwerty123'}
    ]
    let login = document.getElementById('login');
    let password = document.getElementById('password');

    let signInResult = false;
    for (let i = 0; i < users.length; i++){
        if (users[i].login === login.value && users[i].password === password.value){
            signInResult = true;
        }
    }
    if (signInResult === false){
        login.style.border = '2px solid red';
        password.style.border = '2px solid red';
    } else {
        let form = document.querySelectorAll('.f');
        form.forEach(element => {
            element.style.display = 'none';
        });
        let result = document.getElementById('result');
        result.innerText = 'You are Authenticated';
    }

}

//TASK 2

function plus(){
    let value = document.getElementById('value');
    var number = parseInt(value.innerText);
    number++;
    value.innerText = number;
}
function minus(){
    let value = document.getElementById('value');
    var number = parseInt(value.innerText);
    number--;
    value.innerText = number;
}

//TASK 3
function task3(){
    let users = [
        {'name':'AZHAR YEBEKENOVA', 'card1' : '1234', 'card2' : '5678', 'card3' : '9101', 'card4' : '1121', 'cvv' : '555'},
        {'name':'SASUKE UCHIHA', 'card1' : '1111', 'card2' : '2222', 'card3' : '3333', 'card4' : '4444', 'cvv' : '777'},
    ]
    let card1 = document.getElementById('1').value;
    let card2 = document.getElementById('2').value;
    let card3 = document.getElementById('3').value;
    let card4 = document.getElementById('4').value;
    let cvv = document.getElementById('cvv').value;
    let final = false;
    for (let i=0; i < users.length; i++){
        if (users[i].card1 === card1 && users[i].card2 === card2 && users[i].card3 === card3 && users[i].card4 === card4 && users[i].cvv === cvv)
        {
            final = true;
        }
    }
    if(final){
        let result = document.getElementById('result');
        result.textContent = 'Transaction Completed';
    } else {
        let result = document.getElementById('result');
            result.textContent = 'Invalid Data';
    }
}

//TASK 4
    let gallery = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg"];
    n = 0;
    function next(){
        let image = document.getElementById('gallery');
        n++;
        image.src = gallery[n];
        if (n > gallery.length - 1){
            n = 0;
        }
    }
    function back(){
        let image = document.getElementById('gallery');
        if (n === 0){
            n = gallery.length;
        }
        n--;
        image.src = gallery[n];
    }

// TASK 5
function task5(id){
    let image = document.getElementById(id);
    let main = document.getElementById('main');
    main.src = image.src;
}

// TASK 6
function task6(){
    let emailList = ["azhar@gmail.com", "test@gmail.com", "1@gmail.com"];
    let email = document.getElementById('email');
    let pass = document.getElementById('password');
    let pass2 = document.getElementById('password2');

    let result = true;
    
    for (let i=0; i < emailList.length; i++){
        if (email.value === emailList[i]){
            result = false;
            let err = document.getElementById('emailError');
            err.style.color = 'red';
            err.innerText = 'Current email is already in use';
        }
    }
    if (pass.value.length < 6){
            result = false;
            let err = document.getElementById('passError');
            err.style.color = 'red';
            err.innerText = 'Password length must be more than 6 symbols';
    }
    if (pass.value !== pass2.value){
        result = false;
            let err = document.getElementById('pass2Error');
            err.style.color = 'red';
            err.innerText = 'Passwords are not the same';
    }
    if (result){
        let result = document.getElementById('result');
        result.innerText = 'You are succsessfully registered';
    }
}

// TASK 7
function task7(){
    let amount = parseInt(document.getElementById('amount').value);
    let currency = document.getElementById('currency').value;
    let tenge = document.getElementById('convertTenge');
    let dollar = document.getElementById('convertDollar');
    let euro = document.getElementById('convertEuro');

    switch(currency){
        case 'KZT': 
        tenge.value = '-';
        dollar.value = (amount/431).toFixed(3);
        euro.value = (amount/509).toFixed(3);
        break;
        case 'EUR': tenge.value = amount*509;
        dollar.value = (amount*1.18).toFixed(3);
        euro.value = '-';
        break;
        case 'USD': tenge.value = amount*431;
        dollar.value = ' - ';
        euro.value = (amount*0.85).toFixed(3);
        break;
        default: 
    }
        
}