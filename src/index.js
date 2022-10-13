// Dependency Imports
import './style.css';
import load, {consoley} from './pageLoad.js';
import mushroom from './mushroom.png';
import goomBurger from './goomburger2.jpg';
import toadHole from './toadHole.jpg';
import koopasta from './koopasta.jpg';
import lasagne from './lasagne.jpeg'
import menuLoad from './menu';
import homeLoad from './homeLoad'

// Console Log Debugger Checks

//console.log('Hello, I am running because of npm run build.') SUCCESS
//console.log('Hello, I am running because of npx webpack --watch.') SUCCESS

// Page Load Function
load(mushroom);
homeLoad();

// If Home Tab is Clicked
const home = document.querySelector('.home');
home.addEventListener('click', () => {
    homeLoad();
})

// If About Tab is Clicked
const about = document.querySelector('.about')
about.addEventListener('click', () => {
    aboutLoad();
})

// If Menu Tab is Clicked
const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
    menuLoad(goomBurger, toadHole, koopasta, lasagne);
})

