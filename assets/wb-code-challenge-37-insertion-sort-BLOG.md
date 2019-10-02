# Insertion Sort 

**What is Insertion Sort?**
* Sorts an array by dividing the array into a 'sorted' portion and 'unsorted' portion.
* We compare the unsorted item to see if it is larger than the previous element, if not we insert the new item.
* Basically we look from left to right and sorting as we go.

* [Algorithms: Insertion Sort in JavaScript](https://www.youtube.com/watch?v=zX-fbQ9a9Dg&feature=youtu.be)
* [Insertion Sorting for Beginners](https://dev.to/ryan_dunton/insertion-sorting-for-beginners-in-js------fkg)


## Pseudo Code
```
insertionSort(int[] arr) 

FOR i = 1 to arr.length

  Int j <-- i-1
  int temp <-- arr[i]

  WHILE j >= 0 AND temp < arr[j]
    arr[j+1] <-- arr[j]
    j <-- j-1

  arr[j+1] <-- temp
```

## Alorithm Description
* build insertSort function
* loop over each element of the array
* do sorting inside of array
* use variable element to hold current value
* initialize variable j for scoping
* nest a for loop inside the first loop
* assign j the value of current array position - 1
* evaluate it again if it is > 0 and if current elemetn is < starting loop element
* add assign the value element to the current index position in the array

## Code
```
const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > element; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = element;
  }
  return arr;
};
```
