<template>
  <div class="discover flex flex-col lg:flex-row gap-8 items-center">
    <!-- النص -->
    <div class="info-wrapper w-full lg:w-1/2 px-4">
      <h2 class="text-3xl lg:text-4xl font-bold text-title mt-2 mb-4 heading">
        {{ mainTitle }}
        <br />
        <transition name="slide-fade" mode="out-in">
          <span :key="currentText" class="subtitle-block">
            {{ currentText }}
          </span>
        </transition>
      </h2>
      <p class="body-text font-normal mb-6">
        We bring your kitchen dreams to life — with smart designs, quality craftsmanship, and attention to every detail.
        <br />
        Where kitchen dreams come true. Designed to fit your life, your space, and your style.
        <br />
        <span style="display: block; margin-top: 0.5rem">
          At P.Kitchen, we make kitchen dreams come true - with thoughtful design, quality craftsmanship, and a passion for every detail.
        </span>
      </p>
      <router-link to="/contact" class="btn-primary btn-discover-small">Contact Us</router-link>
    </div>

    <!-- الفيديو -->
    <div class="video-wrapper w-full lg:w-1/2 px-4">
      <div class="responsive-video">
        <video
          controls
          muted
          playsinline
        >
          <source src="https://res.cloudinary.com/dmt7nqvc0/video/upload/v1753879865/P_KITCHEN_-_RAWD_FINALLLLLLLLLL_hwdnhx.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const mainTitle = ref('Your Kitchen, Your Story.');
const texts = [
  'Designed for Living. Built for You.',
  'Tailored to Your Style.',
  'Crafted with Passion.',
  'Every Detail Matters.',
];
const currentText = ref(texts[0]);
let index = 0;

onMounted(() => {
  setInterval(() => {
    index = (index + 1) % texts.length;
    currentText.value = texts[index];
  }, 4000);
});
</script>

<style scoped>
/* Layout */
.discover {
  padding: 2rem;
  background: transparent;
  align-items: center;
}

.heading {
  font-size: 42px;
  line-height: 52px;
  font-family: "Helvetica-Bold", sans-serif;
  color: white;
}

.subtitle-block {
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 0.5rem;
  color: #f3f3f3;
  display: block;
}

.body-text {
  font-size: 16px;
  line-height: 30px;
  color: white;
  max-width: 100%;
}

/* Responsive Video Container */
.responsive-video {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 ratio */
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.responsive-video video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

/* Button */
.btn-discover-small {
  width: auto !important;
  padding: 1.3em 2em !important;
  font-size: 1.08rem !important;
  border-radius: 20px !important;
  letter-spacing: 1.2px !important;
  display: inline-block !important;
  line-height: 1.2 !important;
  background-color: #8C7B60;
  color: white;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.btn-discover-small:hover {
  background-color: #B5A58A;
}

/* Animations */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.6s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

/* Responsive Tweaks */
@media (max-width: 991px) {
  .discover {
    flex-direction: column;
    gap: 2.5rem;
    text-align: center;
  }

  .heading {
    font-size: 32px;
    line-height: 40px;
  }

  .body-text {
    font-size: 14.5px;
    line-height: 24px;
    max-width: 100%;
  }

  .btn-discover-small {
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .heading {
    font-size: 20px;
    line-height: 28px;
  }

  .body-text {
    font-size: 13px;
    line-height: 20px;
  }

  .btn-discover-small {
    font-size: 0.85rem !important;
    padding: 0.75em 1.2em !important;
  }

  .info-wrapper {
    text-align: center;
  }
}
</style>
