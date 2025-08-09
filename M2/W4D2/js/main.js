const cars = [
    {
        name: "Toyota",
        model: "Corolla",
        year: 2020,
        color: "White",
        options: ["Air Conditioning", "Bluetooth", "Cruise Control", "Backup Camera"],
        isAvailable: true,
        price: 18000,
        img: 'https://immagini.alvolante.it/sites/default/files/styles/anteprima_lunghezza_640_jpg/public/serie_auto_galleria/2022/09/toyota_corolla_post_0.png'
    },
    {
        name: "Honda",
        model: "Civic",
        year: 2021,
        color: "Black",
        options: ["Heated Seats", "Bluetooth", "Sunroof"],
        isAvailable: false,
        price: 20000,
        img: 'https://cdn.veloce.it/wp-content/uploads/2019/06/108923_2017_Honda_Civic_Type_R.jpg'
    },
    {
        name: "Ford",
        model: "Focus",
        year: 2019,
        color: "Blue",
        options: ["Navigation System", "Backup Camera", "Keyless Entry"],
        isAvailable: true,
        price: 16500,
        img: 'https://images.ctfassets.net/uaddx06iwzdz/35gCEkFPutJ9p2sH6oQBtJ/835e8af4d7cab2d0706cedb7f5771829/ford-focus-side.jpg'
    },
    {
        name: "BMW",
        model: "3 Series",
        year: 2022,
        color: "Gray",
        options: ["Leather Seats", "Sunroof", "Parking Sensors", "Bluetooth"],
        isAvailable: true,
        price: 35000,
        img: 'https://www.bmw.it/content/dam/bmw/common/all-models/3-series/series-overview/bmw-3er-overview-page-ms-06.jpg'
    },
    {
        name: "Audi",
        model: "A4",
        year: 2021,
        color: "Red",
        options: ["LED Headlights", "Heated Seats", "Apple CarPlay"],
        isAvailable: false,
        price: 33000,
        img: 'https://www.lombardamotori.it/media/1cndnlfw/audi_a4_avant_1.jpg?format=webp'
    },
    {
        name: "Mercedes",
        model: "C-Class",
        year: 2020,
        color: "Silver",
        options: ["Navigation System", "Leather Seats", "Cruise Control"],
        isAvailable: true,
        price: 37000,
        img: 'https://foto2.newsauto.it/wp-content/uploads/2021/02/Nuova-Mercedes-Benz-Classe-C-1-780x470.jpg'
    },
    {
        name: "Volkswagen",
        model: "Golf",
        year: 2018,
        color: "White",
        options: ["Backup Camera", "Bluetooth"],
        isAvailable: true,
        price: 15000,
        img: 'https://uploads.vw-mms.de/system/production/images/vwn/080/801/images/74efb38963e4bd0d12f0a76d427252477851e28e/DB2024AU00109_web_1600.jpg?1736327869'
    },
    {
        name: "Hyundai",
        model: "Elantra",
        year: 2019,
        color: "Blue",
        options: ["Sunroof", "Apple CarPlay", "Android Auto"],
        isAvailable: false,
        price: 17000,
        img: 'https://immagini.alvolante.it/sites/default/files/styles/image_gallery_big/public/news_galleria/2021/07/hyundai-elantra-n-2021_03.jpg'
    },
    {
        name: "Kia",
        model: "Forte",
        year: 2020,
        color: "Black",
        options: ["Heated Seats", "Cruise Control"],
        isAvailable: true,
        price: 16000,
        img: 'https://hips.hearstapps.com/hmg-prod/images/2022-kia-forte-gt-104-1633972551.jpg?crop=0.686xw:0.515xh;0.0943xw,0.217xh&resize=1200:*'
    },
    {
        name: "Mazda",
        model: "3",
        year: 2021,
        color: "Gray",
        options: ["Parking Sensors", "Bluetooth", "Backup Camera"],
        isAvailable: true,
        price: 19000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mazda3_SKYACTIV-G.jpg/960px-Mazda3_SKYACTIV-G.jpg'
    },
    {
        name: "Chevrolet",
        model: "Malibu",
        year: 2020,
        color: "Red",
        options: ["Air Conditioning", "Navigation System", "Heated Seats"],
        isAvailable: false,
        price: 21000,
        img: 'https://di-uploads-pod32.dealerinspire.com/mauerchevy/uploads/2024/09/2025-chevrolet-malibu-exterior-1024x576.jpg'
    },
    {
        name: "Nissan",
        model: "Sentra",
        year: 2019,
        color: "White",
        options: ["Keyless Entry", "Bluetooth"],
        isAvailable: true,
        price: 15500,
        img: 'https://www.notizieauto.it/wp-content/uploads/2023/09/2024-nissan-sentra-sr-front-3-4-2.jpg'
    },
    {
        name: "Subaru",
        model: "Impreza",
        year: 2022,
        color: "Blue",
        options: ["All-Wheel Drive", "Backup Camera", "Android Auto"],
        isAvailable: true,
        price: 22000,
        img: 'https://cdn.motor1.com/images/mgl/2Xq6p/s3/low-mileage-1998-subaru-impreza-22b-sti.jpg'
    },
    {
        name: "Tesla",
        model: "Model 3",
        year: 2023,
        color: "Black",
        options: ["Autopilot", "Touchscreen", "Heated Seats", "Bluetooth"],
        isAvailable: true,
        price: 45000,
        img: 'https://res.cloudinary.com/unix-center/image/upload/c_limit,dpr_3.0,f_auto,fl_progressive,g_center,h_240,q_auto:good,w_385/eghq9ct3evxunl27bkhl.jpg'
    },
    {
        name: "Jeep",
        model: "Compass",
        year: 2021,
        color: "Green",
        options: ["4x4", "Navigation System", "Cruise Control"],
        isAvailable: false,
        price: 28000,
        img: 'https://images.ctfassets.net/uaddx06iwzdz/42m4zMi7J2OXEC0Idcv79E/dff652ad57503c51300e41d0eaa5e262/Jeep_Compass_MY2026_1.jpg'
    },
    {
        name: "Peugeot",
        model: "208",
        year: 2020,
        color: "Yellow",
        options: ["LED Headlights", "Bluetooth"],
        isAvailable: true,
        price: 17000,
        img: 'https://cdn-datak.motork.net/configurator-imgs/cars/it/800/PEUGEOT/208/43022_HATCHBACK-5-DOORS/peugeot-208-back-view.jpg'
    },
    {
        name: "Renault",
        model: "Clio",
        year: 2019,
        color: "Orange",
        options: ["Backup Camera", "Keyless Entry"],
        isAvailable: true,
        price: 14000,
        img: 'https://www.autoscout24.it/cms-content-assets/2hgNdRvNi1BjEm2MpSnCvB-4a3ba3df352a7f184f932dd305f4550b-Clio-2023-1100.jpg'
    },
    {
        name: "Fiat",
        model: "Panda",
        year: 2025,
        color: "White",
        options: ["Air Conditioning"],
        isAvailable: false,
        price: 11000,
        img: 'https://cdn-datak.motork.net/configurator-imgs/cars/it/800/FIAT/GRANDE-PANDA-ELETTRICA/49194_BERLINA-5-PORTE/fiat-grande-panda-front-view.jpg'
    },
    {
        name: "Lancia",
        model: "Ypsilon",
        year: 2025,
        color: "Tiffany green",
        options: ["Bluetooth", "Heated Seats"],
        isAvailable: true,
        price: 24900,
        img: 'https://cdnwp.dealerk.com/d44500bb/uploads/sites/2/2024/05/lancia-ypsilon-2024-5-1024x576.jpeg'
    }
]

