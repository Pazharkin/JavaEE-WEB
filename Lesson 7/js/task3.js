let users = [
    {'id':'1', 'email':'azhar@gmail.com', 'pass':'123', 'name':'Azhar Yebekenova', 'country':'Kazakhstan', 'bday': '1995-01-25'},
    {'id':'2', 'email':'test@gmail.com', 'pass':'qwerty', 'name':'Jungkook Jung', 'country':'Korea', 'bday': '1997-11-10'}
];
function reg(){
    let email = document.getElementById('email');
    let pass = document.getElementById('pass');
    let name = document.getElementById('name');
    let country = document.getElementById('country');
    let bday = document.getElementById('bday');
    let content = document.getElementById('container');

    let user = {'id': users.length, 'email': email.value, 'pass':pass.value, 'name':name.value, 'country': country.value, 'bday':bday.value};
    let emailExist = false;
    for (let i=0; i < users.length; i++){
        if (users[i].email === user.email){
            emailExist = true;
        }
    }
    if (emailExist){
        let alert = document.createElement('div');
        alert.setAttribute('class', 'alert');
        alert.innerText = 'Sorry, this email already exists.';
        content.append(alert);
    } else {
        users.push(user);
        window.location.replace("authorization.html");
    }
    
    localStorage.setItem('users', JSON.stringify(users));
}

function auth(){
    let email = document.getElementById('email');
    let pass = document.getElementById('pass');
    let usersList = JSON.parse(localStorage.getItem('users'));
    let content = document.getElementById('container');
    let success = false;
    for (let i=0;i<usersList.length; i++){
        if (usersList[i].email === email.value && usersList[i].pass === pass.value){
            success = true;
            window.location.replace("profile.html");
            localStorage.setItem('currentUserID', usersList[i].id);
        }
    }
    if (success === false){
        let alert = document.createElement('div');
        alert.setAttribute('class', 'alert');
        alert.innerText = 'Sorry, the email or password is incorrect.';
        content.append(alert);
    }
}