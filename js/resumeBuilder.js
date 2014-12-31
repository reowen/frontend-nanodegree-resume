

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
  "skills": ["JS", " Python", " R", " webapp", " Django"],
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
