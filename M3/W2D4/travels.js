const ourProductsTravel = [
  {
    placeImgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Museumsinsel_Berlin_Juli_2021_1_%28cropped%29_b.jpg/330px-Museumsinsel_Berlin_Juli_2021_1_%28cropped%29_b.jpg",
    placeImgAlt: "Berlin city view",
    title: "Berlin City Break",
    travelDuration: "3 days / 2 nights",
    meansOfTransportation: "bus",
    transferDuration: "5h from Prague",
    rating: "4.0",
    numberOfRatings: "160",
    price: "399"
  },
  {
    placeImgSrc: "https://www.greatdays.co.uk/wp-content/uploads/2023/03/Sydney-Australia-NSW-View-of-Sydney-Harbour-with-the-Royal-Botanic-Gardens-iconic-Opera-House-and-Sydney-Harbour-Bridge-1093537-USAGEONCE-%C2%A9Tourism-Australia-EXPIRES-18.11.2025.jpg",
    placeImgAlt: "Sydney Opera House with harbor view",
    title: "Sydney Coastal Adventure",
    travelDuration: "7 days / 6 nights",
    meansOfTransportation: "flight",
    transferDuration: "20h from London",
    rating: "5.0",
    numberOfRatings: "480",
    price: "2.199"
  },
  {
    placeImgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQia2mslp00h9v6ZmdOL_VqUwQvjZ_MAIS5gg&s",
    placeImgAlt: "Great Wall of China near Beijing",
    title: "Beijing Ancient Wonders",
    travelDuration: "6 days / 5 nights",
    meansOfTransportation: "flight",
    transferDuration: "11h from Paris",
    rating: "4.5",
    numberOfRatings: "350",
    price: "1.299"
  },
  {
    placeImgSrc: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Moraine_Lake_17092005.jpg",
    placeImgAlt: "Canadian Rockies mountain view",
    title: "Canadian Rockies Explorer",
    travelDuration: "7 days / 6 nights",
    meansOfTransportation: "train",
    transferDuration: "5h from Vancouver",
    rating: "4.5",
    numberOfRatings: "290",
    price: "1.099"
  },
  {
    placeImgSrc: "https://assets.kerzner.com/api/public/content/3f6574fe72b64b0a8d1211906a523def?v=12412769&t=w2880",
    placeImgAlt: "Cape Town Table Mountain view",
    title: "Cape Town Adventure",
    travelDuration: "6 days / 5 nights",
    meansOfTransportation: "flight",
    transferDuration: "12h from Amsterdam",
    rating: "4.0",
    numberOfRatings: "260",
    price: "999"
  },
  {
    placeImgSrc: "https://images.squarespace-cdn.com/content/v1/51a39504e4b093105c265c24/1532581094962-UDU0YRK8XB9P9MZZ75QM/glenn-guy-red-square-moscow.jpg",
    placeImgAlt: "Moscow Red Square at night",
    title: "Moscow Historic Tour",
    travelDuration: "5 days / 4 nights",
    meansOfTransportation: "train",
    transferDuration: "8h from St. Petersburg",
    rating: "3.5",
    numberOfRatings: "120",
    price: "699"
  },
  {
    placeImgSrc: "https://cdn.britannica.com/54/150754-050-5B93A950/statue-Christ-the-Redeemer-Rio-de-Janeiro.jpg",
    placeImgAlt: "Rio de Janeiro Christ the Redeemer",
    title: "Rio Carnival Escape",
    travelDuration: "6 days / 5 nights",
    meansOfTransportation: "flight",
    transferDuration: "11h from Madrid",
    rating: "4.5",
    numberOfRatings: "390",
    price: "1.399"
  },
  {
    placeImgSrc: "https://www.visitdubai.com/-/media/gathercontent/poi/b/burj-khalifa/fallback-image/poi-burj-khalifa-3-dtcm-jun-2023.jpg",
    placeImgAlt: "Dubai skyline and Burj Khalifa",
    title: "Dubai Luxury Stay",
    travelDuration: "5 days / 4 nights",
    meansOfTransportation: "flight",
    transferDuration: "7h from Rome",
    rating: "4.0",
    numberOfRatings: "310",
    price: "1.099"
  },
  {
    placeImgSrc: "https://cdn.tourradar.com/s3/serp/1500x800/228746_4neR9aT8.jpg",
    placeImgAlt: "Safari Jeep and zebras",
    title: "Tanzania Safari Adventure",
    travelDuration: "6 days / 5 nights",
    meansOfTransportation: "flight",
    transferDuration: "9h from Frankfurt",
    rating: "5.0",
    numberOfRatings: "210",
    price: "2.299"
  },
  {
    placeImgSrc: "https://www.greecetravelsecrets.com/wp-content/uploads/2019/02/plaka-with-acropolis.jpg",
    placeImgAlt: "Athens Acropolis view",
    title: "Athens Historic Journey",
    travelDuration: "4 days / 3 nights",
    meansOfTransportation: "bus",
    transferDuration: "8h from Thessaloniki",
    rating: "3.5",
    numberOfRatings: "140",
    price: "399"
  },
  {
    placeImgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-D4MFcocg9v9sqng2WLfUhxZbLZ_hJCXG3A&s",
    placeImgAlt: "Los Angeles Hollywood sign",
    title: "Los Angeles West Coast Tour",
    travelDuration: "6 days / 5 nights",
    meansOfTransportation: "flight",
    transferDuration: "12h from London",
    rating: "4.5",
    numberOfRatings: "430",
    price: "1.599"
  },
  {
    placeImgSrc: "https://thailandawaits.com/wp-content/uploads/2023/11/Floating-Market-in-Bangkok-1200x741.jpg",
    placeImgAlt: "Bangkok floating market",
    title: "Bangkok Exotic Escape",
    travelDuration: "5 days / 4 nights",
    meansOfTransportation: "flight",
    transferDuration: "11h from Berlin",
    rating: "4.0",
    numberOfRatings: "280",
    price: "899"
  },
  {
    placeImgSrc: "https://cdn.kimkim.com/files/a/images/ebc94f833a572ec5527cb943a554b4f5f7f77c1d/big-9293bf919e8eb5937b4f886048e57559.jpg",
    placeImgAlt: "Oslo fjord view",
    title: "Oslo Nordic Adventure",
    travelDuration: "4 days / 3 nights",
    meansOfTransportation: "train",
    transferDuration: "7h from Stockholm",
    rating: "4.0",
    numberOfRatings: "150",
    price: "549"
  },
  {
    placeImgSrc: "https://as1.ftcdn.net/v2/jpg/01/12/72/08/1000_F_112720863_XWMzn2sm9fy28U80r4KFapSYtDDENlel.jpg",
    placeImgAlt: "Havana colorful streets with old car",
    title: "Havana Retro Vibes",
    travelDuration: "6 days / 5 nights",
    meansOfTransportation: "flight",
    transferDuration: "10h from Madrid",
    rating: "4.5",
    numberOfRatings: "270",
    price: "1.099"
  },
  {
    placeImgSrc: "https://images.pexels.com/photos/18495179/pexels-photo-18495179/free-photo-of-seoul-at-night.jpeg",
    placeImgAlt: "Seoul skyline at night",
    title: "Seoul Modern Journey",
    travelDuration: "6 days / 5 nights",
    meansOfTransportation: "flight",
    transferDuration: "13h from New York",
    rating: "5.0",
    numberOfRatings: "360",
    price: "1.299"
  },
  {
    placeImgSrc: "https://upload.wikimedia.org/wikipedia/commons/3/35/Warsaw_Old_Town_Market_Square_10.JPG",
    placeImgAlt: "Warsaw old town square",
    title: "Warsaw Historical Tour",
    travelDuration: "3 days / 2 nights",
    meansOfTransportation: "bus",
    transferDuration: "7h from Prague",
    rating: "3.5",
    numberOfRatings: "115",
    price: "249"
  },
  {
    placeImgSrc: "https://media.istockphoto.com/id/626545182/photo/toronto-skyline-with-purple-light-toronto-ontario-canada.jpg?s=612x612&w=0&k=20&c=gTfPgxMvsUZaz7YS3EF2voErqf2MmQRpwlHnO1jVBBc=",
    placeImgAlt: "Toronto skyline",
    title: "Toronto Urban Experience",
    travelDuration: "5 days / 4 nights",
    meansOfTransportation: "flight",
    transferDuration: "9h from London",
    rating: "4.0",
    numberOfRatings: "280",
    price: "999"
  },
  {
    placeImgSrc: "https://deih43ym53wif.cloudfront.net/large_petra-jordan-shutterstock_1030695769_93d66c6973.jpeg",
    placeImgAlt: "Petra Treasury in Jordan",
    title: "Petra Ancient Wonders",
    travelDuration: "4 days / 3 nights",
    meansOfTransportation: "flight",
    transferDuration: "5h from Rome",
    rating: "4.5",
    numberOfRatings: "190",
    price: "799"
  },
  {
    placeImgSrc: "https://www.marinabaysands.com/content/dam/marinabaysands/more/more-masthead-desktop-1920x1080.jpg",
    placeImgAlt: "Singapore Marina Bay Sands",
    title: "Singapore City Escape",
    travelDuration: "5 days / 4 nights",
    meansOfTransportation: "flight",
    transferDuration: "12h from Paris",
    rating: "5.0",
    numberOfRatings: "420",
    price: "1.499"
  },
  {
    placeImgSrc: "https://www.discoveringbritain.org/assets/components/phpthumbof/cache/Edinburgh.0f03643af114dd91fae10a4d25092d4d.jpg",
    placeImgAlt: "Edinburgh Castle on the hill",
    title: "Edinburgh Scottish Tour",
    travelDuration: "3 days / 2 nights",
    meansOfTransportation: "train",
    transferDuration: "5h from London",
    rating: "4.0",
    numberOfRatings: "170",
    price: "399"
  },
  {
    placeImgSrc: "https://whc.unesco.org/uploads/thumbs/site_0786_0022-1200-630-20130923102244.jpg",
    placeImgAlt: "Vienna Schönbrunn Palace gardens",
    title: "Vienna Classical Escape",
    travelDuration: "4 days / 3 nights",
    meansOfTransportation: "train",
    transferDuration: "3h from Budapest",
    rating: "4.0",
    numberOfRatings: "145",
    price: "459"
  },
  {
    placeImgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFgvRwRgu8QpDvmAVmS09rc463ziUJ5qj61w&s",
    placeImgAlt: "Istanbul Blue Mosque",
    title: "Istanbul Crossroads of Culture",
    travelDuration: "5 days / 4 nights",
    meansOfTransportation: "flight",
    transferDuration: "4h from Berlin",
    rating: "4.5",
    numberOfRatings: "280",
    price: "799"
  },
  {
    placeImgSrc: "https://egyptescapes.com/wp-content/uploads/2022/04/AdobeStock_279098467.jpg",
    placeImgAlt: "Cairo pyramids and Sphinx",
    title: "Cairo & Pyramids Experience",
    travelDuration: "6 days / 5 nights",
    meansOfTransportation: "flight",
    transferDuration: "5h from Rome",
    rating: "4.0",
    numberOfRatings: "310",
    price: "899"
  },
  {
    placeImgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvh0Sj2VdOSsoqZHi3Oa_Id856w-pUuM0xdw&s",
    placeImgAlt: "New Delhi Lotus Temple",
    title: "Delhi & Taj Mahal Journey",
    travelDuration: "7 days / 6 nights",
    meansOfTransportation: "flight",
    transferDuration: "9h from Frankfurt",
    rating: "4.5",
    numberOfRatings: "390",
    price: "1.299"
  },
  {
    placeImgSrc: "https://cdn.travel-in-portugal.com/sites/default/files/photos/alfama-tram-cathedral.jpg",
    placeImgAlt: "Lisbon tram in Alfama district",
    title: "Lisbon Coastal Charm",
    travelDuration: "4 days / 3 nights",
    meansOfTransportation: "flight",
    transferDuration: "3h from Paris",
    rating: "4.0",
    numberOfRatings: "210",
    price: "549"
  },
  {
    placeImgSrc: "https://static.euronews.com/articles/stories/06/36/19/54/1440x810_cmsv2_bc7c4732-0936-5f3a-8281-c29b50eb783c-6361954.jpg",
    placeImgAlt: "Reykjavik with Northern Lights",
    title: "Reykjavik Northern Lights Tour",
    travelDuration: "5 days / 4 nights",
    meansOfTransportation: "flight",
    transferDuration: "4h from London",
    rating: "5.0",
    numberOfRatings: "240",
    price: "1.099"
  },
  {
    placeImgSrc: "https://media.istockphoto.com/id/1297278785/photo/helsinki-cathedral-in-winter-finland.jpg?s=612x612&w=0&k=20&c=p8jeKcwKXYz8p3JNMtEL4cHlXL-vhjtjRRDUBRyneHE=",
    placeImgAlt: "Helsinki snowy cathedral view",
    title: "Helsinki Winter Escape",
    travelDuration: "4 days / 3 nights",
    meansOfTransportation: "train",
    transferDuration: "7h from St. Petersburg",
    rating: "4.0",
    numberOfRatings: "130",
    price: "499"
  },
  {
    placeImgSrc: "https://assets.milestoneinternet.com/cdn-cgi/image/f=auto/hotel-nikko-san-francisco/hotelnikkosf/mainimages/golden-gate-bridge-detailpage-hero.jpg?width=970&height=650",
    placeImgAlt: "San Francisco Golden Gate Bridge",
    title: "San Francisco Bay Adventure",
    travelDuration: "6 days / 5 nights",
    meansOfTransportation: "flight",
    transferDuration: "11h from Paris",
    rating: "4.5",
    numberOfRatings: "340",
    price: "1.399"
  },
  {
    placeImgSrc: "https://upload.wikimedia.org/wikipedia/commons/0/07/Hungarian_Parliament_Building_from_across_the_Danube_from_Gell%C3%A9rt_Hill._Budapest_sunset_%288130437015%29.jpg",
    placeImgAlt: "Budapest Parliament on the Danube",
    title: "Budapest Thermal & Culture Tour",
    travelDuration: "4 days / 3 nights",
    meansOfTransportation: "train",
    transferDuration: "3h from Vienna",
    rating: "4.0",
    numberOfRatings: "200",
    price: "399"
  },
  {
    placeImgSrc: "https://afar.brightspotcdn.com/dims4/default/2aa6b72/2147483647/strip/true/crop/695x477+77+0/resize/660x453!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2F1b%2F75%2F318820b65c8370ad408e4bda36b7%2Foriginal-14f956c150d5e21fd6495954ded90149.jpg",
    placeImgAlt: "Mexico City cathedral and Zocalo",
    title: "Mexico City Culture Trip",
    travelDuration: "6 days / 5 nights",
    meansOfTransportation: "flight",
    transferDuration: "12h from Madrid",
    rating: "4.5",
    numberOfRatings: "270",
    price: "1.099"
  },
  {
    placeImgSrc: "https://cdn.gaijinpot.com/app/uploads/sites/6/2018/09/Osaka-caslte-night-cherry-blossom.jpg",
    placeImgAlt: "Osaka castle with cherry blossoms",
    title: "Osaka & Kyoto Highlights",
    travelDuration: "7 days / 6 nights",
    meansOfTransportation: "flight",
    transferDuration: "13h from Paris",
    rating: "5.0",
    numberOfRatings: "310",
    price: "1.499"
  },
  {
    placeImgSrc: "https://www.fandptravel.com/wp-content/uploads/2023/12/Trygg_Ro%CC%88der_Aug_22_135._RET.jpg",
    placeImgAlt: "Stockholm archipelago view",
    title: "Stockholm Archipelago Tour",
    travelDuration: "5 days / 4 nights",
    meansOfTransportation: "train",
    transferDuration: "6h from Copenhagen",
    rating: "4.0",
    numberOfRatings: "190",
    price: "649"
  },
  {
    placeImgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkrKBtzukiqJKvJKBVAESUNNeReQxQyd3j0A&s",
    placeImgAlt: "Buenos Aires colorful houses in La Boca",
    title: "Buenos Aires Tango Experience",
    travelDuration: "6 days / 5 nights",
    meansOfTransportation: "flight",
    transferDuration: "14h from Rome",
    rating: "4.5",
    numberOfRatings: "220",
    price: "1.299"
  },
  {
    placeImgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTqdrBVr9wEL2a1ax7uCM6g9BjzOLyzGnEFg&s",
    placeImgAlt: "Marrakech Koutoubia Mosque",
    title: "Marrakech Desert Escape",
    travelDuration: "5 days / 4 nights",
    meansOfTransportation: "flight",
    transferDuration: "4h from Madrid",
    rating: "4.0",
    numberOfRatings: "180",
    price: "799"
  },
  {
    placeImgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBdSaXNXTWG_FmkFLpx4K8Vh71sbavqkOKYA&s",
    placeImgAlt: "Copenhagen Nyhavn colorful houses",
    title: "Copenhagen Nordic Break",
    travelDuration: "3 days / 2 nights",
    meansOfTransportation: "train",
    transferDuration: "5h from Hamburg",
    rating: "3.5",
    numberOfRatings: "110",
    price: "349"
  },
  {
    placeImgSrc: "https://i0.wp.com/www.touristisrael.com/wp-content/uploads/2021/02/shutterstock_690424699-scaled.jpg?fit=2750%2C1833&ssl=1",
    placeImgAlt: "Jerusalem Old City Western Wall",
    title: "Jerusalem Holy Land Tour",
    travelDuration: "6 days / 5 nights",
    meansOfTransportation: "flight",
    transferDuration: "4h from Rome",
    rating: "4.5",
    numberOfRatings: "250",
    price: "999"
  },
  {
    placeImgSrc: "https://as2.ftcdn.net/v2/jpg/02/86/31/75/1000_F_286317553_ApfLOFzSjv7rXt6aQ46TetRccdmIO25P.jpg",
    placeImgAlt: "Shanghai skyline at night",
    title: "Shanghai Modern Wonders",
    travelDuration: "6 days / 5 nights",
    meansOfTransportation: "flight",
    transferDuration: "12h from London",
    rating: "4.5",
    numberOfRatings: "330",
    price: "1.299"
  },
  {
    placeImgSrc: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6c/44/d8.jpg",
    placeImgAlt: "Venice gondolas on the Grand Canal",
    title: "Venice Romantic Getaway",
    travelDuration: "4 days / 3 nights",
    meansOfTransportation: "train",
    transferDuration: "2h from Milan",
    rating: "4.5",
    numberOfRatings: "260",
    price: "749"
  }
];

