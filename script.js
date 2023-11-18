function handleSectionScroll() {
    var sections = document.querySelectorAll('.fade-in');

    sections.forEach(function(section) {
        var bounding = section.getBoundingClientRect();

       
        if (bounding.top >= 0 && bounding.top <= window.innerHeight / 2) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('resize', handleSectionScroll);
window.addEventListener('scroll', handleSectionScroll);

handleSectionScroll();

