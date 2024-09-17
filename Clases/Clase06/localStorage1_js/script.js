//OPCION 1
function enviar_nombre(){
	const nombre = document.querySelector("#nombre").value;
		localStorage.setItem ("dato", nombre);
	const mostrar = document.querySelector("#mostrar")
	const dato_recuperado_local = localStorage.getItem ("dato");
	this.nombre.value=""

 	mostrar.innerHTML = dato_recuperado_local;
}
/*
//Opcion 2 
function enviar_nombre(){
	const nombre= document.querySelector("#nombre").value;
		localStorage["nombre"] =nombre;
	const mostrar = document.querySelector("#mostrar")
	const dato_recuperado_local = localStorage["nombre"];

 mostrar.innerHTML = dato_recuperado_local;
}


//Opcion 3
function enviar_nombre(){

	const nombre= document.querySelector("#nombre").value;
		localStorage.nombre =nombre;
	const mostrar = document.querySelector("#mostrar")
	const dato_recuperado_local = localStorage.nombre;

 mostrar.innerHTML = dato_recuperado_local;
}
	
*/	
	

	


