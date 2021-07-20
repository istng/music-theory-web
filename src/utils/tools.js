
export function rotateArrayFromIndex(array, index) {
  const firstPart = array.slice(index);
  const secondPart = array.slice(0, index);
  return firstPart.concat(secondPart); 
}

// Return what two boolean arrays have in common
export function exclusiveAndArray(array1, array2) {
  return array1.map((value, index) => value === array2[index]);
}