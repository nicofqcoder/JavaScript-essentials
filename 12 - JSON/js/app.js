"use strict"

// JSON = Javascript Object Notation

var person = {name: 'Sergio', surname: 'Summers'};

var persons = [
    {name: 'Hugo', surname: 'Mondaca'},
    {name: 'Maria', surname: 'Gonzalez'},
    {name: 'Fredy', surname: 'Alvarez'},
    person
]

var personJSON = JSON.stringify(person);

var newPerson = JSON.parse(personJSON);