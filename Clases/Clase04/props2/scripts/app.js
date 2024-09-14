///Primero se crea la instancia de Vue
const app = Vue.createApp({
  data() {
    return {
      titulo:"Desde la instancia",
    }
  }
});

app.component('componente-padre',{
	data:function(){
		return {
			fecha: new Date().toLocaleDateString(),
			nombre:"blog",
		
			articulos: [ //se pasarán al componente hijo por props
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
		      	texto:"Las suculentas que suelen cambiar de color dependen fundamentalmente del clima y el strees a la cual se somete a la planta. Factores como el grado de luz, frío o calor puede afectar su color, tal es el caso del Aeonium, las Echeverias, también algunos cactus.",
		      	img:"img/suculentas.jpg",
		      	alt:"Suculentas estresadas"
		      },
		      { id: 3,
		      	titulo: 'jardines verticales', 
		      	favorito: true,
		      	texto:"La tendencia en medio de la pandemia es buscar verde y sol para tratar de sobrevellar el encierro. Para aquellos que no tienen suficiente espacio, la opción vertical es una gran opción para disfrutar",
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
			}
	},
	
	template: `
	<div>
			<h1>{{nombre}} : {{fecha}}</h1>

			<template v-for ="x in articulos">
 			<componente-hijo v-if="x.favorito === true"
							v-bind:key="x.id"
							v-bind:class="x.id  %2==1 ? 'lavanda' : 'coral'" 
							v-bind:titulo="x.titulo" 
							v-bind:id="x.id"
  						v-bind:texto="x.texto" 
  						v-bind:img="x.img"
  						v-bind:alt="x.alt">
  			</componente-hijo>
  		</template>
	</div>`
	
})

app.component('componente-hijo', {
	props:["titulo", "texto", "img", "alt", "id"],
   	template: `
     <div class="articulos">

     	
       	<h1>{{titulo}}</h1>
       	<div class="d">
      
      		<p>{{texto}}</p>

       		<img v-bind:src="img" v-bind:alt="alt"/>
      </div>

       <btn-contador></btn-contador>
       
     </div>

   `,

    
}),

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
        	 				
  	 			     </div>`


})

app.mount('.contenedor');



