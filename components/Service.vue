<template>
  <div id="service" class="font-Roboto md:px-64 md:pb-12 m-auto grid">
    <h1 class="md:text-4xl font-Playfair text-3xl text-center md:py-4">Unser Service</h1>
      <p class="text-xl text-center font-Playfair">für Ihren Aufenthalt</p>
    <div
      class="text-[#d9d9d9] my-8 grid grid-content-center grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-2">
      <div class="my-1 bg-[#4E5F4B] md:p-2">
        <Icon icon="cil:house" class="w-10 h-10 font-black m-auto mt-2" />
        <h2 class="md:text-xl my-3 font-bold text-center">Ferienwohnung</h2>
        <p class="md:text-lg p-5">
          Die Nichtraucher-Wohnung ist im modernen Landhausstil - mit viel
          hellem Holz - eingerichtet und verfügt in jedem Zimmer über
          Fußbodenheizung.
        </p>
      </div>
      <div class="my-1 bg-[#4E5F4B] md:p-2">
        <Icon icon="fluent:bed-20-regular" class="w-10 h-10 font-black m-auto my-2" />
        <h2 class="md:text-xl my-3 font-bold text-center">Wohn- & Schlafzimmer</h2>
        <p class="md:text-lg p-6">
          Es besteht die Möglichkeit ein Kinderbett zusätzlich aufzustellen. Wir
          stellen Ihnen selbstverständlich Bettwäsche zur Verfügung. Zudem ist
          die Couch im Wohnraum eine Schlafcouch für ein Kind.
        </p>
      </div>
      <div class="my-1 bg-[#4E5F4B] md:p-5">
        <Icon icon="teenyicons:bath-outline" class="w-10 h-10 font-black m-auto mt-2" />
        <h2 class="md:text-xl my-3 font-bold text-center">Badezimmer</h2>
        <p class="md:text-lg p-6">
          Handtücher werden von uns zur Verfügung gestellt und je nach Belieben
          oder wöchentlich gewechselt.
        </p>
      </div>
      <div class="my-1 bg-[#4E5F4B] md:p-5">
        <Icon
          icon="fluent-mdl2:parking-location"
          class="w-10 h-10 font-black m-auto mt-2" />
        <h2 class="md:text-xl my-3 font-bold text-center">Parkplatz</h2>
        <p class="md:text-lg p-6">
          Es steht Ihnen ein kostenfreier Parkplatz am Haus zur Verfügung.
        </p>
      </div>
      <div class="my-1 bg-[#4E5F4B] md:p-5">
        <Icon icon="carbon:wifi" class="w-10 h-10 font-black m-auto mt-2" />
        <h2 class="md:text-xl my-3 font-bold text-center">Kostenloses WLAN</h2>
        <p class="md:text-lg p-5">
          Es steht Ihnen unser kostenfreies WLAN während Ihres Aufenthalts zur
          Verfügung.
        </p>
      </div>
      <div class="my-1 bg-[#4E5F4B] md:p-5">
        <Icon icon="la:mountain" class="w-10 h-10 font-black m-auto md:my-2" />
        <h2 class="md:text-xl my-3 font-bold text-center">Umgebung</h2>
        <p class="md:text-lg p-5">
          Zur nächsten Bushaltestelle "Ramsau Kirche" gelangen Sie in 3 Minuten
          zu Fuß. Bei Ihrer Ankunft erhalten Sie die Gästekarte. Diese
          beinhaltet Vergünstigungen für Ausflugsziele, zumeist freie Fahrt mit
          den Linienbussen und reduziertes Parken auf Wander-Parkplätzen.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {Icon} from "@iconify/vue";

export default {
  components: {
    Icon,
  },
};
</script>
