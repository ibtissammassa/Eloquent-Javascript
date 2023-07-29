
function range(start,end,step = start < end ? 1 : -1){
    let array = [];
    array[0] = start;
    if(step > 0){
        for(let i = 1; array[i-1] <= end - step ; i++){
            array[i] = array[i-1] + step;
        }
    }else{
        for(let i = 1; array[i-1] >= end - step; i++){
            array[i] = array[i-1] + step;
        }
    }
    return array;
}

function sum(array){
    let sum = 0;
    for(let i=0;i<array.length ; i++){
        sum += array[i];
    }
    return sum;
}

console.log(range(1, 10));
console.log(sum(range(1, 10)));
console.log(range(1,10, 2));
console.log(range(5, 2, -1));