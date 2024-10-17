<template>
  <div class="container">
  <div class="ver">
    <h1 v-show="local.length >0">Datos guardados</h1>


 <div class="lista" v-for="item in local" :key="item.fecha">
    <ul class="normal">
      <li><span>Nombre: </span>{{item.titulo}} </li>
      <li><span>Comentario: </span>{{item.comentario}}</li> 
      <li><span>Temática: </span> </li>
      <li class="genero" v-for="(x, index) in item.selected" :key="index"> {{ x }}</li>
      <li><span>Estreno: </span>{{item.estreno}}</li>
    </ul>
      <div class="center">
      <router-link :to="'/editar/' + item.titulo + '/' + item.comentario + '/' + item.selected + '/' + item.estreno + '/' + item.fecha "  class="editar"> Editar </router-link>
      <button class="borrar" @click="borrar(item)">Borrar</button>
      </div>
        
</div>


    <p>{{sin_datos}}</p>

  </div>
  </div>
</template>

<script>
export default {
  name: 'VerView',
  data:function(){
      return {
        local:[],
        sin_datos: ""
      }
  },


      
mounted:function(){
    console.log("se monto")
    this.ver_local(); //para que nos muestre info, o desde localStorage o mensaje para que cargue datos el usuario
  },

  
  methods:{
    ver_local:function(){
      
    if(localStorage.dato){
    this.local=JSON.parse(localStorage.getItem("dato")) 
       
      
    }
    if(this.local.length == 0){
      this.sin_datos ="Es hora de cargar datos !!"
    }
  
    },
    borrar:function(item){
              
      this.local= JSON.parse(localStorage.getItem ("dato"))

  for (var i=0; i < this.local.length; i++){
  
      if (this.local[i].fecha == item.fecha ) {
          var rta=confirm("Queres borrar " + this.local[i].titulo)
            if (rta==true){
              this.local.splice(i, 1);
            }
          
            
          }
      }
  

    localStorage.setItem("dato", JSON.stringify(this.local))

    this.ver_local(); 
    }
}
}
</script>

<style scoped>
.lista{
  border-radius: 5%;
  box-shadow:   -5px -5px 5px grey,  
  4px 5px 5px pink; 
  border-right:  solid pink 1px;
  border-bottom:  solid pink 1px;
}
.normal {
  margin:0px;
  padding-left:0px;
}
.lista .normal li{
   width:100%;color:grey;
}
 .lista .normal .genero{
  margin-left:5px;
  color:black;
  text-indent:20px;
}
.center .editar, .center .borrar{
 width:40%; 
 border:solid 2px black;
 height:50px;
}

</style>
