export default function menuLoad(goomBurger, koopasta, toadHole, lasagne) {
    const mainContent = document.querySelector('#content');
    const body = document.querySelector('#body');

    // Remove any existing content in the tab.
    if (body.classList.contains('home')) {
        body.innerHTML = '';
        body.classList.remove('home');
    }
    else if (body.classList.contains('about')) {
        body.innerHTML = '';
        body.classList.remove('about');
    }
    else {
        console.log('Menu!')
        return; // Menu is already loaded.
    }

    body.classList.add('menu');
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

    // Append to Body
    body.appendChild(menuItems);
    menuItems.appendChild(item1);
    menuItems.appendChild(item2);
    menuItems.appendChild(item3);
    menuItems.appendChild(item4);
}