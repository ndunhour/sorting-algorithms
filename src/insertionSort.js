/*
Insertion Sort

Compares an current integer to previous integer.  If the previous integer is
larger then the current integer continues down the array until previous integer
is smaller than current integer.  Insert it current integer in that index.

*/

var array = [9,3,6,1,8];

function insertionSort (array) {
  // iterate through the array
  for(var i = 0; i < array.length; i++) {
    // puts the value at the index into temp
    var temp = array[i];
    // iterate through the array to check if previous number is greater then number in temp
    for(var j = i -1; j >= 0; j--) {
      // checks to see if previous number is greater than temp
      if(array[j] > temp) {
        // moves the number up the array
        array[j+1] = array[j];
        // continue through the loop until false
      }else {

        break;
      }
    }
    // inserts the temp number in the index
    array[j+1] = temp;
  }
}

insertionSort(array);