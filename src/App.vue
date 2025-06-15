<script setup>
import { onMounted } from 'vue' // Import onMounted hook
import AOS from 'aos' // Import AOS library
import 'aos/dist/aos.css' // Import AOS CSS (important!)

import CustomerGallery from './components/CustomerGallery.vue'
import DiscoverSection from './components/DiscoverSection.vue'
import TestimonialSection from './components/TestimonialSection.vue'
import Footer from './components/Footer.vue'
import HeroSection from './components/HeroSection.vue'
import NavBar from './components/NavBar.vue'

// Initialize AOS
onMounted(() => {
  AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
    offset: 100,
    easing: 'ease-in-out',
  })
})
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <!-- Add data-aos attributes to elements you want to animate on scroll -->
    <HeroSection />
    <DiscoverSection class="mt-1" data-aos="fade-right" data-aos-delay="200" />
    <TestimonialSection data-aos="fade-up" data-aos-offset="150" />
    <CustomerGallery data-aos="zoom-in" />
  </main>
  <Footer />
</template>

<style scoped>
/*
  This style block remains scoped for App.vue specific styles.
  AOS CSS is imported globally in the <script setup> block, so it applies everywhere.
*/
</style>
