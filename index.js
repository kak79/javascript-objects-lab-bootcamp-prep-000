
//returns an object with the orignal key value pairs and the new key value pair
function updateObjectWithKeyAndValue(object, key, value){

  return Object.assign({}, object, { [key]: value });
   
}


//
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  
  object[key] = value;
  return object;
  
}




function deleteFromObjectByKey(object, key){
  
  var object = { object: key };
  var newObject = Object.assign({}, object);
  delete newObject.key;
  return newObject;
  
}




function destructivelyDeleteFromObjectByKey(object, key){
  
  var object = { object: key };
  var newObject = Object.assign({}, object);
  delete object.key;
  return object;
  
}




