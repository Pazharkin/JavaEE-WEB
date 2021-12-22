let user_id = localStorage.getItem('currentUserID');
let usersList = JSON.parse(localStorage.getItem('users'));
let current_name = document.getElementById('name');
let current_email = document.getElementById('email');
current_name.innerText = usersList[user_id-1].name;
current_email.innerText = usersList[user_id-1].email;

function logout(){
    window.localStorage.removeItem('currentUserID');
    window.location.replace("index.html");
}