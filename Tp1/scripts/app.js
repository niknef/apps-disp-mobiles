const app = Vue.createApp({
  data: function () {
    return {
      modalvisible: false,
      completed: false,
      preferenciaseleccionada: false,
      alerta: "¡Gracias por suscribirte!",
      
    };
  },
  methods: {
    toggleModal() {
      this.modalvisible = !this.modalvisible;
    },
    closeModal() {
      this.modalvisible = false;
      this.completed = false;
    },
    abrirModalGracias() {
      this.getSuscritos(); // Obtener datos del último suscriptor antes de abrir el modal
      this.completed = true;
      this.preferenciaseleccionada = true;
    },
    getSuscritos() {
      const suscripciones = localStorage.getItem("suscripciones");
      if (suscripciones) {
          const arr = JSON.parse(suscripciones);
          this.usuario = arr[arr.length - 1];
          
    }
  },
  },
});

//Componente navbar
app.component("navbar-component", {
  template: `
    <nav class="navbar navbar-expand-lg bg-light-coffee rounded m-3">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
            <a class="navbar-brand col-lg-3 me-0" href="#">
                <img src="./img/logo-puroespresso.png" alt="PureEspresso" width="200">
                <h1 class="visually-hidden" v-once>PureEspresso</h1>
            </a>
            
            <ul class="navbar-nav col-lg-6 justify-content-lg-center">
                <li class="nav-item">
                    <a class="nav-link fw-medium active text-brown" aria-current="page" href="#">Home</a>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link fw-medium text-brown" href="#opciones">Opciones</a>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link fw-medium text-brown" href="#nosotros">Nosotros</a>
                </li>
            </ul>
            
            <div class="d-lg-flex col-lg-3 justify-content-lg-end">
                <button class="btn btn-brown fw-medium" @click="toggleModal">Suscríbete</button>
            </div>
        </div>
        </div>
    </nav>
    `,
  emits: ["toggle-modal"],
  methods: {
    toggleModal() {
      this.$emit("toggle-modal"); // Emite un evento para que el componente padre maneje la apertura del modal (PREGUNTAR SI SE PUEDE USAR)
    },
  },
});

//Componente navbar
app.component("banner-component", {
  template: `
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center rounded bg-body-tertiary" id="fondo-cafe">
        <div class="col-md-6 p-lg-5 mx-auto my-5 w-75">
            <h2 class="display-4 fw-bold">Para los Amantes del Café que Buscan lo Mejor en Cada Taza.</h2>
            <h3 class="fw-normal text-muted mb-3">Descubre el Placer de Degustar Cafés Únicos y Encuentra tu Favorito.</h3>
            <div class="d-flex gap-3 justify-content-center lead">
                <button class="btn btn-brown fw-medium" @click="toggleModal">Suscríbete ahora!</button>
            </div>
        </div>
    </div>
    <divider-component></divider-component>
    `,
  emits: ["toggle-modal"],
  methods: {
    toggleModal() {
      this.$emit("toggle-modal"); // Emite un evento para que el componente padre maneje la apertura del modal (PREGUNTAR SI SE PUEDE USAR)
    },
  },
});

