<template>
  <div class="hero-slider" @mouseenter="pauseAutoPlay" @mouseleave="resumeAutoPlay">
    <div class="carousel-wrapper overflow-hidden w-full h-full">
      <div class="slides-container" :style="carouselStyle">
        <div
          v-for="slide in slides"
          :key="slide.id"
          class="slide"
          :style="{ backgroundImage: `url(${slide.image})` }"
        >
          <div class="slide-overlay"></div>
          <div class="slide-content">
            <p class="font-body pre-heading uppercase mb-2">{{ slide.preHeading }}</p>
            <h1 class="slide-heading" v-html="slide.mainHeading"></h1>
            <button class="btn-primary mx-auto">ORDER NOW</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <button @click="prevSlide" class="nav-arrow prev-arrow" aria-label="Previous slide">
      <svg viewBox="0 0 37 71" stroke-width="">
        <path
          d="M34.6482 70.0035L0.707107 36.0623C0.51957 35.8748 0.414214 35.6204 0.414214 35.3552C0.414214 35.09 0.51957 34.8357 0.707107 34.6481L34.6482 0.706993C34.8358 0.519457 35.0901 0.414099 35.3553 0.414099C35.6206 0.414099 35.8749 0.519457 36.0624 0.706993C36.25 0.894529 36.3553 1.14888 36.3553 1.4141C36.3553 1.67932 36.25 1.93367 36.0624 2.12121L2.82843 35.3552L36.0624 68.5892C36.25 68.7768 36.3553 69.0311 36.3553 69.2964C36.3553 69.5616 36.25 69.8159 36.0624 70.0035C35.8749 70.191 35.6206 70.2964 35.3553 70.2964C35.0901 70.2964 34.8358 70.191 34.6482 70.0035Z"
        />
      </svg>
    </button>
    <button @click="nextSlide" class="nav-arrow next-arrow" aria-label="Next slide">
      <svg viewBox="0 0 37 71">
        <path
          d="M2.06233 70.0036L36.0035 36.0624C36.191 35.8749 36.2964 35.6206 36.2964 35.3553C36.2964 35.0901 36.191 34.8358 36.0035 34.6482L2.06233 0.707107C1.87479 0.51957 1.62044 0.414213 1.35522 0.414213C1.09001 0.414213 0.835654 0.51957 0.648118 0.707107C0.460581 0.894643 0.355224 1.149 0.355224 1.41421C0.355224 1.67943 0.460581 1.93378 0.648118 2.12132L33.8821 35.3553L0.648118 68.5894C0.460581 68.7769 0.355224 69.0312 0.355224 69.2965C0.355224 69.5617 0.460581 69.816 0.648118 70.0036C0.835654 70.1911 1.09001 70.2965 1.35522 70.2965C1.62044 70.2965 1.87479 70.1911 2.06233 70.0036Z"
        />
      </svg>
    </button>

    <!-- Slider indicator -->
    <div class="indicator-navigation">
      <button
        v-for="(slide, index) in slides"
        :key="`line-${slide.id}`"
        @click="goToSlide(index)"
        class="line"
        :class="{ active: currentIndex === index }"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSlider } from '@/composables/useSlider'
import cover from '@/assets/images/cover.png'

const slides = ref([
  {
    id: 1,
    image: cover,
    preHeading: 'DESIGN AND ORDER YOUR NEW KITCHEN ONLINE TODAY',
    mainHeading: 'Bespoke & made to measure<br>handmade kitchen design',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1722649957265-372809976610?q=80&w=2940&auto=format&fit=crop',
    preHeading: 'AWARD-WINNING CRAFTSMANSHIP',
    mainHeading: 'Experience the Art of<br>Custom Kitchens',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?q=80&w=2940&auto=format&fit=crop',
    preHeading: 'SUSTAINABLE & ETHICAL',
    mainHeading: 'Luxury Kitchens with a<br>Conscience',
  },
])

// slider composable
const {
  currentIndex,
  carouselStyle,
  nextSlide,
  prevSlide,
  goToSlide,
  pauseAutoPlay,
  resumeAutoPlay,
} = useSlider(slides, { autoplay: true, interval: 5000 })
</script>

<style scoped>
.hero-slider {
  position: relative;
  width: 100%;
  height: 90vh;
  color: var(--color-white);
}

.slides-container {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.7s ease-in-out;
}

.slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

.slide-content {
  position: relative;
  text-align: center;
  z-index: 2;
  padding: 1rem;
}

.pre-heading {
  text-shadow: 0 0 4px var(--color-icon);
  font-weight: 300;
}

.slide-heading {
  font-family: 'Helvetica-Bold', sans-serif;
  font-size: 52px;
  font-weight: 700;
  line-height: 58px;
  letter-spacing: -1px;
  margin-bottom: 1.4rem;
  text-shadow: 0 0 25px #00000080;
}

.nav-arrow {
  position: absolute;
  top: 50%;
  border-radius: var(--radius-pill);
  padding: 0.75rem;
  cursor: pointer;
  border: 2px solid var(--color-highlight);
  background-color: var(--color-white);
  transition:
    color 0.3s ease,
    transform 0.3s ease,
    opacity 0.3s ease-in-out;
  svg {
    width: 20px;
    height: 20px;
    stroke: var(--color-highlight);
    stroke-width: 5;
  }
  opacity: 0;
}

.hero-slider:hover .nav-arrow {
  opacity: 1;
}

.nav-arrow:hover {
  transform: scale(1.1);
}

.prev-arrow {
  left: 1.5rem;
}

.next-arrow {
  right: 1.5rem;
}

.indicator-navigation {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.75rem;
  z-index: 3;
}

.line {
  width: 50px;
  height: 5px;
  border-radius: 3px;
  background-color: var(--color-white);
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.line.active {
  background-color: var(--color-highlight);
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .slide-heading {
    font-size: 2rem;
  }
  .hero-slider {
    height: 70vh;
  }
  .nav-arrow {
    padding: 0.75rem;
    font-size: 1.25rem;
  }
}

@media (max-width: 576px) {
  .nav-arrow {
    top: 91%;
  }
}
</style>
