<template>
  
<div class="container">
<div class="form">
    <form v-on:submit.prevent>
    <label>Titulo</label>
      <input type="text" v-model.trim="form_data.titulo" placeholder="Titulo" required/>
    <label>Comentario</label>
        <textarea v-model="form_data.comentario" required></textarea>
    <label>Seleccionar</label>
    <select v-model="form_data.selected" multiple required id="selec">
      <option>Terror</option>
        <option>Animacion</option>
        <option>Ciencia Ficcion</option>
        <option>Drama</option>
        <option>Otro</option>
    </select>
    
    <label> Estreno</label>
    <input v-model="form_data.estreno" type="number" required>

    <div class="center">
    <button type="button" @click="guardar(form_data)" class="guardar" value="Guardar">Guardar </button>
    </div>

    </form>

  </div>
  </div>
  
</template>

<script>
export default {
  name: 'IngresarView',
data:function(){
    return {
      form_data:{
        titulo:"",
        comentario:"",
        selected:[],
        estreno:"",
        fecha:""
        },
    arr:[]
    }

  },      
 methods:{
  guardar:function(form_data){
  
/*nuevoObj={comentario: this.form_data.comentario,
      titulo: this.form_data.titulo,
      selected: this.form_data.selected,
      estreno: this.form_data.estreno,
      fecha: new Date().getTime()
}
*/
form_data = Object.assign({}, form_data, { fecha: new Date().getTime() })
console.log(form_data)

    if(!localStorage.dato){
      this.arr=[]
    }else{
     this.arr=JSON.parse(localStorage.getItem("dato"))
      }

  //this.arr.push(nuevoObj)
  this.arr.push(form_data)
  localStorage.setItem("dato",JSON.stringify(this.arr))

this.$router.push('/ver');

}
},

}
</script>

<style>

 li{list-style: none;}
.form{width:350px;background:pink;font-family:verdana;font-size:20px;text-shadow: 2px 3px 5px grey;color:white;}
.form h1{text-align: center;padding-top:10px;}
form{width:350px;}
label, input[type="text"], input[type="number"], textarea{width:300px;display:inline-block; padding:5px;margin:5px 20px;}
input[type="text"]{color:grey}
button{width:220px;display: inline-block;padding:5px;margin:30px 20px}
select{width: 200px; margin:10px 20px;appearance: none;
-webkit-appearance: none;
-moz-appearance: none;}


.seleccion{font-size:40px;}
.container > div{ margin: 0 auto; margin-top:60px;}
.carga_destacados{ width: 650px; text-align: center;}
.carga_destacados form{margin:0 auto;}
.carga_destacados ul{margin-left:0px;padding-left: 0; text-align: left;}
.lidestacados{margin-bottom:0px;background:pink; text-align: left;}
.container > h1 {text-align: center; margin-top:60px;;}
.container .carga_destacados input{width:340px; height:25px;}

.activeClass{color:white;font-size:20px;text-decoration:none;}

 
a, .borrar, .guardar{display:inline-block; width: 100px;padding:10px; color:crimson;text-decoration:none;border:solid 1px grey;cursor:pointer;}
.borrar, .editar, .guardar{background:white;font-family: verdana;font-size:18px;text-align: center; width: 100px;}
.editar, .guardar{color:green;}
.center{text-align: center}
.ver{width: 350px; font-family: verdana;font-size:17px;margin:5px;}
.ver h1, .carga_destacados h1{color:crimson; font-size:22px; text-align: center; margin:20px;font-family:verdana}
span{color:crimson; font-weight:bold;}
.lista{border:solid 1px green; margin:5px;padding:10px;text-align: left;}
.normal{color:grey;font-style:italic;font-weight:normal;}

.menu{text-align: center;width:1290px;}
.menu li{display:inline-block; margin:30px;font-weight: bold; font-size:23px;}

.router-link-active-exact{
  color:white;
  background:pink;
}

.rojo{background:red;}
.destacado{font-family:Consolas;font-size:18px;display:inline-block;width:400px;color:white;padding:10px;}


</style>
