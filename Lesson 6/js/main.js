function querySelectorCSS(){
    let selInput = document.querySelector('input');
    selInput.style.border = '2px solid red';
}

function querySelectorsCSS(){
    let elements = document.querySelectorAll('.selector');
    elements.forEach(element => {
        element.setAttribute('placeholder', 'qwerty');
    });
}

function getElemeById(){
    let element = document.getElementById('5');
    element.setAttribute('value', 'BITLAB');

    let text = document.getElementById('text');
    text.innerText = 'lorem ipsum';
}

function getElemName(){
    let elements = document.getElementsByName('in1');
    elements.forEach(element => {
        element.style.backgroundColor = 'red';
    });
}

function getElemTag(){
    let elements = document.getElementsByTagName('button');
    console.log(elements);
    elements.forEach(element => {
        element.style.backgroundColor = 'yellow';
        //element.style.fontSize = '14px';
        
    });
}
 function addNewElement(){
     let newElement = document.createElement('button');
     newElement.innerText = 'newButtons';
     let block = document.getElementByName('buttons');
     block.prepend(newElement);

 }

 function deleteContent(){
     let content = document.getElementById();
        
 }