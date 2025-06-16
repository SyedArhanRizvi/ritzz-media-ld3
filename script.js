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
const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {
  const video = card.querySelector(".project-video");
  const img = card.querySelector(".project-img");

  card.addEventListener("mouseenter", () => {
    cards.forEach((c) => {
      if (c !== card) c.style.display = "none";
    });

    img.style.display = "none";
    video.style.display = "block";

    gsap.to(".hero-section3", {
      backgroundColor: "black",
      duration: 1,
      ease: "power2.out",
    });

    gsap.to(card, {
      height: "100%",
      width: "100%",
      duration: 1,
      ease: "power2.out",
    });
  });

  card.addEventListener("mouseleave", () => {
    cards.forEach((c) => (c.style.display = "flex"));

    img.style.display = "block";
    video.style.display = "none";

    gsap.to(".hero-section3", {
      backgroundColor: "white",
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(card, {
      height: "97vh",
      width: "33vw",
      duration: 0.5,
      ease: "power2.out",
    });
  });
});
