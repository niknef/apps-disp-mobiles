const app = Vue.createApp({
  data() {
    return {
     articulos: [ //se pasará al componente por props
		      { id: 1, 
		      	titulo: 'jardin floreciente en otoño',
		      	favorito: true, 
		      	texto:"Plantas que florecen en otoño de varios colores, super resistentes como el Crisantemo, Zinnia, Geranio, nos ofrecen variados colores para alegrar la casa",
		      	img:'img/jardin_otono.jpg',
		      	alt:"Flores en otoño en el jardin"
		      },
		      { id: 2,
		      	titulo: 'suculentas y su cambio de color', 
		      	favorito: true,
		      	texto:"Las suculentas que suelen cambiar de color dependen fundamentalmente del clima y el strees a la cual se somete a la planta. Factores como el grado de luz, frío o calor pueden afectar su color, tal es el caso del Aeonium, las Echeverias, también algunos cactus.",
		      	img:"img/suculentas.jpg",
		      	alt:"Suculentas estresadas"
		      },
		      { id: 3,
		      	titulo: 'jardines verticales', 
		      	favorito: true,
		      	texto:"La tendencia en diseño de interiores es llevar la naturaleza a la vida diaria. Para aquellos que no tienen suficiente espacio, la opción vertical es una gran forma para disfrutarla",
		      	img: "img/vertical.jpg",
		      	alt:"Jardin vertical"
		      },
		      { id: 4, 
		      	titulo: 'macetas de cerámica', 
		      	favorito: false, 
		      	texto: "Siempre pensando que no hay nada más lindo que ver una planta saludable, las posibilidades que nos ofrecen los distintos tipos de macetas y estilos, nos permiten elegir una temática particular, acorde a nuestro gusto.",
		      	img:"img/macetas.jpg",
		      	alt:"Macetas de cerámica"
		      	}
    			], 

    			  		
    			nombre:"Pepe", //propiedad que pasara a componente
    			apellido:"Gonzalez"
    	}
  }
});

app.component('componente-props',{
	data:function(){
		return {
			edad: 24,
			}
	},
	props:['nombre', "apellido"], //atributo que recibe de la instancia raiz
	template: `
	<h1>Este es el nombre:
		{{nombre}} y su apellido es {{apellido}} y su edad es: {{edad }}</h1>
		
		`
	
})

app.component('componente-dinamico', {
		props:['titulo', 'texto', 'img', 'id', 'alt'],
   	template: `
     <div class="articulos" >
       	
       	<h1>{{titulo}}</h1>
      		
      		<div class="d">
      				<p>{{texto}}</p>
		       		<img v-bind:src="img" v-bind:alt="alt"/>
       		</div>

       		<btn-contador></btn-contador>
     </div>

   `,
   
});


app.component('btn-contador', {
 data: function () {
    return {
      sumar: 0,
      texto:"clasificar"

      }
  },
  	template: `<div class="voto">
          			<p>{{texto}} : {{ sumar }}</p>
        	 				<button v-on:click="sumar++">Votar!</button>
        	 				<p></p>
  	 			     </div>`


})
app.mount('.contenedor');




