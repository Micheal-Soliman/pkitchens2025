<template>
  <div
    @mouseenter="pauseAutoPlay"
    @mouseleave="resumeAutoPlay"
    :class="[
      'relative w-full mx-auto overflow-hidden',
      variant === 'hero' ? 'h-screen' : '',
      baseWrapperClass,
    ]"
  >
    <!-- Slides -->

    <div class="carousel-slides flex h-[300px] md:h-[500px]" :style="carouselStyle">
      <div v-for="slide in slides" :key="slide.id" class="carousel-slide min-w-full relative">
        <img
          v-if="variant !== 'faq'"
          :src="slide.image"
          :alt="slide.title"
          class="w-full h-full object-cover"
        />
        <div class="w-full h-full bg-opacity-50 p-6 grid place-content-center">
          <h3 class="text-2xl font-bold">{{ slide.title }}</h3>
          <p class="mt-2 text-sm">{{ slide.description }}</p>
        </div>
      </div>
    </div>

    <!-- Nav Arrows -->
    <button
      @click="prevSlide"
      class="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 transition"
    >
      <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button
      @click="nextSlide"
      class="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 transition"
    >
      <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Dots -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
      <button
        v-for="(slide, index) in slides"
        :key="`dot-${slide.id}`"
        @click="goToSlide(index)"
        class="w-3 h-3 rounded-full transition-colors"
        :class="currentIndex === index ? 'bg-white' : 'bg-white bg-opacity-50'"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

defineProps({
  variant: {
    type: String,
    default: 'default', // 'hero' | 'faq' | 'default'
  },
  baseWrapperClass: {
    type: String,
    default: '', // optional custom wrapper class
  },
})

const slides = ref([
  {
    id: 1,
    title: 'Modern Architecture',
    description: 'Discover sleek designs and innovative structures.',
    image: 'https://placehold.co/1200x600/313131/ffffff?text=Slide+1',
  },
  {
    id: 2,
    title: 'City at Night',
    description: 'Experience the vibrant energy of the city after dark.',
    image: 'https://placehold.co/1200x600/4d4d4d/ffffff?text=Slide+2',
  },
  {
    id: 3,
    title: 'Natural Landscapes',
    description: 'Explore breathtaking views and serene natural beauty.',
    image: 'https://placehold.co/1200x600/1a1a1a/ffffff?text=Slide+3',
  },
  {
    id: 4,
    title: 'Minimalist Interior',
    description: 'Find beauty in simplicity and clean design.',
    image: 'https://placehold.co/1200x600/6b6b6b/ffffff?text=Slide+4',
  },
])

const currentIndex = ref(0)
const totalSlides = computed(() => slides.value.length)
let autoPlayInterval = null

const carouselStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * 100}%)`,
}))

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % totalSlides.value
}

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + totalSlides.value) % totalSlides.value
}

function goToSlide(index) {
  currentIndex.value = index
}

function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    nextSlide()
  }, 5000)
}

function pauseAutoPlay() {
  clearInterval(autoPlayInterval)
}

function resumeAutoPlay() {
  startAutoPlay()
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  clearInterval(autoPlayInterval)
})
</script>

<style scoped>
.carousel-slides {
  transition: transform 0.5s ease-in-out;
}
</style>
