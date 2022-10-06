<template>
  <div id="app" class="app">
	    <header>
	      <nav class="navbar navbar-expand-md shadow p-3 bg-light">
	        <div class="container-fluid">
	          <a class="navbar-brand me-5">
	            <img src="@/images/LogoHospital.jpg" alt="logo-hopital" width="60">
	          </a>
            <br>
            <a>
	            HOSPITAL GRUPO 13
	          </a>
	          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
	            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
	            aria-label="Toggle navigation">
	            <span class="navbar-toggler-icon"></span>
	          </button>
	          
	        </div>
	      </nav>
	    </header>
  </div>
  <nav>
    || <router-link to="/cu">Crear Usuario </router-link> ||
    <router-link to="/cps">Crear PersonalSalud </router-link> ||
    <router-link to="/cp">Crear Paciente </router-link> ||
    <router-link to="/cf">Crear Familiar </router-link> ||  
    <!-- <router-link to="/detallePaciente">Consultar Paciente </router-link> ||  -->
    
  </nav>
  <router-view/>


</template>

<style>
body{
    background-color: #036fa9eb;
    color:#c1d731;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: #58a43d36;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #1b130a;
  border: 1px solid black;
    background-color: #fff2c49c;
    /* margin: 10PX; */
    PADDING: 10PX;
}
.container_CrearUsuario,.container_CrearPersonalSalud, .container_CrearPaciente, .container_CrearFamiliar, .container_detallePaciente{
        border: 3px solid #283747;
        background-color: white;
        border-radius: 10px;
        width: 25%;
        height: 85%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 9px 7px 28px 12px rgba(0,0,0,0.42);
    }
    a{
      text-decoration: none;
    }

    button:hover{
    color: #b0d32650;
    background: #7e69afc8;
    border: 1px solid #283747;
    }
</style>