//Componente packs
app.component("packs-component", {
  data: function () {
    return {
      packs: [
        {
          name: "Starter Pack",
          price: "$3usd",
          items: [
            "3 variantes de café",
            "Guía de cata básica",
            "Tutoriales online",
            "Newsletter Comunidad",
            "Receta con café",
          ],
          imageUrl: "./img/starterpack.png",
          imageAlt: "Ilustración del pack starter",
        },
        {
          name: "Premium Pack",
          price: "$5usd",
          items: [
            "5 variantes de café",
            "Guía de cata avanzada",
            "Tutoriales online + Newsletter",
            "Descuentos exclusivos",
            "Regalo adicional",
          ],
          imageUrl: "./img/premiumpack.png",
          imageAlt: "Ilustración del pack premium",
        },
      ],
    };
  },

  template: `
    <div class="container my-5">
        <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h2 class="display-4 fw-bold text-light-coffee" id="opciones">Nuestros Packs</h2>
            <p class="fs-5 text-light fw-light">Descubre una experiencia única con nuestra selección de packs de café. Cada mes, te traemos una cuidada combinación de los mejores granos, accesorios esenciales y consejos para que disfrutes de tu café como nunca antes.</p>
        </div>
        
        <div class="row justify-content-center text-center">
            <div class="col-md-4" v-for="(pack, index) in packs" :key="index">
                <div class="card mb-4 rounded-3 shadow-sm">
                    <div class="card-header py-3">
                        <h3 class="my-0 fw-bold">{{ pack.name }}</h3>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title pricing-card-title fw-bold">{{ pack.price }}<small class="text-body-secondary fw-light">/mo</small></h4>
                        
                        <img :src="pack.imageUrl" :alt="pack.imageAlt" class="img-fluid drop-shadow" width="300px">
                        
                        <ul class="list-unstyled mt-3 mb-4">
                            <li v-for="item in pack.items" :key="item" class="fw-regular text-start"><i class="bi bi-arrow-right-short ms-3 me-2"></i>{{ item }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <divider-component></divider-component>
    `,
});

//creamos un componente para nosotros
app.component("nosotros-component", {
  template: `
      <div class="my-1" id="nosotros">
        <div class="p-4 text-center bg-body-dark text-light">
          <div class="container py-1">
            <h2 class="fw-bold text-brown-light">¿Porqué suscribirse?</h2>
            <p class="col-lg-10 mx-auto lead mt-5 text-start">
              <span class="fw-bold text-brown-light">Descubre el Café de tus Sueños:</span> 
              Con nuestra suscripción, cada mes recibirás una selección curada de cafés de especialidad de las mejores regiones del mundo. Perfecto para explorar nuevos sabores y encontrar tu mezcla ideal.
            </p>
            <p class="col-lg-10 mx-auto lead mt-2 text-start">
              <span class="fw-bold text-brown-light">Calidad y Variedad:</span> 
              Disfruta de granos frescos y cuidadosamente seleccionados, que ofrecen una experiencia de cata única en cada entrega. Desde orígenes únicos hasta blends exclusivos, siempre hay algo nuevo para saborear.
            </p>
            <p class="col-lg-10 mx-auto lead mt-2 text-start">
              <span class="fw-bold text-brown-light">Comodidad a tu Puerta:</span> 
              Olvídate de buscar el café perfecto. Nosotros lo hacemos por ti y lo entregamos directamente en la comodidad de tu hogar.
            </p>
            <p class="col-lg-10 mx-auto lead mt-2 text-start">
              <span class="fw-bold text-brown-light">Acceso Exclusivo:</span> 
              Como suscriptor, tendrás acceso a cafés raros y ediciones limitadas que no encontrarás en ningún otro lugar.
            </p>
            <p class="col-lg-10 mx-auto lead mt-2 text-start">
              <span class="fw-bold text-brown-light">Aprende y Disfruta:</span> 
              Nuestra guía de cata te acompaña en cada paso, ayudándote a descubrir los matices y perfiles de sabor de cada variedad, convirtiendo cada taza en una experiencia educativa y deliciosa.
            </p>
          </div>
        </div>
      </div>
    `,
});

