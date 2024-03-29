
let button = document.getElementById("button");
let input = document.getElementById("inp-country");
let flagImage = document.getElementById("flag-img");
let cName = document.getElementById("country-name");
let cInfo = document.getElementById("country-info");


button.addEventListener("click",()=>{
    let countryName = input.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    // console.log(finalURL);
    fetch(finalURL).then(res => res.json()).then(data =>{
        flagImage.innerHTML = `<img src="${data[0].flags.png}">`
        cName.innerHTML = data[0].name.common;
        cInfo.innerHTML = `
        <h4>Capital: ${data[0].capital[0]}</h4>
        <h4>Continent: ${data[0].continents[0]}</h4>
        <h4>Population: ${data[0].population}</h4>
        <h4>Currency: ${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</h4>
        <h4>Common Languages: ${Object.values(data[0].languages).toString()} </h4>`
    })
})