var str = "racecar";
var result = "True";
for(let i=0; i<str.length/2; i++){
    if(str[i]!==str[str.length-i-1]){
        result = "False";
        //console.log(result);
        break;
    }
}

console.log(result);
    
