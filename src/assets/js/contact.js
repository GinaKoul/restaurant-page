import contactContent from "../json/contact.json";

const Contact = (function (doc) {
  const mainContent = doc.querySelector("#content");

  function createHeading1(heading) {
    const currentHeading = doc.createElement("h1");
    currentHeading.textContent = heading;
    return currentHeading;
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

  function createAddressCard(address) {
    const listItem = doc.createElement("li");
    const cardHeading = createHeading2(address["title"]);
    const fullAddress = [];
    Object.entries(address["content"]).forEach((group) => {
      fullAddress.push(group[1]);
    });
    const cardText = createParagraph(fullAddress.join(", "));
    listItem.classList.add("card");
    listItem.append(cardHeading, cardText);
    return listItem;
  }

  function createEmailCard(el) {
    const listItem = doc.createElement("li");
    const cardHeading = createHeading2(el["title"]);
    const cardText = doc.createElement("p");
    const cardLink = doc.createElement("a");
    cardLink.href = `mailto:${el["content"]}`;
    cardLink.textContent = el["content"];
    cardText.append(cardLink);
    listItem.classList.add("card");
    listItem.append(cardHeading, cardText);
    return listItem;
  }

  function createTelCard(el) {
    const listItem = doc.createElement("li");
    const cardHeading = createHeading2(el["title"]);
    const cardText = doc.createElement("p");
    const cardLink = doc.createElement("a");
    cardLink.href = `tel:${el["content"]}`;
    cardLink.textContent = el["content"];
    cardText.append(cardLink);
    listItem.classList.add("card");
    listItem.append(cardHeading, cardText);
    return listItem;
  }

  function createCards() {
    const cardList = doc.createElement("ul");
    cardList.classList.add("card-list");
    const cardAddress = createAddressCard(contactContent["address"]);
    const cardEmail = createEmailCard(contactContent["email"]);
    const cardTel = createTelCard(contactContent["tel"]);
    cardList.append(cardAddress, cardEmail, cardTel);
    return cardList;
  }

  function createArticleContent() {
    // Create article container
    const articleWrapper = doc.createElement("article");
    articleWrapper.classList.add("container", "wmax-sm");

    const articleTitle = createHeading1(contactContent["title"]);

    const cardList = createCards();

    // Add content to article container
    articleWrapper.append(articleTitle, cardList);

    // Return article container
    return articleWrapper;
  }

  function addContactContent() {
    mainContent.classList.add("pt-h");
    mainContent.append(createArticleContent());
  }

  return {
    load: addContactContent,
  };
})(document);

export { Contact };
