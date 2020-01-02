/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


/**
 * Define Global Variables
 * 
*/

const menu = ['Home', 'section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7'];


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// This function highligts the links when hover over them
function point(){
    const anchors = document.querySelectorAll('a');
    const anchorsArr = Array.from(anchors);

    // it is checking for each link if mouse enters or leave the link so it highlights then
    anchorsArr.forEach(el => {

        // if mouse enters the link, link is highlighted
        el.addEventListener('mouseenter', event => {
            event.target.style.textDecoration = 'underline';
        });

        // if mouse leaves the link, link goes back to previous style
        el.addEventListener('mouseleave', event => {
            event.target.style.textDecoration = 'none';
        });
    });
}

// this function hides shows navbar when scrolled through the page
function hideNavbar(){

    // following function would work when user scrolls down the page
    window.onscroll = function(){
        // checks if scroll is not on top of the page
        if(window.scrollY !== 0) {
                    document.querySelector('.navbar__menu').style.top = "0";

                    // it makes the navbar to wait some time before disappearingfrom the screen
                    setTimeout(() => {
                        document.querySelector('.navbar__menu').style.top = "-50px";
                        document.querySelector('html').addEventListener('mousemove', () => {
                            document.querySelector('.navbar__menu').style.top = "0";
                        });
                    }, 20000);
        }

        // it doesn't let the navbar disappear if it's the top of the page
        if(window.scrollY === 0){
            document.querySelector('.navbar__menu').style.top = "0";
            console.log(0);
        } 
    }
    
}

// active link when scrolls to a section
function activeWhenScroll(){
    window.onscroll = function(){

        // selects all sections and then convert that nodeList into an array
        const sections =  document.querySelectorAll('section');
        sectionsArr = Array.from(sections)

        //iterates through all the sections
        sectionsArr.forEach(el => {

            el.addEventListener('mouseenter',function() {
                let id = this.id;                                       // stores the id of current section

                // selects and remove active class from all the navbar elements
                const activeLi = document.querySelectorAll(".active");
                const activeLiArr = Array.from(activeLi);
                activeLiArr.forEach(el => {
                    el.classList.remove('active');                       // remove active class form all the links
                });
                
                // adding active class to current section's li
                const a = document.querySelector(`a[href="#${id}"]`);   // selecting link of same id as the id of current section
                a.parentElement.classList.add('active');                // it selects the li of the anchor tag to add active class
            })
        })
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav(menueEntries){

    // this loop iterate through all the menu enteries given to it and make a navbar of them
    for (let menueEntry of menueEntries) {
        const ul = document.getElementById("navbar__list");     // selects the unordered list
        const navListElement = document.createElement('li');    // creates a list item in that unordered list
        const navElement = document.createElement('a');         // creates an anchor tag
        navListElement.appendChild(navElement);                 // makes anchor tag the child of list item
    
        navElement.textContent = menueEntry;        // giving the link a name(text)
        navElement.href = '#' + menueEntry;         // creating a link dynamically for each item
    
        ul.appendChild(navListElement);
    }
}


// Add class 'active' to section when near top of viewport
function active(){
    const li = document.querySelectorAll('li');
    const liArr = Array.from(li);

    // it iterates through all links to give them an active class when clicked
    liArr.forEach(el => {
        el.addEventListener('click', event => {
        const activeLi = document.querySelectorAll(".active");
        const activeLiArr = Array.from(activeLi);
        activeLiArr.forEach(el => {
            el.classList.remove('active');          // remove active class form all the links
        });
        
        el.classList.add('active');                 // add active class to clicked link only
        
        });
    });
}


// Scroll to anchor ID using scrollTO event
function scrollToAnchorID(){
    const anchors = document.querySelectorAll('a');
    const anchorsArr = Array.from(anchors);

    // give the link id of the section so it scrolls to that section
    anchorsArr.forEach((el, i) => {
        el.addEventListener('click', event => {
            el.href = '#section' + i;
        });
    });

    const x = document.querySelector('li');
    x.addEventListener('click', function(){
        window.scrollTo(0, 0);
    });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav(menu);

// Scroll to section on link click
scrollToAnchorID();

// Set sections as active
active();

// Highlight links when hover over them
point();

// Hiding navbar
hideNavbar();

// Active link when scroll
activeWhenScroll();


