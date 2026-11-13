
// FASANYA'S DELIGHT JAVASCRIPT


// 1. MOBILE NAVIGATION

const menuToggle = document.querySelector(".menu-toggle");

const navigation = document.querySelector(".navigation");


menuToggle.addEventListener("click", function () {

    navigation.classList.toggle("open");

});


// Close navigation after clicking a link

navigation.querySelectorAll("a").forEach(function(link) {

    link.addEventListener("click", function() {

        navigation.classList.remove("open");

    });

});


// 2. SCROLL ANIMATIONS

const revealElements = document.querySelectorAll(
    ".product-card, .promise-content, .promise-badge, .order-inner"
);


revealElements.forEach(function(element) {

    element.style.opacity = "0";

    element.style.transform = "translateY(25px)";

    element.style.transition = "all 0.7s ease";

});


const revealObserver = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

            revealObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.12

});


revealElements.forEach(function(element) {

    revealObserver.observe(element);

});


// 3. AUTOMATIC COPYRIGHT YEAR

const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();