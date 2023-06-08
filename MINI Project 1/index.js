const countValue = document.querySelector('#counter');

// with arrow function 
const increment = () => {
    // get the value from UI 
    let value = parseInt(countValue.innerText);
    // update value 
    value = value + 1;
    // set the value onto ui 
    countValue.innerText = value;
};
//  without arrow function 
function decrement () {
    // get the value from UI 
    let value = parseInt(countValue.innerText);
    // update value 
    value = value - 1;
    // set the value onto ui 
    countValue.innerText = value;
};