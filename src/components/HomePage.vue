<template>
  <div style="margin-top:90px;">
    <HeroSection />
    <DiscoverSection class="mt-1" data-aos="fade-right" data-aos-delay="200" />
    <!-- <TestimonialSection data-aos="fade-up" data-aos-offset="150" /> -->
    <CustomerGallery />
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head';
import HeroSection from './HeroSection.vue';
import DiscoverSection from './DiscoverSection.vue';
import TestimonialSection from './TestimonialSection.vue';
import CustomerGallery from './CustomerGallery.vue';
useHead({
  title: 'P Kitchen | Home',
  meta: [
    { name: 'description', content: 'Discover bespoke, luxury handmade kitchens. Explore our gallery, testimonials, and more at P Kitchen.' }
  ]
});
</script> 