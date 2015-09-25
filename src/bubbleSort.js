// Describe BubbleSort:

// Bubble sort sorts through a collection of data by comparing two values
// and swapping out if need be.  With each comparison, the smaller number is swapped
// with the larger number towards the begining of the array.  The larger number
// continues to the end of the array.  This process continues until array is in
// order from least to greatest.


var array = [3,7,1];
function bubbleSort(array) {
  // create a do while loop.
  // purpose of do-while is to test if swap happened in the for loop

  var swap = false;
  do {
    // for loop iterates through the array
    for(var i = 0; i < array.length; i++) {
      // temp storage for data during the swap
      var temp;
      // comparing the current index with next to find the least on of the two
      if(array[i]>array[i+1]) {
        // assigning position array[i] in the temp
        temp = array[i];
        // assigning position array[i+1] in position array[i]
        array[i+1] = array[i];
        // assigning position array[i+1] to data in temp
        array[i+1] = temp;
        // indicate a swap occured
        swap = true;
      }
    }
    // condition that indicats a swap as false and to exit the do-while
  } while (swap);
  return array;
}