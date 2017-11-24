

// // without promises
// function runAnimation(val){

//   console.log(val);
// }


// //  callback hell
// console.log('simple callback example');
// runAnimation(0);
// // setTimeout(function() {
// //     runAnimation(1);
// //     setTimeout(function() {
// //         runAnimation(2);
// //     }, 4000);
// // }, 1000);

// console.log('Promise Example');
// function runAnimation(step) {
//   console.log(step);
// }
//  set setTimeout never fails
// function delay(interval) {
//   return new Promise(function(resolve) {
//       setTimeout(resolve, interval);
//   });
// }

// runAnimation(0);
// delay(1000)
// 	.then(function() {
// 		runAnimation(1);
// 		return delay(500);
// 	})
// 	.then(function() {
// 		runAnimation(2);
// 	});


// 	without promises


// try {
//     runAnimation(0);
// }
// catch (e) {
//     runBackup(0);
// }

// delay(1000)
//     .then(function() {
//         runAnimation(1);
//         return delay(1000);
//     })
//     .catch(function() {
//         runBackup(1);
//     })
//     .then(function() {
//         runAnimation(2);
//     })
//     .catch(function() {
//         runBackup(2);
//     });


  // final Example
let p2 = Promise.resolve("foo");

  // instant promise can get it after the fact, unlike events
p2.then((res) => console.log(res));

//  resolvings

let p = new Promise(function(resolve, reject) {
   setTimeout(() => resolve(4), 2000);
});

// handler can't change promise, just value
p.then((res) => {
  res += 2;
  console.log(res);
  return res;
})
// .then((res) => console.log(res))
;

// still gets 4
p.then((res) => console.log(res));
