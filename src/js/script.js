const globalNavbar = document.querySelector('#navbar')
const landingNavbar = document.querySelector('.landing__nav')

const landingSection = document.querySelector('.landing')
const aboutMeSection = document.querySelector('#about-me')
const skillsSection = document.querySelector('#skills')
const projectsSection = document.querySelector('#projects')

function onChangeNavbar (entries) {
  const [entry] = entries

  entry.isIntersecting
    ? globalNavbar.classList.add('navbar--hidden')
    : globalNavbar.classList.remove('navbar--hidden')
}

function onChangeSection (entries) {
  entries.forEach((entry) => {
    const newURL = entry.target.id ? `#${entry.target.id}` : '/'
    if (entry.isIntersecting) window.history.pushState(null, 'title', newURL)
  })
}

const observerToNavbar = new window.IntersectionObserver(onChangeNavbar, { threshold: 1.0 })
const observerToSections = new window.IntersectionObserver(onChangeSection, { threshold: 0.5 })

observerToNavbar.observe(landingNavbar)
observerToSections.observe(landingSection)
observerToSections.observe(aboutMeSection)
observerToSections.observe(skillsSection)
observerToSections.observe(projectsSection)
