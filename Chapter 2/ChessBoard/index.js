
let size = 8;
let output = '';

for(let i = 1; i <= size; i++){
    for( let j = 1; j <= 8; j++){
        if((i+j) % 2 != 0){
            output += '#';
        }else{
            output += ' ';
        }
    }
    output += '\n'
}

console.log(output);