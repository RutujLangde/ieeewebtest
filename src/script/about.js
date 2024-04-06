const aboutcontent = document.querySelector(".aboutcontent");
const aboutsections = gsap.utils.toArray(".aboutcontent section");
const text = gsap.utils.toArray(".animn");


let scrollTweenabout = gsap.to(aboutsections, {
  xPercent: -75 * (aboutsections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".aboutcontent",
    pin: true,
    scrub: 1,
    end: "+=3000",
    // snap: 1 / (sections.length - 1),
    markers: false,

    
  }
});


// //Progress bar animation



// whizz around the sections
aboutsections.forEach((aboutsections) => {
  // grab the scoped text
  let textt = aboutsections.querySelectorAll(".animn");
  
  // bump out if there's no items to animate
  if(textt.length === 0)  return 
  
  // do a little stagger
  gsap.from(textt, {
    y: -130,
    opacity: 0,
    duration: 2,
    ease: "elastic",
    stagger: 0.1,
    scrollTrigger: {
      trigger: aboutsections,
      containerAnimation: scrollTweenabout,
      start: "left center",
      markers: false
    }
  });
});