// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("open");
        navMenu.classList.toggle("open");
    });
}

// Close menu on nav link click (mobile)
document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        navMenu.classList.remove("open");
    });
});

// Smooth scrolling
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
        // else: let browser handle normal navigation
    });
});

// Gallery animation on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(".gallery-item").forEach(item => {
    item.style.opacity = 0;
    item.style.transform = "translateY(30px)";
    item.style.transition = "0.6s ease";
    observer.observe(item);
});

// Contact form -> WhatsApp
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", event => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get("name");
        const phone = formData.get("phone");
        const email = formData.get("email");
        const message = formData.get("message");

        const text = [
            "New Inquiry:",
            `Name: ${name}`,
            `Phone: ${phone}`,
            `Email: ${email}`,
            `Message: ${message}`
        ].join("\n");

        const whatsappNumber = "917200825692";
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    });
}