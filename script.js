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
    // opacity: 0,
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
    // opacity: 0,
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

// function heroSection4Animations() {
//   const text_container = document.querySelector(".hs4-info-div div p");
//   const split_text = text_container.textContent.split("");
//   text_container.textContent = "";

//   split_text.forEach((text) => {
//     const span = document.createElement("span");
//     span.textContent = text;
//     text_container.appendChild(span);
//   });

//   gsap.registerPlugin(ScrollTrigger);

//   gsap.from(".hs4-info-div div p span", {
//     x: "-10%",
//     opacity: 0,
//     // duration: 1,
//     ease: "power2.out",
//     stagger: 0.02,
//     scrollTrigger: {
//       trigger: ".hs4-info-div",
//       scroller: "body",
//       start: "top 90%",
//       toggleActions: "play none none reverse",
//       once: true,
//       // scrub:2
//     },
//   });

//   gsap.from(".hs4-info-div div .link-learn", {
//     x: "-10%",
//     opacity: 0,
//     duration: 1,
//     ease: "power2.out",
//     stagger: 0.02,
//     scrollTrigger: {
//       trigger: ".hs4-info-div",
//       scroller: "body",
//       start: "top 100%",
//       toggleActions: "play none none reverse",
//       // scrub:2
//     },
//   });
//   let s4BgChecker = false;
//   document.querySelector(".hs4-div2 button").addEventListener("click", () => {
//     let frm = document.querySelector(".hs4-form");
//     let img = document.querySelector(".form-section img");
//     let formSection = document.querySelector(".form-section");

//     if (s4BgChecker) {
//       gsap.to(".text-section", {
//         backgroundColor: "#F06446",
//         color: "white",
//       });
//       gsap.to(".text-section .hs4-info-div div p", {
//         color: "white",
//         zIndex: 50,
//       });
//       gsap.to(".text-section .hs4-info-div .hs4-div2 button", {
//         color: "white",
//         zIndex: 50,
//         border: "1px solid white",
//       });

//       frm.style.display = "none";
//       img.style.display = "flex";

//       formSection.style.padding = "0px";
//       s4BgChecker = false;
//     } else {
//       gsap.to(".text-section", {
//         backgroundColor: "white",
//         color: "black",
//       });
//       gsap.to(".text-section .hs4-info-div div p", {
//         color: "black",
//         zIndex: 50,
//       });
//       gsap.to(".text-section .hs4-info-div .hs4-div2 button", {
//         color: "black",
//         zIndex: 50,
//         border: "1px solid black",
//       });
//       frm.style.display = "flex";
//       formSection.style.padding = "30px";
//       img.style.display = "none";
//       s4BgChecker = true;
//     }
//   });
// }

// heroSection4Animations();

function rotateCardSectionAnimation() {
  let projectCards = document.querySelectorAll(".project-card-hs5");

  projectCards.forEach((card, i) => {
    // Each card will follow a timeline from right-bottom → center → left-bottom
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        scroller: "body",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: true,
      },
    }); // Start: off-screen bottom right

    gsap.set(card, {
      x: 300,
      y: 300,
      opacity: 0,
    }); // Step 1: move to center

    tl.to(card, {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
    }); // Step 2: move off-screen to bottom left

    tl.to(card, {
      x: -300,
      y: 300,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  });
}

// rotateCardSectionAnimation();

