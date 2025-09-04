const articles = [
  {
    img: "./assets/sidebar_articles_picture1.jpg",
    description: "orso bruno",
    text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam."
  },
  {
    img: "./assets/sidebar_articles_picture2.jpg",
    description: "montagna",
    text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam."
  },
  {
    img: "./assets/sidebar_articles_picture3.jpg",
    description: "laptop",
    text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam."
  },
  {
    img: "https://picsum.photos/288/174",
    description: "Lorem Picsum",
    text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam."
  },
  {
    img: "https://picsum.photos/288/174",
    description: "Lorem Picsum",
    text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam."
  },
  {
    img: "https://picsum.photos/288/174",
    description: "Lorem Picsum",
    text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam."
  },
  {
    img: "https://picsum.photos/288/174",
    description: "Lorem Picsum",
    text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam."
  },
  {
    img: "https://picsum.photos/288/174",
    description: "Lorem Picsum",
    text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam."
  },
  {
    img: "https://picsum.photos/288/174",
    description: "Lorem Picsum",
    text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam."
  },
  {
    img: "https://picsum.photos/288/174",
    description: "Lorem Picsum",
    text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam."
  },
  {
    img: "https://picsum.photos/288/174",
    description: "Lorem Picsum",
    text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam."
  },
  {
    img: "https://picsum.photos/288/174",
    description: "Lorem Picsum",
    text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam."
  },
  {
    img: "https://picsum.photos/288/174",
    description: "Lorem Picsum",
    text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam."
  },
  {
    img: "https://picsum.photos/288/174",
    description: "Lorem Picsum",
    text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam."
  },
]

const articleCardElement = document.querySelector(".article-card");
const moreArticlesButtonElement = document.querySelector(".more-articles-button");

function getAndAppendAllArticlesFromArray() {
  articleCardElement.innerHTML = ""

  articles.forEach(article => {

    const pictureContainerElement = document.createElement("div");
    pictureContainerElement.classList.add("article-picture-container");
    articleCardElement.appendChild(pictureContainerElement)

    const articlePictureElement = document.createElement("img");
    articlePictureElement.src = article.img;
    articlePictureElement.alt = article.description;
    pictureContainerElement.appendChild(articlePictureElement);

    const articleParagraphElement = document.createElement("p");
    articleParagraphElement.innerText = article.text;
    articleCardElement.appendChild(articleParagraphElement);
  });
}

moreArticlesButtonElement.addEventListener("click", getAndAppendAllArticlesFromArray)

function getAndAppendFirstThreeArticlesFromArray() {
  for (let i = 0; i < articles.length; i++) {
    const pictureContainerElement = document.createElement("div");
    pictureContainerElement.classList.add("article-picture-container");
    articleCardElement.appendChild(pictureContainerElement)

    const articlePictureElement = document.createElement("img");
    articlePictureElement.src = articles[i].img;
    articlePictureElement.alt = articles[i].description;
    pictureContainerElement.appendChild(articlePictureElement);

    const articleParagraphElement = document.createElement("p");
    articleParagraphElement.innerText = articles[i].text;
    articleCardElement.appendChild(articleParagraphElement);

    if (i === 2) {
      break;
    }
  }
}
getAndAppendFirstThreeArticlesFromArray();