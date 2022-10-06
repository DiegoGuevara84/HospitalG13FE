<template>
    <h1>Crear Familiar Hospital</h1>
    <div class="CrearFamiliar">
        <div class="container_CrearFamiliar">
        <form v-on:submit.prevent="processCrearFamiliar">
            <label id="username_f">Usuario:
            </label>
            <input  type="text" v-model="user.username_f" placeholder="Username" required>  
            <br>
            <label id="correo_f">
                Correo Electronico:
            </label>
            <input  type="text"  v-model="user.correo_f"  placeholder="Correo Electronico" required>
            <br>     
            <label id="parentesco_f">
                Parentesco:
            </label>
            <input type="text" v-model="user.parentesco_f" placeholder="Parentesco" required>                 
            <br>               
            <label>
                ID del paciente:            
            <input type="number" v-model="user.id_paciente" placeholder="Ingrese ID paciente" required>         
            </label>
            <br>            
            <br>                    
            <br>
            <button>Registrar</button>    
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
                    username_f:"",
                    correo_f:"",
                    parentesco_f: "",
                    id_paciente: ""
                    
                       }
            }
        },

        methods:{
            processCrearFamiliar:function(){
                
                axios.post("https://baseciclo3.herokuapp.com/familiar/",this.user,{headers:{}})
                
                .then((result)=>{
                    alert("Registro Exitoso");

                }).catch((error)=>{
                    console.log(error)
                    alert("Error al crear Familiar");

                })
            }
        }
    }
    </script>

<style>
    .CrearFamiliar{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .container_CrearFamiliar{
        border: 3px solid #283747;
        border-radius: 10px;
        width: 25%;
        height: 85%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .CrearFamiliar h2{
        color: #283747;
    }
    
    .CrearFamiliar form{
        width: 70%;
    }
    
    .CrearFamiliar input{
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 5px0;
    border: 1px solid #283747;
    }
    
    .CrearFamiliar button{
        width: 100%;
    height: 40px;
    color: #E5E7E9;
    background: #f03615d8;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 25px;
    margin: 5px0 25px0;
    }
    
    .CrearFamiliar button:hover{
        color: #E5E7E9;
    background: #ffab42;
    border: 1px solid #283747;
    }

    .btn-reg{
        margin-top:10px;
        margin-bottom:5px;
    }
    .CrearFamiliar input{
        margin-top:10px;
        margin-bottom:10px;
    }   
    .CrearFamiliar form{
        margin-top:10px;
        margin-bottom:10px;
    }     
    </style>