// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky navigation bar
window.onscroll = function () { stickyNav() };

var navbar = document.querySelector('header');
var sticky = navbar.offsetTop;

function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// Image gallery modal (you can implement this if needed)
// This would involve creating a modal that opens when a gallery image is clicked
// and displays a larger version of the image

// You may also want to add more interactivity or animations using JavaScript
// For example, you could add a scroll reveal effect for sections as they come into view