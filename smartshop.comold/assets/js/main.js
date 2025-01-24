$(document).ready(function () {
    $(window).bind("mousewheel", function (event) {
        if (event.originalEvent.wheelDelta >= 0) {
            $(".menu_header").removeClass("isactive_scroll");
        } else {
            $(".menu_header").addClass("isactive_scroll");
        }
    });
});

// You can also pass an optional settings object
// below listed default settings
AOS.init({
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll

    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
});

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed!');
});


let shop = document.getElementById("shop");
let basket = JSON.parse(localStorage.getItem("data")) || [];

let getshop = () => {
    return (shop.innerHTML = shopDataItem
        .map((x) => {
            let { id, name, price, desc, img } = x;
            let search = basket.find((x) => x.id === id) || [];
            return `
            <div id="product_${id}" class="item col-12 col-md-6 col-lg-4 col-xl-3 pb-4" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000"
        data-aos-easing="ease-in-out">
                <div class="card h-100">
                    <img src="${img}" class="card-img-top" alt="${name}"/>
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text" style="color: #606060;">
                            ${desc}
                        </p>
                        <div class="border-top pt-3 d-flex justify-content-between align-items-center">
                            <h4 class="price">$ ${price}</h4>
                            <div>
                                <button onclick="descrement(${id})" class="text-danger bg-light">
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                                <span id="${id}" class="px-1 quantity">${search.item === undefined ? 0 : search.item}</span>
                                <button onclick="increment(${id})" class="text-success bg-light">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                            </div>
                            <button onclick="increment(${id})" class="text-primary bg-light"><i class="fa-solid fa-cart-shopping"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            
            `;
        }).join(""));
};

getshop();

let increment = (id) => {
    let selectedId = id;
    let search = basket.find((x) => x.id === selectedId.id);
    if (search === undefined) {
        basket.push({
            id: selectedId.id,
            item: 1,
        });
    } else {
        search.item += 1;
    }
    GenerateItemCard();
    update(selectedId.id);
    localStorage.setItem("data", JSON.stringify(basket));
};
let descrement = (id) => {
    let selectedId = id;
    let search = basket.find((x) => x.id === selectedId.id);
    if (search === undefined) return
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    }
    update(selectedId.id);
    basket = basket.filter((x) => x.item !== 0);
    GenerateItemCard();
    localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculator();
    TotalAmount();
};

let calculator = () => {
    let cartamount = document.getElementById("cartamount").innerHTML =
        basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculator();

//time 1:54:25

// ================ Priview Card ==========

let label = document.getElementById("label");
let hoppingcart = document.getElementById("hoppingcart");
let totalprice = document.getElementById("total-price");
let GenerateItemCard = () => {
    if (basket.length !== 0) {
        return (hoppingcart.innerHTML = basket.map((x) => {
            let { id, name, item, price } = x;
            let search = shopDataItem.find((y) => y.id === id) || [];
            let total_item_price = `${item * search.price}`;
            let total_price = `${total_item_price}`
            return `
            <div class="item-card rounded-3 d-flex gap-2 mb-2 border position-relative">
            <span onclick="RemoveItemsCard(${id})" class="btn_close position-absolute top-0 end-0 p-2 text-white fs-5 bg-danger" style="width: 25px;
            height: 25px;
            line-height: 4px; cursor: pointer; border-radius: 0px 5px 0px 5px;"
            >x</span>
            <div class="item-img w-25 border-end">
              <img src="${search.img}"
                class="img-fluid rounded-start" alt="...">
            </div>
            <div class="item-card-body px-1 w-75">
              <div class="card-price py-2">
                <h6 class="card-title">${search.name}</h6>
                <p class="mb-0"><small class="card-text mb-0">Piece $ <span>${search.price}</span>
                /<span class="text-success fw-bold">
                New Piece $ <span>${total_item_price}</span>
                </span>
                </small></p>
                <div class="card-text d-flex align-items-center justify-content-between">
                  <small class="text-muted">
                  Quantity <span class="fw-bold"> 1/ ${item}</span></small>
                    <div class="p-2">
                        <button onclick="descrement(${id})" class="text-danger border-0 rounded-circle">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                        <button onclick="increment(${id})" class="text-success border-0 rounded-circle">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
            `
        }).join(""));

    }
    else {
        label.innerHTML = "";
        hoppingcart.innerHTML = `
        <div style="display: flex;
        align-items: center;
        justify-content: center;
        height: 75vh;">
        <h4 class="text-center card-empty fonts-r">Empty Card</h4>
        </div>
       `;
    }
}
GenerateItemCard();

let RemoveItemsCard = (id) => {
    let selectedId = id.id;
    basket = basket.filter(i => i.id !== selectedId)
    localStorage.setItem("data", JSON.stringify(basket));
    calculator();
    GenerateItemCard();
    TotalAmount();
}
    ;

let TotalAmount = () => {
    if (basket.length !== 0) {
        let amount = basket.map(x => {
            let { id, item, price } = x;
            let search = shopDataItem.find(y => y.id === id) || [];
            return item * search.price;
        }).reduce((x, y) => x + y, 0);
        totalprice.innerHTML = `$ ${amount}`;
    }
    else {
        return;
    }
}
TotalAmount();






