
const project_cards = [
    {"name": "RGB Light Model in C",
        "tech_used": "C, FPToolkit",
        "description": "The gif you see above is the rendering of 3 lights and some objects in a ray tracer. It is meant to show how light works when combining red, green, and blue light.",
        "image": "images/animation.gif",
        "link_name": "Github Link",
        "link": "https://github.com/Edenmew/graphics"},
    {"name": "This Website",
        "tech_used": "HTML, CSS, JavaScript",
        "description": "This website has interactive elements, ",
        "image": "images/website.png",
        "link_name": "Github Link",
        "link": "https://github.com/Edenmew/portfolio-edenstraitiff"},
    {"name": "Game Idea 1: Short Horror",
        "tech_used": "GDScript, Godot",
        "description": "sample",
        "image": "images/godot.png",
        "link_name": "Godot",
        "link": "https://godotengine.org/"},
    {"name": "Game Idea 2: ",
        "tech_used": "GDScript, Godot",
        "description": "sample",
        "image": "images/godot.png",
        "link_name": "Godot",
        "link": "https://godotengine.org/"} ]

window.addEventListener("DOMContentLoaded", domLoaded);

color_toggle = 0;

function domLoaded()
{
    const funBtn = document.getElementById("fun");
    funBtn.addEventListener("click", changeColors);

    loadCards();

}

function changeColors()
{
    const root = document.documentElement;
    if (color_toggle == 0)
    {
        root.style.setProperty('--outer_background_color', 'black');
        root.style.setProperty('--inner_background_color', '#101010');
        root.style.setProperty('--text_color', 'red');
        root.style.setProperty('--hover_color', '#151515');
        color_toggle = 1;
    }
    else
    {
        root.style.setProperty('--outer_background_color', '#022C04');
        root.style.setProperty('--inner_background_color', '#124012');
        root.style.setProperty('--text_color', '#DCA028');
        root.style.setProperty('--hover_color', '#044E08');
        color_toggle = 0;
    }
}

function loadCards()
{
    const cardContainer = document.getElementById("cards");
    for (const card of project_cards)
    {
        console.log("Hello?")
        let this_card = document.createElement("div");
        let card_image = document.createElement("img");
        let card_title = document.createElement("h3");
        let card_tech_used = document.createElement("p");
        let card_descript = document.createElement("p");
        let card_link = document.createElement("p");
        this_card.classList.add("card")
        card_image.src = `${card.image}`;
        card_image.style.height = "300px";
        card_title.innerHTML = `${card.name}`;
        card_tech_used.textContent = `${card.tech_used}`;
        card_descript.textContent = `${card.description}`;
        card_link.innerHTML = `<a href="${card.link}"> ${card.link_name}</a>`;
        this_card.appendChild(card_image);
        this_card.appendChild(card_title);
        this_card.appendChild(card_tech_used);
        this_card.appendChild(card_descript);
        this_card.appendChild(card_link);
        cardContainer.appendChild(this_card);
    }
}