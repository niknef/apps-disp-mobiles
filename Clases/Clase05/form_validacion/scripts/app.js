const app= Vue.createApp({
	

});
app.component('mi-form', {
	data:function(){
		return {
				titulo:null,
				comentario:"",
				seleccion:[],
				anio:null,
										
		arr:[],
		errores:[],
		enviado: false,
		}

	},
	
template:`<div class="form">
		<form v-on:submit.prevent="guardar" novalidate >

		<label>Título</label>
			<input type="text" v-model="titulo"  placeholder="Ingrese Titulo" name="titulo" />

		<label>Resumen</label>
				<textarea v-model="comentario" name="comentario"></textarea>

		<label>Consola</label>

		<select v-model="seleccion" multiple size="3" name="seleccion">
				<option>PC</option>
				<option>Play 1</option>
  			<option>Play 2</option>
  			<option>Play 3</option>
  			<option>Play 4</option>
		</select>
		
		
		<label>Lanzamiento</label>
		<input v-model.number="anio" name="anio" type="number"  />


		<input type="submit" value="Enviar"/>

		</form>

		<div v-if="enviado === true">
			<div v-if="this.errores.length > 0" class="classerror">
			 <ul>
	     		 <li v-for="x in errores" >{{x}}</li>
	    	</ul>
	  	</div>
	  	<div v-else class="enviado">
	          <p><span>Enviado con éxito</span></p>
	    </div>
 		</div>

		<div v-if="this.arr.length > 0">
			<h2>Datos</h2>
				<ul>
					<li v-for="item in arr" >
					{{item.titulo}}, {{item.comentario}}, 
					<span v-for="x in item.seleccion">{{x}}, </span>{{item.anio}}</li>
				</ul>
		</div>
		<div v-else class="classerror">
			<p>Empezá a cargar tus juegos!</p>
		</div>

		
	</div>`,
methods:{
	guardar:function(){

		//console.log(e) //evento del submit
	//validacion
       this.enviado = true; //queremos evaluar que los mensajes se muestren solo cuando se ejecute la funcion
       this.errores=[] //vaciamos el array de errores
             
	  if (!this.titulo) {
	  	console.log(!this.titulo)
	   	this.errores.push('El titulo es obligatorio.');
       
      }
      if(this.titulo && this.titulo.length < 3) {
        this.errores.push('El título debe tener más de 3 caracteres.');
         
      }
        if (!this.comentario) {
	  	console.log(!this.comentario)
	   	this.errores.push('El comentario es obligatorio.');
       
      }
      if(!this.seleccion[0]){
      	this.errores.push('Debe seleccionar una consola.');
      }
      if (!this.anio) {
        this.errores.push('El año es obligatorio.');
        
      }
     	
     if(this.errores.length == 0){

     	     	 
     nuevoObj = {
     							comentario: this.comentario,
						 			titulo: this.titulo,
						 			seleccion: this.seleccion,
						 			anio: this.anio
								}
			this.arr.push(nuevoObj)
			console.log(nuevoObj)
			}
}

}, //cierre de methods


});
app.mount(".contenedor")






