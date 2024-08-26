const personMethods = {
    eat() {
        console.log(`Person is eating`);
    },
    sleep() {
        console.log(`Person is sleeping`);
    },
    play() {
        console.log(`Person is playing`);
    },
}; 

function Person(age, name) {
    const person = Object.create(personMethods); 
    person.age = age; 
    person.name = name;


    // not necessary
    // person.eat = personMethods.eat; 
    // person.sleep = personMethods.sleep; 
    // person.play = personMethods.play;

    return person; 
}

const rakib = Person("Rakib", 44); 
rakib.play(); 
