const app = Vue.createApp({
  data() {
    return {
      titulo:"LocalStorage",
    }
  }
  
});
//REGISTRO DEL COMPONENTE FORM-DATO -PADRE DEL COMPONENTE MOSTRAR-DATO Y PASA ARR PARA SU HIJO POR PROPS
app.component('form-dato', {
	data:function(){
		return {
      dato:{
			      nombre:"", 
            apellido:"", 
            telefono:""
          },
           arr:[],
       
			}
		},

	template:
`<div class="form-data">
	<h2>Agenda Vue</h2>
    <form @submit.prevent>
      <div>
        <label>Nombre</label>
        <input type="text" v-model= "dato.nombre" />
      </div>
      <div>
        <label>Apellido</label>
        <input type="text" v-model= "dato.apellido" />
      </div>
      <div>
        <label>Teléfono</label>
        <input type="tel" v-model= "dato.telefono" />
      </div>
                  
      <button @click="guardar(dato)">Guardar</button>
    </form>
          <mostrar-dato v-bind:arr ="this.arr"></mostrar-dato>
</div>`,

  methods:{
    guardar(dato){
      console.log(dato)
        var localData = localStorage.getItem("local");
        this.arr = localData ? JSON.parse(localData) : [];

        this.arr.push({
          nombre: dato.nombre,
          apellido: dato.apellido,
          telefono: dato.telefono
        });
 
    localStorage.setItem("local", JSON.stringify(this.arr));

    this.dato = {nombre:"", apellido:"", telefono:""};
         
         
    }, 

   },


})
//REGISTRO DEL COMPONENTE MOSTRAR-DATO- HIJO QUE RECIBE POR PROPS ARR
app.component("mostrar-dato", {
    props:["arr"],
    template: `
            <div class="ver"> <h1>Datos ingresados</h1>
                <p v-for="x in arr">{{filtroMayusculas(x.nombre)}}: {{x.apellido}}: {{x.telefono}}</p>
            </div>`,

    methods:{
      filtroMayusculas(valor){
        return valor.toUpperCase();
      }

    }

 })
//Finalmente se monta la instancia de Vue en el elemento con clase "contenedor"
app.mount('.contenedor');
