

var bio = {
  "name": "Russell Owen",
  "role": "Web Developer",
  "contacts": {
    "mobile": "555-555-5555",
    "email": "russ.e.owen@gmail.com",
    "github": "reowen",
    "location": "Washington, DC"
  },
  "welcomeMessage": "Hi, my name is Russell and I'm cool",
  "skills": ["JS", "Python", "R", "webapp", "Django"],
  "bioPic": "http://elclarin.net.ve/sistema/wp-content/uploads/2014/09/Jen-Selter.jpg"
};

var education = {
  "schools": [
    {
      "name": "JMU",
      "location": "Harrisonburg, VA",
      "degree": "BBA",
      "major": "Economics",
      "dates": "2004 - 2008",
      "url": "https://www.jmu.edu/"
    },
    {
      "name": "Duke University",
      "city": "Durham, NC",
      "degree": "MPP",
      "major": "Public Policy",
      "dates": "2012 - 2014",
      "url": "http://duke.edu/"
    }
  ]
};

var work = {
  "jobs": [
    {
      "employer": "RTI International",
      "title": "M&E Associate",
      "location": "Washington, DC",
      "dates": "April 2014 - Present",
      "description": "M&E associate for an NTD project.  Point person for the NTD Database."
    },
    {
      "employer": "Datu Research, LLC",
      "title": "Assistant Research Analyst",
      "location": "Durham, NC",
      "dates": "Jan 2013 - April 2014",
      "description": "Writing, data collection, and data analysis."
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "List-Tracker",
      "dates": "Nov 2014 - Present",
      "description": "A web app for coordinating Christmas lists."
    }
  ]
}

var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);

var formattedContact = HTMLemail.replace('%data%', bio.contacts.email);
var formattedPic = HTMLbioPic.replace('%data%', bio.bioPic);
var formattedWelcome = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

if(bio.skills){
  $("#header").append(HTMLskillsStart)
  for(skill in bio.skills){
    $("#skills").append(HTMLskills.replace('%data%', bio.skills[skill]));
  }
}

function displayWork(){
  for(job in work.jobs){
    //create new div for work experience
    $("#workExperience").append(HTMLworkStart);
    var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    $(".work-entry:last").append(employer + title);
    $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
    $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
  }
}

displayWork();

projects.display = function(){
  for(proj in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace('%data%', projects.projects[proj].title));
    $(".project-entry:last").append(HTMLprojectDates.replace('%data%', projects.projects[proj].dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace('%data%', projects.projects[proj].description));
  }
}

projects.display()

function inName(name){
  name = name.trim().split(" ");
  console.log(name);
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  name[1] = name[1].toUpperCase();
  return name.join(" ");
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

// $("#main").append("Russell Owen");

// var email = "russell@udacity.com";
// var newEmail = email.replace("udacity", "gmail")
// console.log(email);
// console.log(newEmail);

// var awesomeThoughts = 'I am Russell and I am AWESOME!';
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
//
// $("#main").append(funThoughts)


// var formattedName = HTMLheaderName.replace('%data%', bio.name);
// var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
//
// var formattedContact = HTMLemail.replace('%data%', bio.contacts.email);
// var formattedPic = HTMLbioPic.replace('%data%', bio.bioPic);
// var formattedWelcome = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);
// var formattedSkills = HTMLskills.replace('%data%', bio.skills);
//
// //need to keep the unordered list
// $('#header').prepend(formattedRole);
// $('#header').prepend(formattedName);
//
// $("#topContacts").append(formattedContact);
// $("#topContacts").append(formattedPic);
// $("#topContacts").append(formattedWelcome);
// $("#topContacts").append(formattedSkills);
//
// var work = {};
// work.position = 'M&E Associate';
// work.employer = 'RTI International';
// work.years = '1';
// work.city = 'Washington, DC';
//
// var education = {};
// education['school'] = 'Duke University';
// education['years'] = '2012 - 2014';
// education.degree = 'MPP'
//
// var formattedEmployer = HTMLworkEmployer.replace('%data%', work.employer);
// var formattedTitle = HTMLworkTitle.replace('%data%', work['position']);
// var formattedSchool = HTMLschoolName.replace('%data%', education.school);
// var formattedDegree = HTMLschoolDegree.replace('%data%', education.degree)
//
// $("#education").append(formattedSchool);
// $("#education").append(formattedDegree);
//
// $("#workExperience").append(formattedEmployer);
// $("#workExperience").append(formattedTitle);
