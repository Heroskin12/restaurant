export default function pageLoad(mushroom) {

    // Get the main html div.
    const contentDiv = document.querySelector('#content');

    // Create all necessary elements.

    // Create Home Sections
    const nav = document.createElement('section');
    nav.setAttribute('id', 'nav');
    contentDiv.appendChild(nav);

    const body = document.createElement('section');
    body.setAttribute('id', 'body');
    contentDiv.appendChild(body);

    const footer = document.createElement('section');
    footer.setAttribute('id', 'footer');
    contentDiv.appendChild(footer);
    

    // Create Nav Elements
    const mushroomIcon = new Image();
    mushroomIcon.src = mushroom;
    mushroomIcon.classList.add('mushroom_icon');
    mushroomIcon.alt = 'Icon of Mario Mushroom';
    nav.appendChild(mushroomIcon);

    const navList = document.createElement('ul');
    nav.appendChild(navList);

    const navItem1 = document.createElement('li');
    navItem1.classList.add('nav_item', 'home');
    navItem1.textContent = "Home";
    navList.appendChild(navItem1);
    const navItem2 = document.createElement('li');
    navItem2.classList.add('nav_item', 'about');
    navItem2.textContent = "About";
    navList.appendChild(navItem2);
    const navItem3 = document.createElement('li');
    navItem3.classList.add('nav_item', 'menu');
    navItem3.textContent = "Menu";
    navList.appendChild(navItem3);

    // Create Footer Elements
    const footerP = document.createElement('p');
    footerP.innerHTML = 'Mushroom icon designed by <span>Those Icons</span> from Flaticon';
    footer.appendChild(footerP);
    
}
