<script setup>
import CustomerGallery from './components/CustomerGallery.vue'
import DiscoverSection from './components/DiscoverSection.vue'
import TestimonialSection from './components/TestimonialSection.vue'
import Footer from './components/Footer.vue'
import HeroSection from './components/HeroSection.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <HeroSection />
    <DiscoverSection class="mt-1" />
    <TestimonialSection />
    <!-- <CustomerGallery /> -->
  </main>
  <Footer />
</template>

<style scoped></style>
