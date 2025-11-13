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
        <button class="fav-btn">Agregar a favoritos</button>
      `;

      const btnFav = card.querySelector(".fav-btn");
      btnFav.addEventListener("click", () => agregarAFavoritos(p));

      container.appendChild(card);
    });

  } catch (error) {
    console.error("Error al cargar personajes:", error);
    container.innerHTML = "<p>Error al cargar personajes.</p>";
  }
}

cargarPersonajes();


/* FUNCIONALIDADES RELACIONADAS A FAVORITOS */

function obtenerFavoritos() {
  return JSON.parse(localStorage.getItem("favoritos")) || [];
}


function guardarFavoritos(array) {
  localStorage.setItem("favoritos", JSON.stringify(array));
}


function agregarAFavoritos(personaje) {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  // Evitar duplicados
  if (favoritos.some(f => f.name === personaje.name)) {
    alert("Este personaje ya está en favoritos.");
    return;
  }

  favoritos.push(personaje);

  localStorage.setItem("favoritos", JSON.stringify(favoritos));

  alert(personaje.name + " fue agregado a favoritos ");
}


function eliminarDeFavoritos(id) {
  let favoritos = obtenerFavoritos();
  favoritos = favoritos.filter(fav => fav.id !== id);
  guardarFavoritos(favoritos);
}


function renderizarFavoritos() {
  const contenedor = document.getElementById("contenedor-favoritos");
  contenedor.innerHTML = "";

  const favoritos = obtenerFavoritos();

  if (favoritos.length === 0) {
    contenedor.innerHTML = "<p>No tenés favoritos aún.</p>";
    return;
  }

  favoritos.forEach(fav => {
    const card = document.createElement("div");
    card.classList.add("fav-card");

    card.innerHTML = `
      <img src="${fav.image}">
      <div>
        <h3>${fav.name}</h3>
        <p>Nacimiento: ${fav.yearOfBirth || "Desconocido"}</p>
        <button class="btn-eliminar" data-id="${fav.id}">Eliminar</button>
      </div>
    `;

    contenedor.appendChild(card);
  });

  document.querySelectorAll(".btn-eliminar").forEach(btn => {
    btn.addEventListener("click", e => {
      const id = e.target.dataset.id;
      eliminarDeFavoritos(id);
      renderizarFavoritos();
    });
  });
}


const modal = document.getElementById("modal-favoritos");
const openFavs = document.getElementById("open-favs");
const closeFavs = document.getElementById("close-favs");

openFavs.addEventListener("click", () => {
  renderizarFavoritos();
  modal.style.display = "flex";
});

closeFavs.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});