let sectionCard = document.getElementById("burgersSection");
let allBtn = document.getElementById("all");
let fishBtn = document.getElementById("Fish");
let specialiteBtn = document.getElementById("Specialité");
let angusBtn = document.getElementById("Angus");
let veggieBtn = document.getElementById("Veggie");
let cheeseBtn = document.getElementById("Cheese");
let piquantBtn = document.getElementById("Piquant");
let chickenBtn = document.getElementById("Chicken");

function GenerateCard(burgers) {
    let article = document.createElement("article");
    let image = document.createElement("img");
    let contentSection = document.createElement("section");
    let title = document.createElement("h3");
    let ulCategories = document.createElement("ul");
    let liCategorie;
    let containerIcon = document.createElement("span");
    let iconReadMore = document.createElement("i");
    let description = document.createElement("p");
    let footerArticle = document.createElement("footer")
    let price = document.createElement("strong");
    let quantity = document.createElement("input");
    let addPanier = document.createElement("button");
    let buttonIcon = document.createElement("i");

    article.classList.add("burgersSection-burgerCard");
    image.classList.add("burgersSection-burgerCard-image");
        image.setAttribute("src", burgers.imageSrc);
        image.setAttribute("alt", burgers.title);
    contentSection.classList.add("burgersSection-burgerCard-content");
    title.classList.add("burgersSection-burgerCard-content-title");
    ulCategories.classList.add("burgersSection-burgerCard-content-categoryList");
    containerIcon.classList.add("burgersSection-burgerCard-content-icon");
    iconReadMore.classList.add("fa-solid fa-arrow-down")
    description.classList.add("burgersSection-burgerCard-content-description");
    footerArticle.classList.add("burgersSection-burgerCard-content-footer");
    price.classList.add("burgersSection-burgerCard-content-footer-price");
    quantity.classList.add("burgersSection-burgerCard-content-footer-quantity");
    addPanier.classList.add("burgersSection-burgerCard-content-footer-submit");
    buttonIcon.classList.add("fa-solid fa-cart-shopping");

    article.appendChild(image);
    article.appendChild(contentSection);
        contentSection.appendChild(title);
            title.appendChild(document.createTextNode(bugers.title));
        contentSection.appendChild(ulCategories);
            burgers.categories.forEach((item) => {
                liCategorie = document.createElement("li");
                liCategorie.classList.add("burgersSection-burgerCard-content-categoryList-item");
                liCategorie.appendChild(document.createTextNode(item));
                ulCategories.appendChild(liCategorie);
            });
        contentSection.appendChild(containerIcon);
        contentSection.appendChild(iconReadMore);
        contentSection.appendChild(description);
            description.appendChild(document.createTextNode(bugers.description));
        contentSection.appendChild(footerArticle);
            footerArticle.appendChild(price);
                price.appendChild(document.createTextNode(bugers.price));
            footerArticle.appendChild(quantity);
                price.appendChild(document.createTextNode(bugers.quantity));
            footerArticle.appendChild(addPanier);
                addPanier.appendChild(buttonIcon);
    
    return article;
}

function showAllCards() {
    sectionCard.innerHTML = "";
    burgers.forEach((element) => {
        let card = GenerateCard(element);
        sectionCard.appendChild(card);
    });
}

function showCardsByCategory(category) {
    sectionCard.innerHTML = "";
    let filteredBurgers = burgers.filter((burger) => burger.category.includes(category));
    filteredBurgers.forEach((manga) => {
        let card = GenerateCard(manga);
        sectionCard.appendChild(card); // Ajoutez la carte directement à la sectionCard
    });
}

allBtn.addEventListener("click", showAllCards);
fishBtn.addEventListener("click", () => showCardsByCategory("Fish"));
specialiteBtn.addEventListener("click", () => showCardsByCategory("Specialité"));
angusBtn.addEventListener("click", () => showCardsByCategory("Angus"));
veggieBtn.addEventListener("click", () => showCardsByCategory("Veggie"));
cheeseBtn.addEventListener("click", () => showCardsByCategory("Cheese"));
piquantBtn.addEventListener("click", () => showCardsByCategory("Piquant"));
chickenBtn.addEventListener("click", () => showCardsByCategory("Chicken"));
document.addEventListener("DOMContentLoaded", showAllCards);



toggleDarkMode.addEventListener('change', (e) =>{ // <--- modifier pour charger une autre stylesheet ???
    if (e.target.value = 'dark') {
        body.style.backgroundColor = 'darkgray';
        body.style.color = 'white';
    } else {
        body.style.backgroundColor = '';
        body.style.color = '';
    }
})

