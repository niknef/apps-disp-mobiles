// componente-lista.js 
const ComponenteLista = {
  // Definición del componente
  props:["arr"],
    template: `
            <div class="ver"> 
              <h1>Datos ingresados</h1>
                <p v-for="x in arr">{{x.nombre}}: {{x.apellido}}: {{x.telefono}}</p>
            </div>`,
  created() {
    console.log('%cEl componenteLista se creó.', "color:white; background:black");
  }
}

