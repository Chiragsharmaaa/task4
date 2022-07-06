// ans 1

var items = document.getElementsByClassName('list-group-item');
console.log(items)
console.log(items[1]);
items[1].textContent = 'Hello 2'
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow'

// ans 2
items[2].style.backgroundColor = 'green'

// items.style.backgroundColor = '#f4f4f4' // wont work as its a list.gives error

// using for loop for the same

//  ans 3
for (var i = 0; i<items.length;i++) {
    items[i].style.fontWeight = 'bold'
}