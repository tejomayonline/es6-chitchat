class RestSpread{

  //  rest operator example
  constructor(...args){
    console.log(args);

    this.args = args;
  }

  // spread operator

  spread(a,b){
    console.log(a,b);
    return 0;
  }



}


let val = new RestSpread('How', 'are', 'you?');
let arr = ['i','am','fine'];
val.spread(arr);

console.log('')
val.spread(...arr);
