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
