function task1() {
    let n = parseInt(prompt());
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(parseInt(prompt()));
    }
    console.log("Массив в обратном порядке:")
    for (let i = n; i >= 0; i--) {
        console.log(array[i]);
    }
}

function task2() {
    let n = parseInt(prompt());
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(parseInt(prompt()));
    }
    let max = array[0];
    for (let i = 0; i < n; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    for (let i = 0; i < n; i++) {
        console.log(array[i]);
    }
    console.log("Max element is " + max);
}

function task3() {
    let n = parseInt(prompt());
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(parseInt(prompt()));
    }
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += array[i];
    }
    alert(sum + "\n" + sum / n);
}

function task4() {
    let n = parseInt(prompt());
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(parseInt(prompt()));
    }
    let temp = [n];
    for (let i = 0; i < n; i++) {
        temp[i] = parseInt(array[i]) ** 2;
    }
    for (let i = 0; i < n; i++) {
        console.log(temp[i]);
    }
}

function task5() {
    let users = [
        { "login": "ilyas", "password": "qwerty" },
        { "login": "eldar", "password": "qqqqq" },
        { "login": "assylkhan", "password": "qweqwe" },
        { "login": "anel", "password": "asdasd" },
        { "login": "alibek", "password": "aaaaaa" }
    ];
    let uLogin = prompt();
    let uPass = prompt();
    let found = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].login === uLogin && users[i].password === uPass) {
            found = true;
            alert("Welcome, you are authenticated");
        }
    }
    if (found === false) {
        alert("User not found");
    }

}

function task6() {
    let library = [{ 'name': 'A Song of Ice and Fire: A Dance with Dragons', 'author': 'George Martin', 'ISBN': '12345', 'cost': '50$' },
    { 'name': 'The Hobbit, or There and Back Again', 'author': 'Tolkien', 'ISBN': '12222', 'cost': '70$' },
    { 'name': 'The Lord of the Rings', 'author': 'Tolkien', 'ISBN': '15555', 'cost': '70$' },
    { 'name': 'A Song of Ice and Fire: A Game of Thrones', 'author': 'George Martin', 'ISBN': '67890', 'cost': '50$' },
    { 'name': 'A Song of Ice and Fire: A Clash of Kings', 'author': 'George Martin', 'ISBN': '98765', 'cost': '50$' }]

    console.log(library);
    let searchBook = [];
    let counter = 0;
    let author = prompt('Insert author name');
    for (let i = 0; i < library.length; i++) {
        if (library[i].author === author) {
            searchBook[counter] = library[i];
            console.log(library[i]);
            counter++;
        }
    }
    if (searchBook === undefined) {
        console.log('Book not found');
    }
}

function task7() {
    let n = parseInt(prompt('Insert array size'));
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(parseInt(prompt()));
    }
    let m = parseInt(prompt('Insert search value'));
    let x;
    for (let i = 0; i < n; i++) {
        if (array[i] === m) {
            console.log('Yes   ' + i);
            x = i;
        }
    }
    if (x === undefined) {
        console.log('No');
    }
}

function task8() {
    let array = [];
    let a;
    while (true) {
        array.push(parseInt(prompt('Insert element - 0 = STOP')));
        a = array[array.length - 1];
        if (a === 0) {
            array.pop();
            break;
        }
    }
    console.log(array);
    let geom = 1;
    for (let i = 0; i < array.length; i++) {
        geom *= array[i];
    }
    console.log(Math.pow(geom, 1 / array.length).toFixed(3));
}

function task9() {
    let array = [];
    let a;
    while (true) {
        array.push(parseInt(prompt('Insert element - 0 = STOP')));
        a = array[array.length - 1];
        if (a === 0) {
            array.pop();
            break;
        }
    }
    console.log(array);
    let pos = [];
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            pos[count] = array[i];
            count++;
        }
    }
    console.log('Only pos values: ' + pos);
}

function task10() {
    let n = parseInt(prompt('Insert array size'));
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(parseInt(prompt()));
    }
    let result = 1;
    for (let i = 0; i < n; i++) {
        if (array[i] !== 0) {
            result *= array[i];
        }
    }
    console.log(result);
}

function task11() {
    let cars = [{ 'name': 'Lamborgini', 'year': '2020', 'engine': '2.4', 'cost': '5000000$' },
    { 'name': 'Ferrari', 'year': '2018', 'engine': '3.0', 'cost': '4500000$' },
    { 'name': 'Buggatti', 'year': '2016', 'engine': '4.0', 'cost': '6700000$' },
    { 'name': 'McLauren', 'year': '2019', 'engine': '4.3', 'cost': '3980000$' }]

    let choice = parseInt(prompt('INSERT [1] TO SEARCH BY NAME' + "\n" +
        'INSERT [2] TO SEARCH BY YEAR' + "\n" +
        'INSERT [3] TO SEARCH BY ENGINE VOLUME' + "\n" +
        'INSERT [4] TO SEARCH BY PRICE' + "\n" +
        'INSERT [5] TO EXIT'));
    let search = [];
    let counter = 0;
    if (choice === 1) {
        let name = prompt('INSERT NAME OF CAR:');
        for (let i = 0; i < cars.length; i++) {
            if (name === cars[i].name) {
                search[counter] = cars[i];
                counter++;
            }
        }
        for (let i = 0; i < search.length; i++) {
            console.log(search[i]);
        }
    } else if (choice === 2) {
        let yearS = prompt('INSERT YEAR START FROM:');
        let yearE = prompt('INSERT YEAR ENDS FROM: ');
        for (let i = 0; i < cars.length; i++) {
            if (yearS <= cars[i].year && yearE >= cars[i].year) {
                search[counter] = cars[i];
                counter++;
            }
        }
        for (let i = 0; i < search.length; i++) {
            console.log(search[i]);
        }
    } else if (choice === 3) {
        let engS = prompt('INSERT ENGINE VOLUME START FROM: ');
        let engE = prompt('INSERT ENGINE VOLUME ENDS FROM: ');
        for (let i = 0; i < cars.length; i++) {
            if (engS <= cars[i].engine && engE >= cars[i].engine) {
                search[counter] = cars[i];
                counter++;
            }
        }
        for (let i = 0; i < search.length; i++) {
            console.log(search[i]);
        }
    }
    else if (choice === 4) {
        let costS = prompt('INSERT PRICE START FROM: ');
        let costE = prompt('INSERT PRICE ENDS FROM: ');
        for (let i = 0; i < cars.length; i++) {
            if (costS <= parseInt(cars[i].cost.replace('$', '')) && costE >= parseInt(cars[i].cost.replace('$', ''))) {
                search[counter] = cars[i];
                counter++;
            }
        }
        for (let i = 0; i < search.length; i++) {
            console.log(search[i]);
        }
    } else if (choice === 0) {
    }
}

function task12() {
    let students = [];
    while(true){
    let choice = parseInt(prompt('PRESS 1 TO ADD STUDENT' + "\n" +
        'PRESS 2 TO LIST STUDENT' + "\n" +
        'PRESS 0 TO EXIT' + "\n"));
    if (choice === 1) {
        var name = prompt("Insert name: ");
        var surname = prompt("Insert surname: ");
        var gpa = prompt("Insert GPA: ");
        students[students.length] = { "name": name, "surname": surname, "gpa": gpa };
    } else if (choice == 2) {
        var text = "";
        for (var i = 0; i < students.length; i++) {
            text += students[i]["name"] + " - " + students[i]["surname"] + " - " + students[i]["gpa"] + "\n";
        }
        alert(text);
    } else if (choice == 0) {
        break;
    }
}
}
