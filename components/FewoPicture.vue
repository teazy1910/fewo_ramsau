
<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const images = ref([
  "/Esszimmer.jpeg",
  "/Bad.jpeg",
  "/Küche.jpg",
  "/Wohn+Esszimmer.jpeg"
]);


const selectedIndex = ref(0);
const autoInterval = ref(null);

const selectedImage = computed(() => images.value[selectedIndex.value]);
const selectedText = computed(() => texts.value[selectedIndex.value]);

function selectImage(index) {
  selectedIndex.value = index;
}

function startAutoCarousel() {
  autoInterval.value = setInterval(() => {
    nextImage();
  }, 4000);
}

function stopAutoCarousel() {
  clearInterval(autoInterval.value);
}

function nextImage() {
  selectedIndex.value = (selectedIndex.value + 1) % images.value.length;
}

onMounted(() => {
  startAutoCarousel();
});

onUnmounted(() => {
  stopAutoCarousel();
});
</script>

<template>
  <div id="ferienwohnung" class="carousel mb-24 font-Playfair mt-12">
    <h1 class="md:text-4xl md:mb-12 text-3xl mb-3">Bilder der Ferienwohnung</h1>
    <h3 class="md:text-2xl md:mb-5 text-xl mb-5">Machen Sie sich einen ersten Eindruck</h3>
    <transition name="fade">
      <img :src="selectedImage" alt="Selected Image" class="md:w-1/2 w-[70%]" />
    </transition>
    <div class="indicator-bar ">
      <span
        v-for="(image,index) in images"
        :key="index"
        :class="{ active: index === selectedIndex }"
        @click="selectImage(index)"
      ></span>
    </div>
  </div>
</template>


<style scoped>

.carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.carousel-text span {
  font-size: 2.5rem;
  margin-bottom: 1em;
}

.indicator-bar {
  display: flex;
  justify-content: center;
  margin: 0.5em;
}
 
.indicator-bar span {
  width: 10px;
  height: 10px;
  background-color: lightgray;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
} 

.indicator-bar span.active {
  background-color: #50614b;
}

.carousel-text {
  margin-top: 10px;
  font-size: 16px;
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>