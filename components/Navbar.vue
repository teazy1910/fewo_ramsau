<template>
  <nav class="fixed w-full p-2 bg-white">
    <div class="flex items-center justify-between">
      <!-- Header logo -->
      <div>
        <Logo />
      </div>
      <!-- Mobile toggle -->

      <button class="md:hidden" @click="showMenu = !showMenu">
        <svg
          class="h-8 w-8 fill-current text-black"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      <div class="hidden md:block">
        <ul
          :class="closeMobileMenu ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
        >
          <li>
            <NuxtLink to="/" class="" active-class="active">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" active-class="active">Ferienwohnung</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" active-class="active" class="">Über uns</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" active-class="active">Buchen</NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/buchen"
              active-class="active"
              class="cta bg-emerald-900 hover:bg-emerald-900 px-3 py-2 rounded text-white font-semibold"
              >Kontakt</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref } from "vue";

function showMenu() {
  false;
}
</script>
<style>
.active:hover {
  font-weight: bold;
  color: #065f46;
}
</style>
