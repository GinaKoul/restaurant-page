import creditsContent from "../json/credits.json";

const Credits = (function (doc) {
  const mainContent = doc.querySelector("#content");

  function createHeading1(heading) {
    const currentHeading = doc.createElement("h1");
    currentHeading.textContent = heading;
    return currentHeading;
  }

  function createCard(credit, creditImages) {
    const listItem = doc.createElement("li");
    const cardWrapper = doc.createElement("figure");
    const cardImage = doc.createElement("img");
    const cardHeading = doc.createElement("h2");
    const cardText = doc.createElement("figcaption");
    const cardLink = doc.createElement("a");
    listItem.classList.add("card", "has-hover");
    cardImage.setAttribute("srcset", creditImages.srcSet);
    cardImage.setAttribute("src", creditImages.src);
    cardImage.setAttribute("alt", creditImages.placeholder);
    cardImage.setAttribute("sizes", "(max-width: 676px) 500px, 364px");
    cardLink.href = credit["link"];
    cardLink.setAttribute("target", "_blank");
    const imageLink = cardLink.cloneNode(true);
    imageLink.append(cardImage);
    cardLink.textContent = credit["title"];
    cardHeading.appendChild(cardLink);
    cardText.append(cardHeading);
    cardWrapper.append(imageLink, cardText);
    listItem.appendChild(cardWrapper);
    return listItem;
  }

  function createCards() {
    const cardList = doc.createElement("ol");
    cardList.classList.add("card-list", "row-md-3");
    const creditsSubpages = creditsContent["subpages"];
    creditsSubpages.forEach((credit) => {
      import(`../images/${credit["imageSrc"]}?sizes[]=500,sizes[]=364`).then((creditImages) => {
        cardList.appendChild(createCard(credit, creditImages));
      });
    });
    return cardList;
  }

  function createArticleContent() {
    // Create article container
    const articleWrapper = doc.createElement("article");
    articleWrapper.classList.add("container");

    // Create article title
    const articleHeading = createHeading1(creditsContent["title"]);

    const cardList = createCards();

    // Add content to article container
    articleWrapper.append(articleHeading, cardList);

    // Return article container
    return articleWrapper;
  }

  function addCreditsContent() {
    mainContent.classList.add("pt-h");
    mainContent.append(createArticleContent());
  }

  return {
    load: addCreditsContent,
  };
})(document);

export { Credits };
