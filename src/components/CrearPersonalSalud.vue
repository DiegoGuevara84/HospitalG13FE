<template>
    <br>
    <div>
        <center><h1>Crear personal salud</h1></center>
        <br>
    </div>
    <div class="CrearPersonalSalud">
        <div class="container_CrearPersonalSalud">
            <form v-on:submit.prevent="processCrearPersonalSalud">
                <br>
                <label  id="usuario">Usuario:
                <input  type="text" v-model="Psalud.username" placeholder="Username" required>
                </label>
                <br>
                <label id="especialidad">Especialidad:
                <input type="text" v-model="Psalud.especialidad" placeholder="Especialidad" required>
                </label>
                <br>
                <br>
                <label>Rol:
                <select  id="rol" v-model="Psalud.rol">
                    <option>Enfermero(a)</option>
                    <option>Medico(a)</option>
                    
                </select>
                </label>
                <br>
                <br>
                <button>Registrar</button> 
            </form>
            <br>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default{ 
    data:function(){
        return{
            Psalud:{
                usuario:"",
                especialidad:"",
                rol:""
            }
        }
    },

    methods:{
        processCrearPersonalSalud:function(){
            
            axios.post("https://baseciclo3.herokuapp.com/Psalud/", this.personalSalud,{headers:{}})
            
            .then((result)=>{
                alert("Registro Exitoso");

            }).catch((error)=>{
                console.log(error)
                alert("Error: Error al crear Personal Salud");

            })
        }
    }
}
</script>

<style>
.CrearPersonalSalud{
    margin: 0;
    padding: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container_CrearPersonalSalud{
    border: 3px solid #283747;
    border-radius: 10px;
    width: 25%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.CrearPersonalSalud h2{
    color: #283747;
}

.CrearPersonalSalud form{
    width: 70%;
}

.CrearPersonalSalud input{
height: 40px;
width: 100%;
box-sizing: border-box;
padding: 10px 20px;
margin: 5px0;
border: 1px solid #283747;
}

.CrearPersonalSalud button{
    width: 100%;
    height: 40px;
    color: #E5E7E9;
    background: #f03615d8;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 25px;
    margin: 5px0 25px0;
}

.CrearPersonalSalud button:hover{
    color: #E5E7E9;
    background: #ffab42;
    border: 1px solid #283747;
}
.CrearPersonalSalud input{
        margin-top:10px;
        margin-bottom:5px;
    }   
    .CrearPersonalSalud      form{
        margin-top:10px;
        margin-bottom:5px;
    }  
</style>