function section6HoverAnimate() {
  const alls6Divs = document.querySelectorAll(".sr");
  console.log(alls6Divs[0].classList[1]);
  alls6Divs.forEach((pertDiv) => {
    pertDiv.addEventListener("mouseenter", (e) => {
      console.log("====================================");
      console.log("Hello");
      console.log("====================================");
      let trg_elm = e.target.classList[1];
      let get_trg_elm = document.querySelector(`.${trg_elm}`);

      let child0 = get_trg_elm.children[0];
      let child1 = get_trg_elm.children[1];

      gsap.to(child0, {
        scale: 0.9,
        duration: 0.2,
        onComplete: () => {
          child0.style.display = "none";
          child1.style.display = "flex";
          gsap.fromTo(child1, { scale: 0.9 }, { scale: 1, duration: 0.2 });
        },
      });
    });

    pertDiv.addEventListener("mouseleave", (e) => {
      let trg_elm = e.target.classList[1];
      let get_trg_elm = document.querySelector(`.${trg_elm}`);

      let child0 = get_trg_elm.children[0];
      let child1 = get_trg_elm.children[1];

      gsap.to(child1, {
        scale: 0.9,
        duration: 0.2,
        onComplete: () => {
          child1.style.display = "none";
          child0.style.display = "flex";

          gsap.fromTo(child0, { scale: 0.9 }, { scale: 1, duration: 0.2 });
        },
      });
    });
  });
}
section6HoverAnimate();

function footerAnimation() {
  const footer = document.querySelector("footer");
  if (!footer) return;

  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    footer,
    { scale: 0.1, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 3,
      ease: "power3.in",
      scrollTrigger: {
        trigger: footer,
        scroller: "body",
        start: "top -50%",
        end: "top 10%",
        scrub: 4,
        // markers: true,
        pin: true,
      },
    }
  );
}

footerAnimation();

function aboutOurServicesAnimations() {
  let para_container = document.querySelector(".servive-main h1");
  if (!para_container) return; // Split heading into spans

  let split_para = para_container.textContent.split("");
  para_container.textContent = "";
  split_para.forEach((char) => {
    let span = document.createElement("span");
    span.textContent = char;
    span.style.display = "inline-block";
    span.style.opacity = 0;
    para_container.appendChild(span);
  });

  const spans = para_container.querySelectorAll("span");

  gsap.registerPlugin(ScrollTrigger);
  gsap.to(spans, {
    opacity: 1,
    y: 0,
    stagger: 0.03,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: para_container,
      start: "top 80%", // Adjust as needed
      end: "top 30%",
      scrub: false,
      markers: false,
    },
  });
}

aboutOurServicesAnimations();

function heroSection4DynamicAnime() {
  let rightDiv = document.querySelector(".hero-section4 .right");
  let leftDiv = document.querySelector(".hero-section4 .left");
  let formContainer = document.querySelector(".form-container");
  let frmUnActiveBtn = document.querySelector(".absolute-back-btn button");
  let frmActiveBtn = document.querySelector(".frm-active-btn");
  gsap.set(formContainer, { display: "none", opacity: 0 });

  frmActiveBtn.addEventListener("click", () => {
    // Animate left and right out
    gsap.to([leftDiv, rightDiv], {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        gsap.set([leftDiv, rightDiv], { display: "none" }); // Show and animate formContainer in

        gsap.set(formContainer, { display: "flex" });
        gsap.to(formContainer, { opacity: 1, duration: 0.5 });
      },
    });
  });

  frmUnActiveBtn.addEventListener("click", () => {
    // Animate formContainer out
    gsap.to(formContainer, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        gsap.set(formContainer, { display: "none" }); // Show and animate left and right back in

        gsap.set([leftDiv, rightDiv], { display: "flex" });
        gsap.to([leftDiv, rightDiv], { opacity: 1, duration: 0.5 });
      },
    });
  });
}
heroSection4DynamicAnime();

