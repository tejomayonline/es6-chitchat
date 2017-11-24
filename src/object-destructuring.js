
//  Object destructing
let obj = {
  name : "tejomay",
  session : "es6",
  passion : "loves to code"
}


// let {name ,session,passion} = obj;
// //  showing values as template literals
// console.log(`${name} has a session on ${session} os he ${passion}`);


//more.......... ?

class Simple{
  constructor({name , session ,passion}){

    console.log(`${name} has a session on ${session} os he ${passion}`);
  }
  getVal({name,session,passion}){

  return {name , session};
  }

  getHobby({name}){
    return {

      love(){
        return `${name} loves to code`;
      }
    }
  }

}

let simp = new Simple(obj);
simp.getVal(obj);
