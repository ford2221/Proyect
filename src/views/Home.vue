<template>
  <div >
    <Nav class="fixed w-full"></Nav>
    <main class="">

      <div class="  mx-auto pt-60  bg-cover bg-center h-full" style="box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 0.6);
          background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80');
        "
      >
        <div class="items-center flex flex-wrap pb-60">
          <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div class="pr-2">
              <h1 class="text-white font-bold  text-3xl lg:text-3xl">
                Your story starts with us.
              </h1>
              <p class=" sm:text-base lg:text-base text-white">
                This is a simple example of a Landing Page you can build using
                Vue Notus. It features multiple CSS components based on the
                Tailwind CSS design system.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--the cards -->

       <section class="pb-20 bg-gray-100 bg-opacity-70 ">
        <div class="mx-auto px-4">
          
          <!-- The proyects title-->
          <center><h3 class="text-3xl font-bold underline pt-10">Galería de Proyectos</h3></center>
        

          <div  class="flex flex-wrap items-center mt-20">
             <div class="w-full md:w-4/12 px-4 mr-auto ml-auto pb-6">
              <div
                class="bg-gray-600  flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500"
              >
                <img
                  alt="..."
                  src="https://megaparcelas.cl/wp-content/uploads/2021/02/Ficha_La-Aguada-de-Bucalemu.jpg"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class=" p-8 mb-4 ">
                  
                  <h4 class="text-xl font-bold text-white">
                    La Aguada de Bucamelu
                  </h4>
                  <p class="text-md font-light text-justify mt-2 text-gray-100">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </p>
                </blockquote>
                <router-link to="/proyectos" class="m-auto lg:pr-10 lg:pl-10 sm:pr-6 sm:pr-6 hover:bg-black lg:text-xl sm:text-base lg:p-3 p-3 -mb-6  bg-gray-500 text-green-500 rounded-full border-1">Ver más
                  <i class="fa fa-eye text-gray-200 ml-2  w-6 h-6"></i>
                </router-link>
      
              </div>
            </div>
           

            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto pb-6">
              <div
                class="bg-gray-600  flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500"
              >
                <img
                  alt="..."
                  src="https://megaparcelas.cl/wp-content/uploads/2021/10/WhatsApp-Image-2021-09-28-at-17.03.36-2.jpeg"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class=" p-8 mb-4 ">
                  
                  <h4 class="text-xl font-bold text-white">
                    Mega Hualañé
                  </h4>
                  <p class="text-md font-light text-justify mt-2 text-gray-100">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </p>
                </blockquote>
                 <router-link to="/proyectos" class="m-auto lg:pr-10 lg:pl-10 sm:pr-6 sm:pr-6 hover:bg-black lg:text-xl sm:text-base lg:p-3 p-3 -mb-6  bg-gray-500 text-green-500 rounded-full border-1">Ver más
                  <i class="fa fa-eye text-gray-200 ml-2  w-6 h-6"></i>
                </router-link>
              </div>
            </div>

            
            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto  pb-6">
              <div
                class="bg-gray-600  flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500"
              >
                <img
                  alt="..."
                  src="https://megaparcelas.cl/wp-content/uploads/2022/01/Piedra-del-Sol-Verano.png"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class=" p-8 mb-4 ">
                  
                  <h4 class="text-xl font-bold text-white">
                    Piedra del Sol
                  </h4>
                  <p class="text-md font-light  text-justify mt-2 text-gray-100">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </p>
                </blockquote>
                 <router-link to="/proyectos" class="m-auto lg:pr-10 lg:pl-10 sm:pr-6 sm:pr-6 hover:bg-black lg:text-xl sm:text-base lg:p-3 p-3 -mb-6  bg-gray-500 text-green-500 rounded-full border-1">Ver más
                  <i class="fa fa-eye text-gray-200 ml-2  w-6 h-6"></i>
                </router-link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section class=" pb-20 bg-gray-400 bg-opacity-80 ">
        
        <div class="mx-auto px-4">
          <!-- The departments title-->
          <center><h3 id="teams" class="text-3xl font-bold underline pt-10">Departamentos</h3></center>

          <div class="flex flex-wrap pt-10">
            <div class="pt-4 px-4 w-full md:w-4/12 text-center">
              <router-link to="/equipos">
                <div
                  class=" flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
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
              </router-link>
            </div>


            <div class="w-full md:w-4/12 px-4 text-center">
              <router-link to="/equipos">
                <div
                  class=" flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
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
              </router-link>
            </div>

            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <router-link to="/equipos">
              <div
                class=" flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
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
              </router-link>
            </div>

          </div>

          <!-- <div class="flex space-x-1 m-auto">
            <span class="bg-white h-2 w-4 rounded-full" ></span>
            <span class="bg-white h-2 w-4 rounded-full" ></span>
            <span class="bg-white h-2 w-4 rounded-full" ></span>
          </div> -->

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