function heroSection4ScrollAnimations() {
  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  let title1 = document.querySelector(".hero-section4 .right .top h1");
  let allParas = document.querySelectorAll(".hero-section4 .right .top p");
  let countableTexts = document.querySelectorAll(
    ".hero-section4 .right .btm div div h1"
  );

  let title2 = document.querySelector(".hero-section4 .left .btm h1");
  let allParas2 = document.querySelectorAll(".hero-section4 .left .btm p");
  let img = document.querySelector(".hero-section4 .left .top img"); // Title 1 animation

  gsap.from(title1, {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: title1,
      start: "top 105%",
      scrub: 1,
    },
  }); // Paragraphs on right

  allParas.forEach((para, index) => {
    gsap.from(para, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: index * 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: para,
        start: "top 105%",
        scrub: 1,
      },
    });
  });

  countableTexts.forEach((text, index) => {
    gsap.from(text, {
      scale: 0.8,
      opacity: 0,
      duration: 0.7,
      delay: index * 0.1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: text,
        start: "top 105%",
        scrub: 1,
      },
    });
  });

  gsap.from(title2, {
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: title2,
      start: "top 105%",
      scrub: 1,
    },
  });

  allParas2.forEach((para, index) => {
    gsap.from(para, {
      x: -20,
      opacity: 0,
      duration: 0.6,
      delay: index * 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: para,
        start: "top 105%",
        scrub: 1,
      },
    });
  });

  gsap.from(img, {
    scale: 0.8,
    opacity: 0,
    rotate: -10,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: img,
      start: "top 105%",
      scrub: 2,
    },
  });
}

heroSection4ScrollAnimations();
let wheel = document.querySelector(".wheel-carousel");
let images = gsap.utils.toArray(".wheel-card");

function wheelCarouselAnimation() {
  let radius = wheel.offsetWidth / 2.2; // reduced to tighten circle
  let center = wheel.offsetWidth / 2;
  let total = images.length;
  let slice = (2 * Math.PI) / total;

  images.forEach((item, i) => {
    let angle = i * slice;
    let x = center + radius * Math.sin(angle);
    let y = center - radius * Math.cos(angle); // flipped to rotate correctly

    gsap.set(item, {
      xPercent: -50,
      yPercent: -50,
      x: x,
      y: y,
      rotation: (angle * 180) / Math.PI, // converted to degrees
    });
  });
}

wheelCarouselAnimation();
window.addEventListener("resize", wheelCarouselAnimation);

gsap.to(".wheel-carousel", {
  rotate: 360,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero-section5",
    scroller: "body",
    start: "top 0%",
    end: "top -150%",
    scrub: true,
    markers: false,
    pin: true,
    
  },
});

function testimonialCardAnimations() {
  let headerTitle = document.querySelector(".carousel-item .crsl-div div h1");
  let testimonialCards = document.querySelectorAll(".testimonial-card");
  let testimonialDarkCards = document.querySelectorAll(
    ".testimonial-card-dark"
  );
  let testimonialCardTitle1 = document.querySelectorAll(
    ".testimonial-card-dark h1"
  );
  let testimonialCardTitle2 = document.querySelectorAll(".testimonial-card h1");
  let testimonialCardPara1 = document.querySelectorAll(
    ".testimonial-card-dark p"
  );
  let testimonialCardPara2 = document.querySelectorAll(".testimonial-card p");

  let nextBtn = document.querySelector(".carousel-control-next");
  let prevBtn = document.querySelector(".carousel-control-prev");

  gsap.from(headerTitle, {
    y: -60,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
  });

  function animateCards() {
    gsap.fromTo(
      testimonialCards,
      { scale: 0.8, opacity: 0, rotate: -5 },
      {
        scale: 1,
        opacity: 1,
        rotate: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.2,
      }
    );

    gsap.fromTo(
      testimonialDarkCards,
      { opacity: 0, x: -50, skewX: 10 },
      {
        opacity: 1,
        x: 0,
        skewX: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      }
    ); 

    gsap.fromTo(
      testimonialCardTitle1,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      testimonialCardPara1,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      testimonialCardTitle2,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      testimonialCardPara2,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      }
    );
  } 

  animateCards(); 

  nextBtn.addEventListener("click", () => {
    animateCards();
  });

  prevBtn.addEventListener("click", () => {
    animateCards();
  });
}

testimonialCardAnimations();