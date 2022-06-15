import {topnav,navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar()
document.getElementById("topnav").innerHTML = topnav()

import footer from "../components/footer.js"
document.getElementById("footer").innerHTML = footer()



   



let cartData = JSON.parse(localStorage.getItem("cartcount"))

cartData.map(function(el,index){
    let div = document.createElement("div")
    div.setAttribute("id","box")

    let image = document.createElement("img")
    image.src = el.image

    let divtitle = document.createElement("div")
    divtitle.setAttribute("id","titlebox")

    let title = document.createElement("h3")
    title.innerHTML = el.title

    let price = document.createElement("p")
    price.innerHTML = `Rs : ${el.price}`

    let btn = document.createElement("div")
    btn.setAttribute("id","button")

    let add = document.createElement("button")
    add.innerText = "Add To Cart"
    add.setAttribute("id","addtocart")
    add.addEventListener("click",function(el,index){
        addtocart(el,index)
    })

    let wishlist = document.createElement("button")
    wishlist.innerText = "Add To Wish List"
    wishlist.setAttribute("id","wishlist")
    wishlist.addEventListener("click",function(el,index){
        addtowishlist(el,index)
    })

    


    
    divtitle.append(title,price)
    document.getElementById("title").append(divtitle)
    div.append(image)
    document.getElementById("imagebox").append(div)
    btn.append(add,wishlist)
    document.getElementById("btn").append(btn)



})
function addtocart(el){
    let arr = []
    arr.push(el)
    localStorage.setItem("cartcount", JSON.stringify(arr))
    window.location.href ="./cart.html"
    // window.location.reload()
}

function addtowishlist(el){
    let arr = []
    arr.push(el)
    localStorage.setItem("cartcount", JSON.stringify(arr))
    window.location.href ="./wishlist.html"
    // window.location.reload()
}