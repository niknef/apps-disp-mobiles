const app = Vue.createApp({
    data() {
        return {
            titulo: "Productos",
            
        };
    },
});

app.component('navbar-component', {
    template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3 sticky-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="./img/logo.svg" alt="logo Mundo Urbano">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto gap-3">
                    <li class="nav-item">
                        <a class="nav-link" href="#productos">Productos</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
    `,
});

app.component('productos-component', {
    data(){
        return {
            productos: [
                {
                    id: 1,
                    nombre: "Trip Premium",
                    marca: "Spiral",
                    color: "Negro",
                    temporada: "Invierno, 2024",
                    img: "./img/trip-premium.jpg",
                    descripcion: "Zapatilla que combina la robustez del calzado skater profesional con un estilo chunky de última tendencia.",
                    precio: 92819,
                    oferta: false
                },
                {
                    id: 2,
                    nombre: "G.O.A.T High",
                    marca: "Spiral",
                    color: "Blanca",
                    temporada: "Invierno, 2024",
                    img: "./img/goat-high-white.jpg",
                    descripcion: "GOAT HIGH se destaca por su altura sobre el tobillo y un elegante cierre de velcro que proporciona tanto estilo como sujeción.",
                    precio: 109199,
                    oferta: true
                },
                {
                    id: 3,
                    nombre: "Court Graffik Ss (wlk)",
                    marca: "DC Shoes",
                    color: "Blanca",
                    temporada: "Invierno, 2024",
                    img: "./img/court-graffik-wlk.jpg",
                    descripcion: "La Court Graffik sigue mejorando con el tiempo, su clásica silueta hinchada siempre está evolucionando con colores de moda.",
                    precio: 144990,
                    oferta: true   
                },
            ]
        };
    },
    props: ["titulo"], 
    template: `
    <div>
        <h1 class="text-start mt-3 mb-5 ms-3 fw-light fs-2">{{ titulo }}</h1> 
        <div class="container">   
            <div class="row justify-content-center gap-3">
            <template v-for="x in productos" :key="x.id">
                    <card-producto
                        
                        :nombre="x.nombre"
                        :marca="x.marca"
                        :img="x.img"
                        :oferta="x.oferta"
                        :precio="x.precio"
                        :descripcion="x.descripcion">
                    </card-producto>
                </template>
            </div>
        </div>
    </div>
    `
});

app.component('card-producto', {
    props: ["nombre", "marca", "img", "oferta", "precio", "descripcion", "id"],
    template: `
    <div class="card" style="width: 18rem;">
        <img :src="img" class="card-img-top" :alt="nombre">
        <div class="card-body">
            <h2 class="card-title">{{nombre}}</h2>
            <h3 class="card-text">{{marca}}</h3>
            <p class="card-text">{{descripcion}}</p>
            <h3 class="card-text">
                <span v-if="oferta" style="text-decoration: line-through; color: red;">
                    $ {{precio}}
                </span>
                <span v-else>
                    $ {{precio}}
                </span>
            </h3>
            
        </div>
    </div>
    `,
    
});

app.mount('.contenedor');