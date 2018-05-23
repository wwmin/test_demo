var addTwoNumbers = function(l1, l2) {
    let num1 = l1.reverse();
    let num2 = l2.reverse();
    let sum = +num1.join('') + +num2.join('');
    return sum.toString().split('').reverse().map(p => +p);
  };
  
  console.log(addTwoNumbers([2,4,5], [5,6,4]));
  