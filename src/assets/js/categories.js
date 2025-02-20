import categoriesContent from "../json/categories.json";
import { Category } from "./category.js";

const Categories = (function (doc) {
  const mainContent = doc.querySelector("#content");
  let heroImages;

  function loadCategory(categoryId) {
    mainContent.innerHTML = null;
    Category.load(categoryId);
  }

  function createHeroSection() {
    // Create a container for hero content
    const heroWrapper = doc.createElement("section");
    heroWrapper.classList.add("hero-container");
    if (window.innerWidth <= 767) {
      heroWrapper.style.setProperty(
        "--hero-image",
        `url(${heroImages.images.find((image) => image.width === 500).path})`,
      );
    } else {
      heroWrapper.style.setProperty(
        "--hero-image",
        `url(${heroImages.images.find((image) => image.width === 1920).path})`,
      );
    }

    // Create container for hero text
    const heroText = doc.createElement("div");
    heroText.classList.add("hero-text", "container");

    // Create hero title
    const heroTitle = doc.createElement("h1");
    heroTitle.textContent = categoriesContent["title"];

    // Add the hero title to the text container
    heroText.appendChild(heroTitle);

    // Add the hero text container to the hero content container
    heroWrapper.appendChild(heroText);

    // Return the hero section
    return heroWrapper;
  }

  function createHeading3(heading) {
    const currentHeading = doc.createElement("h3");
    currentHeading.textContent = heading;
    return currentHeading;
  }

  function createParagraph(text) {
    const currentText = doc.createElement("p");
    currentText.textContent = text;
    return currentText;
  }

  function createCard(category, categoryImages) {
    const listItem = doc.createElement("li");
    const cardWrapper = doc.createElement("figure");
    const cardImage = doc.createElement("img");
    const cardText = doc.createElement("figcaption");
    listItem.id = category["id"];
    listItem.setAttribute("data-id", category["id"]);
    listItem.classList.add("card", "has-hover");
    listItem.addEventListener("click", () => {
      loadCategory(category["id"]);
    });
    const cardHeading = createHeading3(category["title"]);
    cardImage.setAttribute("srcset", categoryImages.srcSet);
    cardImage.setAttribute("src", categoryImages.src);
    cardImage.setAttribute("alt", categoryImages.placeholder);
    cardImage.setAttribute("sizes", "(max-width: 676px) 500px, 364px");
    cardText.append(cardHeading);
    cardWrapper.append(cardImage, cardText);
    listItem.appendChild(cardWrapper);
    return listItem;
  }

  function createCards() {
    const cardList = doc.createElement("ol");
    cardList.classList.add("card-list", "row-md-3");
    const categoriesSubpages = categoriesContent["subpages"];
    categoriesSubpages.forEach((category) => {
      import(`../images/${category["imageSrc"]}?sizes[]=500,sizes[]=364`).then((categoryImages) => {
        cardList.appendChild(createCard(category, categoryImages));
      });
    });
    return cardList;
  }

  function createArticleContent() {
    // Create article container
    const articleWrapper = doc.createElement("article");
    articleWrapper.classList.add("container");

    // Create article title
    const articleHeading = doc.createElement("h2");
    articleHeading.textContent = categoriesContent["articleTitle"];

    // Create article text 1
    const articleText1 = createParagraph(categoriesContent["articleText1"]);

    // Create article text 2
    const articleText2 = createParagraph(categoriesContent["articleText2"]);

    const cardList = createCards();

    // Add content to article container
    articleWrapper.append(articleHeading, articleText1, articleText2, cardList);

    // Return article container
    return articleWrapper;
  }

  function addCategoriesContent() {
    import(`../images/${categoriesContent["imageSrc"]}?sizes[]=500,sizes[]=1920`).then((images) => {
      heroImages = images;
      mainContent.append(createHeroSection(), createArticleContent());
    });
  }

  return {
    load: addCategoriesContent,
  };
})(document);

export { Categories };
