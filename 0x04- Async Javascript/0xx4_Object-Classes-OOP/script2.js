/**
 ***********************
 * EXTEND & SUPER
 ***********************
 * - subclassing, essentially inheritance
 * - sharing functionality between classes
 */

class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`
    }
}