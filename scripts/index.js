


import { topnav, navbar } from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar()
document.getElementById("topnav").innerHTML = topnav()

import footer from "../components/footer.js"
document.getElementById("footer").innerHTML = footer()



let url = "https://shopbop-backend.herokuapp.com/api/homepage"

fetch(url)

    .then(function (res) {
        return res.json()
    })
    .then(function (res) {

        console.log("res:", res)
        // append(res[0].whatsnew)
        // append1(res[1].justin)


    })
    .catch(function (err) {
        console.log("err:", err)
    })

let arr = JSON.parse(localStorage.getItem("cartcount")) || []
let x = arr.length
document.getElementById("count").innerText = `${x}`


function append(data) {
    data.forEach(function (el, index) {

        let div = document.createElement("div")
        div.setAttribute("id", "box")


        let image = document.createElement("img")
        image.src = el.image
        image.setAttribute("class","img")

        let title = document.createElement("p")
        title.innerHTML = el.title

        let desc = document.createElement("p")
        desc.innerHTML = el.description

        let price = document.createElement("p")
        price.innerHTML = `₹ ${el.price}`

        let rating = document.createElement("p")
        rating.innerText = `Rating : ${el.rating}`

        div.append(image, title, desc, price, rating)
        document.getElementById("hcontainer").append(div)

    })
}

function append1(data) {
    data.forEach(function (el, index) {

        let div = document.createElement("div")
        div.setAttribute("id", "box")


        let image = document.createElement("img")
        image.src = el.image
        image.setAttribute("class","img")

        let title = document.createElement("p")
        title.innerHTML = el.title

        let desc = document.createElement("p")
        desc.innerHTML = el.description

        let price = document.createElement("p")
        price.innerHTML = `₹ ${el.price}`

        let rating = document.createElement("p")
        rating.innerText = `Rating : ${el.rating}`



        div.append(image, title, desc, price, rating)
        document.getElementById("h1container").append(div)




    })
}


let user = JSON.parse(localStorage.getItem("username"))

console.log(user)

if (user.name == undefined) {
    document.getElementsById("profile").innerHTML = null


}
else {
    document.getElementsById("profile").innerHTML = `${user.name}`

}
