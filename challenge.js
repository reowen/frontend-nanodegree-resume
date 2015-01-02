
///CHALLENGE QUESTION #1

function isValid(value){
  var v = false;
  if(typeof value === "number" && isFinite(value)){
    v = true;
  } else {
    v = false;
  }
  return v;
}

function getRelationship(x, y) {
  var output;
  if(isValid(x) && isValid(y)){
    if (x < y) {
      output = "<";
    } else if (x > y) {
      output = ">";
    } else if (x === y) {
      output = "=";
    }
  } else if (!isValid(x) && isValid(y)) {
    output = "Can't compare relationships because " + x + " is not a number";
  } else if (isValid(x) && !isValid(y)) {
    output = "Can't compare relationships because " + y + " is not a number";
  } else if (!isValid(x) && !isValid(y)) {
    output = "Can't compare relationships because " + x + " and " + y + " are not numbers";
  }
  return output;
};

///CHALLENGE QUESTION #2
