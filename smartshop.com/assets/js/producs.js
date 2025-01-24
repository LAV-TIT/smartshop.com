
let shop = document.getElementById("shop");
let basket = JSON.parse(localStorage.getItem("data")) || [];

let getshop = () => {
    return (shop.innerHTML = shopDataItem
        .map((x) => {
            let { id, name, price, desc, img, rate } = x;
            let search = basket.find((x) => x.id === id) || [];
            return `
            <div id="product_${id}" class="col-12 col-sm-6 col-lg-4 col-xl-3 pb-4" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000"
        data-aos-easing="ease-in-out">
                <div rotbin="New" class="box_item">
                    <div class="img">
                       <img src="${img}" class="card-img-top" alt="${name}"/>
                    </div>
                    <div class="box_body">
                        <a href="" style="text-decoration: none;"><h5 class="title" style="font-weight: 400;">${name}</h5></a>
                        <p class="rate">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i> 
                        <i class="fa-solid fa-star-half-stroke"></i><span> (${rate})</span>
                        </p>
                        <p class="text" style="color: #1a1a1a;">
                            ${desc.substring(0, 60)}...
                        </p>
                         <h4 class="price">$ ${price}</h4>
                        <div style="display: flex; justify-content: space-between;align-items: center;">
                            <div class="">
                                <span>Qty</span>
                                <button onclick="descrement(${id})" class="btn text-danger bg-light">
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                                <span id="${id}" class="px-1 quantity">${search.item === undefined ? 0 : search.item}</span>
                                <button onclick="increment(${id})" class="btn text-success bg-light">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                            </div>
                            <div class="">
                                <button class="btn_heart">
                                    <i class="fa-solid fa-heart"></i>
                                </button>
                                 <button onclick="increment(${id})" class="btn_add_to_cart  text-primary bg-light">
                                <i class="fa-solid fa-cart-shopping"></i>
                                </button>
                            </div>
                           
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
let cartamount = document.getElementById("cartamount");
const modals_sidebar_cart = document.querySelector('#modals_sidebar_cart');
const btn_close_cart = document.querySelector('.btn_close_cart');
cartamount.onclick = () => { modals_sidebar_cart.classList.add("show"); }
btn_close_cart.onclick = () => { modals_sidebar_cart.classList.remove("show"); }
let calculator = () => {
    cartamount.setAttribute('number',
        basket.map((x) => x.item).reduce((x, y) => x + y, 0)
    );
};
calculator();

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
            <div class="item_card rounded-3 d-flex gap-2 mb-2 border position-relative">
            <span onclick="RemoveItemsCard(${id})" class="btn_remove_item">x</span>
            <div class="item_img w-25 border-end">
              <img src="${search.img}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="item_card_body px-1 w-75">
              <div class="card-price py-2">
                <h6 class="card-title">${search.name}</h6>
                <p class="mb-0">
                <small class="card-text mb-0">Piece $ <span>${search.price}</span>
                <br>
                <span class="text-success fw-bold">
                New Piece $ <span>${total_item_price}</span>
                </span>
                </small><br>
                <small class="text-muted">
                  Qty <span class="fw-bold"> 1/ ${item}</span>
                  </small>
                </p>
              </div>
            </div>
            <div class="card_btns">
                    <div class="p-2">
                        <button onclick="descrement(${id})" class="btn">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                        <button onclick="increment(${id})" class="btn">
                            <i class="fa-solid fa-plus"></i>
                        </button>
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
    update(selectedId.id);
    localStorage.setItem("data", JSON.stringify(basket));
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