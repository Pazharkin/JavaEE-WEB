let table = document.getElementById('basket');
let basket = JSON.parse(localStorage.getItem('basket'));
console.log(basket);
for(let i = 0; i < basket.length; i++) {
    let item = document.createElement('tr');
    item.setAttribute('class', 'item');
    item.innerHTML = 
    '<td>' + basket[i].name + '</td>' +
    '<td>' + basket[i].price + '</td>' +
    '<td><a id="' + basket[i].id + ' "onclick="deleteItem(' + i + ')">REMOVE</a></td>';
    table.append(item);
}

function deleteItem(itemId) {
    basket.splice(itemId, 1);
    window.localStorage.setItem('basket', JSON.stringify(basket));
    document.location.reload();
}