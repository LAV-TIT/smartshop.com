let shopDataItem = [
  {
    id: "sddaet",
    name: "Galaxy Buds FE, Graphite",
    price: 79,
    desc: "Hear crystal-clear translations through your Galaxy Buds, whether in-person or over the phone",
    img: "../assets/images/products/2-Gallery-1600x1200.webp"
  },
  {
    id: "dsdass",
    name: "Galaxy Watch6, BT",
    price: 239,
    desc: " Unlock your day's full potential with Samsung Galaxy Watch6, featuring our biggest screen1",
    img: "../assets/images/products/SM-R930NZK_ET-SFR93SB.webp"
  },
  {
    id: "sddsd",
    name: "Galaxy Watch6, BT",
    price: 239,
    desc: "Full potential with Samsung Galaxy Watch6, featuring our biggest screen1 and advanced wellness insights.",
    img: "../assets/images/products/SM-R930NZK_ET-SFR93SN.webp"
  },
  {
    id: "sdsdfd",
    name: "Galaxy Watch6, Silver, BT",
    price: 269,
    desc: " Unlock your day's full potential with Samsung Galaxy Watch6, featuring our biggest screen1",
    img: "../assets/images/products/SM-R930NZK_ET-SFR93SU.webp"
  },
  {
    id: "dfsesssss",
    name: "White Gold Plated Princess",
    price: 9.99,
    rating: 400,
    rate: 3,
    desc: "Classic Created Wedding Engagement Solitaire",
    img: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: "dfsesfs",
    name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    rating: 250,
    rate: 2.9,
    desc: "21. 5 inches Full HD (1920 x 1080) widescreen IPS",
    img: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
  },
  {
    id: "dfsesfsd",
    name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
    price: 999,
    rating: 140,
    rate: 3,
    desc: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING",
    img: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
  },
  {
    id: "dfsedsfsd",
    name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 20,
    rating: 235,
    rate: 2.6,
    desc: "Note:The Jackets is US standard size, Please choose",
    img: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
  },
  {
    id: "dfse",
    name: "Black Leather Loafers",
    price: 200,
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img: "https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "sdsew",
    name: "Pair of Black Dress Shoes",
    price: 45,
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img: "https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "gees",
    name: "Person Feet Low-tops",
    price: 100,
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img: "https://images.pexels.com/photos/267181/pexels-photo-267181.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: "wfd",
    name: "Pair of Black Dress Shoes",
    price: 150,
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img: "https://images.pexels.com/photos/267326/pexels-photo-267326.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  
];



// async function GatApi() {
//   const response = await fetch('https://fakestoreapi.com/products');
//   const data = await response.json();
//   let show = document.getElementById("show");

//   data.map((item) => {

//     show.innerHTML += `
//           <div class="col-12 col-sm-6 col-md-4 pb-3">
//               <div class="card h-100">
//                   <div class="m-auto" style="height: 200px;">
//                   <img src="${item.image}" class="img-fluid h-100" alt="..." style=" object-fit: cover;">
//                    </div>
//                   <div class="card-body">
//                      <h5 class="card-title">${item.title} </h5>
//                       <p class="card-text fw-bold">Price:$ ${item.price}</p>
//                       <p class="card-text fw-bold">rating: ${item.rating.count}</p>
//                       <p class="card-text fw-bold">rate: ${item.rating.rate}</p>
//                       <p class="card-text">category: ${item.category}</p>
//                       <p class="card-text desc">${item.description}</p>
//                       <a href="#" class="btn btn-primary">Add to Cart</a>
//                   </div>
//              </div>
//           </div>
//       `
//   })
//   console.log(data);

// }

// GatApi();