export const filtering = (array, filter) => {
  if (filter === undefined || filter === null) {
    return array;
  }
  return array.filter((arrayItem) => arrayItem.categories.includes(filter));
};