const offersOfTheWeekTravels = [
  {
    placeImgSrc: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    placeImgAlt: "Eiffel Tower view at sunset",
    title: "Paris City Escape",
    travelDuration: "5 days / 4 nights",
    meansOfTransportation: "flight",
    transferDuration: "2h from London",
    rating: "4.0",
    numberOfRatings: "230",
    discountedPrice: "799",
    oldPrice: "950"
  },
  {
    placeImgSrc: "https://ik.imagekit.io/tvlk/blog/2024/07/shutterstock_2324082951.jpg?tr=q-70,c-at_max,w-500,h-250,dpr-2",
    placeImgAlt: "Couple in Bali with a temple view",
    title: "Bali Adventure",
    travelDuration: "7 days / 6 nights",
    meansOfTransportation: "flight",
    transferDuration: "12h from New York",
    rating: "4.5",
    numberOfRatings: "410",
    discountedPrice: "1.299",
    oldPrice: "1.550"
  },
  {
    placeImgSrc: "https://www.turismoroma.it/sites/default/files/Roma%20in%20breve.jpg",
    placeImgAlt: "View of Rome during golden hour",
    title: "Historic Rome Getaway",
    travelDuration: "4 days / 3 nights",
    meansOfTransportation: "flight",
    transferDuration: "1h from Paris",
    rating: "3.5",
    numberOfRatings: "180",
    discountedPrice: "649",
    oldPrice: "780"
  },
  {
    placeImgSrc: "https://s1.it.atcdn.net/wp-content/uploads/2015/11/shutterstock_279572969.jpg",
    placeImgAlt: "Swiss Alps view",
    title: "Swiss Alps Explorer",
    travelDuration: "6 days / 5 nights",
    meansOfTransportation: "train",
    transferDuration: "4h from Milan",
    rating: "5.0",
    numberOfRatings: "320",
    discountedPrice: "1.099",
    oldPrice: "1.350"
  },
  {
    placeImgSrc: "https://www.gokitetours.com/wp-content/uploads/2025/01/Top-10-Must-See-Tourist-Attractions-in-Prague-Czech-Republic.webp",
    placeImgAlt: "Prague Charles Bridge view",
    title: "Prague Cultural Tour",
    travelDuration: "3 days / 2 nights",
    meansOfTransportation: "bus",
    transferDuration: "6h from Berlin",
    rating: "3.5",
    numberOfRatings: "95",
    discountedPrice: "299",
    oldPrice: "370"
  },
  {
    placeImgSrc: "https://media.cntravellerme.com/photos/674989450187558af815b5c7/16:9/w_2580,c_limit/GettyImages-1337033260.jpeg",
    placeImgAlt: "Amsterdam canal and houses picture",
    title: "Amsterdam Weekend Break",
    travelDuration: "4 days / 3 nights",
    meansOfTransportation: "train",
    transferDuration: "3h from Paris",
    rating: "4.0",
    numberOfRatings: "210",
    discountedPrice: "499",
    oldPrice: "590"
  },
  {
    placeImgSrc: "https://static2-viaggi.corriereobjects.it/wp-content/uploads/2022/08/iStock-166471469-1080x720.jpg?v=1659884245",
    placeImgAlt: "Santorini white houses, blue domes and the coast",
    title: "Santorini Island Escape",
    travelDuration: "5 days / 4 nights",
    meansOfTransportation: "flight",
    transferDuration: "2h from Athens",
    rating: "4.5",
    numberOfRatings: "275",
    discountedPrice: "899",
    oldPrice: "1.050"
  },
  {
    placeImgSrc: "https://static0.thetravelimages.com/wordpress/wp-content/uploads/2022/10/brandenburg-gate-(Brandenburger-Tor)-in-Berlin-in-the-evening.jpg",
    placeImgAlt: "Berlin Brandenburg Gate at night",
    title: "Berlin City Break",
    travelDuration: "3 days / 2 nights",
    meansOfTransportation: "bus",
    transferDuration: "5h from Prague",
    rating: "4.0",
    numberOfRatings: "160",
    discountedPrice: "349",
    oldPrice: "420"
  },
  {
    placeImgSrc: "https://media.istockphoto.com/id/1594359572/photo/london-big-ben-and-traffic-on-westminster-bridge.jpg?s=612x612&w=0&k=20&c=Y0HX_X4Vdzi8PhWGdLk8QgWzImL0qlvrJpgzCtIN7-U=",
    placeImgAlt: "London Big Ben and red bus",
    title: "London Highlights Tour",
    travelDuration: "4 days / 3 nights",
    meansOfTransportation: "train",
    transferDuration: "2h from Paris",
    rating: "4.5",
    numberOfRatings: "300",
    discountedPrice: "699",
    oldPrice: "850"
  },
  {
    placeImgSrc: "https://www.mocomuseum.com/app/uploads/2025/04/269508.jpg",
    placeImgAlt: "Barcelona Sagrada Familia and city view",
    title: "Barcelona Sun & Culture",
    travelDuration: "5 days / 4 nights",
    meansOfTransportation: "flight",
    transferDuration: "1h from Madrid",
    rating: "4.5",
    numberOfRatings: "420",
    discountedPrice: "759",
    oldPrice: "920"
  },
  {
    placeImgSrc: "https://www.japanrailpassnow.com/wp-content/uploads/2016/09/Tokyo-Tower-Twilight.jpg",
    placeImgAlt: "Tokyo skyline with Tokyo Tower",
    title: "Tokyo City Lights",
    travelDuration: "6 days / 5 nights",
    meansOfTransportation: "flight",
    transferDuration: "14h from Los Angeles",
    rating: "5.0",
    numberOfRatings: "540",
    discountedPrice: "1.499",
    oldPrice: "1.799"
  },
  {
    placeImgSrc: "https://www.almanachotels.com/wp-content/uploads/elementor/thumbs/opera-house-vienna-4-scaled-r9rur3gps875ewreo1xa2e8vgx8p8sp473ypa96b0g.webp",
    placeImgAlt: "Vienna Opera House",
    title: "Vienna Imperial Tour",
    travelDuration: "4 days / 3 nights",
    meansOfTransportation: "train",
    transferDuration: "3h from Budapest",
    rating: "4.0",
    numberOfRatings: "200",
    discountedPrice: "599",
    oldPrice: "720"
  },
  {
    placeImgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hungarian_Parliament_Building_from_across_the_Danube_at_night%2C_Budapest_%2821966605546%29.jpg/2560px-Hungarian_Parliament_Building_from_across_the_Danube_at_night%2C_Budapest_%2821966605546%29.jpg",
    placeImgAlt: "Budapest Parliament at night",
    title: "Budapest River Escape",
    travelDuration: "3 days / 2 nights",
    meansOfTransportation: "bus",
    transferDuration: "7h from Vienna",
    rating: "3.5",
    numberOfRatings: "130",
    discountedPrice: "279",
    oldPrice: "350"
  },
  {
    placeImgSrc: "https://cdn-imgix.headout.com/media/images/db8d8e671a6ca9af5cffcc208f8a7846-11984-Istanbul-HistorianGuidedTourofHagiaSophia-10.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&ar=16%3A9&crop=faces&fit=crop",
    placeImgAlt: "Istanbul Hagia Sophia view",
    title: "Istanbul Heritage Journey",
    travelDuration: "5 days / 4 nights",
    meansOfTransportation: "flight",
    transferDuration: "3h from Berlin",
    rating: "4.5",
    numberOfRatings: "380",
    discountedPrice: "699",
    oldPrice: "860"
  },
  {
    placeImgSrc: "https://as1.ftcdn.net/v2/jpg/00/94/61/64/1000_F_94616444_lEJynXpDegchVx67Tabcjt70f6DIqVfR.jpg",
    placeImgAlt: "Copenhagen Nyhavn colorful houses and boats",
    title: "Copenhagen Nordic Charm",
    travelDuration: "4 days / 3 nights",
    meansOfTransportation: "train",
    transferDuration: "5h from Hamburg",
    rating: "4.0",
    numberOfRatings: "145",
    discountedPrice: "549",
    oldPrice: "640"
  },
  {
    placeImgSrc: "https://entiretravel.imgix.net/getmedia/778914be-69fe-41e1-9928-746833ce741c/Cover-Image-Best-Beaches-in-Maldives.jpeg?auto=format",
    placeImgAlt: "Maldives overwater villas",
    title: "Maldives Luxury Escape",
    travelDuration: "7 days / 6 nights",
    meansOfTransportation: "flight",
    transferDuration: "10h from Dubai",
    rating: "5.0",
    numberOfRatings: "410",
    discountedPrice: "2.299",
    oldPrice: "2.750"
  },
  {
    placeImgSrc: "https://images.goway.com/production/styles/hero_s1_2xl/s3/hero/iStock-1137863101.jpg.webp?VersionId=TNqde4tjrqdi_HRPUjK4M.ozf0__Ik67&itok=_3r2F97l",
    placeImgAlt: "Lisbon view and coast",
    title: "Lisbon Coastal Adventure",
    travelDuration: "5 days / 4 nights",
    meansOfTransportation: "flight",
    transferDuration: "3h from Paris",
    rating: "4.0",
    numberOfRatings: "190",
    discountedPrice: "629",
    oldPrice: "780"
  },
  {
    placeImgSrc: "https://www.marrakech-desert-trips.com/wp-content/uploads/2023/07/Marrakech-to-Fes-desert-tour-3-days-900x500.jpg",
    placeImgAlt: "girl and Marrakech desert",
    title: "Marrakech Desert Journey",
    travelDuration: "6 days / 5 nights",
    meansOfTransportation: "flight",
    transferDuration: "4h from Madrid",
    rating: "4.5",
    numberOfRatings: "260",
    discountedPrice: "899",
    oldPrice: "1.050"
  },
  {
    placeImgSrc: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/10/02/50/45.jpg",
    placeImgAlt: "New York view and Statue of Liberty",
    title: "New York Highlights",
    travelDuration: "6 days / 5 nights",
    meansOfTransportation: "flight",
    transferDuration: "8h from London",
    rating: "5.0",
    numberOfRatings: "670",
    discountedPrice: "1.499",
    oldPrice: "1.750"
  }
];

