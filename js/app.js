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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

// Navigation 'ul' element, this will be used as a container to the 'li' elements.
const nav = document.getElementById("navbar__list")

// this list contains the availble 'section' elements, that will be used to set the navigation list elements.
const sections = document.querySelectorAll("section");



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// [getOffset] function will help determine the offset of the element relative to the current offset.
const getOffset = (element) => {
    return element.getBoundingClientRect().top;
};

// [removeClassName] function will help remove a class name from a given element.
const removeClassName = (element, className) => {
    element.classList.remove(className);
}

// [addClassName] does the opposite of [removeClassName].
const addClassName = (element, className) => {
    element.classList.add(className);
}

const getLinks = () => document.querySelectorAll(".navbar__menu a");

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

/*
Function [buildNav] will be used to set the navigation list items.  
list item: list item element (li) with a link (a), that if clicked, navigates the user to the section. 
*/
const buildNav = () => {
    // Fragment will be used to reduce repaint and reflow operations on [nav] element. 
    const navListsFragment = document.createDocumentFragment();

    sections.forEach(section => {
        // This is used to create both the li and a elements
        const sectionItem = document.createElement('li');
        const itemLink = document.createElement('a');

        // The following, will set the class name, hyper reference, and the text content to the 'a' element :
        itemLink.className = "menu__link ";
        itemLink.href = `#${section.id}`;
        itemLink.textContent = section.dataset.nav;

        // This appends the li and a elements created to the navigation list fragment [navListsFragment].
        sectionItem.appendChild(itemLink);
        navListsFragment.appendChild(sectionItem)
    });

    /* 
    This loop is used to ensure that there is navigation list items that exist in the html
    somehow before adding the list elements. 
    */
    while (nav.firstChild) {
        nav.removeChild(nav.firstChild);
    }

    // This will repaint and reflow the document to set the navigation list items.
    nav.appendChild(navListsFragment);
}



// Add class 'active' to section when near top of viewport

const activeSectionListener = () => {
    sections.forEach(section => {
        const offset = getOffset(section);

        removeClassName(section, "your-active-class");
        if (offset < 150 && offset > -150) {
            addClassName(section, "your-active-class");
        }
    });
}


const activateSectionInView = () => {
    const navigationLinks = getLinks();

    console.log(navigationLinks[0].innerHTML);
    navigationLinks.forEach(link => {
        link.addEventListener("click", (event) => scrollToSectionByLink(event, link.href));
    });
}

// For each scroll event there, [activateSectionInView] will be invoked
const setSectionInViewListeneres = () => {
    window.addEventListener('scroll', activateSectionInView);
}




// Scroll to anchor ID using scrollTO event

// [scrollToSectionByLink] function invoked when a link is clicked and smoothly navigates to corresponding section. 
const scrollToSectionByLink = (event, sectionId) => {
    /* 
    I am preventing default behavior, especially, the addition to the url "#{sectionid}"
    which makes the url a bit unclean with the '#' symbol. 
    */

    event.preventDefault();

    // This is to extract section ID from link href (href returns absolute url)
    sectionId = sectionId.split('#')[1];

    const section = document.getElementById(sectionId);

    // scroll to section using the y axis of the top of section given by link 'href'.  
    window.scrollTo({
        top: section.offsetTop, // this is the offset of the specified section element
        behavior: "smooth",
    });
}

// [setLinkEventListeners] function is used to navigate using the link (anchor) to the corresponding section 
const setLinkEventListeners = () => {
    const navigationLinks = getLinks();

    navigationLinks.forEach(link => {
        link.addEventListener("click", event => {

            scrollToSectionByLink(event, link.href);
        });
    });
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();

// Scroll to section on link click
setLinkEventListeners();

// Set sections as active
activateSectionInView();
