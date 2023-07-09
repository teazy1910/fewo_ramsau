<template>
    <div id="service" class="bg-[#D6DBD4]">
        <h1 class="md:text-4xl text-2xl text-center font-Lato m-12 md:m-24">Unser Service für Ihren Aufenthalt</h1>

        <div class="md:px-56 grid px-5 grid-cols-[repeat(auto-fill, minmax(300px, 1fr)] md:grid-cols-3 grid-rows-2  gap-3 md:mb-36">
                <div class="my-1">
                    <Icon icon="cil:house" class="w-10 h-10 font-black"/>
                    <h2 class="text-lg my-3">Ferienwohnung</h2>
                    <p class="text-sm">Die Nichtraucher-Wohnung ist im modernen Landhausstil - mit viel hellem Holz - eingerichtet und verfügt in jedem Zimmer über Fußbodenheizung.</p>
                </div>
                <div class="my-1">
                    <Icon icon="fluent:bed-20-regular" class="w-10 h-10 font-black"/>
                    <h2 class="text-lg my-3">Wohn- & Schlafzimmer</h2>
                    <p class="text-sm">Es besteht die Möglichkeit ein Kinderbett zusätzlich aufzustellen. Wir stellen Ihnen selbstverständlich Bettwäsche zur Verfügung. Zudem ist die Couch im Wohnraum eine Schlafcouch für ein Kind.</p>
                </div>
                <div class="my-1">
                    <Icon icon="teenyicons:bath-outline" class="w-10 h-10 font-black"/>
                    <h2 class="text-lg my-3">Badezimmer</h2>
                    <p class="text-sm">Handtücher werden von uns zur Verfügung gestellt und je nach Belieben oder wöchentlich gewechselt.</p>
                </div>
                <div class="my-1">
                    <Icon icon="fluent-mdl2:parking-location" class="w-10 h-10 font-black" />
                    <h2 class="text-lg my-3">Parkplatz</h2>
                    <p class="text-sm">Es steht Ihnen ein kostenfreier Parkplatz am Haus zur Verfügung.</p>
                </div>
                <div class="my-1">
                    <Icon icon="carbon:wifi" class="w-10 h-10 font-black"/>
                    <h2 class="text-l my-3">Kostenloses WLAN</h2>
                    <p class="text-sm">Es steht Ihnen unser kostenfreies WLAN während Ihres Aufenthalts zur Verfügung.</p>
                </div>
                <div class="my-1 pb-12">
                    <Icon icon="la:mountain" class="w-10 h-10 font-black"/>
                    <h2 class="text-lg my-3">Umgebung</h2>
                    <p class="text-sm">Es steht Ihnen unser kostenfreies WLAN während Ihres Aufenthalts zur Verfügung.</p>
                </div>
            </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
   components: {
       Icon,
   },
};
</script>
