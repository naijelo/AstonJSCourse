Array.prototype.filterArray = function(cb, thisArg) {
  const arr = [];

  for (let i = 0; i < this.length; i++) {
    if(cb.call(thisArg, this[i], i, this)) {
      arr.push(this[i]);
    };
  }
    
  return arr;
}