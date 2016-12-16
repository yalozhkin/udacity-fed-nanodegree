// Data structure START
var bio = {
    'name': 'Yaroslav Lozhkin',
    'role': 'Product Designer',
    'contacts': {
        'mobile': '+7 (963) 484-4854',
        'email': 'yalozhkin@gmail.com',
        'github': 'yalozhkin',
        'twitter': 'yalozhkin',
        'location': 'Izhevsk, Russia'
    },
    'welcomeMessage': 'Hello! My name is Yaroslav Lozhkin, I design web and mobile products.',
    'skills': ['Product Design', 'UX/UI Design', 'Front-end basics'],
    'biopic': 'images/yaroslav.jpg'
};

var work = {
    'jobs': [
        make = {
            'employer': 'Make AS',
            'title': 'Product Designer',
            'location': 'Oslo, Norway – Remote',
            'dates': 'since 2014',
            'description': 'I worked on product UX/UI and managed assets production.'
        },
        groupon = {
            'employer': 'Groupon',
            'title': 'Lead Designer',
            'location': 'Moscow, Russia',
            'dates': '2012-2016',
            'description': 'I worked on product UX/UI and implemented a design system.'
        },
        beenza = {
            'employer': 'Beenza',
            'title': 'Game Designer',
            'location': 'Saint-Petersburg, Russia',
            'dates': '2010-2014',
            'description': 'I worked on products UX/UI and production.'
        }
    ]
};

var projects = {
    'projects': [
        kiwitaxi = {
            'title': 'KiwiTaxi',
            'dates': 'since 2014',
            'description': 'Storefront design',
            'images': [
                'images/projects/kiwitaxi-image1.jpg',
                'images/projects/kiwitaxi-image2.jpg',
                'images/projects/kiwitaxi-image3.jpg'
            ]
        },
        make = {
            'title': 'Make apps',
            'dates': 'since 2014',
            'description': 'Products design',
            'images': [
                'images/projects/make-image1.jpg',
                'images/projects/make-image2.jpg',
                'images/projects/make-image3.jpg'
            ]
        },
        groupon = {
            'title': 'Make apps',
            'dates': 'since 2014',
            'description': 'Products design',
            'images': [
                'images/projects/groupon-image1.jpg',
                'images/projects/groupon-image2.jpg',
                'images/projects/groupon-image3.jpg'
            ]
        },
        ossai = {
            'title': 'Ossai',
            'dates': '2015',
            'description': 'Storefront design',
            'images': [
                'images/projects/ossai-image1.jpg',
                'images/projects/ossai-image2.jpg',
                'images/projects/ossai-image3.jpg'
            ]
        }
    ]
};

var education = {
    'schools': [
        high = {
            'name': 'Ryabovo High School',
            'location': 'Ryabovo, Udmurt, Russia',
            'degree': 'High school',
            'majors': ['Technology'],
            'dates': '1999-2001',
            'url': ''
        },
        udsu = {
            'name': 'Udmurt State Univercity',
            'location': 'Izhevsk, Russia',
            'degree': 'Ungraduated',
            'majors': ['Sociology'],
            'dates': '2001-2013',
            'url': 'http://udsu.ru'
        }
    ],
    'onlineCourses': [
        coursera = {
            'title': 'Coursera',
            'school': 'Online',
            'dates': 'since 2014',
            'url': 'http://coursera.com',
        },
        udacity = {
            'title': 'Udacity',
            'school': 'Online',
            'dates': 'since 2016',
            'url': 'http://udacity.com',
        }

    ]
};

// Data structure END

// ========================================================

// Format content functions START

// Bio section

bio.display = function() {

    formattedName = HTMLheaderName.replace('%data%', bio.name);
    formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
    formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

    $('#header').prepend(formattedName, formattedRole);
    $('#header').append(formattedPic, formattedWelcome);


    for (var contact in bio.contacts) {

        if (bio.contacts.hasOwnProperty(contact)) {

            var formattedContact = HTMLcontactGeneric.replace('%contact%', [contact]);
            formattedContact = formattedContact.replace('%data%', bio.contacts[contact]);

            $('#topContacts, #footerContacts').append(formattedContact);

        }

    }

    if (bio.skills.length > 0) {

        $('#header').append(HTMLskillsStart);

        bio.skills.forEach(function(skill) {

            var formattedSkill = HTMLskills.replace('%data%', skill);
            $('#skills').append(formattedSkill);

        });
    }
};

// Work section

work.display = function() {

    if (work.jobs.length > 0) {

        work.jobs.forEach(function(job) {

            formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
            formattedTitle = HTMLworkTitle.replace('%data%', job.title);
            formattedLocation = HTMLworkLocation.replace('%data%', job.location);
            formattedDates = HTMLworkDates.replace('%data%', job.dates);
            formattedDescription = HTMLworkDescription.replace('%data%', job.description);

            $('#workExperience').append(HTMLworkStart);
            $('.work-entry:last').append(formattedEmployer + formattedTitle, formattedLocation, formattedDates, formattedDescription);

        });
    }
};
// Projects section

projects.display = function() {

    if (projects.projects.length > 0) {

        projects.projects.forEach(function(project) {

            formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
            formattedDates = HTMLprojectDates.replace('%data%', project.dates);
            formattedDescription = HTMLprojectDescription.replace('%data%', project.description);

            $('#projects').append(HTMLprojectStart);
            $('.project-entry:last').append(formattedTitle, formattedDates, formattedDescription);

            if (project.images.length > 0) {

                project.images.forEach(function(image) {
                    var formattedImage = HTMLprojectImage.replace('%data%', image);
                    $('.project-entry:last').append(formattedImage);

                });
            }
        });
    }
};

// Education section

education.display = function() {

    if (education.schools.length > 0) {
        education.schools.forEach(function(school) {

            formattedName = HTMLschoolName.replace('%data%', school.name);
            formattedDegree = HTMLschoolDegree.replace('%data%', school.degree);
            formattedLocation = HTMLschoolLocation.replace('%data%', school.location);
            formattedDates = HTMLschoolDates.replace('%data%', school.dates);

            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(formattedName + formattedDegree, formattedLocation, formattedDates);

            if (school.majors.length > 0) {
                school.majors.forEach(function(major) {

                    formattedMajor = HTMLschoolMajor.replace('%data%', major);
                    $('.education-entry:last').append(formattedMajor);

                });
            }
        });
    }

    if (education.onlineCourses.length > 0)
        $('#education').append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(course) {

        formattedTitle = HTMLonlineTitle.replace('%data%', course.title);
        formattedSchool = HTMLonlineSchool.replace('%data%', course.school);
        formattedURL = HTMLonlineURL.replace('%data%', course.url);
        formattedDates = HTMLonlineDates.replace('%data%', course.dates);

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedTitle + formattedSchool, formattedDates, formattedURL);
    });
};


// Format content functions END

// =============================================================

// Page render START

bio.display();

work.display();

projects.display();

education.display();

$('#mapDiv').append(googleMap);

// Page render END
