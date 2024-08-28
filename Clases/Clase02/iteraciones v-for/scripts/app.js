const app = Vue.createApp({
    data() {
      return {

      peliculas:[
				"Civil War",
				"Sherlock Holmes",
				"Kung Fusion"
			],
				juegos:[
								{
									nombre: "Super Mario Bros", 
									anio: 1986, 
									portada:"img/super_mario.jpg", 
									alt:"Super Mario Bros Primer juego",
									calificacion:8
								},
								{
									nombre: "Mortal Kombat", 
									anio: 1993, 
									portada:"img/mk2.jpg" , 
									alt:"Mortal Kombat 2", 
									calificacion:9
							},
								{
									nombre: "Street Fighter", 
									anio :1987, 
									portada:"img/sf2.jpg", 
									alt:"Street Figther",	
									calificacion:7
								}
			],
			obj: {
				animal: "gato", raza: "Persa", edad:4
			},
			lista:[
				{tarea: "Practicar Vue", id:1, estado: true},
				{tarea: "Leer los apuntes", id:2, estado: true},
        {tarea: "Comprar plantas", id:3, estado: false},
        {tarea: "Hacer meditación", id:5, estado: false},
        {tarea: "Pintar", id:4, estado: true},
			],
	listaDeTareas: [
  {	
    tarea: "Ir al vivero", 
    id: 1, 
    estado: false, 
    detalles: ["suculentas ", "colgantes ", "aromáticas "]
  },
  {
    tarea: "Lectura", 
    id: 2, 
    estado: false, 
    detalles: ["Mr.Mercedes ", "Dr.Sueño ", "It"]
  },
],

		tareasConElementos: [
  {
    tarea: "Ir al vivero",
    id: 1,
    estado: false,
    elementos: [
      { nombre: "suculentas", cantidad: 4, tamanio: "pequeño" },
      { nombre: "colgantes", cantidad: 10, tamanio: "mediano" },
    ]
  },
  {
    tarea: "Comprar estantes",
    id: 2,
    estado: false,
    elementos: [
      { nombre: "Estantería de madera", cantidad: 2, tamanio: "grande" },
      { nombre: "Soportes metálicos", cantidad: 4, tamanio: "mediano" },
    ]
  },
],
		}
	}

});
app.mount('.contenedor');



