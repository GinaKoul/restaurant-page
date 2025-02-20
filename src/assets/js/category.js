import categoriesContent from "../json/categories.json";

const Category = (function (doc) {
  let categoryContent;
  let heroImages;
  const mainContent = doc.querySelector("#content");

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
    heroTitle.textContent = categoryContent["title"];

    // Add the hero title to the text container
    heroText.appendChild(heroTitle);

    // Add the hero text container to the hero content container
    heroWrapper.appendChild(heroText);

    // Return the hero section
    return heroWrapper;
  }

  function createHeading2(heading) {
    const currentHeading = doc.createElement("h2");
    currentHeading.textContent = heading;
    return currentHeading;
  }

  function createParagraph(text) {
    const currentText = doc.createElement("p");
    currentText.textContent = text;
    return currentText;
  }

  function createCard(product) {
    const listItem = doc.createElement("li");
    const cardHeading = createHeading2(product["title"]);
    const cardText = createParagraph(product["description"]);
    listItem.id = product["id"];
    listItem.classList.add("card");
    listItem.append(cardHeading, cardText);
    return listItem;
  }

  function createCards() {
    const cardList = doc.createElement("ul");
    cardList.classList.add("card-list");
    const categorySubpages = categoryContent["subpages"];
    categorySubpages.forEach((product) => {
      cardList.appendChild(createCard(product));
    });
    return cardList;
  }

  function createArticleContent() {
    // Create article container
    const articleWrapper = doc.createElement("article");
    articleWrapper.classList.add("container");

    const cardList = createCards();

    // Add content to article container
    articleWrapper.append(cardList);

    // Return article container
    return articleWrapper;
  }

  function addCategoryContent() {
    mainContent.append(createHeroSection(), createArticleContent());
  }

  function initCategoryContent(categoryId) {
    categoryContent = categoriesContent["subpages"].find((obj) => obj["id"] === categoryId);
    import(`../images/${categoryContent["imageSrc"]}?sizes[]=500,sizes[]=1920`).then((images) => {
      heroImages = images;
      scrollToTop();
      addCategoryContent();
    });
  }

  return {
    load: initCategoryContent,
  };
})(document);

export { Category };
