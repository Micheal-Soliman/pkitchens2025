<template>
  <div class="mt-16 sm:mt-20 md:mt-[90px] overflow-hidden bg-gradient-to-b from-[#8C7B60] to-[#B5A58A]">
    <HeroSection />
    <DiscoverSection class="mt-1" data-aos="fade-right" data-aos-delay="200" />
    <TestimonialSection data-aos="fade-left" data-aos-offset="150" />
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