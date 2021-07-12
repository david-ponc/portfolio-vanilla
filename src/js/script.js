const globalNavbar = document.querySelector("#navbar");
const landingNavbar = document.querySelector(".landing__nav");

function callback(entries) {
  const [entry] = entries;

  entry.isIntersecting
    ? globalNavbar.classList.add("navbar--hidden")
    : globalNavbar.classList.remove("navbar--hidden");
}

const observer = new IntersectionObserver(callback, { threshold: 1.0 });

observer.observe(landingNavbar);
