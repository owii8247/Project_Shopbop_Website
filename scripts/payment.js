import {topnav,navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar()
document.getElementById("topnav").innerHTML = topnav()

import footer from "../components/footer.js"
document.getElementById("footer").innerHTML = footer()




var cartProducts = JSON.parse(localStorage.getItem("cartcount")) || [];
var total = cartProducts.reduce(function(sum,el){
    return sum + Number(el.price);
}, 0);

document.querySelector(".counter").innerText = `(${cartProducts.length})`;
document.getElementById("total").innerText = `₹ ${total}`;
document.getElementById("finalTotal").innerText = `₹ ${total}`;


document.querySelector("form").addEventListener("submit", getDetails);

var pay_ship_details = JSON.parse(localStorage.getItem("paymentDetails")) || [];

function getDetails() {
    event.preventDefault();

    var addDetails = {
        country: document.getElementById("country").value,

        name: document.getElementById("name").value,
    
        address: document.getElementById("address").value,

        pin: document.getElementById("zip").value,
        
        city: document.getElementById("city").value,

        state: document.getElementById("state").value,

        mobile: document.getElementById("mobile").value,

        cardNumber: document.getElementById("cardNumber").value,

        expiryMonth: document.getElementById("month").value,

        expiryYear: document.getElementById("year").value,

        cvv: document.getElementById("cvv").value,
        
    };

    pay_ship_details.push(addDetails);

    localStorage.setItem("paymentDetails",JSON.stringify(pay_ship_details));

    alert("Your Order Is Completed... Thanks For Shopping")
    window.location.href ="./index.html"

    
}


