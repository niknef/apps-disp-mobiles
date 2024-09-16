const app = Vue.createApp({
    data() {
        return {
            titulo: "Mis juegos:",
            //array con juegos por defecto
            juegos: [
                { 
                    nombre: "Counter Strike 2",
                    categoria: "Shooter",
                    anio: 2023,
                    class: false
                },
                { 
                    nombre: "Forza Horizon 5",
                    categoria: "Racing",
                    anio: 2021,
                    class: false
                }
            ],
            //variables para el formulario
            nombre: "",
            categoria: "No especifica",
            anio: 2000,
        };
    },
    methods: {
        //metodo para guardar un nuevo juego
        guardar() {
            //agrega un nuevo juego al array
            this.juegos.push({
                nombre: this.nombre,
                class: false,
                categoria: this.categoria,
                anio: this.anio
            });
            //limpia los campos del formulario
            this.nombre = "";
            this.categoria = "No especifica";
            this.anio = 2000;
        },
        //metodo para marcar un juego como favorito - esta dentro del form cuando le das click al span, lo que hace es un toggle de la clase (se le pasa el index para que funcione en cada juego)
        favorito(index) {
            this.juegos[index].class = !this.juegos[index].class;  // Invierte el valor booleano
        },
        //metodo para convertir el texto a mayusculas
        toUpperCase(text) {
            return text.toUpperCase();
        },
        //metodo para borrar un juego
        borrar(index) {
            this.juegos.splice(index, 1);
        }
    },
});

app.mount("#app");