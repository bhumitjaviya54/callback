// Callback in JS

function display(result){
  console.log(result);
}

function adder(a,b,callback){
  let sum = a+b;
  callback(sum);
}

adder(10, 20, display)