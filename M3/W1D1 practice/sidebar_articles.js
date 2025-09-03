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
/* altri articoli da caricare all'event "click" sul bottone "more" (loop, break etc...)"
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
*/
]

const articleCardElement = document.querySelector(".article-card");

function getAndAppendArticlesFromArray() {
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
getAndAppendArticlesFromArray();