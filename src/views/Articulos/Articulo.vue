<template>
  <div>
    <Nav></Nav>
    <main class="">
      <div class="flex flex-wrap  items-center justify-center pt-10 space-x-20">
        <div>
          <p class="text-3xl font-bold underline ">El titúlo de articulo</p>
        </div>
        <div class="flex space-x-4 lg:pt-0 pt-4 lg:pr-0 pr-4">
          <button
            class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
            type="button">
            
            <i class='bx bxl-twitter bx-tada-hover text-2xl' ></i>
          </button>
          <button
            class="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
            type="button"
          >
            <i class='bx bxl-facebook bx-tada-hover text-2xl' ></i>
          </button>
          <button
            class="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
            type="button"
          >
            <i class='bx bxl-instagram bx-tada-hover text-2xl' ></i>
          </button>

          <button
            class="bg-green-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
            type="button"
          >
            <i class='bx bxl-whatsapp bx-tada-hover text-2xl' ></i>
          </button>
        </div>
      </div>
      <section class="lg:flex ">
        <div class="lg:ml-20 m-3">
          <img class="lg:h-80 lg:w-8/12 sm:h-40 sm:w-40 rounded shadow pt-10" src="https://www.mundoparcelas.cl/img/module/uploaded/145bd226-0721-44cf-9b7b-9f8e256f440c-porton-santacruz.jpg">
         
          <article style="font-familly: Sans-Serif;" class="text-justify pt-10 justify-center  text-lg pb-14  lg:w-8/12 sm:w-80">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores 
          molestias doloremque nostrum veritatis vitae esse placeat voluptas
          corporis illo officiis et, odio, eius atque itaque facilis iusto 
          reprehenderit porro quas?  
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores 
          molestias doloremque nostrum veritatis vitae esse placeat voluptas
          corporis illo officiis et, odio, eius atque itaque facilis iusto 
          reprehenderit porro quas?  <br /> <br />

          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores 
          molestias doloremque nostrum veritatis vitae esse placeat voluptas
          corporis illo officiis et, odio, eius atque itaque facilis iusto 
          reprehenderit porro quas?  
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores 
          molestias doloremque nostrum veritatis vitae esse placeat voluptas
          corporis illo officiis et, odio, eius atque itaque facilis iusto 
          reprehenderit porro quas?<br /> <br />

          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores 
          molestias doloremque nostrum veritatis vitae esse placeat voluptas
          corporis illo officiis et, odio, eius atque itaque facilis iusto 
          reprehenderit porro quas?  
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores 
          molestias doloremque nostrum veritatis vitae esse placeat voluptas
          corporis illo officiis et, odio, eius atque itaque facilis iusto 
          reprehenderit porro quas?


          </article>
        </div>

        <!-- Otros articulos -->
        <div class="pt-10 flex m-4 flex-col lg:pr-40">
          <p class="text-xl font-bold underline pb-4">Otros articulos</p>
          <router-link class="p-2 underline hover:text-blue-600" to="/">Lorem ipsum dolor</router-link>
          <router-link class="p-2 underline hover:text-blue-600" to="/">Loremip sumdolor</router-link>
          <router-link class="p-2 underline hover:text-blue-600" to="/">eiusatquei taquefac ilisiusto </router-link>
          <router-link class="p-2 underline hover:text-blue-600" to="/">odio,eiusatqueitaqu efacilis iusto</router-link>
          <router-link class="p-2 underline hover:text-blue-600" to="/">Lorem ipsum dolor</router-link>
          <router-link class="p-2 underline hover:text-blue-600" to="/">odio,eiusatqueitaque facilis iusto</router-link>
          <router-link class="p-2 underline hover:text-blue-600" to="/">odio, eius atque itaque facilis iusto</router-link>
          <router-link class="p-2 underline hover:text-blue-600" to="/">Lorem ipsum dolor</router-link>

        </div>
      </section>

    </main>
    <hr class="ml-4 mr-4">
    <h6 class="text-center semibold p-4">Todos los derechos reservados @ 2022</h6>
  </div>
</template>

<script>
import Nav from '../../components/nav/Navbar.vue';
export default {
  name: 'Articulo',
  components: {
    Nav
  }
}
</script>