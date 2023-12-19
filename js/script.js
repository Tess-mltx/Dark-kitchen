let sectionCard = document.getElementById("burgersSection");
let allBtn = document.getElementById("all");
let fishBtn = document.getElementById("Fish");
let specialiteBtn = document.getElementById("Specialité");
let angusBtn = document.getElementById("Angus");
let veggieBtn = document.getElementById("Veggie");
let cheeseBtn = document.getElementById("Cheese");
let piquantBtn = document.getElementById("Piquant");
let chickenBtn = document.getElementById("Chicken");

let burgers = [
    { image: 'img/bacon_burger.png', title: 'Le Gourmet Grillé', price: '15', category: ['Angus', 'Cheese'], description: 'Plongez dans une expérience culinaire inoubliable avec notre "Gourmet Grillé" - un succulent mariage de bacon croustillant et de viande grillée à la flamme, sublimé par une généreuse dose de notre sauce barbecue maison.' },
    { image: 'img/double_burger.png', title: 'Délice Angus', price: '21', category: ['Angus', 'Cheese'], description: 'Découvrez notre "Délice Angus" - une expérience carnivore divine mettant en vedette deux généreuses portions de viande Angus, magnifiquement garnies de cornichons croquants, de feuilles de salade fraîche et de tranches juteuses de tomates mûres.' },
    { image: 'img/poulet_burger.png', title: 'Chicken Burger', price: '16', category: ['Chicken'], description: 'Succombez à l\'explosion de saveurs de notre "Chicken Burger"- un burger de poulet divinement grillé, enveloppé dans la douce caresse d\'une brioche dorée. Chaque bouchée révèle la tendreté du poulet parfaitement assaisonné, harmonieusement mariée à des ingrédients frais, créant ainsi une expérience culinaire où la simplicité du poulet s\'unit à l\'élégance d\'une symphonie de saveurs.' },
    { image: 'img/double_cheese_burger.png', title: 'Double Cheese Bliss', price: '17', category: ['Cheese'], description: 'Plongez dans l\'extase du goût avec notre "Double Cheese Bliss" - un festin pour les amateurs de fromage et de viande grillée. Deux généreuses galettes de bœuf juteuses, soigneusement grillées, sont étreintes par des couches fondantes de fromage savoureux, créant ainsi une expérience gastronomique où la richesse du fromage se marie à la perfection avec la robustesse de la viande, pour une double dose de délices dans chaque délicieuse bouchée.' },
    { image: 'img/triple_burger.png', title: 'Triple Crown Burger', price: '20', category: ['Angus'], description: 'Explorez l\'apogée du plaisir gastronomique avec notre "Triple Crown Burger" - une véritable célébration de la gourmandise. Trois couches succulentes de viande grillée s\'entremêlent avec une trilogie de fromages fondants, créant une expérience épique pour les amateurs de burgers audacieux. Chaque étage de cette tour de saveurs offre une explosion en bouche, faisant de ce burger une aventure culinaire inoubliable pour les affamés en quête d\'une triple dose de satisfaction.' },
    { image: 'img/fish_burger.png', title: 'Oceanic Catch Burger', price: '16', category: ['Specialité', 'Fish'], description: 'Embarquez pour une escapade gustative marine avec notre "Oceanic Catch Burger" - un hommage au goût rafraîchissant de la mer. Un filet de poisson croustillant et parfaitement assaisonné est niché entre deux moelleux pains, accompagné d\'une symphonie de légumes frais. Plongez dans cette expérience culinaire où la fraîcheur de l\'océan se marie à la perfection avec la texture dorée et croquante du poisson, pour un burger qui évoque les saveurs salées de la mer en chaque délicieuse bouchée.' },
    { image: 'img/american_burger.png', title: 'All-American Burger', price: '18', category: ['Angus', 'Specialité'], description: 'Savourez l\'authenticité d\'un classique intemporel avec notre "All-American Burger" - une déclaration de goût qui célèbre la tradition des saveurs américaines. Un burger juteux, grillé à la perfection, repose entre deux moelleux pains, accompagné du duo classique de laitue croquante, tomate fraîche et oignons croustillants. Plongez dans cette expérience culinaire emblématique, où la simplicité des ingrédients s\'unit à la maîtrise de la cuisson, transportant vos papilles dans un voyage de satisfaction à l\'américaine à chaque délicieuse bouchée.' },
    { image: 'img/veggie_burger.png', title: 'Garden Harmony Burger', price: '15', category: ['Veggie'], description: 'Découvrez une explosion de saveurs végétales avec notre "Garden Harmony Burger" - un festin végétarien qui allie créativité et fraîcheur. Une galette végétalienne parfumée, confectionnée avec des légumes de saison et des protéines végétales, est soigneusement présentée entre deux pains moelleux. Accompagné d\'une symphonie de légumes croquants et d\'une touche de sauce spéciale, ce veggie burger redéfinit l\'expérience culinaire en offrant une alternative délicieuse et nutritive, où la générosité de la nature s\'exprime à chaque délicieuse bouchée.' },
    { image: 'img/onion_burger.png', title: 'Ring Master Burger', price: '19', category: ['Cheese'], description: 'Plongez dans la texture croustillante et la saveur envoûtante de notre "Ring Master Burger" - un chef-d\'œuvre qui marie l\'onctuosité d\'un burger juteux avec le croquant irrésistible de nos délicieux anneaux d\'oignons frits. Chaque bouchée est une aventure sensorielle, où la fusion des saveurs de la viande grillée et de l\'onion ring croustillant crée une symphonie de plaisir culinaire.' },
    { image: 'img/jalapeno_burger.png', title: 'Feu Jalapeño Burger', price: '17', category: ['Piquant', 'Angus'], description: 'Explorez une explosion de piquant avec notre "Feu Jalapeño Burger" - une expérience audacieuse pour les amateurs de sensations fortes. Un burger juteux et grillé est associé à la vive intensité des jalapeños frais tranchés, créant une harmonie épicée entre la chaleur audacieuse et la tendresse de la viande.' },
    { image: 'img/egg_burger.png', title: 'Sunrise Egg Burger', price: '18', category: ['Specialité'], description: 'Succombez à la délicatesse de notre "Sunrise Egg Burger" - une fusion parfaite entre le crémeux d\'un œuf au plat parfaitement cuit et la succulence d\'un burger grillé. Le jaune doré du jaune d\'œuf se marie harmonieusement avec la viande juteuse, créant une symphonie de textures et de saveurs qui évoque le plaisir d\'un petit-déjeuner gourmet à chaque délicieuse bouchée.' },
    { image: 'img/saumon_burger.png', title: 'Saumon Croustillant Burger', price: '21.5', category: ['Specialité', 'Fish'], description: 'Plongez dans une aventure culinaire marine avec notre "Saumon Croustillant Burger" - un délice exquis mariant la délicatesse du saumon avec une panure dorée et croquante. Chaque bouchée révèle la tendreté du saumon parfaitement cuit, enrobé d\'une enveloppe croustillante qui offre une expérience sensorielle unique.' },
    { image: 'img/piment_burger.png', title: 'Flamme Piquante Burger', price: '16.5', category: ['Piquant'], description: 'Réveillez vos papilles avec notre "Flamme Piquante Burger" - un festin pour les amateurs de sensations fortes. Ce burger audacieux marie la chaleur enivrante des piments avec la succulence d\'une viande parfaitement grillée.' },
    { image: 'img/truffe_burger.png', title: 'Burger Truffé de Luxe', price: '24', category: ['Specialité', 'Cheese'], description: 'Découvrez l\'élégance dans chaque bouchée avec notre "Burger Truffé de Luxe" - une expérience gastronomique raffinée qui marie la richesse de la truffe à la perfection d\'un burger gourmet. Accompagné d\'ingrédients soigneusement sélectionnés et d\'une touche de sauce truffée, ce burger transcende les limites du traditionnel pour offrir une expérience culinaire inégalée.' },
    { image: 'img/avocado_burger.png', title: 'Burger Avocado Bliss', price: '22', category: ['Specialité'], description: 'Plongez dans la fraîcheur crémeuse de notre "Burger Avocado Bliss" - une expérience délicate qui marie la tendreté d\'un burger grillé avec la richesse veloutée de l\'avocat. Accompagné d\'ingrédients frais tels que des tomates juteuses et de la laitue croquante, ce burger offre une symphonie de saveurs équilibrées pour une expérience gastronomique où la simplicité de l\'avocat s\'unit à la perfection grillée du burger.' }
];

