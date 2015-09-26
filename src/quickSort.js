/*
Quick Sort




*/




function quickSort(array) {

// base case
  if(array.length <= 1) {
    return array;
  }

  // find the pivot point of the array by dividing the array in half
  var pivot = Math.floor((array.length - 1)/2);
  // set the pivot value
  var pivotValue = array[pivot]; // 5
  // take out the pivotValue
  // console.log(array);
  // console.log(array);
  // create less array to hold the numbers less then pivot number
  var less = [];
  // create a more array to hold the numbers more then pivot number
  var more = [];

  array = array.slice(0, pivot).concat(array.slice(pivot+1)); // [3,1,7,2,8,4]
  // iterate through the array sorting the numbers
  for(var i = 0; i < array.length; i++) {
    if(array[i] < pivotValue) {
      less.push(array[i]); // [3,1,2,4]
    }else {
      more.push(array[i]); // [7,8]
    }
  }

      // console.log('less', less, 'more', more);
      // console.log('quickSort(less)', quickSort(less));
      // console.log('quickSort(more)', quickSort(mo));

debugger;
  return (quickSort(less)).concat([pivotValue], quickSort(more));
}


var array = [3,1,7,5,2,8,4];

quickSort(array);
console.log(array);