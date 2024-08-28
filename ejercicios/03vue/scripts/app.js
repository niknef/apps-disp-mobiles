const app = Vue.createApp({
    data() {
        return {
            titulo: "Mis juegos:",
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
            nombre: "",
            categoria: "No especifica",
            anio: 2000,
        };
    },
    methods: {
        guardar() {
            this.juegos.push({
                nombre: this.nombre,
                class: false,
                categoria: this.categoria,
                anio: this.anio
            });
            this.nombre = "";
            this.categoria = "No especifica";
            this.anio = 2000;
        },
        favorito(index) {
            this.juegos[index].class = !this.juegos[index].class;  // Invierte el valor booleano
        },
        toUpperCase(text) {
            return text.toUpperCase();
        },
        borrar(index) {
            this.juegos.splice(index, 1);
        }
    },
});

app.mount("#app");