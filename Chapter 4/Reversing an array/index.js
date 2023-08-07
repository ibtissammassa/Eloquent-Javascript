
function reverseArray(array){
    let reverse = [];
    for(let i = array.length - 1; i >= 0; i--){
        reverse.push(array[i]);
    }
    return reverse;
}
console.log(reverseArray([1,2,3,4,5]));

function reverseArrayInPlace(array){
    for (let i = 0; i < Math.floor(array.length/2); i++) {
        const temp = array[i];
        array[i] = array[array.length-1-i];
        array[array.length-1-i] = temp;
    }
    return array;
}

console.log(reverseArrayInPlace([1,2,3,4,5]));