const yearSpan = document.getElementById('currentyear');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

const lastModifiedPara = document.getElementById('lastModified');
if (lastModifiedPara) lastModifiedPara.textContent = `Last Modification: ${document.lastModified}`;

const menuBtn = document.getElementById('menu');
const nav = document.querySelector('nav.navigation');

if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        menuBtn.textContent = isOpen ? '✕' : '☰';
        menuBtn.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
        menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
}

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Antofagasta Chile",
        location: "Antofagasta, Chile",
        dedicated: "2016, October, 16",
        area: 10700,
        imageUrl: "images/antofagasta_chile.jpeg"
    },
    {
        templeName: "Concepción Chile",
        location: "Concepción, Chile",
        dedicated: "2022, December, 18",
        area: 20000,
        imageUrl: "images/concepcion_chile.jpeg"
    },
    {
        templeName: "Córdoba Argentina",
        location: "Córdoba, Argentina",
        dedicated: "2015, May, 17",
        area: 26000,
        imageUrl: "images/cordoba_argentina.jpeg"
    },
    {
        templeName: "Lima Perú Los Olivos",
        location: "Lima, Perú",
        dedicated: "2023, March, 12",
        area: 30000,
        imageUrl: "images/lima_peru_los_olivos.jpeg"
    },
    {
        templeName: "Mendoza Argentina",
        location: "Mendoza, Argentina",
        dedicated: "2015, October, 18",
        area: 10700,
        imageUrl: "images/mendoza_argentina.jpeg"
    },
    {
        templeName: "Salta Argentina",
        location: "Salta, Argentina",
        dedicated: "2015, October, 18",
        area: 10700,
        imageUrl: "images/salta_argentina.jpeg"
    },
    {
        templeName: "Trujillo Perú",
        location: "Trujillo, Perú",
        dedicated: "2022, August, 21",
        area: 28000,
        imageUrl: "images/trujillo_peru.jpeg"
    },
    {
        templeName: "Provo Utah",
        location: "Provo, Utah, United States",
        dedicated: "2024, June, 9",
        area: 90000,
        imageUrl: "images/temple_provo_utah.jpeg"
    }
];

function createTempleCard(temple) {
    const card = document.createElement('article');
    card.classList.add('temple-card');

    card.innerHTML = `
        <div class="temple-card-info">
            <h3>${temple.templeName}</h3>
            <p><span>Location:</span> ${temple.location}</p>
            <p><span>Dedicated:</span> ${temple.dedicated}</p>
            <p><span>Size:</span> ${temple.area.toLocaleString()} sq ft</p>
        </div>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    return card;
}

function renderTemples(list) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    list.forEach(temple => gallery.appendChild(createTempleCard(temple)));
}

function getYear(dedicated) {    
    return parseInt(dedicated.split(',')[0].trim());
}

function filterTemples(filter) {
    switch (filter) {
        case 'old':
            return temples.filter(t => getYear(t.dedicated) < 1900);
        case 'new':
            return temples.filter(t => getYear(t.dedicated) > 2000);
        case 'large':
            return temples.filter(t => t.area > 90000);
        case 'small':
            return temples.filter(t => t.area < 10000);
        case 'home':
        default:
            return temples;
    }
}

const filterTitle = document.getElementById('filter-title');

nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        nav.classList.remove('open');
        menuBtn.textContent = '☰';
        menuBtn.setAttribute('aria-expanded', 'false');

        nav.querySelectorAll('a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');

        const filter = link.dataset.filter;
        filterTitle.textContent = link.textContent;
        renderTemples(filterTemples(filter));
    });
});

renderTemples(temples);

const homeLink = nav.querySelector('[data-filter="home"]');
if (homeLink) homeLink.classList.add('active');
