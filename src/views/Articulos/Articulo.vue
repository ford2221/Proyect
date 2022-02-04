<template>
  <div>
    <Nav class="fixed w-full"></Nav>
    <main class="">
      <section class="lg:flex justify-center ">

        <div class="lg:ml-20 mx-3">
          <div class="flex flex-wrap  items-center  pt-40 space-x-20">
            <div>
              <p class="text-2xl font-bold underline pl-4">El titúlo de articulo</p>
            </div>
            <div class="flex space-x-4  pt-4 lg:pr-0">
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
          <div class="flex space-x-2 items-center ">
            <img
              alt="..."
              src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
              class="shadow-lg rounded-full h-20 w-"
            />
            <p class="italic text-lg pb-10 pt-10 " >Autor:<span class="font-bold"> Pablo Rodriguez</span> <br />
              <a href="mailto:pablo@gmailcom" class="text-blue-500">pablo@gmailcom</a>
            </p>
          </div>
          <h6 class="text-sm italic pt-2">Publicado el: 23/01/2022</h6>
          <img class="lg:h-80 lg:w-8/12 sm:h-40 sm:w-40 rounded shadow pt-10" src="https://www.mundoparcelas.cl/img/module/uploaded/145bd226-0721-44cf-9b7b-9f8e256f440c-porton-santacruz.jpg">
         
          <article style="font-familly: Sans-Serif;" class="text-justify pt-10 justify-center  text-lg pb-10  lg:w-8/12 sm:w-80">
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
        <div class="lg:pt-80 flex m-4 flex-col lg:pr-40">
          <p class="text-xl font-bold underline pb-4">Otros articulos</p>
          <router-link class="p-2  underline hover:text-blue-600" to="/">Lorem ipsum dolor</router-link>
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