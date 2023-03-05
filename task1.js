function deepCopyObject(obj) {
  const newObj = {};

  for (key in obj) {
    const type_not_Object = typeof obj[key] !== 'object';

    if (type_not_Object) {
      newObj[key] = obj[key];
    } else {
      newObj[key] = deepCopyObject(obj[key]);
    }
  }

  return newObj;
}
