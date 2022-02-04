<template>
  <div class="bg-gray-200">
    <Nav class="fixed w-full"></Nav>
    <main class="pt-40">
      <div class="flex-auto m-auto bg-gray-300 px-4  lg:w-8/12 lg:px-10 py-10 shadow-lg" style="border-radius: 10px">
        <div class="mt-10 text-3xl underline font-bold text-center mb-3 font-bold">
          Contactanos
        </div>
        <form>
          <div class=" w-full mb-3">
            <label
              class="block uppercase text-blue-600 text-base font-bold mb-2" >Email</label>
            <input type="email" class="border-0 px-3 py-3  placeholder-blue-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Email"
            />
          </div>

          <div class=" w-full mb-3">
            <label class="block uppercase text-blue-600 text-base font-bold mb-2">Message</label>
            <textarea style="resize: none;" class="border-0 px-2 placeholder-blue-300  py-8  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="  Message">
            </textarea>
          </div>

          <div class="text-center mt-6">
            <button class="bg-blue-800 text-white active:bg-blue-600 text-sm font-bold uppercase px-6 lg:py-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
              type="button">
              Enviar
            </button>
          </div>
        </form>
      </div>
      <center><h3 id="contacts" class="text-3xl font-bold underline mt-10 ">Contactos Administrativos</h3></center>
      <section class="pt-20 pb-20">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
                  class="shadow-lg rounded-full mx-auto max-w-120-px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Ryan Tompson</h5>
                  <p
                    class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"
                  >
                    Administration 1
                  </p>
                  <a href="mailto:admin1@center.com" class="text-blue-400">admin1@center.com</a>
                  <div class="mt-6">
                    <button
                      class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      
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
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
                  class="shadow-lg rounded-full mx-auto max-w-120-px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Romina Hadid</h5>
                  <p
                    class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"
                  >
                    Administration 2
                  </p>
                  <a href="mailto:admin2@center.com" class="text-blue-400">admin1@center.com</a>
                  <div class="mt-6">
                    <button
                      class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      
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
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
                  class="shadow-lg rounded-full mx-auto max-w-120-px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Alexa Smith</h5>
                  <p
                    class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"
                  >
                    Administration 3
                  </p>
                  <a href="mailto:admin3@center.com" class="text-blue-400">admin1@center.com</a>
                  <div class="mt-6">
                    <button
                      class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      
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
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-3-800x800.jpg"
                  class="shadow-lg rounded-full mx-auto max-w-120-px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Jenna Kardi</h5>
                  <p
                    class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"
                  >
                    Administration 4
                  </p>
                  <a href="mailto:admin4@center.com" class="text-blue-400">admin1@center.com</a>
                  <div class="mt-6">
                    <button
                      class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class=" p-6 pt-20" style="background: #191970">
        <Location></Location>
      </div>

    <hr class="ml-4 mr-4">
    <h6 class="text-center p-4">Todos los derechos reservados @ 2022</h6>
    </main>
  </div>
</template>

<script>
import Nav from '../../components/nav/Navbar.vue';
import Location from '../maps/Location.vue'
export default {
  name: 'Contacto',
  components: {
    Nav, Location
  }
}
</script>