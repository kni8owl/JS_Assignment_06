var Person = {
    FirstName : "First property",
    LastName : "Second property",
    Officeaddress : "Third property",
};
for(key in Person)
console.log(key+": "+Person[key])

//function to print object properties
function display(Persons)
{
    for(key in Persons)
    console.log(key+": " +Persons[key])
}


// creating an object "Person 1" using literal
var Person1 = {
    FirstName : "Charlie",
    LastName : "Puth",
    Officeaddress : "New Jersey, United States",
};
console.log("Person 1");
display(Person1);

//creating an object "Person 2" using literal
var Person2 = {
    FirstName : "Nathan John",
    LastName : "Feurstein",
    Officeaddress : "Michigan, United States",
};
console.log("Person 2");
display(Person2);

// creating an object "Person 3" using literal
var Person3 = {
    FirstName : "Justin Drew",
    LastName : "Bieber",
    Officeaddress : "London, Canada",
};
console.log("Person3");
display(Person3);

