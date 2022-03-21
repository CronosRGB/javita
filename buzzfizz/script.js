let numero
const max = num => {
    if (num >= 100) {max(prompt('numero'))}
    else{numero = num}}
const coca = cola => {console.log(cola)}
const pepsi = () =>  {
    for (let i = 0; i <= numero; i++) {
        if (i % 2 === 0) {coca("buzz");
        } else{coca(i)}
        if (i % 5 === 0){
            coca("fizz");
         }if (i % 5 === 0 && i % 2 === 0){
        }coca('buzzfizz');}}
max(prompt('numero'))
pepsi()