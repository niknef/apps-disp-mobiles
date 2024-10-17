// componente-form.js
const ComponenteForm = {
  data:function(){
    return {
      dato:{
            nombre:"", 
            apellido:"", 
            telefono:""
          },
           arr:[],
           mensaje:""
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

    <template v-if="this.arr.length >0">
      <componente-lista :arr="this.arr" ></componente-lista> <!--componente hijo-->
    </template>
    <template v-else>
      <p>{{mensaje}}</p>
     </template>
</div>`,
    created() {
      this.mostrar()
        console.log('%cEl componenteForm se creó.', 'color:white; background:blue');
  },
  methods:{
    guardar(dato){
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
    mostrar(){
      if (localStorage.getItem("local")) {
      this.arr= JSON.parse(localStorage.getItem("local")) 
      }else{
      this.mensaje = "No hay datos que mostrar"
        }
       }
      }//fin methods
}//fin componente
   
/*beforeCreate() {
    console.log("beforeCreate - del componenteForm.");
  },
  created() {
    console.log("created -del componenteForm.");
  },
  beforeMount() {
    console.log("beforeMount - del componenteForm");
  },
  mounted() {
    console.log("mounted - del componenteForm");
  },
  beforeUpdate() {
    console.log("beforeUpdate - del componenteForm.");
  },
  updated() {
    console.log("updated - del componenteForm");
  },
  beforeUnmount() {
    console.log("beforeUnmount - del componenteForm.");
  },
  unmounted() {
    console.log("unmounted - del componenteForm");
  }*/




