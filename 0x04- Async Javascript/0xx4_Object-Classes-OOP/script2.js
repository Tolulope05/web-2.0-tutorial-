/**
 *****************
 * EXTEND & SUPER
 *****************
 * EXTENDS
 * - subclassing, essentially inheritance
 * - sharing functionality between classes
 */
class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!!!`
    }
} // Base Class 
class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        /**
         * Using super keyword is going to refrence
         * this.name = name;
         * this.age = age;
         * - Its going to call the constructor in pet
         */
        super(name, age)
        this.livesLeft = livesLeft;
    }
    meow() {
        return `${this.name} is making Meeeooowwwwww Sound!!!`
    }
} // dog Class that extend from Pet

class Dog extends Pet {
    bark() {
        return `${this.name} is making WoooFFF Wooof!!!`
    }
    /**
     * If we call another method that has been called in the  
     * extended class, It defines that which is this class 
     * before finding that which is in the extended class.
     */
    eat() {
        return `${this.name} scarfs his food`;
    }
} // dog Class that extend from Pet


const monthy = new Cat('monty', 9);
const wyatt = new Dog('wyatt', 13)