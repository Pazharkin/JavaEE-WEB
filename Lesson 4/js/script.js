// let myName = 'Azhar';
// console.log(myName);
// let age = 20;
// console.log(age);
// let a = parseInt(prompt('insert number a'));
// let b = parseInt(prompt('insert number b'));
// let sum = a+b;
// alert('sum is ' + sum);
// if (a === b){
//     alert('a is equal to b')
// } else {
//     alert(a);
// }

function task1() {
    let x = parseInt(prompt());
    let y = x ** 2 + 2 * x - 1;
    alert('The result is ' + y);
}

function task2() {
    let a = parseInt(prompt('insert a'));
    let b = parseInt(prompt('insert b'));
    if (a % b === 0) {
        alert('Divisible')
    } else {
        alert('Not Divisible');
    }

}

function task3() {
    let myName = prompt('insert name:');
    let surname = prompt('insert surname');
    let city = prompt('insert city name');
    let age = prompt('insert age');
    alert('Name: ' + myName + "\n" + 'Surname: ' + surname + "\n" + "City: " + city + "\n" + "Age: " + age);
}

function task4() {
    let a = parseInt(prompt('insert a'));
    let b = parseInt(prompt());
    let c = parseInt(prompt());
    let sum = a + b + c;
    let mult = a * b * c;
    let substr = a - b - c;
    alert("a + b + c = " + sum + "\n" + "a * b * c = " + mult + "\n" + "a - b - c = " + substr);
}

function task5() {
    let n = parseInt(prompt('insert n - школьников'));
    let k = parseInt(prompt('insert k - яблок'));
    alert(parseInt(k / n));
}

function task6() {
    let a = parseInt(prompt());
    let b = parseInt(prompt());
    alert(parseInt(Math.sqrt(a ** 2 + b ** 2)));
}

function task7() {
    let speed = parseInt(prompt());
    let distance = parseInt(prompt());
    let time = distance / speed;
    if (time > 2.25) {
        alert("No, you can not reach");
    } else {
        alert("Yes, you can reach");
    }
}

function task8() {
    let cost = 120;
    let n = parseInt(prompt("Enter how many Whiskas you want to buy?"));
    let amount = cost * n;
    if (amount > 4000) {
        amount *= 0.9;
    }
    alert(amount);
}

function task9() {
    let kzAmount = parseInt(prompt("INSERT YOUR AMOUNT IN KZT:"));
    let choice = parseInt(prompt("1 - CONVERT TO USD" + "\n" + "2 - CONVERT TO EUR" + "\n" + "3 - CONVERT TO GBP"));
    let finalAmount = 0;
    switch (choice) {
        case 1:
            finalAmount = kzAmount / 380;
            alert(kzAmount + " KZT = " + finalAmount + " USD");
            break;
        case 2:
            finalAmount = kzAmount / 430;
            alert(kzAmount + " KZT = " + finalAmount + " EUR");
            break;
        case 3:
            finalAmount = kzAmount / 480;
            alert(kzAmount + " KZT = " + finalAmount + " GBP");
            break;
        default: break;
    }
}

function task10() {
    let login = "user";
    let password = "qwerty";
    let uLogin = prompt("Enter your login:");
    let uPass = prompt("Enter your password:");
    if (login === uLogin && password === uPass) {
        alert("Authentication completed");
    } else {
        alert("Invalid login or password");
    }
}

function task11() {
    let year = parseInt(prompt("Insert year:"));
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        alert("YES");
    } else alert("NO");
}

function task12() {
    let grade = parseInt(prompt("Enter your score:"));
    if (grade >= 90)
        alert("A");
    else if (grade >= 75 && grade < 90)
        alert("B");
    else if (grade >= 60 && grade < 75)
        alert("C");
    else if (grade >= 50 && grade < 60)
        alert("D");
    else alert("F");
}

