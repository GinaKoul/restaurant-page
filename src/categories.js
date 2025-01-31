import pages from './pages.json';

const Categories = (function(doc) {
    const categoriesContent = pages.find(obj => obj["id"]== 2);
    const heroImages = require('./assets/images/hero-image.jpg?sizes[]=767,sizes[]=1920');
    let mainContent = doc.querySelector('#content');

    console.log(heroImages.srcSet);

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
        heroTitle.textContent = categoriesContent['title'];

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

    function createCard(category) {
        let listItem = doc.createElement('li');
        let cardWrapper = doc.createElement('figure');
        let cardImage = doc.createElement('img');
        let cardText = doc.createElement('figcaption');
        listItem.id = category['id'];
        listItem.classList.add('card');
        let cardHeading = createHeading3(category['title']);
        cardImage.setAttribute('srcset',heroImages.srcSet);
        cardImage.setAttribute('src',heroImages.src);
        cardImage.setAttribute('alt',heroImages.placeholder);
        cardImage.setAttribute('sizes','(max-width: 676px) 676px, 1920px');
        cardText.append(cardHeading);
        cardWrapper.append(cardImage,cardText);
        listItem.appendChild(cardWrapper);
        return listItem;
    }

    function createCards() {
        let cardList = doc.createElement('li');
        cardList.classList.add('card-list','row-md-3');
        let categoriesSubpages = categoriesContent['subpages'];
        categoriesSubpages.forEach(category => {
            let card = createCard(category);
            cardList.appendChild(card);
        });
        return cardList;
    }

    function createArticleContent() {
        // Create article container
        let articleWrapper = doc.createElement('article');
        articleWrapper.classList.add('container');

        // Create article title
        let articleHeading = doc.createElement('h2');
        articleHeading.textContent = categoriesContent['articleTitle'];

        // Create article text 1
        let articleText1 = createParagraph(categoriesContent['articleText1']);
        
        // Create article text 2
        let articleText2 = createParagraph(categoriesContent['articleText2']);

        let cardList = createCards();

        // Add content to article container
        articleWrapper.append(articleHeading,articleText1,articleText2,cardList);

        // Return article container
        return articleWrapper;
    }

    function addHomepageContent() {
        mainContent.append(createHeroSection(),createArticleContent());
    }

    if (doc.readyState === 'loading') {
        doc.addEventListener('DOMContentLoaded', addHomepageContent);
      } else {
        addHomepageContent();
      }
})(document);