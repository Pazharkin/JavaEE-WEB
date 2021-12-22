



var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

//myModal.addEventListener('shown.bs.modal', function () {
//  myInput.focus()
//})
  let users = JSON.parse(localStorage.getItem('users'));
  
function reg(){

  let email = document.getElementById('newEmail');
  let pass = document.getElementById('newPass');
  let name = document.getElementById('newName');
  let bday = document.getElementById('bd-day');
  let bmonth = document.getElementById('bd-month');
  let byear = document.getElementById('bd-year');
  let content = document.getElementById('container');

  let user = {'id': users.length+1, 'email': email.value, 'pass':pass.value, 'name':name.value, 'bday':bday.value, 'bmonth': bmonth, 'byear': byear};
  let emailExist = false;

  for (let i=0; i < users.length; i++){
      if (users[i].email === user.email){
          emailExist = true;
      }
  }
  if (emailExist){
    console.log(emailExist);
      let alert = document.createElement('div');
      alert.setAttribute('class', 'alert');
      alert.innerText = 'Sorry, this email already exists.';
      content.append(alert);
  } else {
      users.push(user);
      window.location.replace("main.html");
      localStorage.setItem('currentUserID', user.id);
  }
  localStorage.setItem('users', JSON.stringify(users));
}

function auth(){
  let email = document.getElementById('email');
  let pass = document.getElementById('pass');
  let usersList = JSON.parse(localStorage.getItem('users'));
  let content = document.getElementById('content2');
  let success = false;
  for (let i=0;i<usersList.length; i++){
      if (usersList[i].email === email.value && usersList[i].pass === pass.value){
          success = true;
          window.location.replace("main.html");
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