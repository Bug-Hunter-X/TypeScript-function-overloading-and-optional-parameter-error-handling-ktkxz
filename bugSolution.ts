function greet(person: string, date?: Date): string {
  if (typeof person !== 'string') {
    throw new Error('Person must be a string.');
  }
  console.log(person, date);
  return 'Hello, ' + person;
}

let message = greet('John Doe', new Date());
console.log(message);

let message2 = greet(123);
console.log(message2); // this line will produce a runtime error now