

function insert(arr, index, object){
  if(! (Array.isArray(arr)) ){
    return;
  }
  if(! (Number.isInteger(index)) ){
    return;
  }
  if(index < 0){
    return;
  }
  if(index > arr.length - 1){
    return;
  }
  arr.splice(index, 0, object);
}

function find(arr, object){
  if(! (Array.isArray(arr)) ){
    return;
  }
  
  return arr.indexOf(object);
}

function findAndUpdate(arr, tragetObject, replacingObject){
  if(! (Array.isArray(arr)) ){
    return;
  }
  
  arr[find(arr, targetObject)] = replacingObject);
}



