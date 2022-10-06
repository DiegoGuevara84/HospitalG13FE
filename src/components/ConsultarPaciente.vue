<template>
    <br>
    <div>
        <center><h1>Consulta de pacientes</h1></center>
        <br>
    </div>
    <div class="ConsultaPaciente">
        <div class="container_ConsultaPaciente">
            <form v-on:submit.prevent="processConsultaPaciente">
                <br>
                <label id="p_id">Ingrese el ID Paciente:
                <input v-model="paciente.p_id" type="number" placeholder="ID del paciente" required>
                </label>
                <br>
                <br>
                <button>Buscar</button> 
            </form>
        <br>
        </div>
    </div>
    <br>
    <br>
    <div class="Paciente">
        <div>
        <br>
            <table>
                <tr>
                    <td>Usuario:</td>
                    <td>{{p_username}}</td>
                </tr>
                <tr>
                    <td>Medico asignado:</td>
                    <td>{{p_personal_salud}}</td>
                </tr>
                <tr>
                    <td>Fecha de nacimiento:</td>
                    <td>{{p_fecha_nacimiento}}</td>
                </tr>
                <tr>
                    <td>Ciudad:</td>
                    <td>{{p_ciudad}}</td>
                </tr>
                <tr>
                    <td>Dirección:</td>
                    <td>{{p_direccion}}</td>
                </tr>
                
            </table>
        <br>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default{
    data:function(){
        return{
            paciente:{
                p_id:""
            },
            p_username:"",
            p_personal_salud:"",
            p_fecha_nacimiento:"",
            p_ciudad:"",
            p_direccion:""
            
          
        }
    },

    methods:{
        processConsultaPaciente:function(){
            axios.get(`https://baseciclo3.herokuapp.com/paciente/${this.paciente.p_id}/`)

            .then((result)=>{
            this.p_username= result.data.p_username;
            this.p_personal_salud = result.data.p_personal_salud;
            this.p_fecha_nacimiento = result.data.p_fecha_nacimiento;
            this.p_ciudad = result.data.p_ciudad;
            this.p_direccion = result.data.p_direccion;
            })
            
            .catch((error)=>{
                console.log(error);
                alert("El Id ingreso de paciente no existe en la base")
            });                       
        }
    }
}
</script>

<style>
.ConsultaPaciente{
    margin: 0;
    padding: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container_ConsultaPaciente{
    border: 3px solid #283747;
    border-radius: 10px;
    width: 25%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.ConsultaPaciente h2{
    color: #283747;
}

.ConsultaPaciente form{
    width: 70%;
}

.ConsultaPaciente input{
height: 40px;
width: 100%;
box-sizing: border-box;
padding: 10px 20px;
margin: 5px0;
border: 1px solid #283747;
}

.ConsultaPaciente button{
    width: 100%;
    height: 40px;
    color: #E5E7E9;
    background: #36a9cb;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 25px;
    margin: 5px0 25px0;
}

.ConsultaPaciente button:hover{
    color: #E5E7E9;
    background: #ffab42;
    border: 1px solid #283747;
}
.Paciente{
    margin: 0;
    padding: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.Paciente table {
    table-layout: auto;
    width: 150%;
    border-collapse: separate;
    border-radius: 10px;
    text-align: left;
    border:1px solid black;
    background-color: white;
}
.Paciente td{
    padding:5px;
    border-left: solid 1px black;
    border-bottom:solid 1px black;
}
</style>
