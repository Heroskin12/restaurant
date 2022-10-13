export default function homeLoad() {
    console.log('Home!')
    const body = document.querySelector('#body');
    
    // Check if Home is already loaded or not.    
    if (body.classList.contains('about')) {
        body.innerHTML = '';
        body.classList.remove('about');
        console.log('About removed...')
    }
    else if (body.classList.contains('menu')) {
        body.innerHTML = '';
        body.classList.remove('menu');
    }
    else if (body.classList.contains('home')) {
        console.log('I reach here too!')
        return;
    }
    
    const content = document.querySelector('#content');
    content.style.height = '100vh';
    // Create Body Elements
    body.classList.add('home')
    const bodyTitle = document.createElement('h2');
    bodyTitle.innerText = 'Come taste the finest delicacies that the Mushroom Kingdom has to offer...';
    bodyTitle.classList.add('homeTitle')
    body.appendChild(bodyTitle);   
}