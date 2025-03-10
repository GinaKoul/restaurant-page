import homepageContent from "../json/homepage.json";

const Homepage = (function (doc) {
  const mainContent = doc.querySelector("#content");
  let heroImages;

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
    heroTitle.textContent = homepageContent["title"];

    // Add the hero title to the text container
    heroText.appendChild(heroTitle);

    // Add the hero text container to the hero content container
    heroWrapper.appendChild(heroText);

    // Return the hero section
    return heroWrapper;
  }

  function createParagraph(text) {
    const currentText = doc.createElement("p");
    currentText.textContent = text;
    return currentText;
  }

  function createArticleContent() {
    // Create article container
    const articleWrapper = doc.createElement("article");
    articleWrapper.classList.add("container", "wmax-sm");

    // Create article title
    const articleHeading = doc.createElement("h2");
    articleHeading.textContent = homepageContent["articleTitle"];

    // Create article text 1
    const articleText1 = createParagraph(homepageContent["articleText1"]);

    // Create article text 2
    const articleText2 = createParagraph(homepageContent["articleText2"]);

    // Create article text 1
    const articleText3 = createParagraph(homepageContent["articleText3"]);

    // Add content to article container
    articleWrapper.append(articleHeading, articleText1, articleText2, articleText3);

    // Return article container
    return articleWrapper;
  }

  function addHomepageContent() {
    import(`../images/${homepageContent["imageSrc"]}?sizes[]=500,sizes[]=1920`).then((images) => {
      heroImages = images;
      mainContent.append(createHeroSection(), createArticleContent());
    });
  }

  return {
    load: addHomepageContent,
  };
})(document);

export { Homepage };
