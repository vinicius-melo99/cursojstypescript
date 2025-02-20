let x;

if (typeof x === 'undefined') x = 20;

console.log(x * 2);

type Person = {
  firstName: string;
  lastName?: string;
};

export function createPerson(firstName: string, lastName?: string): Person {
  return {
    firstName,
    lastName,
  };
}

const person = createPerson('Vinicius');

console.log(person.firstName);

if (person.lastName) {
  console.log(person.lastName);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const squareOf = (x: any) => {
  if (typeof x === 'number') return x ^ 2;

  return null;
};

const squareOfTwoNumber = squareOf(2);
// const squareOfTwoString = squareOf('2');

if (squareOfTwoNumber === null) {
  console.log('conta cagada');
} else {
  console.log(squareOfTwoNumber);
}
