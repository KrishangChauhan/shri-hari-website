// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    
    // Select all elements with the 'reveal' class
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150; // How many pixels into view before revealing

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    // Listen for scroll events
    window.addEventListener('scroll', revealOnScroll);
    
    // Trigger once on load to show header elements
    revealOnScroll();
});

