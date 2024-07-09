function showProject(projectId, button) {
    // Hide all sections
    var sections = document.querySelectorAll('.project-hero');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected section
    var selectedSection = document.getElementById(projectId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// document.addEventListener('DOMContentLoaded', function() {
//     const navbar = document.querySelector('.nav-bar');
//     navbar.addEventListener('click', function() {
//         navbar.classList.toggle('active');
//     });
// });
