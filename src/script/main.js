
// set up text to print, each item in array is new line
var aText = new Array(
    " We think slightly out of the box, we believe that a club’s resources must not only be channeled into conducting events but also to propagate learning and teaching, symbiotically.",

);
var iSpeed = 50; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}


typewriter();

const menuToggle = document.querySelector('.menu-toggle');
const menuSection = document.querySelector('.menu-section');
const navLinks = document.querySelector('nav ul');

function closemenu(){
    navLinks.classList.toggle('hidden');
}


function toggleMenu() {

    menuToggle.classList.toggle('on');
    menuSection.classList.toggle('on');
    navLinks.classList.toggle('hidden');
}


const teamSection = document.getElementById("teams");
const teamScrollContainer = document.getElementById("teamshorizontalscroll");
const scrollSpeedFactor = 0.2; // Adjust this value to control the scroll speed

// Options for the Intersection Observer
const options = {
    root: null, // Use the viewport as the root
    rootMargin: "0px",
    threshold: 0 // Trigger when the entire target is in view
};

// Callback function when the teams section intersects with the viewport
const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Start horizontal scrolling
            teamScrollContainer.addEventListener("wheel", scrollHandler);
        } else {
            // Stop horizontal scrolling
            teamScrollContainer.removeEventListener("wheel", scrollHandler);
        }
    });
};

// Intersection Observer instance
const observer = new IntersectionObserver(callback, options);
observer.observe(teamSection);

// Scroll event handler for horizontal scrolling
const scrollHandler = (evt) => {
    evt.preventDefault();
    teamScrollContainer.scrollLeft += evt.deltaY * scrollSpeedFactor;
};


