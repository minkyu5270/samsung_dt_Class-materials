
const prompt = require ('prompt-sync')();

let result =0;

const name = prompt('어디까지 더할까요?');

let to = parseInt(name); 
//number(name)도 되는 것 같음


for (i=1; i<(to+1); i++) {
    result = result + i;
    
}
console.log(result);







