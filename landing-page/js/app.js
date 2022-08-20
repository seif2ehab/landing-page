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
const AllSections = Array.from(document.querySelectorAll("section"));

const NavBarMenu = document.getElementById("navbar__list");

const CreateNewLi = () => {
   for (section of AllSections) {
      const NewListItem = document.createElement("li");

      const sectioname = section.getAttribute('data-nav');

      const sectionlink = section.getAttribute('id');

      NewListItem.innerHTML = `<a class="menu__link" href='#${sectionlink}'>${sectioname}</a>`;

      NavBarMenu.appendChild(NewListItem);
   }
} CreateNewLi();
/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


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


