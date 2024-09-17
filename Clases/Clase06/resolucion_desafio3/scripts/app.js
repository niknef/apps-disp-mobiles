const app = Vue.createApp({
	data(){
		return {
			games:[
			{
				nombre:"war of gods", 
				consola:["play 2 ", "play 3 ", "play 4 "],
				anio:1996, 
				clase:'noamo'
			},
			{
				nombre:"super mario 3d world", 
				consola: ["nintendo ", "wii ", "switch "],
				anio:2021, 
				clase:'noamo'
			},
			{
				nombre:"resident evil", 
				consola: ["play 2 ", "play 3 "],
				anio:1996, 
				clase:'noamo'
			},
			{
				nombre:"prehistorik", 
				consola : ["pc", "dos"],
				anio:1993, 
				clase:'noamo'},
			{
				nombre:"among us", 
				consola : ["pc"], 
				anio:2018, 
				clase:'noamo'
			},
			{
				nombre:"fall guys", 
				consola :[ "pc ", "play 4 "], 
				anio:2020,
				clase:'noamo'}

		],
		menu:[
			{link : "retro", clase : 'activa'},
		 	{link: "arcade", clase:'noactiva'}, 
		 	{link: "tendencia", clase:'noactiva'}
		 	],


			jueguito:"",
			verificar:true,
			error:""

		 
		}
	},
	methods:{
			preferido:function(index){
				console.log(index)
				if(this.games[index].clase == "noamo"){
					
 				 			this.games[index].clase = 'amo'
 				 		}else{
 				 			
 				 			this.games[index].clase = 'noamo'
 				 		}
 			},
 			guardar:function(){
				if(this.jueguito ==""){
					this.verificar = false
					this.error="El campo es obligatorio"
				}else{
					this.verificar = true
				this.games.push({
					nombre: this.jueguito,
					clase: 'noamo',
					anio:1990
				});
				this.jueguito="";
				
				}
			}
			
		}
})
app.mount(".contenedor");
 
		





