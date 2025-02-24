document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('click', function() {
            alert(`Du klickade på ${section.id}`);
        });
    });

    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#ff6600';
        });
        link.addEventListener('mouseout', function() {
            this.style.color = '#00ccff';
        });
    });
});
