const app = Vue.createApp({
    data() {
        return {
            tasks: []  // Almacena la lista de tareas
        };
    },
    methods: {
        manejarFormularioEnviado(nuevaTarea) {
            // Agregar la nueva tarea al array de tareas
            this.tasks.push(nuevaTarea);
            this.guardarEnLocalStorage();
        },
        eliminarTarea(tarea) {
            // Eliminar la tarea de la lista
            // Filtramos las tareas para obtener todas las tareas menos la que queremos eliminar
            this.tasks = this.tasks.filter(t => t !== tarea);
            // Guardar las tareas en localStorage
            this.guardarEnLocalStorage();
        },
        guardarEnLocalStorage() {
            // Guardar las tareas en localStorage
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        },
        cargarDesdeLocalStorage() {
            // Cargar las tareas desde localStorage si existen
            const tareasGuardadas = localStorage.getItem('tasks');
            if (tareasGuardadas) {
                this.tasks = JSON.parse(tareasGuardadas);
            }
        }
    },
    mounted() {
        // Cargar tareas cuando la aplicación se monta
        this.cargarDesdeLocalStorage();
    }
});

// Registrar los componentes
app.component('form-component', formComponent);
app.component('task-list-component', taskComponent);

// Montar la app en el contenedor con la clase "app"
app.mount('.app');