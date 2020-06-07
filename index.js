var tracker = document.getElementById("tracker_indexpage")
var home_btn = document.createElement("button")
var countries_btn = document.createElement("button")
var India_btn = document.createElement("button")
var contact_btn = document.createElement("button")
home_btn.innerHTML = "Home"
countries_btn.innerHTML = "Countries"
India_btn.innerHTML = "India"
contact_btn.innerHTML = "Contact Us"
tracker.appendChild(home_btn).setAttribute("class", "homeclass")
tracker.appendChild(countries_btn).setAttribute("class", "countriesclass")
tracker.appendChild(India_btn).setAttribute("class", "statesclass")
tracker.appendChild(contact_btn).setAttribute("class", "contactclass")
home_btn.onclick = function () { location.href = "index.html" }
countries_btn.onclick = function () { location.href = "countries.html" }
India_btn.onclick = function () { location.href = "states.html" }
contact_btn.onclick = function () { location.href = "contact.html" }