function task13() {
    let choice = parseInt(prompt("Choose your branch:" + "\n" + "1 - Science, 2 - Humanitarian subjects, 3 - Art, 4 - Sport:"));
    let subChoice = 0;
    switch (choice) {
        case 1:
            subChoice = parseInt(prompt("1 - Math, 2 - Physics:"));
            if (subChoice === 1) {
                alert("You are Financier");
            } else if (subChoice === 2) {
                alert("You are Engineer");
            }
            break;
        case 2:
            subChoice = parseInt(prompt("1 - History, 2 - Foreign Languages:"));
            if (subChoice === 1) {
                alert("You are Historic or Diplomat");
            } else if (subChoice === 2) {
                alert("You are Translator");
            }
            break;
        case 3:
            subChoice = parseInt(prompt("1 - Drawing, 2 -Singing:"));
            if (subChoice === 1) {
                alert("You are Painter or Architect");
            } else if (subChoice === 2) {
                alert("You are Singer or Tamada");
            }
            break;
        case 4:
            subChoice = parseInt(prompt("1 - Team, 2 - Individual:"));
            if (subChoice === 1) {
                alert("You are footballer or Basketball player");
            } else if (subChoice === 2) {
                alert("You are boxer or tennis player");
            }
            break;
    }
}

function task14(){
    let a = parseInt(prompt());
    let b = parseInt(prompt());
    let c = parseInt(prompt());
    if (a+b>c && a+c>b && c+b>a){
        alert("YES")
    } else alert("NO");
}

function task15(){
    let a = parseInt(prompt("Координаты ладьи"));
    let b = parseInt(prompt("Координаты ладьи"));
    let x = parseInt(prompt("Координаты фигуры"));
    let y = parseInt(prompt("Координаты фигуры"));
    if (a <= 8 && a >= 1 && b <= 8 && b >= 1 && x <= 8 && x >= 1 && y <= 8 && y >= 1){
        if (a + 1 === x || b + 1 === y){
            alert("YES");
        } else alert("NO");
    } else alert("Координаты должны быть в диапазоне 1-8");
}

function task16(){
    let amount = parseInt(prompt("Insert amount in KZT:"));
    let cent = 0;
    if (amount % 380 === 0){
        alert("ONLY " + amount/380 +" USD");
    } else {
        cent = Math.round((amount/380 - parseInt(amount/380))*100);
        alert(parseInt(amount/380) + " USD and " + cent + " cents");
    }
}

function task17(){
    let time = parseInt(prompt("Insert time in minutes:"));
    let hours = parseInt(time/60);
    let minutes = time%60;
    if (time%60 !== 0)
    alert(hours + " HOURS and " + minutes + " MINUTES")
    else
    alert("ONLY " + hours + " HOUR(S)")
}

function task18(){
    let n = parseInt(prompt());
    let result = 1;
    for (let i = 1; i <= n; i++){
        result*=i;
    }
    alert(result);
}

function task19(){
    var n = parseFloat(prompt());
    let result = 1;
    while (n !== 0){
        result *= n;
        n = parseFloat(prompt());
    } 
        alert(result.toFixed(3));
}

function task20(){
    let n = parseInt(prompt());
    let result = 0;
    while (n !== 0){
        if (n%2 === 1 || n%2 === -1){
        result += n;
        }
        n = parseInt(prompt());
    } 
        alert(result);
}

function task21(){
    let a = parseInt(prompt("Insert a"));
    let b = parseInt(prompt("Insert b"));
    let result = 1;
    for (let i = 1; i <= b; i++){
        result = result*a;
    }
    alert(result);
}

function task22(){
    let n = parseInt(prompt("Insert n"));
    let result = 0.0;
    for (let i = 1; i <= n; i++){
        result += 1/i;
    }
    alert(result.toFixed(5));
}

function task23(){
    let n = parseInt(prompt("Insert n"));
    let result = 1;
    for (let i = 1; i <= n; i++){
        result *= i;
    }
    alert(result);
}

function task24(){
    var n = parseFloat(prompt());
    let result = 1;
    while (n !== 0){
        result *= n;
        n = parseFloat(prompt());
    } 
        alert(result.toFixed(3));
}

function task25(){
    let n = parseInt(prompt());
    let result = 0;
    while (n !== 0){
        if (n%2 === 1 || n%2 === -1){
        result += n;
        }
        n = parseInt(prompt());
    } 
        alert(result);
}

function task26(){
    let a = parseInt(prompt("Insert a"));
    let b = parseInt(prompt("Insert b"));
    let result = 1;
    for (let i = 1; i <= b; i++){
        result = result*a;
    }
    alert(result);
}

function task27(){
    let n = parseInt(prompt("Insert n"));
    let result = 0.0;
    for (let i = 1; i <= n; i++){
        result += 1/i;
    }
    alert(result.toFixed(5));
}