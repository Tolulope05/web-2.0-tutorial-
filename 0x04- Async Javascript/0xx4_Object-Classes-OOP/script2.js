/**
 ***********************
 * EXTEND & SUPER
 ***********************
 * - subclassing, essentially inheritance
 * - sharing functionality between classes
 */


class Pet {
    constructor() {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!!!`
    }
}
class Cat extends Pet {
    meow() {
        return `${this.name} is making Meeeooowwwwww Sound!!!`
    }
}


const monthy = new Cat('monty', 9);

class Dog extends Pet {
    bark() {
        return `${this.name} is making WoooFFF Wooof!!!`
    }
}

const wyatt = new Dog('wyatt', 13)