
let count = 0;


function allCount(amount){
  count = count + amount
  document.querySelector("#counter").innerHTML = count
}

// function increment(){
// count = count + 1
// document.querySelector("#counter").innerHTML = count
// }

// function Decrement(){
//   count = count - 1
//   document.querySelector("#counter").innerHTML = count
//   }

  function Reset(){
   count = 0;
    document.querySelector("#counter").innerHTML = count
    }