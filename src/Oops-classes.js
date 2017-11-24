
//  class literals
class Oops{
  //  constructor method
  constructor(){
    // instance variable
    this.val = 0;
    console.log('I am a constructor');

  }
  //  instance method
  sayHello(){

    return `Hi I am Here`;
  }
  //  static method

  static makeMeStaic(){
    // console.log(this.val)
    console.log(`I am a static method`);
  }

  // setter method

  set foo(val){
    this.val = val;
  }
  //  getter method

  get foo(){
    return this.val;
  }



}
//  creating Object of Oops class
let oop = new Oops();
//  calling instance method
oop.sayHello();
// calling static method without Object
Oops.makeMeStaic();
//  calling setter method as attribute
oop.foo = 10000;
//  calling getter method as attribute
console.log(oop.foo);
