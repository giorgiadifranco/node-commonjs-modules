
const user = {

    firstname : 'Harry',
    lastname : 'Potter'
}


function userName (firstName, lastName){

    const userName = user.firstname;
    const userLastname = user.lastname;
    return `${userName}+' '+ ${userLastname}`
}


module.exports = userName
