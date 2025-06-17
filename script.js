const tl = gsap.timeline();

const slide1 = document.querySelector(".bg-shutter1");
const slide2 = document.querySelector(".bg-shutter2");

const slide3 = document.querySelector(".bg-shutter3");
const shutterDiv = document.querySelector(".shutter-div");

// Hero Section 1 Animations
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
  gsap.from(".logo-text h1", {
    y: "60%",
    duration: 2.6,
    opacity: 0,
    delay: 2.5,
  });
  let hero_txt = document.querySelector(".s1-btm-txt");
  let split_txt = hero_txt.textContent.split("");
  hero_txt.textContent = " ";

  split_txt.forEach((txt) => {
    let span = document.createElement("span");
    span.textContent = txt;
    hero_txt.appendChild(span);
  });
  gsap.from(".s1-btm-txt span", {
    y: "100%",
    duration: 2,
    stagger: 0.05,
    delay: 2.6,
    opacity: 0,
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

// Hero Sections 2 Animations
function carouselTxt() {
  gsap.to(".hs2-top .hs2-top-img h1", {
    x: "-700%",
    scrollTrigger: {
      trigger: ".hero-section2",
      scroller: "body",
      // markers: true,
      start: "top 0%",
      end: "top -450%",
      scrub: 2,
      pin: true,
    },
  });

  gsap.from(".hs2-btm h1", {
    x: "-100%",
    opacity: 0,
    duration: 1.5,
    delay: 1.5,
    scrollTrigger: {
      trigger: ".hero-section2",
      scroller: "body",
      // markers: true,
      start: "top 20%",
      scrub: true,
    },
  });

  let paraElement = document.querySelector(".hs2-btm p");
  let textContent = paraElement.textContent;
  let split_para = textContent.split("");

  paraElement.textContent = "";
  paraElement.classList.add("para-elm");

  split_para.forEach((char) => {
    let span = document.createElement("span");
    span.textContent = char;
    paraElement.appendChild(span);
  });

  gsap.from(".para-elm span", {
    x: "-150%",
    opacity: 0,
    stagger: 0.02,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".hero-section2",
      scroller: "body",
      // markers: true,
      start: "top 10%",
      scrub: true,
    },
  });
}
carouselTxt();

function projectCardMouseMove() {
  const projectCard1 = document.querySelector(".project-media");
  const projectCard2 = document.querySelector(".project-media2");
  const projectCard3 = document.querySelector(".project-media3");

  const pc1Hover = document.querySelector(".pc1-hover");
  const pc2Hover = document.querySelector(".pc2-hover");
  const pc3Hover = document.querySelector(".pc3-hover");

  projectCard1.addEventListener("mousemove", (e) => {
    console.log("hello");
    document.querySelector(".hover-overlay").style.display = "flex";
    projectCard1.style.overflow = "hidden";
    const rect = projectCard1.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    pc1Hover.style.zIndex = 50;
    pc1Hover.style.opacity = 1;
    pc2Hover.style.zIndex = 0;
    pc3Hover.style.zIndex = 0;

    // Animate pc1Hover with GSAP
    gsap.to(pc1Hover, {
      x: mx,
      y: my,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  projectCard1.addEventListener("mouseleave", () => {
    pc1Hover.style.zIndex = 0;
    pc1Hover.style.opacity = 0;
    pc2Hover.style.zIndex = 0;
    pc3Hover.style.zIndex = 0;
    document.querySelector(".hover-overlay").style.display = "none";
  });

  projectCard2.addEventListener("mousemove", (e) => {
    const rect = projectCard2.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    document.querySelector(".project-media2 .hover-overlay").style.display =
      "flex";
    // projectCard1.style.overflow = 'hidden';

    pc1Hover.style.zIndex = 0;
    pc2Hover.style.zIndex = 50;
    pc2Hover.style.opacity = 1;
    pc3Hover.style.zIndex = 0;

    gsap.to(pc2Hover, {
      x: mx,
      y: my,
    });
  });

  projectCard2.addEventListener("mouseleave", () => {
    pc1Hover.style.zIndex = 0;
    pc2Hover.style.zIndex = 0;
    pc2Hover.style.opacity = 0;
    pc3Hover.style.zIndex = 0;
    document.querySelector(".project-media2 .hover-overlay").style.display =
      "none";
  });

  projectCard3.addEventListener("mousemove", (e) => {
    const rect = projectCard3.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    document.querySelector(".project-media3 .hover-overlay").style.display =
      "flex";

    pc1Hover.style.zIndex = 0;
    pc2Hover.style.zIndex = 0;
    pc3Hover.style.zIndex = 50;
    pc3Hover.style.opacity = 1;

    gsap.to(pc3Hover, {
      x: mx,
      y: my,
    });
  });

  projectCard3.addEventListener("mouseleave", () => {
    document.querySelector(".project-media3 .hover-overlay").style.display =
      "none";
    pc1Hover.style.zIndex = 0;
    pc2Hover.style.zIndex = 0;
    pc3Hover.style.zIndex = 0;
    pc3Hover.style.opacity = 0;
  });
}
projectCardMouseMove();

function hero3VideoPlay() {
  const vdBtn1 = document.querySelector(".h3-vbtn1");
  const img1 = document.querySelector(".project-card1 .project-img");
  const video1 = document.querySelector(".project-card1 .project-video");

  gsap.set(video1, { opacity: 0, display: "none" });

  vdBtn1.addEventListener("click", () => {
    gsap.to(img1, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        gsap.set(img1, { display: "none" });
      },
    });

    gsap.set(video1, { display: "block" });
    gsap.to(video1, {
      opacity: 1,
      duration: 0.5,
    });
  });

  video1.addEventListener("click", () => {
    gsap.to(video1, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        gsap.set(video1, { display: "none" });
      },
    });

    gsap.set(img1, { display: "block" });
    gsap.to(img1, {
      opacity: 1,
      duration: 0.5,
    });
  });
}
hero3VideoPlay();

function hero3VideoPlay2() {
  const vdBtn1 = document.querySelector(".h3-vbtn2");
  const img1 = document.querySelector(".project-card2  .project-img");
  const video1 = document.querySelector(".project-card2  .project-video");

  gsap.set(video1, { opacity: 0, display: "none" });

  vdBtn1.addEventListener("click", () => {
    gsap.to(img1, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        gsap.set(img1, { display: "none" });
      },
    });

    gsap.set(video1, { display: "block" });
    gsap.to(video1, {
      opacity: 1,
      duration: 0.5,
    });
  });

  video1.addEventListener("click", () => {
    gsap.to(video1, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        gsap.set(video1, { display: "none" });
      },
    });

    gsap.set(img1, { display: "block" });
    gsap.to(img1, {
      opacity: 1,
      duration: 0.5,
    });
  });
}
hero3VideoPlay2();

