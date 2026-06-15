const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

if (menuButton) {

    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
    });

}

const products = [

    {
        id: 1,
        name: "Polera Personalizada",
        category: "poleras",
        image: "images/polera1.png"
    },

    {
        id: 2,
        name: "Polera Evento",
        category: "poleras",
        image: "images/polera4.png"
    },

    {
        id: 3,
        name: "Polerón Personalizado",
        category: "polerones",
        image: "images/poleron1.png"
    },

    {
        id: 4,
        name: "Agenda Personalizada",
        category: "agendas",
        image: "images/agenda.jpeg"
    },

    {
        id: 5,
        name: "Tazón Personalizado",
        category: "tazones",
        image: "images/taza.jpeg"
    },

    {
        id: 6,
        name: "Lápiz Corporativo",
        category: "lapices",
        image: "images/lapiz1.png"
    },

    {
    id: 7,
    name: "Cuadro Decorativo",
    category: "cuadros",
    image: "images/cuadro.jpeg"
    },
    {
    id: 8,
    name: "Gorro Personalizado",
    category: "gorros",
    image: "images/gorro1.png"
    }

];

const productCount = document.querySelector("#product-count");

if (productCount) {
    productCount.textContent = products.length;
}

let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

const favoriteCount =
    document.querySelector("#favorite-count");

if (favoriteCount) {
    favoriteCount.textContent = favorites.length;
}

function displayProducts(productList) {

    const container =
        document.querySelector("#products-container");

    if (!container) return;

    container.innerHTML = "";

    productList.forEach(product => {

        container.innerHTML += `

        <article class="product-card">

            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy">

            <h3>${product.name}</h3>

            <button
                class="favorite-btn"
                data-id="${product.id}">
                ❤️ Favorito
            </button>

        </article>

        `;

    });

    addFavoriteEvents();

}


const category =
    document.querySelector("#category");

if (category) {

    displayProducts(products);

    category.addEventListener("change", () => {

        const selected =
            category.value;

        if (selected === "all") {

            displayProducts(products);

        } else {

            const filtered =
                products.filter(
                    product =>
                        product.category === selected
                );

            displayProducts(filtered);

        }

    });

}

function addFavoriteEvents() {

    const buttons =
        document.querySelectorAll(".favorite-btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const id =
                Number(button.dataset.id);

            if (!favorites.includes(id)) {

                favorites.push(id);

                localStorage.setItem(
                    "favorites",
                    JSON.stringify(favorites)
                );

                updateFavoriteCount();

            }

        });

    });

}

function updateFavoriteCount() {

    const favoriteCount =
        document.querySelector("#favorite-count");

    if (favoriteCount) {

        favoriteCount.textContent =
            favorites.length;

    }

}

const contactForm =
    document.querySelector("#contact-form");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            alert(
                "Gracias por contactarnos. Te responderemos pronto."
            );

            contactForm.reset();

        }
    );

}