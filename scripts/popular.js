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
    append(res[1].justin)


    


})
.catch(function(err){
    console.log("err:",err)
})


document.querySelector('#sort').addEventListener("change", sortingData);
function sortingData(res){
    let sort = document.querySelector("#sort").value;
     console.log(sort)

    if(sort=="htl")
    {
        res.sort(function(a,b){
            //console.log(a.price,b.price)
            return b.price - a.price;
            
        })
        
        append(res)
    }
    else if(sort=="lth")
    {
        res.sort(function(a,b){
            return a.price - b.price;
            

        })
        append(res)
    }
    else if(sort=="rating")
    {
        res.sort(function(a,b){
            return b.rating - a.rating;
           
        })
        
        append(res)
    }
}


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
    
    arr.push(el)
    console.log(arr)
   
    localStorage.setItem("cartcount", JSON.stringify(arr))
   
    window.location.href ="./detaildata.html"
    
}

