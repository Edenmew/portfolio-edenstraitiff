
const project_cards =
    [ {"name": "RGB Light Model in C",
    "Technologies Used": "C, FPToolkit",
    "Description": "sample",
    "Image": "sample",
    "Link": "sample"},
    {"name": "sample",
    "Technologies Used": "sample",
    "Description": "sample",
    "Image": "sample",
    "Link": "sample"},
    {"name": "sample",
    "Technologies Used": "sample",
    "Description": "sample",
    "Image": "sample",
    "Link": "sample"},
    {"name": "sample",
    "Technologies Used": "sample",
    "Description": "sample",
    "Image": "sample",
    "Link": "sample"} ]

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
        this_card.innerHTML = `<h3>${card.name}</h3>`;
        cardContainer.appendChild(this_card)
    }
}