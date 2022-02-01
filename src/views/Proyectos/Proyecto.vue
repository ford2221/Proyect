<template>
  <div>
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
                  Descubre nuestros proyectos
                </h1>
                <p class=" sm:text-base text-justify lg:ml-36 ml-4 lg:text-2xl text-white">
                  Y descubre tu nueva parcela.
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

      <section class="pb-20 bg-gray-100 bg-opacity-70 ">
        <div class="mx-auto px-4">
          
          <!-- The proyects title-->
          <center><h3 class="text-3xl font-bold underline pt-10">Galería de Proyectos</h3></center>
        

          <div  class="flex flex-wrap items-center mt-20">
             <div class="w-full md:w-4/12 px-4 mr-auto ml-auto pb-6">
              <div
                class="bg-gray-600 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500"
              >
                <img
                  alt="..."
                  src="https://megaparcelas.cl/wp-content/uploads/2021/02/Ficha_La-Aguada-de-Bucalemu.jpg"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4 ">
                  
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
                  <i class="fa fa-eye text-gray-200 ml-2 animate-bounce w-6 h-6"></i>
                </router-link>
      
              </div>
            </div>
           

            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto pb-6">
              <div
                class="bg-gray-600 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500"
              >
                <img
                  alt="..."
                  src="https://megaparcelas.cl/wp-content/uploads/2021/10/WhatsApp-Image-2021-09-28-at-17.03.36-2.jpeg"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4 ">
                  
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
                  <i class="fa fa-eye text-gray-200 ml-2 animate-bounce w-6 h-6"></i>
                </router-link>
              </div>
            </div>

            
            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto  pb-6">
              <div
                class="bg-gray-600 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500"
              >
                <img
                  alt="..."
                  src="https://megaparcelas.cl/wp-content/uploads/2022/01/Piedra-del-Sol-Verano.png"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4 ">
                  
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
                  <i class="fa fa-eye text-gray-200 ml-2 animate-bounce w-6 h-6"></i>
                </router-link>
              </div>
            </div>

            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto  pb-6">
              <div
                class="bg-gray-600 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500"
              >
                <img
                  alt="..."
                  src="https://megaparcelas.cl/wp-content/uploads/2022/01/Piedra-del-Sol-Verano.png"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4 ">
                  
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
                  <i class="fa fa-eye text-gray-200 ml-2 animate-bounce w-6 h-6"></i>
                </router-link>
              </div>
            </div>

            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto  pb-6">
              <div
                class="bg-gray-600 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500"
              >
                <img
                  alt="..."
                  src="https://megaparcelas.cl/wp-content/uploads/2022/01/Piedra-del-Sol-Verano.png"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4 ">
                  
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
                  <i class="fa fa-eye text-gray-200 ml-2 animate-bounce w-6 h-6"></i>
                </router-link>
              </div>
            </div>

            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto  pb-6">
              <div
                class="bg-gray-600 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500"
              >
                <img
                  alt="..."
                  src="https://megaparcelas.cl/wp-content/uploads/2022/01/Piedra-del-Sol-Verano.png"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4 ">
                  
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
                  <i class="fa fa-eye text-gray-200 ml-2 animate-bounce w-6 h-6"></i>
                </router-link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>

  </div>
</template>

<script>
import Nav from '../../components/nav/Navbar.vue';
export default {
  name: 'Proyecto',
  components: {
    Nav
  }
}
</script>