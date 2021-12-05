let numberArray = [2,3,1,6,5,4];
console.log(numberArray);
let numberArray2 = Array(45,67,27,98);
console.log(numberArray2);
console.log();
let fruits = ['Apple', 'Orange', 'Melon'];
console.log(fruits);
let userA = [1, 'Azhar', 'Almaty', 26];
console.log(userA);

//методы массивов
// numberArray.push(prompt('Insert element')); // add element
// console.log(numberArray);                   

// numberArray.pop();                          // delete element

// numberArray.shift();                        // delete 1st element
// numberArray.unshift();                      // add to 1st position
numberArray = numberArray.sort();              // sortirovka
console.log(numberArray);

numberArray2 = numberArray2.sort();
console.log(numberArray2);

function compare (a, b){
    return a - b;
}

//numberArray2 = numberArray2(sort(compare));


fruits = fruits.sort();
console.log(fruits);

let person = {  //объект
    name: 'Sasuke',
    surname: 'Uchiha',
    bYear: 1995,
    job: 'Java developer',
    isMarried: false,
    getAge: function(){
        return age(this.bYear);
    }
}
function age(myyear){
    let year = 2021;
    return year - myyear;
}

console.log(person.job);
console.log('Age? ' + person.getAge());

let users = [  //массив объектов
    {'name' : 'Naruto', 'surname' : 'Uzumaki', 'email' : 'jinjuuriki@konoha.com', 'pass' : 'ilovesasuke'},
    {'name' : 'Sasuke', 'surname' : 'Uchiha', 'email' : 'sharingan@konoha.com', 'pass' : 'ihateitachi'},
    {'name' : 'Itachi', 'surname' : 'Uchiha', 'email' : 'ilovesasuke@konoha.com', 'pass' : 'mangekyo'}
]

console.log(users);

// function searchUser(){
//     let email2 = prompt();
//     let user;
//     for (let i = 0; i < users.length; i++){
//         if (users[i].email === email2){
//             user = users[i];
//             console.log(users[i]);
//             break;
//         }
//     }
//     if (user === undefined){
//         console.log('User not found');
//     }
// }

//searchUser();

while (true){
    let newElement = parseInt(prompt());
    if (newElement === 0)
    break;
    numberArray.push(newElement);
}
console.log(numberArray);