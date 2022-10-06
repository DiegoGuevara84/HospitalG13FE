<template>
    <h1>Crear Usuario</h1>
    <div class="CrearUsuario">
        <div class="container_CrearUsuario">
        <form v-on:submit.prevent="processCreateUser">
            <label>
                Usuario:
            </label>
            <input type="text" v-model="user.username" placeholder="Username" required>
            <br>
            <label>
                Password:
            </label>
            <input v-model="user.password" type="Password" placeholder="Password" required>  
            <br>     
            <label>
                Nombres:
            </label>
            <input v-model="user.nombre" type="text" placeholder="Nombre" required>                 
            <br>               
            <label>
                Apellidos:
            </label>
            <input type="text" v-model="user.apellidos" placeholder="Apellidos" required>            
            <br>   
            <label>
                Telefono:
            </label>
            <input type="text" v-model="user.telefono" placeholder="Telefono" required>            
            <br>   
            
            <label>
                Perfil:
            </label>
            <br>
            <select v-model="user.perfil" id="u_perfil" required>
                <option>Personal Salud</option>
                <option>Familiar</option>
                <option>Paciente</option>
            </select>     
            <br>            
            <label>
                Genero:
            </label>
            <br>
            <select v-model="user.genero" id="genero">
                <option>Masculino</option>
                <option>Femenino</option>
            </select>     
            <br>
            <button class="btn-reg">Registrar</button>    
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
                username:"",
                password:"",
                perfil: "",
                nombres: "",
                apellidos: "",
                telefono: "",
                genero:""

            }
        }
    },

    methods:{
        processCreateUser:function(){
            
            axios.post("https://baseciclo3.herokuapp.com/user/", this.user,{headers:{}})
            
            .then((result)=>{
                alert("Registro Exitoso");

            }).catch((error)=>{
                console.log(error)
                alert("Error: Error al crear el usuario");

            })
        }
    }
}
</script>

<style>
    .CrearUsuario{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .container_CrearUsuario{
        border: 3px solid #c4db14;
        border-radius: 10px;
        width: 25%;
        height: 85%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .CrearUsuario h2{
        color: #283747;
    }
    
    .CrearUsuario form{
        width: 70%;
    }
    
    .CrearUsuario input{
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 5px0;
    border: 1px solid #283747;
    }
    
    .CrearUsuario button{
    width: 100%;
    height: 40px;
    color: #E5E7E9;
    background: #f03615d8;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 25px;
    margin: 5px0 25px0;
    }
    
    .CrearUsuario button:hover{
    color: #E5E7E9;
    background: #ffab42;
    border: 1px solid #283747;
    }

    .btn-reg{
        margin-top:10px;
        margin-bottom:5px;
    }
    .CrearUsuario input{
        margin-top:10px;
        margin-bottom:10px;
    }   
    .CrearUsuario form{
        margin-top:10px;
        margin-bottom:10px;
    }     
    </style>