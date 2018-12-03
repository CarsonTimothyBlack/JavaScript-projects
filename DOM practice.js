const myHeading = document.getElementById('myHeading');
const myColorInput = document.getElementById('myColorInput');
const myColorButton = document.getElementById('myColorButton');

const myList = document.getElementById('myList');
const myListHide = document.getElementById('myListHide');

const myListAdd = document.getElementById('myListAdd');
const myListAddButton = document.getElementById('myListAddButton');

myColorButton.addEventListener('click', () => {
   if (myHeading.style.color == myColorInput.value) {
       myHeading.style.color = 'black';
       myColorButton.textContent = 'Try a new color';
}  else {
       myHeading.style.color = myColorInput.value;
       myColorButton.textContent = 'Default to black';
}                        
});


myListHide.addEventListener('click', () => {
  if (myList.style.display == 'none') {
   myListHide.textContent = 'Hide';
   myList.style.display = 'block';
} else {
   myListHide.textContent = 'Show';
   myList.style.display = 'none';
}
});

myListAddButton.addEventListener('click', () => {
  var newListItem = document.createElement('li');
  var newItemText = document.createTextNode(myListAdd.value);
  newListItem.appendChild(newItemText);
  var myListSpot = document.getElementById('parentList');
  myListSpot.appendChild(newListItem);
  
});
