function getUniqArray(arr) {
  const notNumber = (element) => (typeof element !== 'number');
  if (arr.some(notNumber)) {
    throw new Error('В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел');
  };
  const uniq = new Set(arr);
  return Array.from(uniq);
}
