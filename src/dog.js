/**
 * Represents a dog object.
 *
 * @class
 */
class Dog {
  /**
   * Creates an instance of the Dog class.
   *
   * @constructor
   * @param {string} name - The name of the dog.
   * @param {string} breed - The breed of the dog.
   * @param {number} age - The age of the dog.
   * @param {string} color - The color of the dog's fur.
   */
  constructor(name, breed, age, color) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.color = color;
    this.isSleeping = false;
  }

  /**
   * Returns a string that contains the name and breed of the dog.
   *
   * @return {string} The description of a dog.
   */
  getDescription() {
    // to do: retornar la concatenación de this.name y this.breed
  }

  /**
   * Makes the dog sleep.
   *
   * @return {string} A message indicating that the dog is now sleeping.
   */
  sleep() {
    // to do - leer el jsdoc
  }

  /**
   * Wakes up the sleeping dog.
   *
   * @return {string} A message indicating that the dog woke up.
   */
  wakeUp() {
    // to do - leer el jsdoc
  }

  /**
   * Teaches the dog a new trick.
   *
   * @param {string} trick - The trick to be taught to the dog.
   * @return {string} A message indicating that the dog learned a new trick.
   */
  learnTrick(trick) {
    if (trick == null || trick == '') {
      throw new Error('Trick cannot be empty');
    }
    this.tricks.push(trick);
    return `${this.name} learned a new trick: ${trick}.`;
  }

  /**
   * Makes the dog bark.
   *
   * @return {string} A message indicating "Woof! Woof!".
   */
  bark() {
    // to do - leer el jsdoc
  }

  /**
   * Displays information about the dog.
   *
   * @return {string} All the information about the dog.
   */
  displayInfo() {
    // to do - leer el jsdoc
  }
}

export default Dog;
