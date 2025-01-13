function insection(arr1, arr2){
  const map = new Set();

  for(let i = 0; i < arr1.length; i++){
    map.add(arr1[i]);
  }

  const result = new Set();

  for(let i = 0; i < arr2.length; i++){
    if(map.has(arr2[i])){
      result.add(arr2[i]);
    }
  }

  return Array.from(result);
}

console.log(insection([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]
