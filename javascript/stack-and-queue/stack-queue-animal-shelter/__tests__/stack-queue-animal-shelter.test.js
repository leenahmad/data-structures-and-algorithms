'use strict';

const AnimalShelter = require('../stack-queue-animal-shelter');

describe('test AnimalShelter' , () =>{

  it('test enqueue Dog' , () => {
    let animalShelter = new AnimalShelter();

    const Dog ={
      type : 'dog'
    };
    animalShelter.enqueue(Dog);
    expect(animalShelter.dog.front.value).toEqual(Dog);

  });

  it('test enqueue Cat' , () => {
    let animalShelter = new AnimalShelter();

    const Cat ={
      type : 'cat'
    };
    animalShelter.enqueue(Cat);
    expect(animalShelter.cat.front.value).toEqual(Cat);
  });

  it('test enqueue other type of animal' , () => {
    let animalShelter = new AnimalShelter();

    const Bird ={
      type : 'bird'
    };
    animalShelter.enqueue(Bird);
    expect(animalShelter.enqueue(Bird)).toEqual('this animal cannot be in AnimalShelter');
  });

  it('test dequeue Dog' , () => {
    let animalShelter = new AnimalShelter();

    const Dog ={
      type : 'dog'
    };
    animalShelter.enqueue(Dog);
    animalShelter.dequeue('dog');
    expect(animalShelter.dog.isEmpty()).toBeTruthy();

  });

  it('test dequeue Cat' , () => {
    let animalShelter = new AnimalShelter();

    const Cat ={
      type : 'cat'
    };
    animalShelter.enqueue(Cat);
    animalShelter.dequeue('cat');
    expect(animalShelter.cat.isEmpty()).toBeTruthy();
  });

  it('test dequeue other type of animal' , () => {
    let animalShelter = new AnimalShelter();

    const Bird ={
      type : 'bird'
    };
    animalShelter.enqueue(Bird);
    animalShelter.dequeue('bird');
    expect(animalShelter.dequeue(Bird)).toBe(null);
  });



});
