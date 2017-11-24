function CheckMe(){

  let array = [1,2,3,4,5];

  // old way
 let res =array.map(function(v,i){

   return v*=10;
  });
  console.log(res);

  //  with arrow syntaxes
  res = array.map(v => v*15);
  console.log(res);


}

function ObjectMe(){
  const name = 'Folks';
  let Happiness = ["Hey","How"];
  let test =  Happiness.forEach(topic => topic);


  console.log(test);

}

CheckMe();
ObjectMe();
