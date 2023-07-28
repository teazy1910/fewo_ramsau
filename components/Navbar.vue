<script setup>
import Impressum from "/pages/impressum.vue";
import {ref, onMounted} from "vue";

const isOpen = ref(false);

const drawer = () => {
  isOpen.value = !isOpen.value;
};

onMounted(() => {
  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 27 && isOpen.value) isOpen.value = false;
  });
});
</script>

<template>
  <nav class="w-full fixed text-[#d6dbd4] bg-[#4F604B] top-0 z-50 mb-24 grow-0">
    <div class="flex justify-center items-center md:my-4 my-2">
      <!-- Mobile toggle -->
      <div class="md:hidden">
        <button @click="drawer">
          <svg
            class="h-8 w-8 mt-6 fill-current text-white"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <!-- Navbar -->
      <div class="hidden md:block font-Roboto">
        <ul class="flex items-baseline md:mx-12 md:text-lg pt-8 space-x-24">
          <li>
            <nuxt-link :to="{hash: '#about'}" :external="true">
              <!-- no need for a path if same page -->
              Über uns
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{hash: '#preise'}" :external="true">
              <!-- no need for a path if same page -->
              Preise
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{hash: '#ferienwohnung'}" :external="true">
              <!-- no need for a path if same page -->
              Ferienwohnung
            </nuxt-link>
          </li>
          <div>
            <p class="font-Playfair text-3xl">Ferienwohnung Zörner</p>
          </div>
          <li>
            <nuxt-link :to="{hash: '#kontakt'}" :external="true">
              <!-- no need for a path if same page -->
              Anfahrt
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{hash: '#kontakt'}" :external="true">
              Kontakt
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to=Impressum>
              Impressum
            </nuxt-link>
          </li>
        </ul>
      </div>
      <!-- Dark Background Transition -->
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0">
        <div
          @keydown.esc="isOpen = false"
          v-show="isOpen"
          class="z-10 fixed inset-0 transition-opacity">
          <div
            @click="isOpen = false"
            class="absolute inset-0 bg-black opacity-50"
            tabindex="0"></div>
        </div>
      </transition>

      <!-- Drawer Menu -->
      <aside
        class="p-5 transform top-0 left-0 w-64 text-[#253C39] bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
        <div class="close">
          <button
            class="absolute top-0 right-0 mt-4 mr-4"
            @click="isOpen = false">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <span
          @click="isOpen = false"
          class="flex w-full items-center p-4 border-b">
          <Logo />
        </span>

        <ul class="divide-y">
          <li>
            <a href="#" @click="isOpen = false" class="my-4 inline-block"
              >Home</a
            >
          </li>
          <li>
            <a href="#" @click="isOpen = false" class="my-4 inline-block"
              >Ferienwohnung</a
            >
          </li>
          <li>
            <a href="#" @click="isOpen = false" class="my-4 inline-block"
              >Preise</a
            >
          </li>
          <li>
            <a href="#" @click="isOpen = false" class="my-4 inline-block"
              >Über uns</a
            >
          </li>
          <li>
            <a href="#" @click="isOpen = false" class="my-4 inline-block"
              >Kontakt</a
            >
          </li>
          <li>
            <a
              to="/Buchen"
              @click="isOpen = false"
              class="my-8 w-full text-center inline-block bg-emerald-800 hover:bg-emerald-800 px-3 py-2 font-Roboto rounded-xl text-white"
              >Buchen</a
            >
          </li>
        </ul>
      </aside>
    </div>
    <hr class="h-px px-4 bg-white border-0" />
  </nav>
</template>
