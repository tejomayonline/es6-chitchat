function blocks(){

//  block level vars like let ,const

  let fingers = 5;
  const status =['learning'];


  // const re-assigning not allowed
  // status = 5;

  //  but can push values to it;

  status.push('is','great');
  console.log(status);


    if(true){
      console.log(fingers);
        let fingers = 9;
       console.log(fingers);
    }

  console.log(fingers);
  return true;
}

blocks();
