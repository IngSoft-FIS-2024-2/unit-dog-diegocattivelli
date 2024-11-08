import { beforeEach, describe, expect, test } from '@jest/globals';
import Dog from './dog.js';

describe('Dog class tests', () => {
  let dog;

  beforeEach(() => {
    dog = new Dog('Buddy', 'Golden Retriever', 2, 'Golden');
  });

  test('Learn trick', () => {
    expect(dog.learnTrick('sit')).toBe('Buddy learned a new trick: sit.');
  });
  test('Learn empty trick', () => {
    expect(() => dog.learnTrick('')).toThrow('Trick cannot be empty');
  });

  test('Dog description', () => {
    expect(dog.getDescription()).toBe('Buddy is a Golden Retriever');
  });
  test('Dog goes to sleep', () => {
    expect(dog.sleep()).toBe('Buddy is now sleeping.');
    expect(dog.isSleeping).toBe(true);
  });
  test('Dog wakes up', () => {
    expect(dog.sleep()).toBe('Buddy is now sleeping.');
    expect(dog.isSleeping).toBe(true);
    expect(dog.wakeUp()).toBe('Buddy woke up.');
    expect(dog.isSleeping).toBe(false);
  });
  test('Dog info', () => {
    expect(dog.displayInfo()).toBe(
      'Name: Buddy\nBreed: Golden Retriever\nAge: 2\nColor: Golden',
    );
  });
  test('Dog can bark', () => {
    expect(dog.bark()).toBe('Woof! Woof!');
  });
  test('Dog is asleep and cant bark', () => {
    dog.sleep();
    expect(dog.bark()).toBe('Buddy is sleeping and cannot bark!');
  });
});
