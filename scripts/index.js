


import {topnav,navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar()
document.getElementById("topnav").innerHTML = topnav()

import footer from "../components/footer.js"
document.getElementById("footer").innerHTML = footer()



let url ="https://shopbop-backend.herokuapp.com/api/homepage"

fetch(url)

.then(function(res){
    return res.json()
})
.then(function(res){
    
    console.log("res:",res)
    append(res[0].whatsnew)
    append1(res[1].justin)


})
.catch(function(err){
    console.log("err:",err)
})


function append(data){
data.forEach(function(el,index){
    
    let div = document.createElement("div")
    div.setAttribute("id","box")
    

    let image = document.createElement("img")
    image.src = el.image

    let title = document.createElement("p")
    title.innerHTML = el.title

    let desc = document.createElement("p")
    desc.innerHTML = el.description

    let price = document.createElement("p")
    price.innerHTML = `Rs : ${el.price}`
    
    let rating = document.createElement("h5")
    rating.innerText =`Rating : ${el.rating}`
    
    div.append(image,title,desc,price,rating)
    document.getElementById("hcontainer").append(div)
        
})
}

function append1(data){
    data.forEach(function(el,index){
        
        let div = document.createElement("div")
        div.setAttribute("id","box")
        
    
        let image = document.createElement("img")
        image.src = el.image
    
        let title = document.createElement("p")
        title.innerHTML = el.title
    
        let desc = document.createElement("p")
        desc.innerHTML = el.description
    
        let price = document.createElement("p")
        price.innerHTML = el.price
        
        
        
        div.append(image,title,desc,price)
        document.getElementById("h1container").append(div)
        
        
    })
    }