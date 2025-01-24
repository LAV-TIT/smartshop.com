let shopDataItem = [
  {
    id: "1",
    name: "Galaxy Buds FE, Graphite",
    price: 79,
    rate: 3.5,
    desc: "Hear crystal-clear translations through your Galaxy Buds, whether in-person or over the phone",
    img: "./assets/images/products/2-Gallery-1600x1200.webp"
  },
  {
    id: "2",
    name: "Galaxy Watch6, BT",
    price: 239,
    rate: 3.2,

    desc: " Unlock your day's full potential with Samsung Galaxy Watch6, featuring our biggest screen1",
    img: "./assets/images/products/SM-R930NZK_ET-SFR93SB.webp"
  },
  {
    id: "3",
    name: "Galaxy Watch6, BT",
    price: 239,
    rate: 3.4,
    desc: "Full potential with Samsung Galaxy Watch6, featuring our biggest screen1 and advanced wellness insights.",
    img: "./assets/images/products/SM-R930NZK_ET-SFR93SN.webp"
  },
  {
    id: "4",
    name: "Galaxy Watch6, Silver, BT",
    price: 269,
    rate: 3.3,
    desc: " Unlock your day's full potential with Samsung Galaxy Watch6, featuring our biggest screen1",
    img: "./assets/images/products/SM-R930NZK_ET-SFR93SU.webp"
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