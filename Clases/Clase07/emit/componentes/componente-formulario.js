const ComponenteFormulario = {
  template: `
    <form @submit.prevent="enviarFormulario">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" v-model="nombre">
      <label for="apellido">Apellido:</label>
      <input type="text" id="apellido" v-model="apellido">
      <button type="submit">Enviar</button>
    </form>
  `,
  data() {
    return {
      nombre: "",
      apellido:""
    };
  },
  methods: {
    enviarFormulario() {
      this.$emit('formulario-enviado', { nombre: this.nombre, apellido:this.apellido});
      this.nombre = "";
      this.apellido =""; 
    }
  },
  emits:['formulario-enviado']
};