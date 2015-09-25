/*

Merge Sort

Continuously divide the array length in half until one number remains on the
left side and one on the right.  When one number remains, compare the two
numbers, the lower number goes to the left, remerge the array.  Continue to
compare the left and right side of the divided array while remerging the array.

*/

var array = [3,7,1,9,3,2,6,4];

function mergeSort(array) {
  // if array only has integer 0 and 1 array is sorted
  if(array.length < 2)
    return array;

  // sort an array with numbers higher than first condition
  // find the middle of the array
  var middle = parseInt(array.length)/2;
  // create array of the first half of the original array
  var firstHalf = array.splice(0, middle);
  // create array of the second half of the original array
  var secondHalf = array.splice(middle, array.length);

  // continues merging the newly created array until only one number remains when arrays are divided
  return merge(mergeSort(left), mergeSort(right));


}

function merge(left, right)
{
    var result = [];
  // compare the left side and the right side of each index array
    while (left.length && right.length) {
        // if the left number is smaller push into the result array
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
          // push right number into result array if smaller
            result.push(right.shift());
        }
    }
    // continue to compare the numbers and insert into the array
    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}

console.log(mergeSort(a));