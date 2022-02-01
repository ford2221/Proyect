<template>
  <nav class="bg-black bg-opacity-78 p-6 lg:flex sm:flex-none justify-between">

    <div class=" flex justify-between sm:flex">

      <!-- left side -->
      <div class="ml-4">
        <router-link to="/" class="text-white text-3xl">The Blog</router-link>
      </div>

      <button 
        class="transition-all duration-500 cursor-pointer text-xl text-white leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        type="button"
        v-on:click="setNavbarOpen"
        
      >
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <!-- right side -->

    <div  class=" mr-6  sm:pt-10 lg:pt-0 flex flex-col sm:block " 
      :class="[navbarOpen ? 'block transition duration-300 ease-in-out' : 'hidden']"
    >
      <router-link to="/" class="lg:text-xl hover:bg-gray-700 rounded-full p-2 pl-20 lg:pl-6 text-gray-100">Inicio</router-link>
      <router-link to="/proyectos" class="lg:text-xl hover:bg-gray-700 rounded-full p-2 pl-20 lg:pl-6 text-gray-100">Proyectos</router-link>
      <a href="#teams" class="lg:text-xl hover:bg-gray-700 rounded-full p-2 pl-20 lg:pl-6 text-gray-100">Equipo</a>
      <router-link to="/blog" class="lg:text-xl hover:bg-gray-700 rounded-full p-2 pl-20 lg:pl-6 text-gray-100">Blog</router-link>
      <router-link to="/contact" class="lg:text-xl hover:bg-gray-700 rounded-full p-2 pl-20 lg:pl-6 text-gray-100">Contactanos</router-link>
    </div>

  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      navbarOpen: false,
    };
  },
  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
  }
}  
</script>