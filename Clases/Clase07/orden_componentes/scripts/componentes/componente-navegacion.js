const ComponenteNavegacion = {
  data() {
    return {
      links: [
        { text: 'Inicio', href: 'index.html' },
        { text: 'Formulario', href: 'formulario.html' }
      ] // Array para almacenar los enlaces de navegación
    }
  },
  template: `
    <div>
      <nav>
        <ul>
          <li v-for="item in links" :key="item.href">
            <a :href="item.href" :class="{ activa: esLinkActivo(item.href) }">
            {{ item.text }}</a>
          </li>
        </ul>
      </nav>
    </div>
  `,
  created() {
 
    console.log("%cEl componenteNavegación se creó.", 'color: red; background:yellow');
  },
  methods: {
    esLinkActivo(href) {
      const currentPath = window.location.pathname;
      return currentPath.includes(href);
    }
  }
}