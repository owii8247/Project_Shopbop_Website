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
    append(res[4].whatsnewpage)
    append(res[0].whatsnew)
    append(res[1].justin)
    append(res[4].whatsnewpage)

    


})
.catch(function(err){
    console.log("err:",err)
})

function sortingData(){
    let sorts = document.querySelector("#sort").value;
    console.log(sorts)

    if(sorts=="htl")
    {
        res[4].whatsnewpage.sort(function(a,b){
            return b.price - a.price;
        })
        
        append(res[4].whatsnewpage)
    }
    else if(sorts=="lth")
    {
        res[4].whatsnewpage.sort(function(a,b){
            return a.price - b.price;
        })
        append(res[4].whatsnewpage)
    }
    else if(sorts=="rating")
    {
        res[4].whatsnewpage.sort(function(a,b){
            return b.rating - a.rating;
        })
        
        append(res[4].whatsnewpage)
    }
}
sortingData()

let arr = JSON.parse(localStorage.getItem("cartcount")) || []
let x = arr.length
document.getElementById("count").innerText = `${x}`

function append(data){
data.forEach(function(el,index){
    
    let div = document.createElement("div")
    div.setAttribute("id","box")
    div.addEventListener("click", function(){
        detaildata(el)
    })
    

    let image = document.createElement("img")
    image.src = el.image

    let title = document.createElement("p")
    title.innerHTML = el.title
    title.setAttribute("id","title")

    let price = document.createElement("p")
    price.innerHTML = `₹ ${el.price}`
    price.setAttribute("id","price")


    let rating = document.createElement("p")
    rating.innerText =`Rating : ${el.rating}`
    
    
    
    div.append(image,title,price,rating)
    document.getElementById("whatsnew").append(div)
        
})
}

function detaildata(el){
    let arr = []
    arr.push(el)
    console.log(arr)
    localStorage.setItem("cartcount", JSON.stringify(arr))
   
    window.location.href ="./detaildata.html"
    // window.location.reload()
}

