<template>
   <div>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
       <router-link class="navbar-brand" to="/" >Stock Trader</router-link>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="navbar-collapse collapse">
         <ul class="navbar-nav mr-auto">
           <router-link to="/" exact activeClass="active" class="nav-item" tag="li"><a href="" class="nav-link">Home</a></router-link>
           <router-link to="/portfolio" class="nav-item" activeClass="active" tag="li"><a href="" class="nav-link">Portfolio</a></router-link>
           <router-link to="/stocks" class="nav-item" activeClass="active" tag="li"><a href="" class="nav-link">Stocks</a></router-link>

         </ul>
         <ul class="navbar-nav">
           <li class="nav-item"><a href="#" class="nav-link">End Day</a></li>
           <li class="nav-item dropdown">
             <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               Save & Load
             </a>
             <div class="dropdown-menu" aria-labelledby="navbarDropdown">
               <a class="dropdown-item" href="#">Save Data</a>
               <div class="dropdown-divider"></div>
               <a class="dropdown-item" href="#">Load Data</a>
             </div>
           </li>
         </ul>
       </div>
     </nav>
   </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
