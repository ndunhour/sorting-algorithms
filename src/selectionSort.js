/*
Selection Sort

Takes the first integer of the array and stores the integer as the
smallest number.  The stored number is compared with the rest of the
numbers in the array.  If a lower number is found, that number is
stored.  That number is compared to the rest of the numbers of the
array for the smallest number until the end of the array.  Once
reaching the end of the array the smallest number stored in the that
index is swapped with the first index.  The integer that was in the
first index goes into the index where the smallest number was found.
*/


var arr = [4,9,6,3,1,8,2];

function selectionSort(arr){
  var min; // create var to store value of the minimum
  var temp;  // create a var to store value of the index i to be used in the swap process


  // loop through the index of the array
  for(var i = 0; i < arr.length; i++){
    // store the index of the initial min
    min = i;
    // loop through the array finding the smallest integer storing the number in to the min
    for(var  j = i+1; j< arr.length; j++){
       if(arr[j]<arr[min]){
          min = j;
       }
    }
    // swapping process
    temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  console.log(arr);
  return arr;
}
selectionSort(arr);

