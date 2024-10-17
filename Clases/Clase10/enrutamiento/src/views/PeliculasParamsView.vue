<template>
  <div class="pelis">
    <p>Los parámetros :<span>{{ i }}</span>-- <span>{{ $route.params.estreno }}</span></p>
    <div v-if="i == '1'" class="left">
      <h2>The Avengers</h2>
      <img src="../assets/av.png" alt="The Avengers" />

      <div class="texto">
        <p>
          Cuando un enemigo inesperado amenaza la seguridad del planeta y de sus habitantes, Nick
          Fury (Samuel L. Jackson), director de SHIELD, monta un dispositivo con todos los hombres
          capaces de preservar a la humanidad del caos. El enemigo es tan poderoso, que necesita que
          todos los superhéroes luchen juntos y formen un equipo compacto. Ellos serán: el Capitán
          América (Chris Evans), Thor (Chris Hemsworth), Iron Man (Robert Downey Jr.), Hulk (Mark
          Ruffalo), Ojo de Halcón (Jeremy Renner) y la Viuda Negra (Scarlett Johansson).
        </p>

        <p>
          Basado en los cómics de Marvel, el film está dirigido por Joss Whedon (Buffy Cazavampiros,
          Angel), que ya practicó el género en su primera película, Serenity. Completan el reparto
          Gwyneth Paltrow (que repite su papel en Iron Man), Paul Bettany (que pone la voz a
          Jarvis), Cobie Smulders (Cómo conocí a vuestra madre), como Maria Hill, Stellan Skarsgard
          (Rompiendo las olas), como el profesor Erik Selving y Tom Hiddleston en el papel que
          interpretó en Thor.
        </p>

        <p>Fecha de Estreno: <span>{{ e }}</span></p>
      </div>
    </div>

    <div v-else-if="i == '2'" class="left">
      <h2>Los Juegos del Hambre</h2>

      <img src="../assets/juegos.png" alt="Los Juegos del Hambre" />
      <div class="texto">
        <p>
          Lo que en el pasado fueron los Estados Unidos, ahora es una nación llamada Panem; un
          imponente Capitolio ejerce un control riguroso sobre los 12 distritos que lo rodean y que
          están aislados entre sí.
        </p>
        <p>
          Cada distrito se ve obligado a enviar anualmente un chico y una chica entre los doce y los
          dieciocho años para que participen en los Hunger Games, unos juegos que son transmitidos
          en directo por la televisión.
        </p>
        <p>
          Se trata de una lucha a muerte, en la que sólo puede haber un superviviente. Katniss
          Everdeen, una joven de dieciséis años, decide sustituir a su hermana en los juegos; pero
          para ella, que ya ha visto la muerte de cerca, la lucha por la supervivencia es su segunda
          naturaleza..
        </p>

        <p>Fecha de Estreno: {{ e }}</p>
      </div>
    </div>

    <div v-else class="left">
      <h2>Avatar</h2>

      <img src="../assets/avatar.png" alt="Avatar" />
      <div class="texto">
        <p>
          Sinopsis: Año 2154. Jake Sully (Sam Worthington), un ex-marine condenado a vivir en una
          silla de ruedas, sigue siendo, a pesar de ello, un auténtico guerrero. Precisamente por
          ello ha sido designado para ir a Pandora, donde algunas empresas están extrayendo un
          mineral extraño que podría resolver la crisis energética de la Tierra.
        </p>
        <p>
          Para contrarrestar la toxicidad de la atmósfera de Pandora, se ha creado el programa
          Avatar, gracias al cual los seres humanos mantienen sus conciencias unidas a un avatar: un
          cuerpo biológico controlado de forma remota que puede sobrevivir en el aire letal.
        </p>
        <p>
          Esos cuerpos han sido creados con ADN humano, mezclado con ADN de los nativos de Pandora,
          los Na'vi. Convertido en avatar, Jake puede caminar otra vez. Su misión consiste en
          infiltrarse entre los Na'vi, que se han convertido en el mayor obstáculo para la
          extracción del mineral. Pero cuando Neytiri, una bella Na'vi (Zoe Saldana), salva la vida
          de Jake, todo cambia: Jake, tras superar ciertas pruebas, es admitido en su clan. Mientras
          tanto, los hombres esperan los resultados de la misión de Jake
        </p>

        <p>Fecha de Estreno: {{ e }}</p>
      </div>
    </div>

    <button @click="$router.go(-1)">Volver</button>
  </div>
</template>

<script>
export default {
  name: 'PeliculasParamsView',
  data: function () {
    return {
      i: '',
      e: ''
    }
  },
  mounted: function () {
    this.recuperarPeli()
  },

  methods: {
    recuperarPeli: function () {
      this.i = this.$route.params.id
      this.e = this.$route.params.estreno

      console.log(this.i + ' ' + this.e)

      console.log(this.$route.params.id)
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
.pelis {
  color: grey;
}
.left img {
  float: left;
  shape-outside: circle(50%);
  border-radius: 50%;
  margin: 5%;
}
.texto {
  text-align: left;
  padding-right: 5%;
  padding-top: 5%;
}

.left {
  overflow: auto;
}
p span{font-weight:bold}
</style>
