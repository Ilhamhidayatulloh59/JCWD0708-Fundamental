class Student {
  name: string;
  email: string;
  dob: string;
  age: number;
  score: number;

  constructor(nama: string, surel: string, tl: string, nilai: number) {
    this.name = nama;
    this.email = surel;
    this.dob = tl;
    this.score = nilai;
    this.age = this.calculateAge(tl);
  }

  private calculateAge(dob: string) {
    const now = new Date();
    const date = new Date(dob);
    const diff = now.getTime() - date.getTime();
    const days = diff / (24 * 60 * 60 * 1000);

    return Math.floor(days / 365);
  }
}

const student1 = new Student("Andi", "andi@gmail.com", "2001-01-01", 90);
const student2 = new Student("Budi", "budi@gmail.com", "2000-01-01", 85);
const student3 = new Student("Caca", "caca@gmail.com", "1999-01-01", 80);

const arrStudent: Student[] = [student1, student2, student3];

function calculate(arr: Student[]) {
  const scores: number[] = arr.map((item) => item.score).sort((a, b) => a - b);
  const ages: number[] = arr.map((item) => item.age).sort((a, b) => a - b);

  return {
    score: {
      highest: scores[scores.length - 1],
      lowest: scores[0],
      average: scores.reduce((a, b) => a + b) / scores.length,
    },
    age: {
      highest: ages[ages.length - 1],
      lowest: ages[0],
      average: ages.reduce((a, b) => a + b) / ages.length,
    },
  };
}

console.log(calculate(arrStudent));

const arrNum: number[] = [1, 2, 3]; // [3, 4, 5]
const res: number[] = [];

console.log(arrNum.map((item) => item + 2));

for (let i = 0; i < arrNum.length; i++) {
  res.push(arrNum[i] + 2);
}

console.log(res);

console.log(res.reduce((prev, next) => prev - next));
