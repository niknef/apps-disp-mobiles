const home = { template: `<div><h1>Hola!</h1> </div>`, name:"inicio" };
const ingresar = { template: `<compIngresar> </compIngresar>`, name:"formulario" };
const ingresarDato = { template: `<h1>Ingresar dato</h1>` , name:"prueba" };
const mostrar = { template: `<compMostrar></compMostrar>`, name:"muestra-form" };

const notFound = {
  template: `
    <div>
      <h1>404 - Página no encontrada</h1>
      <p>La página que buscas no existe.</p>
    </div>
  `
};
// Acá es donde asociamos tal ruta a tal componente.
const routes = [
  { path: '/', component: home },
  { path: '/ingresar', component: ingresar },
  { path: '/ingresar/dato', component: ingresarDato },
  { path: '/ver', component: mostrar },
  { path: '/:pathMatch(.*)*', component: notFound  }
];

// Instanciamos el Router con las routes.
// Crear enrutador
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  
  routes
});

// Crear la aplicación Vue
const app = Vue.createApp({});

// Montar el enrutador en la aplicación Vue
app.use(router);

app.component('compIngresar', compIngresar); // Registra el componente CompIngresar
app.component('compMostrar', compMostrar); // Registra el componente CompMostrar

// Montar la aplicación en el elemento con class="contenedor"
app.mount('.contenedor');
