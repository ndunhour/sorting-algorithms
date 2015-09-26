# sorting-algorithms


Bubble Sort

Bubble sort sorts through a collection of data by comparing two values and swapping out if need be.  With each comparison, the smaller number is swapped with the larger number towards the begining of the array.  The larger number continues to the end of the array.  This process continues until array is in order from least to greatest.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Merge Sort

Continuously divide the array length in half until one number remains on the left side and one on the right.  When one number remains, compare the two numbers, the lower number goes to the left, remerge the array.  Continue to compare the left and right side of the divided array while remerging the array.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Insertion Sort

Compares an current integer to previous integer.  If the previous integer is larger then the current integer continues down the array until previous integer is smaller than current integer.  Insert it current integer in that index.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Selection Sort

Takes the first integer of the array and stores the integer as the smallest number.  The stored number is compared with the rest of the numbers in the array.  If a lower number is found, that number is stored.  That number is compared to the rest of the numbers of the array for the smallest number until the end of the array.  Once reaching the end of the array the smallest number stored in the that index is swapped with the first index.  The integer that was in the first index goes into the index where the smallest number was found.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Quick Sort








TEST
1.  Import 5 functions from 5 javascript src files
2.  For each sorting function run and test several arrays
3.  Stub out each sorting function's source file, exporting a bare function
4.  Describe each sorting algorithm at the top of the source files.
  - how it works
  - what happens in each step