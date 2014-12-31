////////////////////////////////
//////////LESSON 1//////////////
////////////////////////////////

$(".super-header-wrapper").html("<img style='width:100%' src='http://goo.gl/WCrBmS'>");
^^
//finds the element of class "super-header-wrapper" and replaces it with the html inside the .html() command

//////////////////////////////////////////////////

var s = "audacity";

var udacityizer = function(s) {
  // Right now, the variable s === "audacity"
  // Manipulate s to make it equal to "Udacity"

  //index s[1]='u', make it 'U', then append string s, starting at position 3 (using str.slice(2))
  s = s[1].toUpperCase() + s.slice(2);
  return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));

//////////////////////////////////////////////////

//to make an array
var a = ['Russell', ' is ', ' cool.'];

//to get length of an array (or string)
a.length

//////////////////////////////////////////////////

var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
  var newArray = [];
  // Your code should make newArray equal to an array that has the same
  // values as _array, but the last number has increased by one.

  // For example:
  // _array = [1, 2, 3];
  // turns into:
  // newArray = [1, 2, 4];

  // Your code goes in here!
  var last = _array.length - 1;
  newArray = _array;
  newArray[last] = newArray[last] + 1;

  // Don't delete this line!
  return newArray;
};

// //their solution
// function incrementLastArrayElement(_array)  {
//   var newArray = [];
//   newArray = _array.slice(0);
//   var lastNumber = newArray.pop();
//   newArray.push(lastNumber + 1);
//   return newArray;
// }

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));

//////////////////////////////////////////////////

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
  var names = oldName.split(' ');
  // Your code goes here!
  names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
  names[1] = names[1].toUpperCase();
  var finalName = names[0] + ' ' + names[1];

  // Don't delete this line!
  return finalName;
};

// //their solution
// function nameChanger(oldName) {
//   var finalName = oldName;
//   var names = oldName.split(" ");
//   names[1] = names[1].toUpperCase();
//   names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
//   finalName = names.join(" ");
//   return finalName;
// }

// Did your code work? The line below will tell you!
console.log(nameChanger(name));

//////////////////////////////////////////////////

//create javascript objects
var bio = {
  "name": "James",
  "age" : 32,
  "skills": skills
};
//to access the name element
bio.name
