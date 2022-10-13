export default function aboutLoad (restaurant, marioWorld) {
    console.log('About!')
    const body = document.querySelector('#body');
    console.log(body);

    // Check if Home is already loaded or not.    
    if (body.classList.contains('home')) {
        body.innerHTML = '';
        body.classList.remove('home');
    }
    else if (body.classList.contains('menu')) {
        body.innerHTML = '';
        body.classList.remove('menu');
    }
    else if (body.classList.contains('about')) {
        return;
    }

    const content = document.querySelector('#content');
    content.style.height = 'auto';
    // Create Body Elements
    body.classList.add('about')

    //Feature Image
    const aboutBody = document.createElement('div');
    aboutBody.classList.add('aboutBody')
    const feature = new Image();
    feature.src = restaurant;
    feature.classList.add('about_feature');
    body.appendChild(aboutBody)
    aboutBody.appendChild(feature);

    // Text Section
    const textSection = document.createElement('div');
    textSection.classList.add('about_text');
    aboutBody.appendChild(textSection);

    // Text Title
    const heading = document.createElement('h2');
    heading.innerText = "Mamma Mia! Bottomless Wario Wednesday's are Back!";
    heading.classList.add('aboutHeading');
    textSection.appendChild(heading);

    // Text Body
    const textBody = document.createElement('div');
    const textText = document.createElement('p');
    textText.innerText = "Join us every Wednesday in Super Nintendo World for Bottomless Wario Wednesdays! That doesn't mean take your pants off (although loose pants are advised). It means that you pay $100 for 3 hours of all you can eat Mario-themed food! Sample our whole menu or pig out on 10 tasty Bowser Big Bean Burritos! You'll come away satisfied and looking like a Wario cosplayer. Please advise, you should go on any and all rides before taking part in this at risk of vomitting."
    const buffet = new Image();
    buffet.src = marioWorld;
    textSection.appendChild(textBody);
    textBody.appendChild(textText);
    textBody.appendChild(buffet);



}