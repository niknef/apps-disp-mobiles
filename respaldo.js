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
            completado: false,
            alerta: "¡Gracias por suscribirte!",
            
            
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
                
                <div v-if="!completado" class="modal-body">
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
                    <modal-gracias v-if="completado" :usuario="arr[arr.length - 1]" :alerta="alerta"></modal-gracias>
                </div>
                </div>
            </div>
            
        `,
        emits: ["close-modal"],
    
        methods: {
          closeModal() {
            this.$emit("close-modal");
          },
          guardar(form) {
              this.enviado = true;
              this.errores = [];
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
                  this.completado = true;
    
                  var localData = localStorage.getItem("local");
                  this.arr = localData ? JSON.parse(localData) : [];
                  
                  this.arr.push({
                      nombre: this.form.nombre,
                      apellido: this.form.apellido,
                      email: this.form.email,
                      subscription: this.form.subscription,
                      preferenciasCafe: this.form.preferenciasCafe,
                      notas: this.form.notas,
                  });
                  
                  localStorage.setItem("local", JSON.stringify(this.arr));
                  
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
      props: ["usuario", "alerta"],
      template: `
          <div class="modal-body text-center content-modal-gracias">
          <div class="bienvenido mx-auto my-2"></div>
          <h2 class="fw-bold">Bienvenido/a {{toCapitalized(usuario.nombre)}}</h2>
          <h3 class="fw-bold">{{ alerta }}</h3> 
          <h4 class="fw-bold">Pack {{ toCapitalized(usuario.subscription) }}</h4> 
          <p class="fw-regular">Recibirás un correo de confirmación al mail:<span class="fw-light"> {{ usuario.email }}</span></p> 
          <p class="fw-regular">¡Gracias por formar parte de nuestra comunidad de amantes por el café, en nuestra página encontrarás una recomendación especial para ti!</p>
          
        </div>
      `,
      methods: {
        toCapitalized(text) {
          if (!text) return '';
          text = text.toLowerCase();
          return text.charAt(0).toUpperCase() + text.slice(1);
        }
      }
    });
  