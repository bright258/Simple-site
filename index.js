document.addEventListener('DOMContentLoaded', function() {
    // Select all sections
    const sections = document.querySelectorAll('section');
    
    // Function to fade in an element
    function fadeIn(element, duration) {
        element.style.opacity = 0;
        element.style.display = 'block';
        
        let opacity = 0;
        const step = 16 / duration; // Calculate step based on duration

        function animate() {
            opacity += step;
            if (opacity >= 1) {
                opacity = 1;
                element.style.opacity = opacity;
            } else {
                element.style.opacity = opacity;
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }

    // Hide all sections initially
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Fade in sections one by one
    sections.forEach((section, index) => {
        setTimeout(() => {
            fadeIn(section, 1000);
        }, index * 1000); // Delay each section's animation by 1 second
    });
});

