const str: string = "makan";
let revStr: string = "";

for (let i = str.length - 1; i >= 0; i--) {
  revStr += str.charAt(i);
}

console.log(str == revStr ? "Palindrome" : "Not Palindrome");

