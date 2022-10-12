export default function pageLoad(mushroom, goomBurger, lasagne, koopasta, toadHole) {

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
    navItem1.classList.add('nav_item');
    navItem1.textContent = "Home";
    navList.appendChild(navItem1);
    const navItem2 = document.createElement('li');
    navItem2.classList.add('nav_item');
    navItem2.textContent = "About";
    navList.appendChild(navItem2);
    const navItem3 = document.createElement('li');
    navItem3.classList.add('nav_item');
    navItem3.textContent = "Menu";
    navList.appendChild(navItem3);

    // Create Body Elements
    const bodyTitle = document.createElement('h2');
    bodyTitle.innerText = 'Come taste the finest delicacies that the Mushroom Kingdom has to offer...';
    const menuItems = document.createElement('div');
    const item1 = document.createElement('div');
    const item2 = document.createElement('div');
    const item3 = document.createElement('div');
    const item4 = document.createElement('div');

    menuItems.classList.add('menu_items');
    item1.classList.add('item');
    item1.innerText = "Mario's Goomburger";
    item2.classList.add('item');
    item2.innerText = "Bowser's King Koopasta";
    item3.classList.add('item');
    item3.innerText = "Toad in the Hole";
    item4.classList.add('item');
    item4.innerText = "Luigi Lasagne";

    // Images
    const goomBurgerIm = new Image();
    goomBurgerIm.src = goomBurger;
    item1.appendChild(goomBurgerIm);

    const koopastaIm = new Image();
    koopastaIm.src = koopasta;
    item2.appendChild(koopastaIm);

    const toadHoleIm = new Image();
    toadHoleIm.src = toadHole;
    item3.appendChild(toadHoleIm);

    const lasagneIm = new Image();
    lasagneIm.src = lasagne;
    item4.appendChild(lasagneIm);

    body.appendChild(bodyTitle);
    body.appendChild(menuItems);
    menuItems.appendChild(item1);
    menuItems.appendChild(item2);
    menuItems.appendChild(item3);
    menuItems.appendChild(item4);

    // Create Footer Elements
    const footerP = document.createElement('p');
    footerP.innerHTML = 'Mushroom icon designed by <span>Those Icons</span> from Flaticon';
    footer.appendChild(footerP);
    
}
