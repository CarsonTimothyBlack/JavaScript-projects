const myHeading = document.getElementById('myHeading');
const myColorInput = document.getElementById('myColorInput');
const myColorButton = document.getElementById('myColorButton');

const myList = document.getElementById('myList');
const myListHide = document.getElementById('myListHide');

const myListAdd = document.getElementById('myListAdd');
const myListAddButton = document.getElementById('myListAddButton');

const ulList = document.getElementById('parentList');
const lis = ulList.children;

const firstListItem = ulList.firstElementChild;
const lastListItem = ulList.lastElementChild;


function attachListItemButtons (li) {
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'Up';
  li.appendChild(up);
  
  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'Down';
  li.appendChild(down);
  
  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Remove';
  li.appendChild(remove);
  
}

for (let i = 0; i < lis.length; i++) {
  attachListItemButtons(lis[i]);
}

ulList.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if (event.target.className == 'up') {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
      ul.insertBefore(li, prevLi);
      }
    }
    if (event.target.className == 'down') {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
      ul.insertBefore(nextLi, li);
      }
    }
  }
});


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
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = myListAdd.value;
    attachListItemButtons(li);
    ul.appendChild(li);
    myListAdd.value = '';
  
});
