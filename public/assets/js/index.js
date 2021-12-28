const { response } = require("express");

const locateBtn = document.querySelector("#locate-btn")

function cosmoSearch(event) {

    event.preventDefault();

    const city = document.querySelector("#city-id").value;

    fetch(`/api/cosmo/city/${city}`)
       
    
        
        .then(function () {
            console.log(response)
        })
        .catch(err => console.log(err));

}

locateBtn.addEventListener("click", cosmoSearch)