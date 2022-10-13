// Dependency Imports
import './style.css';
import load from './pageLoad.js';
import mushroom from './mushroom.png';
import goomBurger from './goomburger2.jpg';
import toadHole from './toadHole.jpg';
import koopasta from './koopasta.jpg';
import lasagne from './lasagne.jpeg';
import restaurant from './marioRestaurant.png';
import marioWorld from './marioWorld.jpg';
import menuLoad from './menu';
import homeLoad from './home';
import aboutLoad from './about';

// Console Log Debugger Checks

//console.log('Hello, I am running because of npm run build.') SUCCESS
//console.log('Hello, I am running because of npx webpack --watch.') SUCCESS

// Page Load Function
load(mushroom);
homeLoad();

// If Home Tab is Clicked
const home = document.querySelector('.home');
home.addEventListener('click', () => {
    console.log('I reach here.')
    homeLoad();
})

// If About Tab is Clicked
const about = document.querySelector('.about')
about.addEventListener('click', () => {
    aboutLoad(restaurant, marioWorld);
})

// If Menu Tab is Clicked
const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
    menuLoad(goomBurger, toadHole, koopasta, lasagne);
})

