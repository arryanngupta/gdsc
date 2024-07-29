//console.log("JS HERE");
import planetsData from "./PlanetsData.js";

//Creating Navbar 👇
function createNavbar(className) {
    let navbarHtml = `<div class="nav-logo">
                    <img src="./assests/images/logo.png" alt="eco-img" />
                </div>

                <div class="nav-list">
                    <ul>
                        <a href="#Mercury">
                            <li>Mercury</li>
                        </a>
                        <a href="#Venus">
                            <li>Venus</li>
                        </a>
                        <a href="#Earth">
                            <li>Earth</li>
                        </a>
                        <a href="#Mars">
                            <li>Mars</li>
                        </a>
                       <li class="dropdown">
                    <i class="fa-solid fa-ellipsis"></i>
                    <div class="dropdown-content">
                        <a href="#Jupiter">Jupiter</a>
                        <a href="#Saturn">Saturn</a>
                        <a href="#Uranus">Uranus</a>
                        <a href="#Neptune">Neptune</a>
                    </div>
                </li>
                    </ul>
                </div>

                <div class="nav-footer">
                </div>`;
    document.querySelectorAll(`.${className}`).forEach((nav) => {
        nav.innerHTML = navbarHtml;
    });
}

// Adding navbar to both Header and Footer section.
createNavbar("navbar-section");

// Dynamically adding the current year in the footer
let currentYear = new Date().getFullYear();
document.querySelectorAll(".nav-footer").forEach((footer) => {
    footer.innerHTML = `<p  class="copyright" >© ${currentYear} Solarsystemdesign</p>`;
});

// Function to handle smooth scrolling when dropdown items are clicked
function handleDropdownClick(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the target section ID from the href attribute
    const targetId = this.getAttribute('href').substring(1);

    // Scroll to the target section
    document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Adding event listeners to dropdown links
document.querySelectorAll('.dropdown-content a').forEach(anchor => {
    anchor.addEventListener('click', handleDropdownClick);
});


//Creating web page of all the planets👇
function createPlanet(planetName) {
    const planet = planetsData[planetName];
    let planetHtml = `<div id="${planet["heading"]}" class="planet design ${planet["heading"]}">
    <div class="planet-img ${planet["heading"]}Img">
            <img src="${planet["image"]}" class="image${planet["heading"]}" />
        </div>
    <div class="planet-text text${planet["heading"]}"> 

    <div class="planet-heading">
    <h2> ${planet["key"]}. ${planet["heading"]}</h2>
        </div>
        <div class="planet-intro">
            <p>${planet["intro"]}</p>
        </div>`


    let normalHtml = '';
    planet["details"].forEach((element) => {
        normalHtml += `<div class="info-card info-${planet["heading"]}">
                    <img src="${element["img"]}" />
                    <div class="card-text">
                    <p>${element["title"]}</p>
                    <h2>${element["value"]}</h2>
                    <h2>${element["unit"]}</h2>
                    </div>
                    </div>`;
    });
    planetHtml += `<div class="card${planet["heading"]}">
                ${normalHtml}
                </div>
        </div>`

    if (planet.hasOwnProperty("subheading")) {
        planetHtml += `<div class="sub sub${planet["heading"]}">
           <div class="planet-subheading">
                <h2>${planet["subheading"]}</h2>
            </div>
            <div class="planet-subintro">
                <p>${planet["subintro"]}</p>
            </div>
            <div class="planet-subimg subImg${planet["heading"]}">
                <img src="${planet["subimage"]}" />
    </div>
    </div>`
    }


    if (planet.hasOwnProperty("miniheading")) {
        let miniHtml = '';
        planet["miniheading"].forEach((element) => {
            miniHtml += ` <div class="miniplanet-${element["heading"]}">
            <div class="planet-miniimg miniImg${planet["heading"]}">
            <img class="miniImg${element["heading"]}" src="${element["img"]}" />
            </div>   
            <div class="planet-miniheading">
                <h3>${element["heading"]}</h3>
            </div>
            </div>
            `
        });
        planetHtml += `<div class="mini mini${planet["heading"]}">${miniHtml}
        </div>`;
    }
    document.querySelector(".planets-section").innerHTML += planetHtml;
}

// Adding all these planet to our web page.
createPlanet("sun");
createPlanet("mercury");
createPlanet("venus");
createPlanet("earth");
createPlanet("mars");
createPlanet("jupiter");
createPlanet("saturn");
createPlanet("uranus");
createPlanet("neptune");


// Adding some extra images elements(like shadows or reflections) to some planets.
document.querySelector(".planet-images-sec").innerHTML += `<img class="img-ten" src="./assests/images/header_shadow.png" />`
document.querySelector(".EarthImg").innerHTML += `<img class="extra-one-earth" src="./assests/images/rocket.png"/>`
document.querySelector(".EarthImg").innerHTML += `<img class="extra-two-earth" src="./assests/images/moon.png"/>`
document.querySelector(".EarthImg").innerHTML += `<img class="extra-three-earth" src="./assests/images/earthshading.png"/>`
document.querySelector(".SunImg").innerHTML += `<img class="extra-one-sun" src="./assests/images/sun_shadow.png"/>`
document.querySelector(".JupiterImg").innerHTML += `<img class="extra-one-jupiter" src="./assests/images/jupiter_shadow.png"/>`

