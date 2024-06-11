document.addEventListener('DOMContentLoaded', (event) => {
    const projects = {
        sproutfolio: {
            title: "Sproutfolio",
            details: "Working alongside my Processes for Object-Oriented Software Development team, we were tasked with building a contact managing website that allows users to create, sort, update, and delete their contacts in one place. We wanted the theme of the website to be plant focused and ran with that color scheme",
            image1: "Pics/sproutfolioLogin.jpeg",
            role: "Frontend",
            details2: "Fall 2023",
            image2: "Pics/sproutVid.gif",
            tools: "HTML, CSS, JavaScript"
        },
        sched: {
            title: "Sched",
            details: "For the last project of my Processes for Object-Oriented Software Development class, the team was assigned to develop an application of our choosing with the only requirements being: the use of a MERN stack, JSON to communicate between client and server, A mobile application, and a web page as the client that is AJAX enabled. From these requirements, the team came up with Sched, which is a dynamic scheduling application that allows employers to schedule employees based on the employee’s needs.",
            image1: "Pics/schedVid.gif",
            role: "Backend & Mobile App Design/Frontend Design",
            details2: "Fall 2023",
            image2: "Pics/Sched.jpeg",
            tools: "MongoDB, Figma"
        },
        jackbox: {
            title: "Jackbox",
            details: "As a member of KnightHacks, during the spring semesters they hold project showcases where members are allowed to build and present an application of their choosing. My team decided to build a game site like an arcade that presents users with an array of games. This was my first introduction into Computer Science projects so I went with the safe choice of building Tic-Tac-Toe.",
            image1: "Pics/jackbox.jpeg",
            role: "Game Developer",
            details2: "Spring 2022",
            image2: "Pics/jackboxHome.png",
            tools: "Unity, C#"
        },
        wanderLust: {
            title: "WanderLust",
            details: "As the final project of my mobile application development class, my team had free reign of developing whatever mobile app we wanted. We came up with WanderLust which is a travel app that is built to assist users with their travel needs. Need a restaurant recommendation? WanderLust has got your back. Need activities to do? Look it up on WanderLust. The idea is to pick the most popular spots and give recommendations to users. ",
            image1: "Pics/wanderlustVid.gif",
            role: "Web Design & App Developer",
            details2: "Spring 2024",
            image2: "Pics/wanderLust.png",
            tools: "Xcode, Figma, Swift"
        }
    };

    document.querySelectorAll('.project-image').forEach(image => {
        image.addEventListener('click', function() {
            const projectKey = this.getAttribute('data-project');
            const project = projects[projectKey];

            if (project) {
                document.getElementById('project-title').innerText = project.title;
                document.getElementById('project-details').innerText = project.details;
                document.getElementById('project-details2').innerText = project.details2;
                document.getElementById('role').innerText = project.role;
                document.getElementById('tools').innerText = project.tools;
                const imgElement = document.getElementById('image1');
                imgElement.src = project.image1;
                const imgElement2 = document.getElementById('image2');
                imgElement2.src = project.image2;
                document.getElementById('project-description').style.display = 'block';
                document.getElementById('project-description').scrollIntoView({ behavior: 'smooth' });
            }
        })
    })
})

$(document).ready(function(){
    $('#myCarousel').on('slide.bs.carousel', function (e) {
        var nextIndex= $(e.relatedTarget).index();
        $('.carousel-indicators li').removeClass('active');
        $('.carousel-indicators li').eq(nextIndex).addClass('active');
    });
}) ;