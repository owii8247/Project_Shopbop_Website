import {topnav,navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar()
document.getElementById("topnav").innerHTML = topnav()

import footer from "../components/footer.js"
document.getElementById("footer").innerHTML = footer()


let cartProducts = JSON.parse(localStorage.getItem("cartcount")) || []
let x = cartProducts.length
document.getElementById("count").innerText = `${x}`

if (cartProducts.length === 0)
{
    let div = document.createElement("div")
    div.setAttribute("id","bagbox")

    let h1 = document.createElement("h3")
    h1.innerText = "Your shoping bag is empty !"

    let p = document.createElement("p")
    p.innerText = "And that means it's time to start shopping!"

    let shop = document.createElement("button")
    shop.innerText = "Shop What's New"
    shop.setAttribute("id","shop")
    shop.addEventListener("click",function(el,index){
        shopWhatsnew(el,index)
    })


    div.append(h1,p,shop)
    document.getElementById("showProduct").append(div)
} else
{
    displayData(cartProducts);
}

var total = cartProducts.reduce(function(sum,el){
    return sum + Number(el.price);
}, 0);


console.log(total);
// document.getElementById("finalTotal").innerText = `${total}`;
document.getElementById("total").innerText = `₹${total}`;


document.querySelector(".counter").innerText = `(${cartProducts.length})`;

function displayData(cartProducts){
    cartProducts.map(function(el,index){

    let div = document.createElement("div")
    div.setAttribute("id","box")

    let image = document.createElement("img")
    image.src = el.image
    image.setAttribute("id","image")

    let divtitle = document.createElement("div")
    divtitle.setAttribute("id","divtitle")


    let title = document.createElement("h5")
    title.innerText = `${el.title}`

    let desc = document.createElement("p")
    desc.innerText = `${el.description}`

    let price = document.createElement("h5")
    price.innerText = `Rs : ${el.price}`;

    let rating = document.createElement("h5")
    rating.innerText =`Rating : ${el.rating}`

    let remove = document.createElement("button")
    remove.innerText = "Remove"
    remove.setAttribute("id","remove")
    remove.addEventListener("click",function(el,index){
        removeProduct(el,index)
    })

    divtitle.append(title,desc,price,rating,remove)
    div.append(image,divtitle)
    document.getElementById("showProduct").append(div)

        
    });

}
function removeProduct(el,index){
    cartProducts.splice(index,1)

    // localStorage.setItem("cartcount",JSON.stringify(cartProducts))
    window.location.reload()
}

localStorage.setItem("cartcount",JSON.stringify(cartProducts))

function shopWhatsnew(el,index){
    window.location.href = "./whatsnew.html"
}
        
