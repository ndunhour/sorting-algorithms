/*
Quick Sort

Quick Sort is a sorting process which finds a pivit point of an array.  The value
at the pivot point is the pivot value.  The rest of the values in the array is compared
to the pivot value, 'less' and 'more'.  At comparison time values are split into two groups.  This process
can be repeated recursivly.  At the end of recursive process the groups are conctinated
back together using 'less' + 'pivotValue' + 'more'.

*/



var array = [8,3,5,1,9,4];
function quickSort(array) {

// base case
  if(array.length <= 1) {
    return array;
  }

  // find the pivot point of the array by dividing the array in half
  var pivot = Math.floor((array.length - 1)/2);
  // set the pivot value
  var pivotValue = array[pivot];
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
  return (quickSort(less)).concat([pivotValue], quickSort(more));
}

console.log(quickSort(array));