const cardsContainer = document.querySelector(".cards-container");

function generateTravelsCards(travel, cardsContainer) {

  const travelCardElement = document.createElement("div");
  travelCardElement.classList.add("card");
  cardsContainer.appendChild(travelCardElement);

  const travelImgElement = document.createElement("img");
  travelImgElement.classList.add("card-img-top", "w-100", "object-fit-cover");
  travelImgElement.src = travel.placeImgSrc;
  travelImgElement.alt = travel.placeImgAlt;
  travelCardElement.appendChild(travelImgElement);

  const travelCardBodyElement = document.createElement("div");
  travelCardBodyElement.classList.add("card-body");
  travelCardElement.appendChild(travelCardBodyElement);

  const cardBodyContainerElement = document.createElement("div");
  cardBodyContainerElement.classList.add("d-flex", "flex-column");
  travelCardBodyElement.appendChild(cardBodyContainerElement);

  const travelTitleElement = document.createElement("h5");
  travelTitleElement.classList.add("m-0");
  travelTitleElement.innerText = travel.title;
  cardBodyContainerElement.appendChild(travelTitleElement);

  const durationAndTransportationContainerElement = document.createElement("div");
  durationAndTransportationContainerElement.classList.add("d-flex", "flex-column", "gap-3", "duration-and-transportation-container");
  cardBodyContainerElement.appendChild(durationAndTransportationContainerElement);

  const durationTravelContainerElement = document.createElement("div");
  durationTravelContainerElement.classList.add("d-flex", "align-items-center");
  durationAndTransportationContainerElement.appendChild(durationTravelContainerElement);

  const durationTravelIconContainerElement = document.createElement("div");
  durationTravelContainerElement.appendChild(durationTravelIconContainerElement);

  const durationTravelIconElement = document.createElement("i");
  durationTravelIconElement.classList.add("bi", "bi-hourglass-split");
  durationTravelIconContainerElement.appendChild(durationTravelIconElement);

  const durationTravelParagraphElement = document.createElement("p");
  durationTravelParagraphElement.classList.add("m-0");
  durationTravelParagraphElement.innerText = travel.travelDuration;
  durationTravelContainerElement.appendChild(durationTravelParagraphElement);

  const transportationTravelContainerElement = document.createElement("div");
  transportationTravelContainerElement.classList.add("d-flex", "align-items-center");
  durationAndTransportationContainerElement.appendChild(transportationTravelContainerElement);

  const transportationTravelIconContainerElement = document.createElement("div");
  transportationTravelContainerElement.appendChild(transportationTravelIconContainerElement);

  const transportationIconElement = document.createElement("i");
  transportationIconElement.classList.add("bi");
  transportationTravelIconContainerElement.appendChild(transportationIconElement);

  const transportationParagraphElement = document.createElement("p");
  transportationParagraphElement.classList.add("m-0");
  transportationParagraphElement.innerText = travel.transferDuration;
  transportationTravelContainerElement.appendChild(transportationParagraphElement);

  const ratingTravelContainerElement = document.createElement("div");
  ratingTravelContainerElement.classList.add("d-flex", "align-items-center", "gap-2", "rating-travel-container");
  cardBodyContainerElement.appendChild(ratingTravelContainerElement);

  const ratingTravelIconsContainerElement = document.createElement("div");
  ratingTravelIconsContainerElement.classList.add("d-flex");
  ratingTravelContainerElement.appendChild(ratingTravelIconsContainerElement);

  const ratingTravelFirstIconElement = document.createElement("i");
  ratingTravelFirstIconElement.classList.add("bi", "bi-star");
  ratingTravelIconsContainerElement.appendChild(ratingTravelFirstIconElement);

  const ratingTravelSecondIconElement = document.createElement("i");
  ratingTravelSecondIconElement.classList.add("bi", "bi-star");
  ratingTravelIconsContainerElement.appendChild(ratingTravelSecondIconElement);

  const ratingTravelThirdIconElement = document.createElement("i");
  ratingTravelThirdIconElement.classList.add("bi", "bi-star");
  ratingTravelIconsContainerElement.appendChild(ratingTravelThirdIconElement);

  const ratingTravelFourthIconElement = document.createElement("i");
  ratingTravelFourthIconElement.classList.add("bi", "bi-star");
  ratingTravelIconsContainerElement.appendChild(ratingTravelFourthIconElement);

  const ratingTravelFifthIconElement = document.createElement("i");
  ratingTravelFifthIconElement.classList.add("bi", "bi-star");
  ratingTravelIconsContainerElement.appendChild(ratingTravelFifthIconElement);

  const ratingTravelNumberElement = document.createElement("p");
  ratingTravelNumberElement.classList.add("m-0");
  ratingTravelNumberElement.innerText = travel.rating;
  ratingTravelContainerElement.appendChild(ratingTravelNumberElement);

  const ratingTravelSecondParagraphElement = document.createElement("p");
  ratingTravelSecondParagraphElement.classList.add("m-0");
  ratingTravelSecondParagraphElement.innerText = `(${travel.numberOfRatings})`;
  ratingTravelContainerElement.appendChild(ratingTravelSecondParagraphElement);

  const travelPriceContainerElement = document.createElement("div");
  travelPriceContainerElement.classList.add("d-flex", "align-items-center", "gap-1", "travel-price-container");
  cardBodyContainerElement.appendChild(travelPriceContainerElement);

  if (travel.price) {

    const travelPriceElement = document.createElement("p");
    travelPriceContainerElement.classList.add("regular-price");
    travelPriceElement.innerText = `$${travel.price}`;
    travelPriceContainerElement.appendChild(travelPriceElement);

  } else if (travel.discountedPrice && travel.oldPrice) {

    const travelDiscountedPriceElement = document.createElement("p");
    travelDiscountedPriceElement.classList.add("discounted-price");
    travelDiscountedPriceElement.innerText = `$${travel.discountedPrice}`;
    travelPriceContainerElement.appendChild(travelDiscountedPriceElement);

    const travelOldPriceElement = document.createElement("p");
    travelOldPriceElement.classList.add("old-price");
    travelOldPriceElement.innerText = `$${travel.oldPrice}`;
    travelPriceContainerElement.appendChild(travelOldPriceElement);

  }

  fillStarsRatingAccordingToRatingNumber(ratingTravelNumberElement, ratingTravelFirstIconElement, ratingTravelSecondIconElement, ratingTravelThirdIconElement, ratingTravelFourthIconElement, ratingTravelFifthIconElement);

  changeTransportationIconAccordingToMeansOfTransportation(travel, transportationIconElement);
}


