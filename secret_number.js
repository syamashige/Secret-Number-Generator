'use strict';
module.exports = function () {
  const secretNumber = Math.floor(Math.random() * Math.floor(1000001));
  function secret(){
      console.log(secretNumber);
      return secretNumber;
  }
  return secret;
    // function secretNumber () {
    //     const randomNum = Math.floor(Math.random() * Math.floor(1000000));
    //     return function () {
    //         return randomNum;
    //     }
    // }
    // const getSecretNum = secretNumber();

    // console.log(getSecretNum());
};






// const getSecretNum = makeSecretNum();

// console.log(getSecretNum());