//Creamos componente de productos
app.component("products-component", {
  data: function () {
    return {
      products: [
        {
          name: "Cafetera Italiana",
          description:
            "diseñada para capturar la esencia del espresso auténtico. Fácil de usar y elegante en su diseño, perfecta para los amantes del café, esta clásica cafetera de aluminio ofrece una experiencia de café robusta y rica, que despierta tus sentidos con cada sorbo.",
          imageUrl: "./img/cafetera-italiana.jpg",
          imageAlt: "Cafetera Italiana",
        },
        {
          name: "Prensa Francesa",
          description:
            "prepara un café suave y rico en matices. Diseñada para resaltar los sabores naturales de los granos, esta elegante prensa no solo es perfecta para hacer café, sino que también se convierte en tu herramienta esencial para espumar la leche.",
          imageUrl: "./img/prensa-fransesa.jpg",
          imageAlt: "Prensa Francesa de vidrio",
        },
        {
          name: "Molinillo de Café",
          description:
            "Descubre la clave para un café excepcional con nuestro molinillo de café, diseñado para liberar todo el potencial de los granos frescos. Ajustable y preciso, permite moler tus granos a la perfección, desde un molido fino hasta uno grueso.",
          imageUrl: "./img/molinillo-profesional.jpg",
          imageAlt: "Molinillo profesional para granos de café",
        },
      ],
    };
  },
  template: `
        <div class="album py-1 bg-dark text-center">
            <div class="container">
            <h2  class="fw-bold text-brown-light mb-4">Proximos Productos</h2>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-5">
                <div class="col" v-for="(product, index) in products" :key="index">
                <div class="card shadow-sm">
                    <img :src="product.imageUrl" :alt="product.imageAlt" class="rounded-top">
                    <div class="card-body bg-light-coffee">
                        <p class="card-text fw-regular text-dark">
                            <span class="text-brown">{{ product.name }}</span>, {{ product.description }}
                        </p>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
        <divider-component></divider-component>
    `,
});

