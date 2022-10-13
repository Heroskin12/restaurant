export default function homeLoad() {
    console.log('Home!')
    const body = document.querySelector('#body');

    // Check if Home is already loaded or not.    
    if (body.classList.contains('about')) {
        body.innerHTML = '';
        body.classList.remove('about');
    }
    else if (body.classList.contains('menu')) {
        body.innerHTML = '';
        body.classList.remove('menu');
    }
    else if (body.classList.contains('home')) {
        return;
    }
    
    // Create Body Elements
    body.classList.add('home')
    const bodyTitle = document.createElement('h2');
    bodyTitle.innerText = 'Come taste the finest delicacies that the Mushroom Kingdom has to offer...';
    body.appendChild(bodyTitle);   
}