//Student details
const studentFullName = "Dhaivat Tripathi";
const studentNumber = "1162646";

// log suing templete literals
console.log(`${studentFullName} ${studentNumber}`);

const headerContent = document.querySelector('h1');

// student detail added to h1 in html
headerContent.innerHTML = `${studentFullName} ${studentNumber}`;

// adding class headingPrimary to the h1 in html
headerContent.classList.add("headingPrimary");