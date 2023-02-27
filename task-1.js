function deleteElementFromArray(arr, elem) {

  if (!arr.includes(elem)) {
    return arr;
  }

  if (arr.includes(elem)) {
    let index = arr.indexOf(elem);
    let newArr = arr;
    
    newArr.splice(index, 1)

    return newArr;
  }
}