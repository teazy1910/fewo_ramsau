<template>
  <div id="service" class="font-Roboto md:p-36 m-auto grid">
    <h1 class="md:text-5xl font-Playfair text-3xl text-center md:py-8">Unser Service</h1>
      <p class="text-2xl md:py-5 text-center font-Playfair">für Ihren Aufenthalt</p>
    <div
      class="text-[#d9d9d9] grid grid-content-center grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-2">
      <div class="my-1 bg-[#4E5F4B] p-8">
        <Icon icon="cil:house" class="w-10 h-10 font-black m-auto mt-2" />
        <h2 class="text-xl my-3 text-center">Ferienwohnung</h2>
        <p class="md:text-lg p-6">
          Die Nichtraucher-Wohnung ist im modernen Landhausstil - mit viel
          hellem Holz - eingerichtet und verfügt in jedem Zimmer über
          Fußbodenheizung.
        </p>
      </div>
      <div class="my-1 bg-[#4E5F4B] p-8">
        <Icon icon="fluent:bed-20-regular" class="w-10 h-10 m-auto" />
        <h2 class="text-xl my-3 text-center">Wohn- & Schlafzimmer</h2>
        <p class="md:text-lg p-6">
          Es besteht die Möglichkeit ein Kinderbett zusätzlich aufzustellen. Wir
          stellen Ihnen selbstverständlich Bettwäsche zur Verfügung. Zudem ist
          die Couch im Wohnraum eine Schlafcouch für ein Kind.
        </p>
      </div>
      <div class="my-1 bg-[#4E5F4B] p-8">
        <Icon icon="teenyicons:bath-outline" class="w-10 h-10 font-black m-auto mt-2" />
        <h2 class="md:text-xl my-3 text-center">Badezimmer</h2>
        <p class="md:text-lg p-6">
          Handtücher werden von uns zur Verfügung gestellt und je nach Belieben
          oder wöchentlich gewechselt.
        </p>
      </div>
      <div class="my-1 bg-[#4E5F4B] md:p-5">
        <Icon icon="ph:car-thin"
          class="w-10 h-10 font-black m-auto mt-2"/>  
          <h2 class="md:text-xl my-3 text-center">Parkplatz</h2>
        <p class="md:text-lg p-6">
          Es steht Ihnen ein kostenfreier Parkplatz am Haus zur Verfügung.
        </p>
      </div>
      <div class="my-1 bg-[#4E5F4B] p-8">
        <Icon icon="carbon:wifi" class="w-10 h-10  m-auto mt-2" />
        <h2 class="md:text-xl my-3 text-center">Kostenloses WLAN</h2>
        <p class="md:text-lg p-5">
          Es steht Ihnen unser kostenfreies WLAN während Ihres Aufenthalts zur
          Verfügung.
        </p>
      </div>
      <div class="my-1 bg-[#4E5F4B] p-8">
        <Icon icon="la:mountain" class="w-10 h-10 m-auto md:my-2" />
        <h2 class="md:text-xl my-3 text-center">Umgebung</h2>
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
