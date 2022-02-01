<template>
  <div >
    <Nav></Nav>
    <main>
      <div class="relative pt-40 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80');
          "
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-70 bg-black"
          ></span>
        </div>

        <div class="container relative mx-auto mb-20">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-2">
                <h1 class="text-white font-bold  text-3xl lg:text-3xl">
                  Your story starts with us.
                </h1>
                <p class=" sm:text-base text-justify lg:text-base text-white">
                  This is a simple example of a Landing Page you can build using
                  Vue Notus. It features multiple CSS components based on the
                  Tailwind CSS design system.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style="transform: translateZ(0);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <!--the cards -->

      <section class="pb-20 bg-gray-400 bg-opacity-80 ">
        
        <div class="mx-auto px-4">
          <!-- The departments title-->
          <center><h3 id="teams" class="text-3xl font-bold underline pt-10">Departamentos</h3></center>

          <div class="flex flex-wrap pt-10">
            <div class="pt-4 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div>
                    <img class="h-auto w-auto" src="https://megaparcelas.cl/wp-content/uploads/2020/11/manquehua2.png" >
                  </div>
                  <!-- <h6 class="text-xl font-semibold">Awarded Agency</h6> -->
                  <p class="mt-4 mb-4 text-blueGray-500">
                    Manquehua 20. Litueche
                  </p>
                </div>
              </div>
            </div>


            <div class="w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div>
                    <img class="h-auto w-auto " src="https://megaparcelas.cl/wp-content/uploads/2020/09/OFICINA-OASIS.png" >
                  </div>
                  <!-- <h6 class="text-xl font-semibold">Free Revisions</h6> -->
                  <p class="mt-4 mb-4 text-blueGray-500">
                    El Cardonal, Lote A-2. Litueche.
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div>
                    <img class="h-auto w-auto" src="https://megaparcelas.cl/wp-content/uploads/2020/09/OFICINA-LITUECHE-MALL.png" >
                  </div>
                  <!-- <h6 class="text-xl font-semibold">Mall Royce</h6> -->
                  <p class="mt-4 mb-4 text-blueGray-500">
                    Av. Hermanos Carrera 561. Centro Comercial Mall Royce. 
                    Of # 116, 206, 207, 208. Litueche
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <hr class="ml-4 mr-4">
      <h6 class="text-center p-4">Todos los derechos reservados @ 2022</h6>
    </main>
    
  </div>

</template>

<script>
  import Nav from '../components/nav/Navbar.vue';
  export default {
    components: {
       Nav
    } 
  }
  
</script>