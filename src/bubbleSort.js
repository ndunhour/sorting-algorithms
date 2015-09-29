// Describe BubbleSort:

// Bubble sort sorts through a collection of data by comparing two values
// and swapping out if need be.  With each comparison, the smaller number is swapped
// with the larger number towards the begining of the array.  The larger number
// continues to the end of the array.  This process continues until array is in
// order from least to greatest.

window.onload = function(){
  createGraph(numArray);
};


var numArray = [10,4,7,11];

function bubbleSort(numArray) {

  var interval = setTimeout(bubbleSort(), 1000);
  var swap = false;
  var counter = 0;
  do {
    swap = false;
    for ( var i = 0; i < numArray.length;i++) {
      var temp;
      if(numArray[i] > (numArray[i+1])) {
        temp = numArray[i];
        numArray[i] = numArray[i+1];
        numArray[i+1] = temp;
        swap = true;
        counter ++;
document.getElementById('bubbleGraph').innerHTML = '';
  createGraph(numArray);
      }
    }
  } while (swap);
  console.log(numArray);
  return numArray;
}


// // //============= div id="bubbleGraph"===============//
function createGraph(numArray) {

  var counter = 0;

  for(var i = 0; i < numArray.length; i++) {

    var p = document.createElement('div');
    p.appendChild(document.createTextNode(numArray[i]));
    p.style.background = 'black';
    p.style.width = numArray[i] * 35 + 'px';
    p.style.height = '30px';
    p.setAttribute('id', counter++);

    var element = document.getElementById('bubbleGraph');
    element.appendChild(p);
  }
}


// //============= div id="runIt"===============//

var runIt = document.createElement('button');
runIt.appendChild(document.createTextNode('RUN IT'));
runIt.addEventListener('click', function() {
  bubbleSort(numArray);
});
var runItBut = document.getElementById('button');
runItBut.appendChild(runIt);



