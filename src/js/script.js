const globalNavbar = document.querySelector("#navbar");
const landingNavbar = document.querySelector(".landing__nav");

function callback(entries, observer) {
  const { isIntersecting } = entries[0];

  isIntersecting
    ? globalNavbar.classList.add("navbar--hidden")
    : globalNavbar.classList.remove("navbar--hidden");
}

const observer = new IntersectionObserver(callback, { threshold: 1.0 });

observer.observe(landingNavbar);
