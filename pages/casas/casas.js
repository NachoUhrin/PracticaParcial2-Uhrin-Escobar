const apiURL = "https://hp-api.onrender.com/api/characters";

const contCasas = document.getElementById("contenedor-casas");

let personajes = [];

fetch(apiURL)
  .then(res => res.json())
  .then(data => {
      personajes = data;
      renderCasas();
  });

function renderCasas() {
    contCasas.innerHTML = "";

    const casas = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];

    casas.forEach(casa => {
        const div = document.createElement("div");
        div.classList.add("casa", casa);

        div.innerHTML = `
            <h2>${casa}</h2>
            <div class="grid" id="grid-${casa}"></div>
        `;

        contCasas.appendChild(div);

        const grid = div.querySelector(`#grid-${casa}`);

        personajes
            .filter(p => p.house === casa && p.image)
            .forEach(p => {
                const card = document.createElement("div");
                card.classList.add("card-casa");

                card.innerHTML = `
                    <img src="${p.image}" alt="${p.name}">
                    <h4>${p.name}</h4>
                `;

                grid.appendChild(card);
            });
    });
}