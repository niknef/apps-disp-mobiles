const compIngresar = {
	data:function(){
		return {
			form_data:{
				titulo:"",
				comentario:"",
				selected:[],
				estreno:""
			},
		arr:[]
		}

	},
template:`<div class="form">
	<form v-on:submit.prevent="guardar(form_data)">
		<label>Titulo</label>
			<input type="text" v-model.trim="form_data.titulo" placeholder="Titulo">
		<label>Comentario</label>
				<textarea v-model="form_data.comentario"></textarea>
		<label>Seleccionar</label>
		<select v-model="form_data.selected" multiple>
			<option>Terror</option>
  			<option>Animacion</option>
  			<option>Ciencia Ficcion</option>
  			<option>Drama</option>
  			<option>Otro</option>
		</select>
		
		<label> Estreno</label>
		<input v-model.number="form_data.estreno" type="number">


		<button type="submit" value="Guardar">Guardar </button>
		
		</form>
	</div>`,
methods:{
	guardar:function(form_data){
		if(!localStorage.dato){
			arr=[]
		}else{
			arr=JSON.parse(localStorage.getItem("dato"))
			}

		arr.push(form_data)
		localStorage.setItem("dato",JSON.stringify(arr))
	
		this.$router.push('/ver');

}
},


}


