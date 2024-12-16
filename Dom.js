{
  /*  1. Introduction to the DOM
The Document Object Model (DOM) is a programming interface for web documents. It represents the page 
so that programs can change the document structure, style, and content. The DOM represents the document as a tree of nodes.
   */
}
{
    /*  
    2. Selecting Elements
You can select elements in the DOM using various methods:
     */
  }

//   getElementById: Selects a single element by its ID.
let element = document.getElementById('myId');

// getElementsByClassName: Selects all elements with a given class.
let elements1 = document.getElementsByClassName('myClass');

// getElementsByTagName: Selects all elements with a given tag name.
let elements2 = document.getElementsByTagName('div');

// querySelector: Selects the first element that matches a CSS selector.
let element3 = document.querySelector('.myClass');

// querySelectorAll: Selects all elements that match a CSS selector.
let elements = document.querySelectorAll('.myClass');


{/*
3. Manipulating Elements
You can manipulate the elements by changing their properties, attributes, and content:
*/}

a1.addEventListener("click", function () {
  a1.style.color= "red"
  a1.innerHTML="hjjh"
})

a1.addEventListener("onClick", function () {
  
})
onblur
onchange
onfocus
setInterval
setTimeout
setTimein
