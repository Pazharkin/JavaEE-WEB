//task 1
let username = document.getElementById('name');
let surname = document.getElementById('surname');
let country = document.getElementById('country');
let phone = document.getElementById('tel');
let user = { 'name': username, 'surname': surname, 'country': country, 'phone': phone };

function save() {
    user = { 'name': username.value, 'surname': surname.value, 'country': country.value, 'phone': phone.value };
    localStorage.setItem('user', JSON.stringify(user));
}

function load() {
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    username.value = user.name;
    surname.value = user.surname;
    country.value = user.country;
    phone.value = user.phone;
}

// TASK 2
//create array of products
let names = document.querySelectorAll('.name');
let namee = [];
names.forEach(Element => {
    namee.push(Element.innerText);
});
let prices = document.querySelectorAll('.price');
let price = [];
prices.forEach(Element => {
    price.push(Element.innerText);
});
let products = [];
for (let i = 0; i < namee.length; i++) {
    products.push({ 'id': i + 1, 'name': namee[i], 'price': price[i] });
}
let basket = [];

function add(id) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            basket.push(products[i]);
            localStorage.setItem('basket', JSON.stringify(basket));
        }
    }
}

