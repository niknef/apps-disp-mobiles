const app = Vue.createApp({
    data(){
    return{
        title: 'Cine Fantástico ',
        titlePelicula: 'El mago de Oz',
        imgPelicula: 'img/magodeoz.jpg',
        titlePelicula2: 'El séptimo sello',
        imgPelicula2: 'img/septimosello.jpg',
        titlePelicula3: 'El laberinto del fauno ',
        imgPelicula3: 'img/laberintodelfauno.jpg',
        widthTexto:'75ch',
        colorTexto: 'white',
        booleano: true,
        };
    }
});

app.mount(".texto");