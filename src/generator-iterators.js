// function* idMaker() {
//   var index = 0;
//   while (index < 5)
//     yield index++;
// }

// var gen = idMaker();

// console.log(gen.next()); // 0
// console.log(gen.next()); // 0
// console.log(gen.next()); // 0
// console.log(gen.next()); // 0
// console.log(gen.next()); // 0
// console.log(gen.next()); // 0

function* anotherGenerator(i) {
  yield ++i;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next()); // 10
console.log(gen.next()); // 10
console.log(gen.next()); // 10

console.log(gen.next()); // 10
