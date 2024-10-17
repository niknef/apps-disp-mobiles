const app= Vue.createApp({
	data(){
	return {
		mensaje:"Mensajito",

		antesCrear:"Antes de que se cree la instancia",
		crear: "Se creo la instancia",
		antesMontar :"Antes de montar la instancia",
		montar: "Ya se monto la instancia",
		antesActualizar : "Antes de actualizar",
		actualizar: "Cuando se actualiza la instancia",
		antesDestruir:"Antes de que se destruya",
		destruir:"Se destruye",
		
		lista:[]
		} //fin data

}, //cierre del data		
//hooks
	beforeCreate: function () {
  		console.log("Antes que se cree: "+  this.antesCrear)
  },
	created: function () { //al crear metodos, eventos, etc(No accede a "el", ni al DOM)
    	console.log( this.crear)
  },
 	beforeMount:function(){ //antes de insertar al DOM
  		console.log(this.antesMontar)
  },
  	mounted: function(){ //al insertar al DOM
  		console.log(this.montar)
  },
  	beforeUpdate:function(){ //antes del cambio
  		console.log(this.antesActualizar)
  },
  	updated: function(){ // cuando cambia
		console.log(this.actualizar)
  },
	beforeUnmount:function(){ //antes que se destruya
		console.log(this.antesDestruir)
},
	unmounted:function(){ //al destruir
		console.log(this.destruir)
},

methods:{


	agregar:function(){
		this.lista.push(this.mensaje);
		this.mensaje="";
		


	

	}
}



});
app.mount('.contenedor')

