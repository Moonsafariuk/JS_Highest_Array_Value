function largestOf(arr) {

  var largestArr = [];
  var largest = -1;
  
// Only change code below this line.

  for(var i = 0; i < arr.length; i++){
   largest  = Math.max.apply(Math, arr[i]);    
   largestArr.push(largest);  
  }
  
  //return largest array; 
  return largestArr;
}

largestOf([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
