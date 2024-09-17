function enviar() {
	const agenda = localStorage.getItem("agenda");
	const array_para_data = agenda ? JSON.parse(agenda) : [];

	const nombre = document.querySelector("#nombre").value;
	const apellido = document.querySelector("#apellido").value;
	const telefono = document.querySelector("#telefono").value;
			
	const data = { nombre, apellido, telefono, };

	array_para_data.push(data);
	localStorage.setItem("agenda", JSON.stringify(array_para_data));

	document.querySelector("form").reset();
	
	mostrar();
}

function mostrar() {
	const agenda = localStorage.getItem("agenda");
	const recuperar_localStorage = agenda ? JSON.parse(agenda) : [];

	let guardar = '';
	recuperar_localStorage.forEach(contacto => {
		guardar += `
		<p class="datos">
			<span> ${contacto.nombre}</span>
			<span> ${contacto.apellido}</span>
			<span> ${contacto.telefono}</span>
		</p>`;
	});

	document.querySelector("#mostrar").innerHTML = guardar;
}