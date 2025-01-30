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

/*
Antipasti (Appetizers)

Bruschetta al Pomodoro- Toasted bread topped with fresh tomatoes, basil and a drizzle of olive oil.
Carpaccio di Manzo- Thinly slided raw beef with arugula, shaved parmesan and a lemon vinaigrette
Caprese- Fresh mozzarella, heirloom tomatoes, basil, and balsamic glaze.
Frittura di Calamari- Crispy fried squid served with marinara sauce.

Zuppe e Insalate (Soups and Salads)

Minestrone- Traditional Italian vegetable soup with seasonal ingredients.
Zuppa di Pomodoro- Creamy tomato soup with a touch of basil and garlic.
Insalata Mista- Mixed greens, cherry tomatoes, cucumbers, red onions, and olive oil dressing.
Insalata Cesare- Classic Caesar salad with romaine, croutons, parmesan, and Caesar dressing.

Pasta Fresca (Fresh Pasta)

Spaghetti alla Carbonara- Spaghetti with a creamy egg and pancetta sause, finished with pecorino cheese.
Lasagna alla Bolognese- Layers of pasta with rich meat sauce, bechamel, and parmesan.
Ravioli di Ricotta e Spinaci- Homemade ravioli stuffed with ricotta cheese and spinach, served with a sage-butter sauce.
Tagliatelle ai Funghi- Fresh tagliatelle with sauteed wild mushrooms and a garlic cream sauce.

Pizze (Pizzas)

Margharita- Toamto sauce, fresh mozzarella, and basil.
Quattro Stagioni- Tomato sauce, mozzarella, artichokes, ham, olives, and mushrooms.
Diavola- tomato sauce, mozzarella, spicy salami, and red chili flakes.
Funghi e Tartufo- Tomato sauce, mozzarella, wild mushrooms, and truffle oil.

Piatti Principali (Main Courses)

Osso Buco- Braised veal shank in rich tomato sauce with a side of risotto.
Pollo alla Parmigiana- Breaded chicken cutlet topped with marinara sauce and melted mozzarella, served with pasta.
Branzino al Forno- Oven baked Mediterranean sea bass with lemon and rosemary, srved with roasted vegetables.
Vitello Saltimbocca- Veal cutlets topped with prosciutto and sage, in a white wine sauce.

Contorni (Side Dishes)

Patate al Rosmarino- Roasted rosemary potatoes.
Spinaci Saltati- Sauteed spinach with garlic and olive oil.
Verdure Grigliate- Grilled seasonal vegetables.
Risotto ai Funghi- Creamy risotto with wild mushrooms.

Dolci (Desserts)

Tiramisu- Classic Italian dessert with layers of coffe-soaked ladyfingers, mascarpone, and cocoa.
Panna Cotta- Creamy vanilla custard topped with raspberry coulis.
Cannoli Siciliani- Crispy shells filled with sweet ricotta cheese and chocolate chips.
Gelato Artigianale- Selection of house-made gelato in flavors like vanilla, chocolate, and pistachio.

Vini (Wines)

Chianti Classico- Medium-bodies red wine from Tuscany.
Prosecco- Crisp and refreshing sparkling wine.
Pinot Grigio- Light and refreshing white wine.
Barolo- Bold red wine from the Piedmont region.
*/