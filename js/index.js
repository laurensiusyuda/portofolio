document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.header-list a');
    console.log(navLinks);
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    block: 'start',
                    behavior: 'smooth'
                });
            }
        })
    });
});
