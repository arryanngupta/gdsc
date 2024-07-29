const planetsData = {
    sun: {
        key: "",
        heading: "Sun",
        intro: "The Sun is a huge, glowing ball of hot plasma at the centre of our solar system and provides the vital energy needed for life on Earth. This energy radiates outward in the form of light and heat, providing warmth and light to the entire solar system.",
        image: "./assests/images/sun.png",
        details: [
            { title: "Diameter", value: "870,000", unit: "Miles", img: "./assests/images/donut_large.png" },
            { title: "Temperature", value: "±5,500°", unit: "Celsius", img: "./assests/images/night_time_temp_logo.png" }

        ]
    },
    mercury: {
        key: 1,
        heading: "Mercury",
        intro: "Mercury is the closest planet to the Sun and is known for its extreme temperatures and barren, rocky surface. It is one of the four terrestrial planets in our solar system, characterized by their solid, rocky composition.",
        image: "./assests/images/mercury.png",
        details: [
            { title: "Diameter", value: "3,032", unit: "Miles", img: "./assests/images/donut_large.png" },
            { title: "Day time Temperature", value: "±430°", unit: "Celsius", img: "./assests/images/day_time_temp_logo.png" },
            { title: "Night time Temperature", value: "-180°", unit: "Celsius", img: "./assests/images/night_temp.png" },
        ],
    },
    venus: {
        key: 2,
        heading: "Venus",
        intro: "Venus is often referred to as Earth's 'sister planet' due to its similar size and composition, but it stands out with its extremely inhospitable environment",
        image: "./assests/images/venus.png",
        details: [
            { title: "Diameter", value: "7,521", unit: "Miles", img: "./assests/images/donut_large.png" },
            { title: "Temperature", value: "±475°", unit: "Celsius", img: "./assests/images/day_time_temp_logo.png" },
        ],
    },
    earth: {
        key: 3,
        heading: "Earth",
        intro: "Earth is the third planet from the Sun and the only known planet to support life. Earth is the only planet known to harbor life. It's a diverse and dynamic world with a wide range of ecosystems, climates, and geological features.",
        image: "./assests/images/earth0.png",
        details: [
            { title: "Diameter", value: "7,918", unit: "Miles", img: "./assests/images/donut_large.png" },
        ],
        subheading: "Moon Planet",
        subintro: "Earth has one natural satellite, the Moon, which plays a role in stabilizing the planet's rotation and tides. The Moon's gravitational pull causes ocean tides to rise and fall.",
        subimage: "./assests/images/arrow.png",
    },
    mars: {
        key: 4,
        heading: "Mars",
        intro: "Mars, often referred to as the 'Red Planet,' is the fourth planet from the Sun and has captivated human imagination for centuries with its reddish appearance and potential for hosting life.",
        image: "./assests/images/mars.png",
        details: [
            { title: "Diameter", value: "4,212", unit: "Miles", img: "./assests/images/donut_large.png" },
            { title: "Day time Temperature", value: "±20°", unit: "Celsius", img: "./assests/images/day_time_temp_logo.png" },
            { title: "Night time Temperature", value: "-73°", unit: "Celsius", img: "./assests/images/night_temp.png" },
        ],
        subheading: "Martian Moons",
        subintro: "Mars has two small moons, Phobos and Deimos, which are irregularly shaped and thought to be captured asteroids.",
        subimage: "./assests/images/arrow2.png",
        miniheading: [
            { heading: "Deimos", img: "./assests/images/deimos.png" },
            { heading: "Phobos", img: "./assests/images/phobos.png" },
        ],
    },
    jupiter: {
        key: 5,
        heading: "Jupiter",
        intro: "Jupiter, the largest planet in our solar system, is a gas giant known for its immense size, powerful storms, and numerous moons.",
        image: "./assests/images/jupiter.png",
        details: [
            { title: "Diameter", value: "86.881", unit: "Miles", img: "./assests/images/donut_large.png" },
            { title: "Temperature", value: "-108°", unit: "Celsius", img: "./assests/images/night_time_temp_logo.png" }
        ]
    },
    saturn: {
        key: 6,
        heading: "Saturn",
        intro: "Saturn, often referred to as the 'Ringed Planet,' is known for its stunning system of rings that encircle the planet's equator. It's the sixth planet from the Sun and is one of the most visually distinctive objects in our solar system, with more than 80 known satellites.",
        image: "./assests/images/saturn.png",
        details: [
            { title: "Diameter", value: "74.898", unit: "Miles", img: "./assests/images/donut_large.png" },
            { title: "Temperature", value: "-139°", unit: "Celsius", img: "./assests/images/night_time_temp_logo.png" }
        ]
    },
    uranus: {
        key: 7,
        heading: "Uranus",
        intro: "Uranus, often referred to as the 'Ice Giant,' is a unique and mysterious planet in our solar system. It stands out due to its distinct blue-green color and its unusual rotation axis.",
        image: "./assests/images/uranus.png",
        details: [
            { title: "Diameter", value: "31,518 ", unit: "Miles", img: "./assests/images/donut_large.png" },
            { title: "Temperature", value: "-224°", unit: "Celsius", img: "./assests/images/night_time_temp_logo.png" }
        ]
    },
    neptune: {
        key: 8,
        heading: "Neptune",
        intro: "Neptune, often called the 'Blue Giant,' is the eighth and farthest planet from the Sun in our solar system. It is a gas giant known for its striking blue color and turbulent atmosphere.",
        image: "./assests/images/neptune.png",
        details: [
            { title: "Diameter", value: "30,775", unit: "Miles", img: "./assests/images/donut_large.png" },
            { title: "Temperature", value: "-218°", unit: "Celsius", img: "./assests/images/night_time_temp_logo.png" }
        ]
    },

};

export default planetsData;