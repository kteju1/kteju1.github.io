// Log a welcome message
console.log("Welcome to my portfolio website!");

// Add a "Back to Top" button
document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.createElement("button");
    backToTopButton.textContent = "Back to Top";
    backToTopButton.className = "b  ack-to-top";
    document.body.appendChild(backToTopButton);

    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
