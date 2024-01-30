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
const sections = document.getElementsByTagName("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



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
        sectionLink.className = "navbar__link"; 
        sectionLink.href = `#${section.id}`; 
        sectionLink.textContent = section.dataset.nav;  

        // This appends the li and a elements created to the navigation list fragment [navListsFragment].
        sectionItem.appendChild(itemLink);
        navListsFragment.appendChild(sectionItem)
    });

    // This will repaint and reflow the document to set the navigation list items.
    nav.innerHTML = navListsFragment;
} 


// Invoking the building function to set the navigation list.
buildNav();


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


