//Primero se crea la instancia de Vue
const app = Vue.createApp({
  data() {
    return {
      titulo:"Desde la instancia",
    }
  }
});

//Luego se registran los componentes globalmente
app.component('mi-componente', {
  data:function(){
    return {
      saludo:"Hola Chicos",
    }
  },
  template:
    `<div>
      <h1>Título </h1>
      <p>Contenido del componente</p>
      <p>{{saludo}}</p>
    </div>`,
    methods:{
      //funciones


    }
});

app.component('otro-componente', {
  data:function(){
    return {
      dato:"Texto del componente template String"
    }
  },
  template:"<h1>{{dato}}</h1><p>Mas texto</p>"
});

app.component('btn-contador', {
  data () {
    return {
      sumar: 0,
      }
  },
  template: `
  <div>
    <p>Resultado {{ sumar }}</p>
    <button @click="sumar++">Sumar !</button>
    <button v-on:click="sumar--">Restar !</button>
  </div>`,
});

//Finalmente se monta la instancia de Vue en el elemento con clase "contenedor"
app.mount('.contenedor');




