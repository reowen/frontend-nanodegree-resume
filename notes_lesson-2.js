for("how to start"; "when to end"; "how to increment"){
  doSomething();
}

for(item in object){
  doSomething();
}
//^^"item" is the index of the object, not the value of the object itself


//parameters
function myFunc(param1, param2){
  //code goes here
}

//to append to an array:
var myArray = [];
myArray.push('poop');


//you can store functions inside existing objects like so:
var projects = {
  "projects": [
{
  "title": "List-Tracker",
  "dates": "Nov 2014 - Present",
  "description": "A web app for coordinating Christmas lists."
}
]
}

projects.display = function(){
  for(proj in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace('%data%', projects.projects[proj].title));
    $(".project-entry:last").append(HTMLprojectDates.replace('%data%', projects.projects[proj].dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace('%data%', projects.projects[proj].description));
  }
}

projects.display()
