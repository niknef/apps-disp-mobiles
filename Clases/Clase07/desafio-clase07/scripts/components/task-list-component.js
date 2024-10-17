const taskComponent = {
    template: `
        <div class="card">
            <div class="card-header">
                <h2>Lista de tareas</h2>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li 
                        v-for="(task, index) in tasks" 
                        :key="index" 
                        class="list-group-item d-flex justify-content-between align-items-center"
                    >
                        <div>
                            <h3 class="mb-1">Tarea: {{ task.tarea }}</h3>
                            <p class="mb-0">Descripcion: {{ task.descripcion }}</p>
                        </div>
                        <button 
                            class="btn btn-danger btn-sm" 
                            @click="eliminarTarea(task)"
                        >
                            Eliminar
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    `,
    props: ['tasks'],
    methods: {
        // Método para eliminar una tarea, Le pasamos la tarea por parametro
        eliminarTarea(task) {
            this.$emit('delete-task', task);
        }
    },
    // Emitimos el evento delete-task
    emits: ['delete-task']
};