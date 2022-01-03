const locateBtn = document.querySelector("#locate-btn")

function cosmoSearch(event) {

    event.preventDefault();

    const city = document.querySelector("#city-id").value;

    fetch(`/api/cosmo/city/${city}`)
       
    
        
        .then(response => response.json())
        .then(data => console.log(data));
            

}

locateBtn.addEventListener("click", cosmoSearch)



