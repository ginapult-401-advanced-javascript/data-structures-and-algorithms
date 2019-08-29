const testArray1 = ['a', 'b', 'c', 'd', 'e'];
const testArray2 = ['a', 'b', 'c', 'd'];
const testArray3 = [];

const reverseArray = (array) => {
  let n = array.length;
  let midPoint = Math.floor( n / 2 );
  let temp = null;
  
  if ( Array.isArray(array) && array.length > 0 ) {
    for ( let i = 0; i < midPoint; i++) {
      temp = array[i];
      array[i] = array[n - 1 - i];
      array[n - 1 - i] = temp;
    }
  }
};

reverseArray(testArray1);
console.log(testArray1);

reverseArray(testArray2);
console.log(testArray2);

reverseArray(testArray3);
console.log(testArray3);