const apiURL = "https://hp-api.onrender.com/api/characters";
const container = document.getElementById("cards-container");


async function cargarPersonajes() {
  try {
    const respuesta = await fetch(apiURL);
    const personajes = await respuesta.json();

    personajes.forEach(p => {

      if (!p.image) return;

      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p><strong>Año de nacimiento:</strong> ${p.yearOfBirth ?? "Desconocido"}</p>
      `;


      container.appendChild(card);
    });

  } catch (error) {
    console.error("Error al cargar personajes:", error);
    container.innerHTML = "<p>Error al cargar personajes.</p>";
  }
}

cargarPersonajes();

