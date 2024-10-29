const user = require('./name.js');

const firstname = 'mario';
const lastname = 'rossi';

const user_Name = user (firstname , lastname)
console.log(user_Name);

//hobbies

//importo la funzione
const hobbies = require('./hobbies.js')
const hobbyOne = 'leggere';
const hobbyTwo = 'correre';
const hobbyThree = 'vedere film';

const iMieihobbies = hobbies (hobbyOne, hobbyTwo, hobbyThree)

console.log(iMieihobbies);

/*Crea una funzione che non ha parametri. 
 La funzione dovrebbe restituire un oggetto con tre proprietà: firstName, lastName, hobbies.*/
 function people (){ 
    return person = { user_Name, iMieihobbies }
}

console.log(people());
