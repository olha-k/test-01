//class SmallestIntegerFinder {
//  findSmallestInt(args) {
//  return Math.min(...args); 
//  }
//}

var array = [ 'a', 'gfg', 'c', 'n' ]; 
  
function max(array) {
    return Math.min(...array); 
}

let  a = 0;
    b = 0;

    const foo = function (a = 2) {
        b= 3;
    return function (b=4) {
        return a + b;
    }
}

console.log (foo()(5));

let Neo;
 setTimeout (() => {
     let i = 0;

     while ("it looks like you're waiting for something");
 })


 document.querySelector('.addbtn').addEventListener('click', addElement);

 function addElement() {
     const xhr = new XMLHttpRequest();
     xhr.onreadystatechange = function() {
         if (xhr.readyState === XHR_STATE_DONE &&
             xhr.status === HTTP_STATUS_CODE) {
             const addedData = JSON.parse(xhr.responseText);
             document.querySelector('.message').innerText = addedData.message;
             document.querySelector('.item').innerText = addedData.item;
         }
     }
     xhr.open('POST', 'to-do.json', true);
     xhr.send();
 }

