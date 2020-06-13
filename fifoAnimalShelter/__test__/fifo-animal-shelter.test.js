'use strict';

const AnimalSelter = require('../fifo-animal-shelter');
const AnimalShelter = require('../fifo-animal-shelter');

describe('AnimalSelter Class', () => {
    it('enqueue() can add animal object and return the animal', () => {
        let firstAnimal = new AnimalShelter();
        firstAnimal.enqueue('cat');
        expect(firstAnimal.front.animal).toEqual('cat')
    })
    it('dequeue() can remove animal from the shelter and return the animal that has been removed', () => {
        let firstAnimal = new AnimalShelter();
        firstAnimal.enqueue('dog');
        firstAnimal.enqueue('cat');
        expect(firstAnimal.dequeue()).toEqual('dog');
    })
    it('dequeue() will return null if the removed animal is not "cat" or "dog"', () => {
        let firstAnimal = new AnimalShelter();
        firstAnimal.enqueue('bird');
        firstAnimal.enqueue('cat');
        firstAnimal.enqueue('dog');
        expect(firstAnimal.dequeue()).toBeNull;
    })
    it('dequeue() will return null if the shelter is empty', () => {
        let firstAnimal = new AnimalShelter();
        expect(firstAnimal.dequeue()).toBeNull;
    })

})