//Creamos un componente de cafes
app.component("coffees-component", {
  data: function () {
    return {
      coffees: [
        {
          name: "Café Colombiano",
          nacionalidad: "Colombia",
          img: "./img/cafe-colombiano.png",
          intensidad: "Medio",
          descripcion:
            "Un café suave con una acidez balanceada y notas de frutas tropicales. Es conocido por su consistencia y sabor excepcional.",
        },
        {
          name: "Café Etíope Yirgacheffe",
          nacionalidad: "Etiopía",
          img: "./img/cafe-ethiopia.png",
          intensidad: "Suave",
          descripcion:
            "Este café ofrece un perfil de sabor floral con toques de cítricos y té. Es apreciado por su complejidad y elegancia.",
        },
        {
          name: "Café Brasileño Santos",
          nacionalidad: "Brasil",
          img: "./img/cafe-brasilero.png",
          intensidad: "Medio",
          descripcion:
            "Un café con cuerpo y notas de chocolate y nueces. Es uno de los cafés más populares debido a su suavidad y dulzura natural.",
        },
        {
          name: "Café Keniano AA",
          nacionalidad: "Kenia",
          img: "./img/cafe-kenia.png",
          intensidad: "Intenso",
          descripcion:
            "Con una acidez vibrante y sabores de frutas rojas y vino, este café es potente y complejo, ideal para quienes buscan una experiencia intensa.",
        },
        {
          name: "Café de Sumatra Mandheling",
          nacionalidad: "Indonesia",
          img: "./img/cafe-sumatra.png",
          intensidad: "Intenso",
          descripcion:
            "Con cuerpo pesado y bajo nivel de acidez, este café tiene sabores terrosos y de especias, perfecto para quienes prefieren un perfil más robusto.",
        },
        {
          name: "Café de Costa Rica Tarrazú",
          nacionalidad: "Costa Rica",
          img: "./img/cafe-costarica.png",
          intensidad: "Suave",
          descripcion:
            "Un café limpio y brillante con acidez viva y notas de cítricos y cacao. Es muy equilibrado y agradable para cualquier momento del día.",
        },
      ],
      selectedIntensity: localStorage.getItem("preferenciasCafe") || null,
      filteredCoffees: [],
    };
  },
  template: `
    <div v-if="coffees.length > 0" class="container">
        <div class="text-center">
            <h2 class="display-4 fw-bold text-brown-light my-3">Nuestras Recomendaciones</h2>
        </div>
        <div class="row row-cols-1 row-cols-md-2 g-4" id="opciones">
            <div v-for="(coffee, index) in coffees" :key="index" class="col">
                <div class="card h-100 text-center rounded overflow-hidden">
                    <div class="card-body">
                        <h2 class="card-title display-5 fs-2">{{ filteredCoffees.name }}</h2>
                        <p class="lead fw-bold">{{ filteredCoffees.nacionalidad }}</p>
                        <p class="lead">{{ filteredCoffees.descripcion }}</p>
                    </div>
                    <div class="bg-body shadow-sm mx-auto">
                    <img :src="filteredCoffees.img" :alt="filteredCoffees.name" class="img-fluid drop-shadow" width="300px">
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    methods: {
      filteredCoffees() {
        this.filteredCoffees = this.coffees.filter(coffee => coffee.intensidad.toLowerCase() === this.selectedIntensity.toLowerCase());
        return this.filteredCoffees;
      },
    },
});

//Componente del divider
app.component("divider-component", {
  template: `
        <div class="b-example-divider"></div>
    `,
});

//Componente del footer
app.component("footer-component", {
  template: `
    <footer class="container row justify-content-between align-items-center py-3 my-4 mx-auto border-top">
        <p class="col-md-4 mb-0 text-light">&copy; 2024 Davinci - Nicolás Firpo</p>
    
        <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item"><a href="#" class="nav-link px-2 text-light">Home</a></li>
            <li class="nav-item"><a href="#opciones" class="nav-link px-2 text-light">Opciones</a></li>
            <li class="nav-item"><a href="#nosotros" class="nav-link px-2 text-light">Nosotros</a></li>
        </ul>
    </footer>
`,
});

//Componente modal form
app.component("modal-form", {
data() {
    return {
        
    form: {
        nombre: "",
        apellido: "",
        email: "",
        subscription: "",
        preferenciasCafe: "",
        notas: "",
    },
        errores: [],
        arr: [],
        enviado: false,
        
    };
},
props: ["modalvisible" ],
template: `
    <div class="modal-backdrop" v-if="modalvisible">
        <div class="modal-dialog">
            <div class="modal-content bg-body-tertiary rounded p-4">
                <div class="modal-header d-flex justify-content-between mb-3">
                    <h1 class="modal-title fs-5 fw-bold">Suscríbete</h1>
                    <button type="button" class="btn-close" @click="closeModal"><i class="bi bi-x-square"></i></button>
                </div>
            
            <div class="modal-body">
                <form @submit.prevent="guardar" novalidate>
                    <div class="row mb-3">
                    <div class="col">
                        <label for="nombre" class="form-label fw-bold">Nombre</label>
                        <input type="text" class="form-control" id="nombre" v-model="form.nombre" placeholder="Nombre" />
                    </div>
                    <div class="col">
                        <label for="apellido" class="form-label fw-bold">Apellido</label>
                        <input type="text" class="form-control" id="apellido" v-model="form.apellido" placeholder="Apellido" />
                    </div>
                    </div>
                    <div class="mb-3">
                    <label for="email" class="form-label fw-bold">Email</label>
                    <input type="email" class="form-control" id="email" v-model="form.email" />
                    <div class="form-text">Nunca compartiremos tu email con nadie más.</div>
                    </div>
                    <div class="mb-3">
                    <label class="form-label fw-bold">Opciones de Suscripción</label>
                    <div class="form-check">
                        <input type="radio" class="form-check-input" id="starterPack" value="starter" v-model="form.subscription" />
                        <label class="form-check-label fw-bold" for="starterPack">Starter Pack</label>
                    </div>
                    <div class="form-check">
                        <input type="radio" class="form-check-input" id="premiumPack" value="premium" v-model="form.subscription" />
                        <label class="form-check-label fw-bold" for="premiumPack">Premium Pack</label>
                    </div>
                    </div>
                    <div class="mb-3">
                    <label for="preferenciasCafe" class="form-label fw-bold">Preferencias de Café</label>
                    <select class="form-select" id="preferenciasCafe" v-model="form.preferenciasCafe">
                        <option disabled selected>Selecciona una opción</option>
                        <option value="suave">Suave</option>
                        <option value="medio">Medio</option>
                        <option value="intenso">Intenso</option>
                    </select>
                    </div>
                    <div class="mb-3">
                    <label for="notas" class="form-label fw-bold">Notas Adicionales</label>
                    <textarea class="form-control" id="notas" v-model="form.notas" rows="3"></textarea>
                    </div>
                    <div class="text-center">
                    <button type="submit" class="btn btn-dark mx-auto">Suscribirse</button>
                    </div>
                </form>
                <div v-if="enviado && errores.length > 0" class="text-danger">
                    <ul>
                    <li v-for="error in errores">{{ error }}</li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        
    `,
    emits: ["close-modal", "toggle-modal", "abrir-modal-gracias"],

    methods: {
      closeModal() {
          this.$emit("close-modal");
      },
      guardar() {
          this.errores = [];
          this.enviado = true;
  
          // Validaciones
          if (!this.form.nombre) {
              this.errores.push("El nombre es obligatorio.");
          } 
          if (this.form.nombre && this.form.nombre.length < 3) {
              this.errores.push("El nombre debe tener al menos 3 caracteres.");
          }
          if (!this.form.apellido) {
              this.errores.push("El apellido es obligatorio.");
          }
          if (!this.form.email) {
              this.errores.push("El email es obligatorio.");
          }
          if (!this.form.subscription) {
              this.errores.push("Debes elegir una opción de suscripción.");
          }
          if (!this.form.preferenciasCafe) {
              this.errores.push("Selecciona tus preferencias de café.");
          }
  
          // Si no hay errores, procedemos a guardar los datos
          if (this.errores.length === 0) {
              this.$emit("toggle-modal");
              this.$emit("abrir-modal-gracias");
              
              localStorage.setItem('preferenciasCafe', this.form.preferenciasCafe);
              // Agregar el formulario al array
              this.arr.push({ ...this.form });
  
              // Guardar los datos en localStorage
              localStorage.setItem("suscripciones", JSON.stringify(this.arr));
  
              console.log("Se añadió un nuevo usuario: " + JSON.stringify(this.arr));
  
              // Limpio el formulario
              this.form = {
                  nombre: "",
                  apellido: "",
                  email: "",
                  subscription: "",
                  preferenciasCafe: "",
                  notas: "",
              };
          }
      }
  },
});

app.component('modal-gracias', {
  data: function() {
      return {
          usr: {} // Aquí se guardarán los datos del usuario 
      }
  },
  props: ['completed', 'alerta', 'usuario'],
  template: `
      <div :class="[completed ? 'visible' : 'visually-hidden']" class="modal-backdrop">
          <div class="modal-dialog">
              <div class="modal-content bg-body-tertiary rounded p-4">
                  <div class="modal-header d-flex justify-content-between mb-3">
                      <h2 class="modal-title fs-5 fw-bold me-4" id="exampleModalLabel">Bienvenido/a {{ toCapitalized(usuario.nombre) }} {{ toCapitalized(usuario.apellido) }}</h2>
                      <button type="button" class="btn-close" @click="closeModal" aria-label="Close"><i class="bi bi-x-square"></i></button>
                  </div>
                  <div class="modal-body text-center content-modal-gracias">
                      <div class="bienvenido mx-auto my-2"></div>
                      <h3 class="fw-bold">{{ alerta }}</h3> 
                      <h4 class="fw-bold">Pack {{ toCapitalized(usuario.subscription) }}</h4> 
                      <p class="fw-regular">Recibirás un correo de confirmación al mail:<span class="fw-light"> {{ toCapitalized(usuario.email) }}</span></p> 
                      <p class="fw-regular">¡Gracias por formar parte de nuestra comunidad de amantes por el café, en nuestra página encontrarás una recomendación especial para ti!</p>
                  </div> 
              </div>
          </div>
      </div>
  `,
  emits: ["close-modal"],
  methods: {
      closeModal() {
          this.$emit('close-modal');
      },
      toCapitalized(text) {
        if (!text) return ''; // para evitar error si no se pasa un texto
        text = text.toLowerCase(); // primero convertimos el string a minusculas
        return text.charAt(0).toUpperCase() + text.slice(1); // Convertimos la primera letra a mayúscula y concatenamos el resto del string
    }
  }
});
// Montamos la app
app.mount(".app");
