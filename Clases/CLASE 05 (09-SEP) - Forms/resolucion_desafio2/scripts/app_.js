const app = Vue.createApp({
    data() {
      return {
       peliculas:[
        {
          titulo:"Avatar: La leyenda de Aang",
          director:"Denis Villeneuve",
          estreno:2024,
          genero:["Fantasía ", "Ciencia ficción"],
          portada: "img/avatar.jpg",
          calificacion: 5
        },        {
          titulo: "Dune 1", 
          director:"Denis Villeneuve",
          estreno:2023,
          genero:["Ciencia ficción", "Aventura"],
          portada: "img/dune.jpg",
          calificacion: 8
        },
         {
          titulo:"Godzilla y Kong: El nuevo imperio",
          director:"Adam Wingard",
          estreno:2024,
          genero:["Acción", "Ciencia Ficción", "Kaiju"],
          portada: "img/godzilla.jpg",
          calificacion: 8
        },
        {
          titulo:"Cazafantasmas: Imperio helado",
          director:"Gil Kenan",
          estreno:2024,
          genero:["Aventura", "Comedia", "Fantasía"],
          portada: "img/cazafantasmas.jpg",
          calificacion: "-"
        },
          {
          titulo:"Shogun",
          director:"James Clavell",
          estreno:2024,
          genero:["Aventura", "Drama", "Historia"],
          portada: "img/shogun.jpg",
          calificacion: 6
        }



      ]
}
    },
});
app.mount('.contenedor');


