function generateNumber() {
  // generate a random integer(hint : Math.random)
  document.getElementById(`number`).innerText= Math.floor(10 + Math.random() *100 )
}

function checkOddEven(num) {
  // logic for even / odd
  let n=document.getElementById(`odd-even`)
  if(document.getElementById(`number`).innerText%2==0){
    n.innerHTML="even"
  }else
  n.innerText=`odd`
}

window.onload = function () {
  // add event listeners to the button here
  document.getElementById(`generate-number`).addEventListener("click",function(){
   generateNumber();
   checkOddEven();


  })
};

// donot change the following export statement


if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}

// function init() {
//   fetch(`https://fakestoreapi.com/products`)
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// }

// init();

// async function init() {
//   try {
//     let res = await fetch(`https://fakestoreapi.com/products`);
//     let data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// init();
//  async function k(){
// try{
//   let a=await fetch(`https://fakestoreapi.com/products`) ;
//   let b=await a.json();
//   console.log(b)

// }catch (err) {
// console.error(err)
// }
//  }
//  k();