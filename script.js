document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    // Apply the stored theme on load
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Save the user's theme preference
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});

// script.js

// Function to show/hide the back-to-top button
function scrollFunction() {
    var mybutton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

// When the user clicks on the button, scroll to the top of the document
document.getElementById("back-to-top").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};


