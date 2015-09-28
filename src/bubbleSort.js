// Describe BubbleSort:

// Bubble sort sorts through a collection of data by comparing two values
// and swapping out if need be.  With each comparison, the smaller number is swapped
// with the larger number towards the begining of the array.  The larger number
// continues to the end of the array.  This process continues until array is in
// order from least to greatest.


var unsortedArray = [3,7,1, 5,8,15,11];
function bubbleSort(unsortedArray) {
  // create a do while loop.
  // purpose of do-while is to test if swap happened in the for loop

  var swap = false;
  do {
    // for loop iterates through the array
    for(var i = 0; i < unsortedArray.length; i++) {
      // temp storage for data during the swap
      var temp;
      // comparing the current index with next to find the least on of the two
      if(unsortedArray[i]>unsortedArray[i+1]) {
        // assigning position unsortedArray[i] in the temp
        temp = unsortedArray[i];
        // assigning position unsortedArray[i+1] in position unsortedArray[i]
        unsortedArray[i+1] = unsortedArray[i];
        // assigning position unsortedArray[i+1] to data in temp
        unsortedArray[i+1] = temp;
        // indicate a swap occured
        swap = true;
      }
    }
        console.log('work you piece of shit');
    // condition that indicats a swap as false and to exit the do-while
  } while (swap);
  console.log(unsortedArray);
  // return unsortedArray;
}
bubbleSort(unsortedArray);


// //============= div id="bubbleGraph"===============//
// function createGraph(unsortedArray) {

//   var counter = 0;

//   for(var i = 0; i < unsortedArray.length; i++) {

//     var p = document.createElement('div');
//     p.style.background = 'black';
//     p.style.width = unsortedArray[i] + 50 + 'px';
//     p.style.height = '30px';
//     p.setAttribute('id', counter++);
//     var element = document.getElementById('bubbleGraph');
//     element.appendChild(p);
//   }
// }


// window.onload = function(){
//   createGraph(unsortedArray);
//   // bubbleSort(unsortedArray);
// };
// //============= div id="runIt"===============//

// var runIt_button = document.createElement('button');
// runIt_button.appendChild(document.createTextNode('RUN IT'));
// runIt_button.addEventListener('click', function() {
//   bubbleSort(unsortedArray);
//   });


// var button = document.getElementById('button');
// button.appendChild(runIt_button);