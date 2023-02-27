function addElementsToArray(arr, index) {
  return function carry(elem1, elem2, ...elemN) {

    if (index) {
      let newArr = arr;
      
      if (index % 1 != 0 || index < 0 ) {
        throw new Error("the index cannot be a negative number or a fractional number");
      };

      newArr.splice(index, 0, elem1, elem2, ...elemN);

      return newArr;
    }
    
    return [...arr, elem1, elem2, ...elemN];
  }
}