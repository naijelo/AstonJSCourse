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

function getInterval(arr, from, to) {
  const result_array = [];
  const every_elem_is_number = arr.every((elem) => typeof elem === 'number');

  if (!Array.isArray(arr) || !every_elem_is_number) {
    throw new Error('В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения');
  }

  if (typeof from !== 'number') {
    throw new Error('В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом');
  }

  if (typeof to !== 'number') {
    throw new Error('В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом');
  }

  if (from > to){
    [from, to] = [to, from];
  }

  arr.forEach(function(value) {
    if (value >= from && value <= to) {
        result_array.push(value);
    }
  });
  return result_array;
}

function createLiker() {
  const obj = {
    counter: 0,
    like() {
      this.counter++;
      return this;
    },
    dislike() {
      this.counter--;
      return this;
    },
    val() {
      return this.counter;
    },
  };
  return obj;
}

function getUniqArray(arr) {
  const notNumber = (element) => (typeof element !== 'number');
  if (arr.some(notNumber)) {
    throw new Error('В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел');
  };
  const uniq = new Set(arr);
  return Array.from(uniq);
}
