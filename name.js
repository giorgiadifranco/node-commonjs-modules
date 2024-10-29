
/*const user = {

    firstname : 'Harry',
    lastname : 'Potter'
}*/


function userName (firstname, lastname){

    //const userName = user.firstname;
    //const userLastname = user.lastname;
    return {

        firstname : firstname, //inserisco il parametro
        lastname : lastname
    }
}


module.exports = userName;
/*Crea una funzione che accetta due parametri: firstName, lastName.
 La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
Esporta la funzione dal file.*/