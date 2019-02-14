function addElementToBeginningofArray (array, element) {
 let newArray = [];
 newArray = [element, ...array];
 
 return newArray;
  
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  
  let myArray = array;
  myArray = [element, ...myArray]
  
  return array;
  
}