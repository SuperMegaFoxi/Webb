const StrMas = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
console.log(StrMas);

const NumMas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(NumMas);

let MyObj = {
  Name: "Danil",
  Age: 21,
  About: "Nice Cock",
  Phone: "+7 (973) 875 32 22",
  Time: new Date()
};
console.log(MyObj);

function Rand(Mas, Min, Max) {
  for (let i = 0; i < Mas.length; i++) {
    Mas[i] = Math.floor(Math.random() * (Max - Min + 1)) + Min;
  }
  return console.log(Mas);
}
Rand(NumMas, 0, 100);



///////////



StrMas.forEach((num, i) => {
  console.log(num, "=", i + 1)
})

console.log("SumMas =", NumMas.reduce((res, i) => {
  // console.log(res,);
  return res += i;
}, 0));


console.log(NumMas);
NumMas.sort((prev, next) => prev - next);

console.log(NumMas);

console.log(NumMas.reduce((a, b) => a + b, 0));


let secondObj = Object.assign({}, MyObj);
console.log(secondObj);
console.log(MyObj);
console.log(secondObj === MyObj);
miniObj = {
  hi: "Privet"
};
let thirdObj = Object.assign({}, MyObj, miniObj);
console.log(thirdObj);
console.log(JSON.parse(JSON.stringify(MyObj)));

let key = Object.keys(MyObj);
console.log(key);