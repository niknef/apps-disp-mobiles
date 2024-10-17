const formComponent = {
    template: `
        <div class="card mb-4">
            <div class="card-header">
                <h2>Agregar nueva tarea</h2>
            </div>
            <div class="card-body">
                <form @submit.prevent="enviarFormulario">
                    <div class="mb-3">
                        <label for="tarea" class="form-label">Tarea</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="tarea" 
                            v-model="tarea" 
                            placeholder="Escribe el título de la tarea" 
                            required
                        >
                    </div>
                    <div class="mb-3">
                        <label for="descripcion" class="form-label">Descripción</label>
                        <textarea 
                            class="form-control" 
                            id="descripcion" 
                            v-model="descripcion" 
                            placeholder="Escribe una descripción" 
                            required
                        ></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Agregar tarea</button>
                </form>
            </div>
        </div>
    `,
    data() {
        return {
            tarea: "",
            descripcion: ""
        };
    },
    methods: {
        enviarFormulario() {
            // Emitir el evento formulario-enviado con los datos de la tarea
            this.$emit('formulario-enviado', { tarea: this.tarea, descripcion: this.descripcion });
            // Limpiar los campos del formulario
            this.tarea = "";
            this.descripcion = "";
        }
    },
    // Emitir el evento formulario-enviado
    emits: ['formulario-enviado']
};
