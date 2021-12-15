let container = document.getElementById('container');
let users = JSON.parse(localStorage.getItem('users'));
console.log(users);
let currentUser = [];
for(let i = 0; i < users.length; i++) {
    if (users[i].id === localStorage.getItem('currentUserID')){
    let profile = document.createElement('div');
    profile.setAttribute('class', 'profile');
    profile.innerHTML = 
    '<h2>WELCOME, ' + users[i].name + '</h2>' +
    '<p>EMAIL:</p><strong>' + users[i].email + '</strong>' +
    '<p>FULL NAME</p><strong>' + users[i].name + '</strong>' +
    '<p>COUNTRY</p><strong>' + users[i].country + '</strong>' +
    '<p>BIRTHDATE</p><strong>' + users[i].bday + '</strong>';
    container.append(profile);
    }
}
