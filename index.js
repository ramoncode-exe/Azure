
/* Scroll - Section */

function scrollToStart(){
    document.querySelector('.hero-section').scrollIntoView({ behavior: "smooth"})
}

function scrollToExp(){
    document.querySelector('.experiences-section').scrollIntoView({ behavior: "smooth"})
}

function scrollToReviews(){
    document.querySelector('.review-section').scrollIntoView({ behavior: "smooth"})
}

function scrollToFaq(){
    document.querySelector('.faq-section').scrollIntoView({ behavior: "smooth"})
}

/* FAQ - Function */

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".faq-content").forEach(content => {
        content.addEventListener("click", () => {
            const answer = content.nextElementSibling.querySelector('p');
            const icon = content.querySelector(".expand");
            
            answer.classList.toggle("hidden");
            
            icon.classList.toggle("rotate-180");
        });
    });
});

/* Menu Reponsive */

