const tl = gsap.timeline();

const slide1 = document.querySelector(".bg-shutter1");
const slide2 = document.querySelector(".bg-shutter2");

const slide3 = document.querySelector(".bg-shutter3");
const shutterDiv = document.querySelector(".shutter-div");

function shutterAnimation() {
  gsap.to(slide1, {
    y: "-100%",
    duration: 3,
    delay: 1.5,
  });
  gsap.to(slide2, {
    y: "-100%",
    duration: 4,
    delay: 1.8,
  });
  gsap.to(slide3, {
    y: "-100%",
    duration: 5,
    delay: 2,
  });
  gsap.to(shutterDiv, {
    y: "-100%",
    duration: 5.2,
    delay: 1.5,
  });
}
shutterAnimation();
const fullNav = document.querySelector(".fullNav");
let navClick = false;
document.querySelector(".nav").addEventListener("click", () => {
  if (navClick) {
    gsap.to(fullNav, {
      x: "105%",
      duration: 2,
    });
    navClick = false;
  } else {
    // fullNav.style.position ,
    (top = 0),
      (right = 0),
      gsap.to(fullNav, {
        x: "-104%",
        // y:"1%",
        duration: 1.2,

        //   ease: "elastic"
      });
    navClick = true;
  }
});

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  let scrollDown = false;

  if (currentScroll > lastScrollTop) {
    scrollDown = true;
    console.log("Scrolling Down");
  } else if (currentScroll < lastScrollTop) {
    scrollDown = false;
    console.log("Scrolling Up");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// const projectCards = document.querySelectorAll(".project-card");

// projectCards.forEach((card)=>{
//   card.addEventListener("mousemove", (det)=>{

//   });
//   card.addEventListener('mouseleave', ()=>{
//     document.querySelector("")
//   })
// })

const projectCard1 = document.querySelector(".project-card1");
const projectCard2 = document.querySelector(".project-card2");
const projectCard3 = document.querySelector(".project-card3");

const pc1Hover = document.querySelector(".pc1-hover");
const pc2Hover = document.querySelector(".pc2-hover");
const pc3Hover = document.querySelector(".pc3-hover");

projectCard1.addEventListener("mousemove", (e) => {
  const rect = projectCard1.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top; // Move both if needed — remove pc2Hover if it's not required

  pc1Hover.style.zIndex = 50;
  pc2Hover.style.zIndex = 50;
  pc3Hover.style.zIndex = 50;
  gsap.to(pc1Hover, {
    x: mx,
    y: my,
  });
});

projectCard1.addEventListener("mouseleave", () => {
  pc1Hover.style.zIndex = 0;
  pc2Hover.style.zIndex = 0;
  pc3Hover.style.zIndex = 0;
});

projectCard2.addEventListener("mousemove", (e) => {
  const rect = projectCard2.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top; // Move both if needed — remove pc2Hover if it's not required

  pc1Hover.style.zIndex = 50;
  pc2Hover.style.zIndex = 50;
  pc3Hover.style.zIndex = 50;

  gsap.to(pc2Hover, {
    x: mx,
    y: my,
  });
});

projectCard2.addEventListener("mouseleave", () => {
  pc1Hover.style.zIndex = 0;
  pc2Hover.style.zIndex = 0;
  pc3Hover.style.zIndex = 0;
});

projectCard3.addEventListener("mousemove", (e) => {
  const rect = projectCard3.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top; // Move both if needed — remove pc2Hover if it's not required

  pc1Hover.style.zIndex = 50;
  pc2Hover.style.zIndex = 50;
  pc3Hover.style.zIndex = 50;

  gsap.to(pc3Hover, {
    x: mx,
    y: my,
  });
});

projectCard3.addEventListener("mouseleave", () => {
  pc1Hover.style.zIndex = 0;
  pc2Hover.style.zIndex = 0;
  pc3Hover.style.zIndex = 0;
});
