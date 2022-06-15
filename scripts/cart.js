import {topnav,navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar()
document.getElementById("topnav").innerHTML = topnav()

import footer from "../components/footer.js"
document.getElementById("footer").innerHTML = footer()


let cartData = JSON.parse(localStorage.getItem("cart")) || []

function displayData(el,index){
    data.map(function(el){
        
    })
}