function GenerateCard(burgers) {
    let article = document.createElement("article");
    let image = document.createElement("img");
    let contentSection = document.createElement("section");
    let title = document.createElement("h3");
    let ulCategories = document.createElement("ul");
    let liCategorie;
    let containerIcon = document.createElement("span");
   
    
    let footerArticle = document.createElement("footer")
    let price = document.createElement("strong");
    let addPanier = document.createElement("button");
    let buttonIcon = document.createElement("i");

    article.classList.add("burgersSection-burgerCard");
    image.classList.add("burgersSection-burgerCard-image");
        image.setAttribute("src", burgers.image);
        image.setAttribute("alt", burgers.title);
    contentSection.classList.add("burgersSection-burgerCard-content");
    title.classList.add("burgersSection-burgerCard-content-divTitle-title");
    ulCategories.classList.add("burgersSection-burgerCard-content-categoryList");
    containerIcon.classList.add("burgersSection-burgerCard-content-icon");
    
   
    footerArticle.classList.add("burgersSection-burgerCard-content-footer");
    addPanier.classList.add("burgersSection-burgerCard-content-footer-submit");
    buttonIcon.classList.add("fa-solid" , "fa-cart-shopping");
    price.classList.add("burgersSection-burgerCard-content-divTitle-price");



    article.appendChild(image);
    article.appendChild(contentSection);
       
        let divTitle = document.createElement('div');
        divTitle.classList.add("burgersSection-burgerCard-content-divTitle");
        title.appendChild(document.createTextNode(burgers.title));
        divTitle.append(title);
        contentSection.appendChild(divTitle);
            
        contentSection.appendChild(ulCategories);
            burgers.category.forEach((item) => {
                liCategorie = document.createElement("li");
                liCategorie.classList.add("burgersSection-burgerCard-content-categoryList-item");
                liCategorie.appendChild(document.createTextNode(item));
                ulCategories.appendChild(liCategorie);
            });
        contentSection.appendChild(containerIcon);
    
          
        contentSection.appendChild(footerArticle);
            divTitle.appendChild(price);
                price.appendChild(document.createTextNode(burgers.price + " € "));
            
          let quantity=document.createElement('div');
          quantity.innerHTML = `
            <div class="number-input">
                <button  class="button1" onclick="this.parentNode.querySelector('input[type=number]').stepDown()" ></button>
                <input class="quantity" min="0" name="quantity" value="0" type="number">
                <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus button2"></button>
            </div>`;
            footerArticle.appendChild(quantity);
            footerArticle.appendChild(addPanier);
                addPanier.appendChild(buttonIcon);

    addPanier.addEventListener('click', () => {
    let selectedBurger = {
        image: burgers.image, title: burgers.title, quantity: parseInt(quantity.value), price: parseInt(burgers.price)
    }
    addToCart(selectedBurger)
    
    });
           

            let iconReadMore = document.createElement("i");
            iconReadMore.classList.add("fa-solid", "fa-arrow-down");
            let description = document.createElement("p");
            description.classList.add("burgersSection-burgerCard-content-icon-description");
            description.appendChild(document.createTextNode(burgers.description));
            let divIcon = document.createElement('div');
            divIcon.classList.add("burgersSection-burgerCard-content-icon");
            divIcon.append(iconReadMore);
            divIcon.append(description);
            contentSection.append(divIcon);


            

            let visibility = () =>{
                description.classList.toggle('burgersSection-burgerCard-content-icon-description-visible');
                iconReadMore.classList.toggle('burgersSection-burgerCard-content-icon-reverse');
            }

            iconReadMore.addEventListener('click', visibility);


    
    return article;
}

