<template>
  <div>
    <Nav class="fixed w-full"></Nav>
    <main>
      <div class=" mx-auto pt-60  bg-cover bg-center h-full" style="box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 0.6);
          background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80');
        ">
        <div class="items-center flex flex-wrap pb-60 ">
          <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div class="pr-2">
              <h1 class="text-white font-bold  text-3xl lg:text-3xl">
                Descubre nuestros Departamentos
              </h1>
              <span class=" sm:text-base xlg:ml-36 ml-4 lg:text-xl text-white">
                Y descubre tu nueva parcela.
              </span>
            </div>
          </div>
        </div>
      </div>


      <section class="pb-20 bg-gray-400 bg-opacity-80 ">
        
        <div class="mx-auto px-4">
          <!-- The departments title-->
          <center><h3 id="teams" class="text-3xl font-bold underline pt-10">Departamentos</h3></center>

          <div class="flex flex-wrap pt-10">
            <div class="pt-4 px-4 w-full md:w-4/12 text-center">
              <div
                class=" flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div>
                    <img class="h-auto w-auto" src="https://megaparcelas.cl/wp-content/uploads/2020/11/manquehua2.png" >
                  </div>
                  <!-- <h6 class="text-xl font-semibold">Awarded Agency</h6> -->
                  <p class="mt-4 mb-4">
                    Manquehua 20. Litueche
                  </p>
                </div>
              </div>
            </div>


            <div class="w-full md:w-4/12 px-4 text-center">
              <div
                class=" flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div>
                    <img class="h-auto w-auto " src="https://megaparcelas.cl/wp-content/uploads/2020/09/OFICINA-OASIS.png" >
                  </div>
                  <!-- <h6 class="text-xl font-semibold">Free Revisions</h6> -->
                  <p class="mt-4 mb-4 ">
                    El Cardonal, Lote A-2. Litueche.
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <router-link to="/">
              <div
                class=" flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div>
                    <img class="h-auto w-auto" src="https://megaparcelas.cl/wp-content/uploads/2020/09/OFICINA-LITUECHE-MALL.png" >
                  </div>
                  <!-- <h6 class="text-xl font-semibold">Mall Royce</h6> -->
                  <p class="mt-4 mb-4 ">
                    Av. Hermanos Carrera 561. Centro Comercial Mall Royce. 
                    Of # 116, 206, 207, 208. Litueche
                  </p>
                </div>
              </div>
              </router-link>
            </div>


            <div class="pt-4 px-4 w-full md:w-4/12 text-center">
              <div
                class=" flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div>
                    <img class="h-auto w-auto" src="https://megaparcelas.cl/wp-content/uploads/2020/11/manquehua2.png" >
                  </div>
                  <!-- <h6 class="text-xl font-semibold">Awarded Agency</h6> -->
                  <p class="mt-4 mb-4 ">
                    Manquehua 20. Litueche
                  </p>
                </div>
              </div>
            </div>


            <div class="w-full md:w-4/12 px-4 text-center">
              <div
                class=" flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div>
                    <img class="h-auto w-auto " src="https://megaparcelas.cl/wp-content/uploads/2020/09/OFICINA-OASIS.png" >
                  </div>
                  <!-- <h6 class="text-xl font-semibold">Free Revisions</h6> -->
                  <p class="mt-4 mb-4 ">
                    El Cardonal, Lote A-2. Litueche.
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <router-link to="/">
              <div
                class=" flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div>
                    <img class="h-auto w-auto" src="https://megaparcelas.cl/wp-content/uploads/2020/09/OFICINA-LITUECHE-MALL.png" >
                  </div>
                  <!-- <h6 class="text-xl font-semibold">Mall Royce</h6> -->
                  <p class="mt-4 mb-4">
                    Av. Hermanos Carrera 561. Centro Comercial Mall Royce. 
                    Of # 116, 206, 207, 208. Litueche
                  </p>
                </div>
              </div>
              </router-link>
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
  name: 'Departamento',
  components: {
    Nav
  }
}
</script>