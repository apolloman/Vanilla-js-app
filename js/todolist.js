'use strict';
const searchItem = document.getElementById('search');
searchItem.addEventListener('keyup', filterItems, false);

const listItem = document.getElementsByTagName('li');

function filterItems(e){

  let text = e.target.value.toLowerCase();

  Array.from(listItem).forEach(function(item){
    let itemName = item.firstChild.textContent;

    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = "none";
    }
  });
}


//create trash and append to each list item
function addTrashToAllItems() {
  const listItem = document.getElementsByTagName('li');
  const listLi = [...listItem];

  listLi.forEach((elem) =>{
     const trash = document.createElement('i');
     trash.classList.add("fa", "fa-trash-o", "close");
     elem.appendChild(trash);
  });
}

//Add Event to all trashes
function eventsDeleteButtons(){
  const trashBtn = document.getElementsByClassName('close');
  const allTrashes = [...trashBtn];

  //Loop over all trash elements and add click event to each after they are hidden
  allTrashes.forEach((trashes) => {
  trashes.addEventListener('click', function(){
    const liElem = this.parentElement;
    liElem.classList.add("hideSlow");

    setTimeout(function(){
        liElem.style.display = 'none';
    }, 1200);

  });
});

}


//Add class checked "line-through"
function classChecked(){
  const ul = document.querySelector('ul');
  ul.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
       event.target.classList.toggle('checked');
    }
}, false);

}

//Add new Element to List
function addNewElement() {

  const newLi = document.createElement('li');
  const inputValue = document.getElementById('inputVal').value;

  const text = document.createTextNode(inputValue);
  newLi.appendChild(text);

  if (inputValue === '') {
       const error = document.querySelector('.error');
       error.textContent = "Your task field is empty";
  } else {
       const error = document.querySelector('.error');
       error.textContent = "";

       document.getElementById('UL').appendChild(newLi);
    /*
    document.getElementById('UL').insertBefore(newLi, UL.children[0]);
    */
  }
  document.getElementById('inputVal').value = "";

  retrun: {
    addTrashToAllItems();
    eventsDeleteButtons();
  }

}

addTrashToAllItems();
eventsDeleteButtons();
classChecked();


const addButton = document.getElementById('addBtn');
addButton.addEventListener('click', addNewElement, false);




