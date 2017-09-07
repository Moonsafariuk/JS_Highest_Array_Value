
function largestOfArrays(arr) {

  var arrOfTotals = [];
  var resultArr = [];
  var indexOfLargest = -1;

  for(var i = 0; i < arr.length; i++){
    
    singleVal = arr[i].reduce(function(preVal, currentVal){  
      return preVal + currentVal;
    },0);
    
    arrOfTotals.push(singleVal);
    
  }
  
  var largest = Math.max.apply(Math, arrOfTotals);
  
  //loop array to get index of highest number
  
  for(var j = 0; j < arrOfTotals.length; j++){
    //use j ...     
    if(arrOfTotals[j] == largest){
      indexOfLargest = j;
    }
       
  }
  
  //return largest; 
  return arr[indexOfLargest];
}

// Test function. 
largestOfArrays([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
