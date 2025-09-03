const mainArticles = [
  {
    img: "./assets/main_articles_picture1.jpg",
    title: "Interdum aenean",
    text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
  },
  {
    img: "./assets/main_articles_picture2.jpg",
    title: "Nulla amet dolore",
    text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
  },
  {
    img: "./assets/main_articles_picture3.jpg",
    title: "Tempus ullamcorper",
    text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
  },
  {
    img: "./assets/main_articles_picture4.jpg",
    title: "Sed etiam facilis",
    text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
  },
  {
    img: "./assets/main_articles_picture5.jpg",
    title: "Feugiat lorem aenean",
    text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
  },
  {
    img: "./assets/main_articles_picture6.jpg",
    title: "Amet varius aliquam",
    text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
  },
]

const mainArticlesContainerElement = document.querySelector(".main-articles-container");

function getAndAppendMainArticlesFromArray() {
  mainArticles.forEach(mainArticle => {
    const mainArticlesCardElement = document.createElement("div");
    mainArticlesCardElement.classList.add("main-articles-card");
    mainArticlesContainerElement.appendChild(mainArticlesCardElement)

    const mainArticlesImgContainerElement = document.createElement("div");
    mainArticlesImgContainerElement.classList.add("main-articles-img-container");
    mainArticlesCardElement.appendChild(mainArticlesImgContainerElement);

    const mainArticlesImgElement = document.createElement("img");
    mainArticlesImgElement.src = mainArticle.img;
    mainArticlesImgContainerElement.appendChild(mainArticlesImgElement);

    const mainArticlesTitleElement = document.createElement("h3");
    mainArticlesTitleElement.innerText = mainArticle.title;
    mainArticlesCardElement.appendChild(mainArticlesTitleElement);

    const mainArticlesTextElement = document.createElement("p");
    mainArticlesTextElement.innerText = mainArticle.text;
    mainArticlesCardElement.appendChild(mainArticlesTextElement);

    const mainArticlesButtonElement = document.createElement("button");
    mainArticlesButtonElement.innerText = "MORE";
    mainArticlesCardElement.appendChild(mainArticlesButtonElement);
  });
}
getAndAppendMainArticlesFromArray();