// crea una card per ogni elemento dell'array e mostra le auto nel div "<div class="cars-container"></div>"
// implementa una ricerca per cercare l'auto tramite nome

const carsContainer = document.querySelector(".cars-container");
const inputElement = document.querySelector(".search-container input");
const searchButton = document.querySelector(".search-container button")
const searchResults = [];

function createCard(carData) {
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const carImg = document.createElement("img");
    carImg.src = carData.img;

    const cardContent = document.createElement("div");
    cardContent.setAttribute("class", "card-content");

    const carName = document.createElement("h3");
    carName.setAttribute("class", "card-name");
    carName.innerText = carData.name;

    const carModel = document.createElement("div");
    carModel.setAttribute("class", "card-model");
    carModel.innerText = carData.model;

    const carYear = document.createElement("div");
    carYear.setAttribute("class", "card-year");
    carYear.innerText = carData.year;

    const carColor = document.createElement("div");
    carColor.setAttribute("class", "card-color");
    carColor.innerText = carData.color;

    const carPrice = document.createElement("div");
    carPrice.setAttribute("class", "car-price");
    carPrice.innerText = carData.price;

    cardContent.append(carName, carModel, carYear, carColor, carPrice);

    card.append(carImg, cardContent);

    carsContainer.appendChild(card);

    if (carData.isAvailable === true) {
            const availabilityIcon = document.createElement("div");
            availabilityIcon.setAttribute("class", "availability-icon");
            card.appendChild(availabilityIcon);
        }
}

cars.forEach(car => {
    createCard(car)
})

function searchForName() {
    const inputValue = inputElement.value.toLowerCase();

    for (let i = 0; i < cars.length; i++) {
        const carName = cars[i].name.toLowerCase();

        if (carName.includes(inputValue)) {
            searchResults.push(cars[i]);
        }
    }
}

function createNoResultsMessage() {
    const noResultsMessage = document.createElement("div");
    noResultsMessage.setAttribute("class", "no-results-message")
    noResultsMessage.innerText = "No Results Found";
    carsContainer.appendChild(noResultsMessage);
}

function clearCardAndAppendResults() {
    carsContainer.innerHTML = "";

    if (searchResults.length === 0) {
        createNoResultsMessage();
    }

    searchResults.forEach(result => {
        createCard(result);
    })
}

searchButton.addEventListener("click", () => {
    searchResults.length = 0;
    searchForName();
    clearCardAndAppendResults();
})

inputElement.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        searchResults.length = 0;
        searchForName();
        clearCardAndAppendResults();
    }
})

inputElement.addEventListener("input", () => {
    if (inputElement.value === '') {
        carsContainer.innerHTML = "";
        cars.forEach(car => {
            createCard(car);
        })
    }
})