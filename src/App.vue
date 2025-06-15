<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

import CustomerGallery from "./components/CustomerGallery.vue";
import DiscoverSection from "./components/DiscoverSection.vue";
import TestimonialSection from "./components/TestimonialSection.vue";
import Footer from "./components/Footer.vue";
import HeroSection from "./components/HeroSection.vue";
import NavBar from "./components/NavBar.vue";

// Initialize AOS
onMounted(() => {
  AOS.init({
    duration: 800,
    once: false,
    mirror: true,
    offset: 120,
    easing: "ease-in-out",
  });
});
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <HeroSection />
    <DiscoverSection class="mt-1" data-aos="fade-right" data-aos-delay="200" />
    <TestimonialSection data-aos="fade-up" data-aos-offset="150" />
    <CustomerGallery data-aos="zoom-in" />
  </main>
  <Footer />
</template>

<style scoped></style>
