const productDetailsContainer = document.getElementById("product-details-container");

const params = new URLSearchParams(window.location.search);

const productId = params.get("productId");

const getProduct = async () => {

  const URLData = `https://striveschool-api.herokuapp.com/api/product/${productId}`

  try {

    const response = await fetch(URLData, {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGViZGRkNjQ3N2VkYTAwMTU3MzU2OTUiLCJpYXQiOjE3NjE5OTkyMzcsImV4cCI6MTc2MzIwODgzN30.EpWRymcY9re_KLNkZ37E4Y34r6XWl2123tMzMX7y_l4"
      }
    })

    return await response.json()

  } catch (error) {
    console.log(error)
  }

}

const showProductData = (product, container) => {

  const productDetailsMainContainer = document.createElement("div");
  productDetailsMainContainer.setAttribute("class", "d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 w-100 m-0 p-0 product-details-main-container");
  container.appendChild(productDetailsMainContainer);

  const productDetailsImgContainer = document.createElement("div");
  productDetailsImgContainer.classList.add("product-details-img-container")
  productDetailsMainContainer.appendChild(productDetailsImgContainer);

  const productDetailsImg = document.createElement("img");
  productDetailsImg.setAttribute("class", "w-100 object-fit-cover zoomable")
  productDetailsImg.src = product.imageUrl;
  productDetailsImg.alt = product.description;
  productDetailsImgContainer.appendChild(productDetailsImg);

  const productDetailsInfoContainer = document.createElement("div");
  productDetailsInfoContainer.setAttribute("class", "d-flex flex-column justify-content-between align-items-center");
  productDetailsMainContainer.appendChild(productDetailsInfoContainer)

  const productDetailsName = document.createElement("h1");
  productDetailsName.classList.add("text-center")
  productDetailsName.innerText = product.name;
  productDetailsInfoContainer.appendChild(productDetailsName);

  const productDetailsBrand = document.createElement("h3");
  productDetailsBrand.innerText = product.brand;
  productDetailsInfoContainer.appendChild(productDetailsBrand);

  const productDetailsDescription = document.createElement("p");
  productDetailsDescription.innerText = product.description;
  productDetailsInfoContainer.appendChild(productDetailsDescription);

  const productDetailsPrice = document.createElement("p");
  productDetailsPrice.classList.add("product-details-price")
  productDetailsPrice.innerText = product.price;
  productDetailsInfoContainer.appendChild(productDetailsPrice);

}

getProduct()
  .then(res => {
    showProductData(res, productDetailsContainer)
    createLens()
  })


const createLens = () => {
  const zoomable = document.querySelector(".zoomable");
  if (!zoomable) return;

  let lens;
  const zoom = 2;
  const lensSize = 150;

  zoomable.addEventListener('load', () => {

    lens = document.createElement("div");
    lens.classList.add('zoom-lens');
    lens.style.width = lens.style.height = lensSize + "px";
    lens.style.backgroundImage = `url('${zoomable.src}')`;
    lens.style.backgroundSize = `${zoomable.width * zoom}px ${zoomable.height * zoom}px`;
    document.body.appendChild(lens);

    zoomable.addEventListener('mousemove', moveLens);
    zoomable.addEventListener('mouseenter', () => lens.style.opacity = 1);
    zoomable.addEventListener('mouseleave', () => lens.style.opacity = 0);

    function moveLens(e) {
      const rect = zoomable.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      lens.style.left = e.pageX - lensSize / 2 + 'px';
      lens.style.top = e.pageY - lensSize / 2 + 'px';

      lens.style.backgroundPosition = `-${x * zoom - lensSize / 2}px -${y * zoom - lensSize / 2}px`;
    }
  });
};







