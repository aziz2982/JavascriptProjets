let openShopping = document.querySelector(".shopping")
let closeShopping =document.querySelector(".closeShopping")
let list = document.querySelector(".list")
let  listCard = document.querySelector(".listCard")
let body = document.querySelector("body")
let total = document.querySelector(".total")
let quantity = document.querySelector(".quantity")

openShopping.addEventListener('click', ()=>{
    body.classList.add('active')
})

closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active')
})

let products = [
    {
        id: 1,
        name: 'Product name 1',
        image: 'img1.webp',
        price: 10000,
    },
    {
        id: 2,
        name: 'Product name 2',
        image: 'img2.webp',
        price: 20000,
    },
    {
        id: 3,
        name: 'Product name 1',
        image: 'img1.webp',
        price: 30000,
    },
    {
        id: 4,
        name: 'Product name 1',
        image: 'img2.webp',
        price: 40000,
    },
    {
        id: 5,
        name: 'Product name 1',
        image: 'img5.avif',
        price: 50000,
    },
    {
        id: 6,
        name: 'Product name 1',
        image: 'img5.avif',
        price: 60000,
    },
]


let listCards = [];
function initAp(){
    products.forEach((value, key)=>{
        let newdDiv = document.createElement("div");
        newdDiv.classList.add("item")
        newdDiv.innerHTML = `
        <img src="../Img/${value.image}"/> 
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Sotip Olish</button>
        `;

        list.appendChild(newdDiv);
    })
}

initAp()

function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key]
        listCards[key].quantity = 1
    }
       reloadCard()
}

function reloadCard(){
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newdDiv = document.createElement("li");
            newdDiv.innerHTML = `
            <div> <img src="../Img/${value.image}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>${value.quantity}</div>
            <div>
            <button onclick="changeQuantity(${key},${value.quantity - 1})">-</button>
            <div class="count">${value.quantity}</div>
            <button onclick="changeQuantity(${key},${value.quantity + 1})">+</button>
            </div>
            `
            listCard.appendChild(newdDiv)
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price  = quantity * products[key].price;
    }
    reloadCard()
}