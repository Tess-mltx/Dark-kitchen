let sectionCard = document.getElementById("burgersSection");
function GenerateCard(burgers) {
    let article = document.createElement("article");
    let image = document.createElement("img");
    let contentSection = document.createElement("section");
    let title = document.createElement("h3");
    let ulCategories = document.createElement("ul");
    let liCategorie;
    let containerIcon = document.createElement("span");
    let icon = document.createElement("i");
    let description = document.createElement("p");
    let price = document.createElement('strong');
    let quantity = document.createElement("input");
    let addPanier = document.createElement("button");

    
}

toggleDarkMode.addEventListener('change', (e) =>{ // <--- modifier pour charger une autre stylesheet ???
    if (e.target.value = 'dark') {
        body.style.backgroundColor = 'darkgray';
        body.style.color = 'white';
    } else {
        body.style.backgroundColor = '';
        body.style.color = '';
    }
})