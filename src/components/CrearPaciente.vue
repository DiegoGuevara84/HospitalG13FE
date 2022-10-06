<template>
    <h1>Crear Paciente Hospital</h1>
    <div class="CrearPaciente">
        <div class="container_CrearPaciente">
            <form v-on:submit.prevent="processCreatePaciente">
                <label id="p_username">Id Usuario:
                <input type="text" v-model="user.p_username" placeholder="Username" required>
                </label>
                <br>
                <br>
                <label>Id Personal Salud
                <input type="Number" v-model="user.p_personal_salud" placeholder="ID PSalud" required>
                </label>
                <br>
                <br>
                <label id="p_fecha_nacimiento">Fecha Nacimiento:
                <input type="text" v-model="user.p_fecha_nacimiento" placeholder="Año-Mes-Dia" required>
                </label>
                <br>
                <br>
                <label id="p_ciudad">Ciudad:
                <input type="text" v-model="user.p_ciudad" placeholder="Ciudad donde reside" required>
                </label>
                <br>
                <br>
                <label id="p_direccion">Dirección Paciente:
                <input type="text" v-model="user.p_direccion" placeholder="Direccion donde vive" required>
                </label>
                <br>
                
                <br>
                <button>Registrar</button>
                <br>
                <br>
            </form>
         </div>
     </div>       
</template>
<script>
    import axios from 'axios';
    export default { 
        data:function(){
            return{
                user:{ 
                    p_username:"",
                    p_personal_salud:"",
                    p_fecha_nacimiento: "",
                    p_ciudad: "",
                    p_direccion: ""
                                  }
            }
        },
    
        methods:{
            processCreatePaciente:function(){
                
                axios.post("https://baseciclo3.herokuapp.com/paciente/",this.user,{headers:{}})
                
                .then((result)=>{
                    alert("Registro Exitoso");
    
                }).catch((error)=>{
                    console.log(error)
                    alert("Error: Error al crear Paciente");
    
                })
            }
        }
    }
    </script>

<style>
    .CrearPaciente{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .container_CrearPaciente{
        border: 3px solid #283747;
        border-radius: 10px;
        width: 25%;
        height: 85%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .CrearPaciente h2{
        color: #283747;
    }
    
    .CrearPaciente form{
        width: 70%;
    }
    
    .CrearPaciente input{
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 5px0;
    border: 1px solid #283747;
    }
    
    .CrearPaciente button{
    width: 100%;
    height: 40px;
    color: #E5E7E9;
    background: #f03615d8;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 25px;
    margin: 5px0 25px0;
    }
    
    .CrearPaciente button:hover{
    color: #E5E7E9;
    background: #ffab42;
    border: 1px solid #283747;
    }

    .btn-reg{
        margin-top:10px;
        margin-bottom:5px;
    }
    .CrearPaciente input{
        margin-top:10px;
        margin-bottom:10px;
    }   
    .CrearPaciente form{
        margin-top:10px;
        margin-bottom:10px;
    }     
    </style>