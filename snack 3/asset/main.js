
   
let array = [];
let result = 0;

for(i = 0; i < 10; i++){
    let appogg = prompt(`Metti un numerino fra`);
    if(!isNaN(appogg)){
    array.push(appogg);}
    else{
        i--;
    }
}

for(i = 0; i < 10; i++){
    result += (Number(array[i]));
}

console.log(array);
console.log(result);