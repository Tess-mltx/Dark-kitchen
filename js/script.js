let sectionCard = document.getElementById("burgersSection");
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
                liCategorie.setAttribute("data-categori", item);
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
        sectionCard.appendChild(article);
    });
}

// toggleDarkMode.addEventListener('change', (e) =>{ // <--- modifier pour charger une autre stylesheet ???
//     if (e.target.value = 'dark') {
//         body.style.backgroundColor = 'darkgray';
//         body.style.color = 'white';
//     } else {
//         body.style.backgroundColor = '';
//         body.style.color = '';
//     }
// })

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

// burgersSection-burgerCard-content-footer-quantity
// burgersSection-burgerCard-content-footer-submit
// Ajout du rond rouge 
let notification = (e) => {
    let iconPanier = document.querySelector('.panier'); // Changer quand Hanen a terminé
    let pointRouge = document.createElement('div');
    pointRouge.className = 'pointRouge';
    iconPanier.append(pointRouge);
}
let boutonPanier = document.querySelector('.submit');
boutonPanier.addEventListener('click', notification);

// Panier