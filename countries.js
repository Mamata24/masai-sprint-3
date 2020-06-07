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


function covid_affected(number) {
    var elements = reverseString(number)
    var output = ""
    output += elements[0]

    for (var i = 1; i < elements.length; i++) {
        if (i % 3 == 0) {
            output += "," + elements[i]
        } else {
            output += elements[i]
        }
    }

    output = reverseString(output)
    return output
}

function reverseString(number) {
    size = String(number)
    var output = ""
    for (var i = size.length - 1; i >= 0; i--) {
        output += size[i]
    }
    return output
}


window.addEventListener("load", function () {
    getSummary()

})

function getSummary(params) {
    var url = "https://api.covid19api.com/summary"
    xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.send()
    xhr.onload = function () {
        var res = JSON.parse(this.response)
        displaySummary(res.Global)
    }
}

function displaySummary(res) {
    var total_cases = res.TotalConfirmed
    var total_cases_count = document.querySelector("#total_cases h1")
    total_cases_count.textContent = covid_affected(String(total_cases))
    var active_cases = res.NewConfirmed
    var active_cases_count = document.querySelector("#active_cases h1")
    active_cases_count.textContent = covid_affected(String(active_cases))
    var recovered_cases = res.TotalRecovered
    var recovered_cases_count = document.querySelector("#recovered_cases h1")
    recovered_cases_count.textContent = covid_affected(String(recovered_cases))
    var death_cases = res.TotalDeaths
    var death_cases_count = document.querySelector("#death_cases h1")
    death_cases_count.textContent = covid_affected(String(death_cases))

}



