interface ICar {
  brand: string;
  model: string;
  price: number;
}

const car: ICar = {
  brand: "BMW",
  model: "M135i xDrive",
  price: 800000000,
};

console.log(car);

interface IPerson {
  name: string;
  age: number;
  hobby?: string;
  address?: {
    city: string;
    province: string;
  };
  greet: () => string;
}

const person: IPerson = {
  name: "Andi",
  age: 25,
  greet() {
    return `Hello ${this.name}`;
  },
};

person.hobby = "Coding"; // menambahkan property hobby
person.name = "Budi"; // edit
person.address = { city: "Bandung", province: "Jawa Barat" };

delete person.hobby;

console.log(person);
console.log(person.name);
console.log(person["age"]);
console["log"](person.greet());

console.log(person.hobby);
console.log(person.address?.city); // optional chaining

for (let key in person) {
  console.log(key);
  console.log(person[key as keyof IPerson]);
}

// destructuring
const { name, age, hobby, address } = person;
console.log(name);
console.log(age);
// console.log(greet());
console.log(hobby);
console.log(address);

const arr = [1, 2, 3];
const arr2 = [...arr]; // spread oprator

arr.push(4);

console.log(arr2);

console.log(Object.keys(person));