let cartItems = [];
function addToCart(item) {
cartItems.push(item);
console.log(item)
//updateCart();
}
console.log(cartItems)

function upDateCart() {
    let sectionCart = document.getElementsByClassName("sectionCart-cartContainer");
    let totalPrice
    sectionCart.innerHTML = "";
    cartItems.forEach(select => {
        let article = document.createElement("div");
            let img = document.createElement("img");
            let title = document.createElement("h3");
            let qte = document.createElement("strong");
            let price = document.createElement("p");
        article.classList.add("sectionCart-cartContainer-article");
            img.classList.add("sectionCart-cartContainer-article-image");
                img.setAttribute("src", select.image);
                img.setAttribute("alt", select.title);
            title.classList.add("sectionCart-cartContainer-article-title")
            qte.classList.add("sectionCart-cartContainer-article-quantite")
            price.classList.add("sectionCart-cartContainer-article-price");
        sectionCart.appendChild(article);
        article.appendChild(img);
        article.appendChild(title);
            title.appendChild(select.title);
        article.appendChild(qte);
            qte.appendChild(select.quantity)
        article.appendChild(price);
            price.appendChild(document.createTextNode(select.price * select.quantity + " €"));
    }) 

    totalPrice = document.createElement("strong");
        totalPrice.classList.add("sectionCart-cartContainer-article-total");
    article.appendChild(totalPrice);
    totalPrice.appendChild(createTextNode("Total de votre commande : " + "créer le calcul"))
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
    filteredBurgers.forEach((burger) => {
        let card = GenerateCard(burger);
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



// toggleDarkMode.addEventListener('change', (e) =>{ // <--- modifier pour charger une autre stylesheet ???
//     if (e.target.value = 'dark') {
//         body.style.backgroundColor = 'darkgray';
//         body.style.color = 'white';
//     } else {
//         body.style.backgroundColor = '';
//         body.style.color = '';
//     }
// })

