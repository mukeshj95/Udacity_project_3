var bio = {
    "name": "Mukesh Jaiswal",
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "+919412415650",
        "email": "mukeshj95@gmail.com",
        "twitter": "mukeshj95",
        "github": "github.com/mukeshj95",
        "location": "New Delhi"
    },
    "welcomeMessage": "Welcome to my profile!",
    "skills": ["HTML", "CSS", "JavaScript", "PHP", "Python", "SQL"],
    "biopic": "images/profile.jpg",
    "display": function() {

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedpic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedwelcomemsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").prepend(formattedpic);
        $("#header").append(formattedwelcomemsg);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedTwitter);
        $("#topContacts").append(formattedgithub);
        $("#topContacts").append(formattedLocation);

        var formattedfMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedfEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedfTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedfgithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedfLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#footerContacts").append(formattedfMobile);
        $("#footerContacts").append(formattedfEmail);
        $("#footerContacts").append(formattedfTwitter);
        $("#footerContacts").append(formattedfgithub);
        $("#footerContacts").append(formattedfLocation);
    }
};
if (bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);
    }
bio.display();
}


var education = {
    "schools": [{
        "name": "JSS Academy of Technical Education",
        "location": "Noida India",
        "degree": "B.tech",
        "dates": "30th July'15",
        "majors": ["Electronics & Communication"],
        "url": "http://jssaten.in/##"
    }],
    "onlineCourses": [{
        "title": "Front End Developer",
        "school": "Udacity",
        "dates": "Nov'16-Present",
        "url": "profiles.udacity.com/u/mukeshjaiswal1",
    }]
};
education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedSchool = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedSchool);
        $(".education-entry:last").append(formattedDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolMajor);
    }

    for (var j = 0; j < education.onlineCourses.length; j++) {
        $("#education").append(HTMLonlineClasses);
        var formattedCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
        var formattedCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
        $(".online-entry:last").append(formattedCourseTitle);
        $(".online-entry:last").append(formattedCourseSchool);
        $(".online-entry:last").append(formattedOnlineDates);
        $(".online-entry:last").append(formattedOnlineURL);
    }
};
education.display();

var work = {
    "jobs": [{
            "employer": "Nokia Solutions Networks",
            "title": "AM Engineer",
            "dates": "01 Sept'15 to 30th Dec'15",
            "location": "Noida India",
            "description": "Monitoring the alarms of sites of Bharti Airtel in Western African Countries."
        },

        {
            "employer": "Fortune Marketing Pvt. Ltd.",
            "title": "Network Engineer",
            "dates": "01 Mar'16 to 30th May'16",
            "location": "New Delhi India",
            "description": "Providing Solutions of the security system devices."
        }
    ]
};

work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();

var projects = {
    "projects": [{
        "title": "Building a portfolio & resposive website",
        "dates": "02 Dec'16",
        "description": "Building a responsive website by using HTML CSS and Bootstrap.",
        "images": ["Images/Project_1.png", "Images/Project_2.png"]
    }]
};

projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedProjectDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects.length >= 0) {
            for (var j = 0; j <= projects.projects.length; j++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }

};
projects.display();


$("#mapDiv").append(googleMap);


function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);