console.log("Hello World!");

const myName = "Mohammed Naser";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);

// h1.textContent = myName

// h1.style.backgroundColor = 'red';
// h1.style.padding = "5rem"

// h1.addEventListener('click',function(){
//   h1.textContent = myName

//   h1.style.backgroundColor = 'red';
//   h1.style.padding = "5rem"
// })
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work

const navButton = document.querySelector(".btn-mobile-nav");
const headerElement = document.querySelector(".header");

navButton.addEventListener("click", function () {
  headerElement.classList.toggle("nav-open");
});
///////////////////////////////////////////////////////////
// smooth scrolling animation

const id = document.querySelectorAll("a:link");
id.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);
    //scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    // SCroll to other linke
    if (href !== "#" && href.startsWith("#")) {
      const SectionEl = document.querySelector(href);
      SectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // close nav
    if (link.classList.contains("nav-header"))
      headerEl.classList.toggle("nav-open");
  });
});
//////////////////////////////////////////////////////////
// Stickey nav
// const sectionHero = document.querySelector(".hero-section");
//
// const stick = new IntersectionObserver(
//   function (entries) {
//     const en = entries[0];
//     if (en.isIntersecting === false) {
//       document.body.classList.add("sticky");
//     }
//     if (en.isIntersecting === true) {
//       document.body.classList.remove("sticky");
//     }
//   },
//   {
//     // In the viewport
//     // root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );
// stick.observe(sectionHero);
///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
