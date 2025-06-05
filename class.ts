const obj1 = {
  name: "Andi",
  email: "andi@gmail.com",
  age: 20,
  greet() {
    return `Hello ${this.name}`;
  },
};

class Person {
  name: string;
  #email: string;
  age: number;
  static species: string = "Human";

  constructor(nama: string, surel: string, umur: number) {
    this.name = nama;
    this.#email = surel;
    this.age = umur;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

const obj2 = new Person("Budi", "budi@gmail.com", 21);
const obj3 = new Person("Caca", "caca@gmail.com", 22);
const obj4 = new Person("Doni", "doni@gmail.com", 23);
const obj5 = new Person("John", "john@gmail.com", 24);

console.log(obj2.name, obj2.age);
console.log(obj2);
// console.log(obj4.greet());

console.log(Date.now());

console.log(Person.species);

// encapsulation
class Employee {
  #name: string = "";

  setName(nama: string) {
    if (nama.length <= 5) {
      //   console.log("Nama min 5 karakter");
      throw new Error("Nama min 5 karakter");
    } else {
      this.#name = nama;
    }
  }

  getName() {
    return this.#name;
  }
}

const employee = new Employee();
employee.setName("Andi Doe");
console.log(employee.getName());

// inheritance
class Product {
  name: string;
  price: number;

  constructor(nama: string, harga: number) {
    this.name = nama;
    this.price = harga;
  }
}

class Book extends Product {
  author: string;

  constructor(nama: string, harga: number, penulis: string) {
    super(nama, harga);
    this.author = penulis;
  }
}

const book1 = new Book("book a", 10000, "John");
console.log(book1.price);

console.log(book1 instanceof Book);
console.log(book1 instanceof Product);
console.log(book1 instanceof Person);