function fillStarsRatingAccordingToRatingNumber(num, firstStar, secondStar, thirdStar, fourthStar, fifthStar) {
  if (num.innerText === "0.5") {
    firstStar.classList.remove("bi-star");
    firstStar.classList.add("bi-star-half");
  } else if (num.innerText === "1.0") {
    firstStar.classList.remove("bi-star");
    firstStar.classList.add("bi-star-fill");
  } else if (num.innerText === "1.5") {
    firstStar.classList.remove("bi-star");
    firstStar.classList.add("bi-star-fill");
    secondStar.classList.remove("bi-star");
    secondStar.classList.add("bi-star-half");
  } else if (num.innerText === "2.0") {
    firstStar.classList.remove("bi-star");
    firstStar.classList.add("bi-star-fill");
    secondStar.classList.remove("bi-star");
    secondStar.classList.add("bi-star-fill");
  } else if (num.innerText === "2.5") {
    firstStar.classList.remove("bi-star");
    firstStar.classList.add("bi-star-fill");
    secondStar.classList.remove("bi-star");
    secondStar.classList.add("bi-star-fill");
    thirdStar.classList.remove("bi-star");
    thirdStar.classList.add("bi-star-half");
  } else if (num.innerText === "3.0") {
    firstStar.classList.remove("bi-star");
    firstStar.classList.add("bi-star-fill");
    secondStar.classList.remove("bi-star");
    secondStar.classList.add("bi-star-fill");
    thirdStar.classList.remove("bi-star");
    thirdStar.classList.add("bi-star-fill");
  } else if (num.innerText === "3.5") {
    firstStar.classList.remove("bi-star");
    firstStar.classList.add("bi-star-fill");
    secondStar.classList.remove("bi-star");
    secondStar.classList.add("bi-star-fill");
    thirdStar.classList.remove("bi-star");
    thirdStar.classList.add("bi-star-fill");
    fourthStar.classList.remove("bi-star");
    fourthStar.classList.add("bi-star-half");
  } else if (num.innerText === "4.0") {
    firstStar.classList.remove("bi-star");
    firstStar.classList.add("bi-star-fill");
    secondStar.classList.remove("bi-star");
    secondStar.classList.add("bi-star-fill");
    thirdStar.classList.remove("bi-star");
    thirdStar.classList.add("bi-star-fill");
    fourthStar.classList.remove("bi-star");
    fourthStar.classList.add("bi-star-fill");
  } else if (num.innerText === "4.5") {
    firstStar.classList.remove("bi-star");
    firstStar.classList.add("bi-star-fill");
    secondStar.classList.remove("bi-star");
    secondStar.classList.add("bi-star-fill");
    thirdStar.classList.remove("bi-star");
    thirdStar.classList.add("bi-star-fill");
    fourthStar.classList.remove("bi-star");
    fourthStar.classList.add("bi-star-fill");
    fifthStar.classList.remove("bi-star");
    fifthStar.classList.add("bi-star-half");
  } else if (num.innerText === "5.0") {
    firstStar.classList.remove("bi-star");
    firstStar.classList.add("bi-star-fill");
    secondStar.classList.remove("bi-star");
    secondStar.classList.add("bi-star-fill");
    thirdStar.classList.remove("bi-star");
    thirdStar.classList.add("bi-star-fill");
    fourthStar.classList.remove("bi-star");
    fourthStar.classList.add("bi-star-fill");
    fifthStar.classList.remove("bi-star");
    fifthStar.classList.add("bi-star-fill");
  }
}

function changeTransportationIconAccordingToMeansOfTransportation(travel, transportationIcon) {

  if (travel.meansOfTransportation.includes("flight")) {
    transportationIcon.classList.add("bi-airplane");
  } else if (travel.meansOfTransportation.includes("train")) {
    transportationIcon.classList.add("bi-train-front");
  } else if (travel.meansOfTransportation.includes("bus")) {
    transportationIcon.classList.add("bi-bus-front");
  }

};

ourProductsTravel.forEach(travel => {
  generateTravelsCards(travel, cardsContainer);
});

offersOfTheWeekTravels.forEach(travel => {
  generateTravelsCards(travel, cardsContainer);
});