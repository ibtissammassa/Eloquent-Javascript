
function countBs( string ){
    return countChar(string,'B');
}

console.log(countBs('BarBaraB'));

function countChar(string, char){
    let count = 0;
    for(let i=0; i< string.length ; i++){
        if(string[i]==char){
            count++;
        }
    }
    return count;
}

console.log(countChar('SimSima','m'));