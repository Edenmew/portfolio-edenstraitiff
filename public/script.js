
const project_cards = [
    {"name": "RGB Light Model in C",
        "tech_used": "C, FPToolkit",
        "description": "The gif you see above is the rendering of 3 lights and some objects in a ray tracer. It is meant to show how light works when combining red, green, and blue light.",
        "image": "images/animation.gif",
        "link_name": "Github Link",
        "link": "https://github.com/Edenmew/graphics"},
    {"name": "This Website",
        "tech_used": "HTML, CSS, JavaScript",
        "description": "This website has interactive elements, with color changing, dom, event listeners, and more! It describes some of the projects I have done in the past and plan to do in the future. ",
        "image": "images/website.png",
        "link_name": "Github Link",
        "link": "https://github.com/Edenmew/portfolio-edenstraitiff"},
    {"name": "Game Idea 1: Short Horror",
        "tech_used": "GDScript, Godot",
        "description": "This horror game would be set in a forest, where you are being hunted by a tiger or similar. It will be sound based, inspired by the phenomenon that happens in the jungle where the forest goes silent when a predator is nearby.",
        "image": "images/godot.png",
        "link_name": "Godot",
        "link": "https://godotengine.org/"},
    {"name": "Game Idea 2: Furniture Building and Sorting Dad Game",
        "tech_used": "GDScript, Godot",
        "description": "This game would start you off in a empty house and give you only the parts that come with multiple sets of furniture that are ment to be built, including nuts and bolts. You would need to sort the parts to then figure out how to build each piece of furniture.",
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
        let toggle_read = document.createElement("button");
        this_card.classList.add("card")
        card_image.src = `${card.image}`;
        card_image.style.height = "300px";
        card_title.innerHTML = `${card.name}`;
        card_tech_used.textContent = `${card.tech_used}`;
        card_descript.textContent = `${card.description}`;
        toggle_read.type = "button";
        toggle_read.classList.add("card_button");
        toggle_read.textContent = "Read More";
        card_tech_used.classList.add("no_display");
        card_descript.classList.add("no_display");
        card_link.classList.add("no_display");
        card_link.innerHTML = `<a href="${card.link}"> ${card.link_name}</a>`;
        this_card.appendChild(card_image);
        this_card.appendChild(card_title);
        this_card.appendChild(card_tech_used);
        this_card.appendChild(card_descript);
        this_card.appendChild(card_link);
        this_card.appendChild(toggle_read);
        cardContainer.appendChild(this_card);
        toggle_read.addEventListener("click", function () {toggleRead(button);});
    }
}

function toggleRead(button)
{

}