function hero3VideoPlay3() {
  const vdBtn1 = document.querySelector(".h3-vbtn3");
  const img1 = document.querySelector(".project-card3  .project-img");
  const video1 = document.querySelector(".project-card3  .project-video");

  gsap.set(video1, { opacity: 0, display: "none" });

  vdBtn1.addEventListener("click", () => {
    gsap.to(img1, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        gsap.set(img1, { display: "none" });
      },
    });

    gsap.set(video1, { display: "block" });
    gsap.to(video1, {
      opacity: 1,
      duration: 0.5,
    });
  });

  video1.addEventListener("click", () => {
    gsap.to(video1, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        gsap.set(video1, { display: "none" });
      },
    });

    gsap.set(img1, { display: "block" });
    gsap.to(img1, {
      opacity: 1,
      duration: 0.5,
    });
  });
}
hero3VideoPlay3();

function heroSection4Animations() {
  const text_container = document.querySelector(".hs4-info-div div p");
  const split_text = text_container.textContent.split("");
  text_container.textContent = "";

  split_text.forEach((text) => {
    const span = document.createElement("span");
    span.textContent = text;
    text_container.appendChild(span);
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".hs4-info-div div p span", {
    x: "-10%",
    opacity: 0,
    // duration: 1,
    ease: "power2.out",
    stagger: 0.02,
    scrollTrigger: {
      trigger: ".hs4-info-div",
      scroller: "body",
      start: "top 90%",
      toggleActions: "play none none reverse",
      once: true,
      // scrub:2
    },
  });

  gsap.from(".hs4-info-div div .link-learn", {
    x: "-10%",
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.02,
    scrollTrigger: {
      trigger: ".hs4-info-div",
      scroller: "body",
      start: "top 80%",
      toggleActions: "play none none reverse",
      // scrub:2
    },
  });
  let s4BgChecker = false;
  document.querySelector(".hs4-div2 h1").addEventListener("click", () => {
    let frm = document.querySelector(".hs4-form");
    let img = document.querySelector(".form-section img");
    let formSection = document.querySelector(".form-section");

    if (s4BgChecker) {
      gsap.to(".text-section", {
        backgroundColor: "#F06446",
        color: "white",
      });
      gsap.to(".text-section .hs4-info-div div p", {
        color: "white",
        zIndex: 50,
      });
      gsap.to(".text-section .hs4-info-div .hs4-div2 h1", {
        color: "white",
        zIndex: 50,
      });

      frm.style.display = 'none';
      img.style.display = 'flex';
      
      formSection.style.padding = "0px";
      s4BgChecker = false;
    } else {
      gsap.to(".text-section", {
        backgroundColor: "white",
        color: "black",
      });
      gsap.to(".text-section .hs4-info-div div p", {
        color: "black",
        zIndex: 50,
      });
      gsap.to(".text-section .hs4-info-div .hs4-div2 h1", {
        color: "black",
        zIndex: 50,
      });
      frm.style.display = 'flex';
      formSection.style.padding = "30px";
      img.style.display = 'none';
      s4BgChecker = true;
    }

  });
}

heroSection4Animations();
