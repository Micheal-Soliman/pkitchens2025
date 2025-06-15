<template>
  <div class="testimonial-slider relative">
    <div class="slider-container flex flex-col items-center">
      <p class="text-highlight uppercase text-[13px]">what our customers say</p>
      <h2 class="text-[32px] font-bold leading-none mb-4 text-icon">
        Over 35 years experience designing handmade kitchens
      </h2>

      <div class="testimonial-wrapper flex items-start justify-between mb-4 sm:mb-6">
        <!-- Left Navigation Arrow -->
        <button @click="prev" class="nav-arrow left-arrow" aria-label="Previous testimonial">
          <svg viewBox="0 0 37 71">
            <path
              d="M34.6482 70.0035L0.707107 36.0623C0.51957 35.8748 0.414214 35.6204 0.414214 35.3552C0.414214 35.09 0.51957 34.8357 0.707107 34.6481L34.6482 0.706993C34.8358 0.519457 35.0901 0.414099 35.3553 0.414099C35.6206 0.414099 35.8749 0.519457 36.0624 0.706993C36.25 0.894529 36.3553 1.14888 36.3553 1.4141C36.3553 1.67932 36.25 1.93367 36.0624 2.12121L2.82843 35.3552L36.0624 68.5892C36.25 68.7768 36.3553 69.0311 36.3553 69.2964C36.3553 69.5616 36.25 69.8159 36.0624 70.0035C35.8749 70.191 35.6206 70.2964 35.3553 70.2964C35.0901 70.2964 34.8358 70.191 34.6482 70.0035Z"
              fill="#D4B254"
            />
          </svg>
        </button>

        <!-- Testimonial Content -->
        <transition name="fade" mode="out-in">
          <div :key="currentIndex" class="testimonial-content">
            <blockquote class="quote font-light mb-4">"{{ currentTestimonial.quote }}"</blockquote>
            <cite class="author text-[15px] font-light"> {{ currentTestimonial.author }}</cite>
          </div>
        </transition>

        <!-- Right Arrow -->
        <button @click="next" class="nav-arrow right-arrow" aria-label="Next testimonial">
          <svg viewBox="0 0 37 71">
            <path
              d="M2.06233 70.0036L36.0035 36.0624C36.191 35.8749 36.2964 35.6206 36.2964 35.3553C36.2964 35.0901 36.191 34.8358 36.0035 34.6482L2.06233 0.707107C1.87479 0.51957 1.62044 0.414213 1.35522 0.414213C1.09001 0.414213 0.835654 0.51957 0.648118 0.707107C0.460581 0.894643 0.355224 1.149 0.355224 1.41421C0.355224 1.67943 0.460581 1.93378 0.648118 2.12132L33.8821 35.3553L0.648118 68.5894C0.460581 68.7769 0.355224 69.0312 0.355224 69.2965C0.355224 69.5617 0.460581 69.816 0.648118 70.0036C0.835654 70.1911 1.09001 70.2965 1.35522 70.2965C1.62044 70.2965 1.87479 70.1911 2.06233 70.0036Z"
              fill="#D4B254"
            />
          </svg>
        </button>
      </div>

      <button class="btn-primary">FREQUENTLY ASKED QUESTIONS</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const testimonials = ref([
  {
    quote:
      'Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.',
    author: 'Ann, Dundee',
  },
  {
    quote:
      'The craftsmanship is exceptional. Our new kitchen is not only beautiful but also incredibly functional. The team was professional and a pleasure to work with from start to finish.',
    author: 'John & Jane, Edinburgh',
  },
  {
    quote:
      'We are absolutely thrilled with the final result. It has completely transformed our home. The attention to detail is second to none. Highly recommended!',
    author: 'Sarah, Glasgow',
  },
])

const currentIndex = ref(0)
const currentTestimonial = computed(() => {
  return testimonials.value[currentIndex.value]
})

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
}
const prev = () => {
  currentIndex.value =
    (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length
}
</script>

<style scoped>
.testimonial-slider {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f4f0;
  padding: 5rem 2rem;
  text-align: center;
  min-height: 60vh;
}

.slider-container {
  max-width: 60%;
  width: 100%;

  h2 {
    max-width: 600px;
    line-height: 1.4;
  }
}

.testimonial-wrapper {
  width: 100%;
}

.testimonial-content {
  max-width: 600px;
  margin: 0 auto;
}

.quote {
  font-size: 18px;
  line-height: 1.4;
}

.nav-arrow {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 1rem;
  transition:
    color 0.3s ease,
    transform 0.3s ease;
}

.nav-arrow:hover {
  color: #333;
  transform: scale(1.1);
}

.nav-arrow svg {
  width: 71px;
  height: 71px;
}

@media (max-width: 991px) {
  .testimonial-slider {
    padding: 3rem 1rem;
  }

  .main-heading {
    font-size: 1.75rem;
  }

  .slider-container {
    max-width: 90%;
  }

  .testimonial-content {
    max-width: 100%;
  }

  .quote {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .testimonial-wrapper {
    flex-direction: column;
  }
  .nav-arrow {
    position: absolute;
    top: 1rem;
    padding: 0.75rem;
    border: 1px solid var(--color-highlight);
    background-color: var(--color-white);
    svg {
      width: 20px;
      height: 20px;
      stroke-width: 10;
    }
  }

  .right-arrow {
    right: 0.5rem;
  }
  .left-arrow {
    right: 4rem;
  }
}
</style>
