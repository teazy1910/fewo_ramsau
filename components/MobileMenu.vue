<template>
  <div>
    <transition
      enter-active-class="transition-opacity ease-linear duration-3000"
      enter-class="opacity-8"
      enter-to-class="opacity-100"
      leave-to-class="opacity-0"
      leave-active-class="transition-opacity ease-linear duration-0"
      leave-class="opacity-100"
    >
      <div class="absolute w-full flex bg-blue-100 z-40 inset-0 p-16">
        <div class="overflow-y-auto">
          <ul
            class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
          >
            <li>
              <NuxtLink to="/" class="" active-class="active">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" active-class="active">Ferienwohnung</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" active-class="active" class=""
                >Über uns</NuxtLink
              >
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
        <div class="absolute top-0 right-0 pt-6 pr-10">
          <button class="ml-1 flex items-center justify-center h-11">X</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup></script>

<style scoped></style>
