const app = Vue.createApp({
    data() {
      return {
        productos: [
        { nombre: 'Camiseta', categoria: 'ropa', precio: 20000, enOferta: false },
        { nombre: 'Zapatillas', categoria: 'calzado', precio: 50000, enOferta: true },
        { nombre: 'Gafas de sol', categoria: 'accesorio', precio: 15000, enOferta: false },
        { nombre: 'Pantalones vaqueros', categoria: 'ropa', precio: 35000, enOferta: false },
        { nombre: 'Reloj elegante', categoria: 'accesorio', precio: 40000, enOferta: true },
        { nombre: 'Zapatos de deporte', categoria: 'calzado', precio: 30000, enOferta: true },
        { nombre: 'Bufanda de lana', categoria: 'ropa', precio: 18000, enOferta: false },
      
      ],



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


