<template>
  <div class="carousel">
    <h1>Für die Vorfreude</h1>
    <h2>Ein kleiner Vorgeschmack auf Ihren Urlaub in Ramsau</h2>
    <transition name="fade">
      <img :src="selectedImage" alt="Selected Image" />
    </transition>
    <div class="carousel-text">
      <!-- <span>{{ selectedText }}</span> -->
    </div>
    <div class="indicator-bar">
      <span
        v-for="(image, index) in images"
        :key="index"
        :class="{ active: index === selectedIndex }"
        @click="selectImage(index)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const images = ref([
  "../Badezimmer.jpeg",
  "../Bett.jpeg",
  "../Esszimmer.jpeg",
  "../hausansicht.JPG",
  "../Balkon_Aussicht.jpg",
  "../Haus-Drohne.jpg",
  "../Küche.jpg",
]);

// const texts = ref([
//   "Lasse dich inspirieren und erweitere deine zeichnerischen Fähigkeiten",
//   "Nimm die Herausforderung an, um deine Fähigkeiten zu verbessern",
//   "Habe nie wieder Langeweile beim Zeichnen",
// ]);

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
  }, 3000);
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

<style scoped>
h1 {
  font-size: 2rem;
  margin-bottom: 1.2em;
  font-weight: bold;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1.2em;
}

.carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-left: 5em;
  margin-right: 5em;
}

.carousel-text span {
  font-size: 2.5rem;
  margin-bottom: 1em;
}

.indicator-bar {
  display: flex;
  justify-content: center;
  margin: 10px;
}

.indicator-bar span {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: gray;
  margin: 0 5px;
  cursor: pointer;
}

.indicator-bar span.active {
  background-color: black;
}

img {
  width: 900px;
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
