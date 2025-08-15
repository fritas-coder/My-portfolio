gsap.registerPlugin(ScrollTrigger);

gsap.to("#hero-title", { opacity: 1, y: -20, duration: 1 });
gsap.to("#hero-subtitle", { opacity: 1, y: -20, delay: 0.5, duration: 1 });
gsap.to("#hero-btn", { opacity: 1, y: -20, delay: 1, duration: 1 });

const sections = document.querySelectorAll("h3, p, .grid > div, form,img");

sections.forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    },
    opacity: 0,
    y: 50,
    duration: 1.5,
  });
});

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

function onClick() {
  const skillList = document.getElementById("skills");
  const skillBtn = document.getElementById("show-skills");

  skillList.classList.toggle("hidden");

  if (skillList.classList.contains("hidden")) {
    skillBtn.textContent = "Show Skills";
  } else {
    skillBtn.textContent = "Hide Skills";
  }
}
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  const observerOptions = {
    root: null, // use the viewport
    rootMargin: "0px",
    threshold: 0.5 // trigger when 50% of the section is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Remove 'active' class from all links
        navLinks.forEach(link => {
          link.classList.remove("active");
        });

        // Get the ID of the intersecting section
        const currentSectionId = entry.target.id;
        
        // Add 'active' class to the corresponding link
        const activeLink = document.querySelector(`a[href="#${currentSectionId}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
});

const git = `   <svg
class="w-8 h-8 text-gray-100"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 432 416"
fill="currentColor"
>
<path
  d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z"
/>
</svg>`;

const tweeter = ` <svg
class="w-8 h-8 text-gray-100 "
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
>
<path
  d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93Zm-1.29 19.49h2.04L6.49 3.24H4.3Z"
/>
</svg>`;
const ig = `
  <svg
  class="w-8 h-8 text-gray-100 "
    xmlns="http://www.w3.org/2000/svg"
    width="200"
    height="200"
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    >
      <path
        stroke-dasharray="66"
        stroke-dashoffset="66"
        d="M12 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3z"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.6s"
          values="66;132"
        />
      </path>
      <path
        stroke-dasharray="26"
        stroke-dashoffset="26"
        d="M12 8C14.20914 8 16 9.79086 16 12C16 14.20914 14.20914 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.7s"
          dur="0.4s"
          values="26;0"
        />
      </path>
    </g>
    <circle cx="17" cy="7" r="1.5" fill="currentColor" fill-opacity="0">
      <animate
        fill="freeze"
        attributeName="fill-opacity"
        begin="1.1s"
        dur="0.4s"
        values="0;1"
      />
    </circle>
  </svg>
`;
const In = ` <svg
class="w-8 h-8 text-gray-100 "
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 464 480"
fill="currentColor"
>
<path
  d="M462 274v170h-98V285q0-67-50-67q-37 0-51 36q-3 7-3 24v166h-99q1-269 0-297h99v42l-1 1h1v-1q32-49 89-49q51 0 82 34t31 100zM58 4Q33 4 17.5 18.5T2 55t15 37t39 15h1q25 0 40.5-15T113 55q-1-22-16-36.5T58 4zM7 444h99V147H7v297z"
/>
</svg>`;
const menu = ` <svg
class="w-7 h-7"
fill="none"
stroke="currentColor"
stroke-width="1.5"
viewBox="0 0 24 24"
>
<path
  stroke-linecap="round"
  stroke-linejoin="round"
  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
/>
</svg>`;
const arrowR = `<svg class='w-7 h-7 text-black' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
</svg>`;
document.getElementById("GitHub").innerHTML = git;
document.getElementById("X").innerHTML = tweeter;
document.getElementById("Instagram").innerHTML = ig;
document.getElementById("LinkedIn").innerHTML = In;
document.getElementById("menu-btn").innerHTML = menu;
document.getElementById("link").innerHTML = arrowR;
document.getElementById("link1").innerHTML = arrowR;
document.getElementById("link2").innerHTML = arrowR;
document.getElementById("link3").innerHTML = arrowR;
