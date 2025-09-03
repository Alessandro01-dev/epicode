const features = [
  {
    title: "Portior ullamcorper",
    description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
    icon: "./assets/features_picture1.png"
  },
  {
    title: "Sapien veroeros",
    description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
    icon: "./assets/features_picture2.png"
  },
  {
    title: "Quam lorem ipsum",
    description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
    icon: "./assets/features_picture3.png"
  },
  {
    title: "Sed magna finibus",
    description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
    icon: "./assets/features_picture4.png"
  },
]

const featuresContainerElement = document.querySelector(".features-container");

function getAndAppendFeaturesFromArray() {
  features.forEach(feature => {
    const featuresCardElement = document.createElement("div");
    featuresCardElement.classList.add("features-card");
    featuresContainerElement.appendChild(featuresCardElement);

    const leftCardSectionElement = document.createElement("div");
    leftCardSectionElement.classList.add("left-section");
    featuresCardElement.appendChild(leftCardSectionElement);

    const rotatedSquareElement = document.createElement("div");
    rotatedSquareElement.classList.add("rotated-square");
    leftCardSectionElement.appendChild(rotatedSquareElement);

    const iconElement = document.createElement("img");
    iconElement.src = feature.icon;
    rotatedSquareElement.appendChild(iconElement);

    const rightCardSectionElement = document.createElement("div");
    rightCardSectionElement.classList.add("right-section");
    featuresCardElement.appendChild(rightCardSectionElement);

    const titleFeatureElement = document.createElement("h3");
    titleFeatureElement.innerText = feature.title;
    rightCardSectionElement.appendChild(titleFeatureElement);

    const descriptionFeatureElement = document.createElement("p");
    descriptionFeatureElement.innerText = features.description;
    rightCardSectionElement.appendChild(descriptionFeatureElement);
  })
}
getAndAppendFeaturesFromArray();