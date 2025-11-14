# 🧙‍♂️ Harry Potter Characters Explorer

Aplicación web que permite explorar personajes del universo de *Harry Potter* utilizando una API pública. Los personajes se muestran mediante tarjetas con su imagen, nombre y año de nacimiento.  
Incluye un sistema de favoritos persistente mediante *LocalStorage*, y una sección dedicada a las casas de Hogwarts donde es posible filtrar personajes según Gryffindor, Slytherin, Hufflepuff o Ravenclaw.

---

## ✨ Características Principales

- 📌 *Listado de personajes* obtenidos desde una API pública.  
- 🖼️ *Cards dinámicas* con imagen, nombre y año de nacimiento.  
- ⭐ *Favoritos persistentes* usando LocalStorage.  
- 🏰 *Sección de casas*: filtra personajes por Gryffindor, Slytherin, Ravenclaw y Hufflepuff.  
- 🎨 *Diseño responsivo y temático* inspirado en Harry Potter.  
- ⚡ *Deploy en Vercel* para acceso público.

---

## 🧰 Tecnologías Utilizadas

### *Frontend*
- *HTML5* — estructura del proyecto  
- *CSS3* — estilos, layout, efectos visuales  
- *JavaScript Vanilla* —  
  - Consumo de API  
  - Manipulación del DOM  
  - Render de cards  
  - Manejo de favoritos con LocalStorage  
  - Filtrado por casas

### *API Pública*
- Harry Potter API  
  https://hp-api.onrender.com/api/characters

### *Hosting*
- *Vercel*

---

## 🚀 Deploy

Podés acceder a la versión online aquí:

👉 *[Ver App en Vercel](http://practica-parcial2-uhrin-escobar.vercel.app)*  
(Reemplazá la URL con la de tu proyecto.)

---

## ▶️ Cómo Ejecutar el Proyecto Localmente

### *1. Descargar o clonar el repositorio*
```bash
git clone https://github.com/tuusuario/tu-repo.git

2. Abrir el proyecto
Opción A — Abrir directamente

Abrí index.html en tu navegador.

Opción B — Usar Live Server (VS Code)

Instalar extensión Live Server.

Abrir la carpeta del proyecto en VS Code.

Click derecho en index.html → Open with Live Server.

Navegar a la URL que se abre (ej: http://127.0.0.1:5500/).

🏰 Sección de Casas

La aplicación incluye una vista separada donde se muestran los personajes clasificados por casa:

❤️ Gryffindor

💚 Slytherin

💛 Hufflepuff

💙 Ravenclaw

Cada casa utiliza su color característico y muestra únicamente los personajes pertenecientes a la misma.

⭐ Sistema de Favoritos

Cada card posee un botón para agregar el personaje a favoritos.

Los favoritos se almacenan en LocalStorage, permitiendo persistencia incluso al cerrar la pestaña.

La sección “Favoritos” permite visualizar y eliminar personajes guardados.

👨‍💻 Autores

Ignacio Uhrin/Mateo Escobar
Proyecto académico — Facultad / Cátedra
