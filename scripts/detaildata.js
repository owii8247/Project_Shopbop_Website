import {topnav,navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar()
document.getElementById("topnav").innerHTML = topnav()

import footer from "../components/footer.js"
document.getElementById("footer").innerHTML = footer()



   



let cartData = JSON.parse(localStorage.getItem("cartcount")) || []
let x = cartData.length
document.getElementById("count").innerText = `${x}`

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
    price.innerHTML = `₹ ${el.price}`

    let rating = document.createElement("h5")
    rating.innerText =`Rating : ${el.rating}`

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
    wishlist.setAttribute("id","wishlistbtn")
    wishlist.addEventListener("click",function(el,index){
        addtowishlist(el,index)
    })

    


    
    divtitle.append(title,price,rating)
    document.getElementById("title").append(divtitle)
    div.append(image)
    document.getElementById("imagebox").append(div)
    
    
    btn.append(add,wishlist)
    document.getElementById("btn").append(btn)



})



function addtocart(el,index){
    cartData.push(el,index)
    
    window.location.href ="./cart.html"
  
    alert("Item Added To Cart !");
}

localStorage.setItem("cartcount", JSON.stringify(cartData)) || []



function addtowishlist(el,index){
    let arr = JSON.parse(localStorage.getItem("wishlist" )) || []
    arr.push(el,index)
    localStorage.setItem("wishlist", JSON.stringify(arr))
    window.location.href ="./wishlist.html"
    
}