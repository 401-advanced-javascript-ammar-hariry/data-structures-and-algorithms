'use strict';

class Animal {
    constructor(val) {
        this.animal = val;
        this.next = null;
    }
}

class AnimalShelter {
    constructor() {
        this.front = null;
        this.back = null;
    }
    enqueue(animal) {

        let animalType = new Animal(animal);

        if (this.front === null) {

            this.front = animalType;
            this.back = animalType;

            return animalType.animal;
        } else {
            this.back.next = animalType;
            this.back = this.back.next;

            return animalType.animal;
        }
    }
    dequeue() {
        if (this.front === null) {
            return null;
        } else {
            let firstOut = this.front.animal;
            //   console.log(this.front.animal);
            if (firstOut !== 'cat') {
                if (firstOut !== 'dog') {

                    // console.log(this.front.animal);
                    return null;
                } else {

                    this.front = this.front.next;
                }
                return firstOut;
            }
        }
    }
}

module.exports = AnimalShelter;