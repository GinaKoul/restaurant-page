const heroImages = require('./assets/images/hero-image.jpg?sizes[]=767,sizes[]=1920');
console.log(heroImages.srcSet);

const Categories = (function(doc) {
    let homepageContent = doc.querySelector('#content');

    function createHeroSection() {
        // Create a container for hero content
        let heroWrapper = doc.createElement('section');
        heroWrapper.classList.add('hero-container');
        if(window.innerWidth <= 767) {
            heroWrapper.style.setProperty('--hero-image',`url(${heroImages.images.find(image => image.width == 767).path})`);
        }else {
            heroWrapper.style.setProperty('--hero-image',`url(${heroImages.images.find(image => image.width == 1920).path})`);
        }

        // Create container for hero text
        let heroText = doc.createElement('div');
        heroText.classList.add('hero-text','container');

        // Create hero title
        let heroTitle = doc.createElement('h1');
        heroTitle.textContent = 'Where Every Bite is a Taste of Italian Enchantment';

        // Add the hero title to the text container
        heroText.appendChild(heroTitle);

        // Add the hero text container to the hero content container
        heroWrapper.appendChild(heroText);

        // Return the hero section
        return heroWrapper;
    }

    function createHeading3(heading) {
        let currentHeading = doc.createElement('h3');
        currentHeading.textContent = heading;
        return currentHeading;
    }

    function createParagraph(text) {
        let currentText = doc.createElement('p');
        currentText.textContent = text;
        return currentText;
    }

    function createArticleContent() {
        // Create article container
        let articleWrapper = doc.createElement('article');
        articleWrapper.classList.add('container','wmax-sm');

        // Create article title
        let articleHeading = doc.createElement('h2');
        articleHeading.textContent = `Welcome to Il Forno Magico-A Taste of Italy's Heart & Soul`;

        // Create article text 1
        let articleText1 = createParagraph('Step into Il Forno Magico, where every dish is crafted with passion, tradition, and a touch of magic. From our wood-fired pizzas with crispy, golden crusts to our handmade pasta infused with rich, authentic flavors, every bite transports you straight to the charming streets of Italy.');
        
        // Create article text 2
        let articleText2 = createParagraph('Our chefs use only the finesr ingredients, sun-ripened tomatoes, fragrant basil, and the creamiest mozzarella, to create dishes that are as unforgettable as they are delicious. Whether you are here for a cozy dinner, a celebration with loved ones, or a glass of our expertly selected Italian wines, you will feel the warmth of true Italian hospitality from the moment you walk in.')
        
        // Create article text 1
        let articleText3 = createParagraph('Buon appetito! Let the magic of Il Forno Magico enchant your taste buds.');

        let categoryTitle1 = createHeading3('Antipasti');

        // Add content to article container
        articleWrapper.append(articleHeading,articleText1,articleText2,articleText3);

        // Return article container
        return articleWrapper;
    }

    function addHomepageContent() {
        homepageContent.append(createHeroSection(),createArticleContent());
    }

    if (doc.readyState === 'loading') {
        doc.addEventListener('DOMContentLoaded', addHomepageContent);
      } else {
        addHomepageContent();
      }
})(document);