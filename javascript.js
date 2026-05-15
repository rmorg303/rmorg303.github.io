document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth > 768) {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {
                const targetId = entry.target.id;
                const matchingLink = document.querySelector(`nav a[href="#${targetId}"]`);
                
                if (matchingLink) {
                    if (entry.isIntersecting) {
                        // Section is live on screen -> Add active highlight
                        matchingLink.classList.add("active");
                    } else {
                        matchingLink.classList.remove("active");
                    }
                }
            });
        }, {
            threshold: 0.0,
            rootMargin: "-10% 0px -10% 0px"
        });

        sections.forEach(section => observer.observe(section));
    }
});
