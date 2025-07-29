<script setup>
import { ref } from "vue";

const isMobileMenuOpen = ref(false);

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <nav class="absolute top-0 left-0 right-0 z-50">
    <div class="flex justify-center">
      <div
        class="relative w-full max-w-[var(--spacing-wrapper)] px-[var(--spacing-gutter)] lg:px-0 border-b border-border-30 flex items-center justify-between sm:h-[90px] h-16">
        <!-- Left Section -->
        <div class="flex items-center space-x-20">

          <!-- Left Nav -->
          <div class="hidden md:flex items-center space-x-10 text-white uppercase text-sm tracking-wide">
            <router-link to="/" class="nav-item">Home</router-link>
            <router-link to="/categories" class="nav-item">Categories</router-link>
            <router-link to="/catalogue" class="nav-item">Catalogue</router-link>
          </div>
        </div>

        <!-- Center Logo -->
        <div class="flex-1 flex justify-center absolute left-0 right-0 mx-auto pointer-events-none">
          <router-link to="/" class="pointer-events-auto">
            <img src="@/assets/images/brand-logo.png" alt="Logo" class="h-20 sm:h-24" />
          </router-link>
        </div>



        <!-- Right Section -->
        <div class="flex items-center space-x-14">
          <!-- Right Nav -->
          <div class="hidden md:flex items-center space-x-8 text-white uppercase text-sm tracking-wide">
            <router-link to="/about" class="nav-item">About Us</router-link>
            <router-link to="/contact" class="nav-item">Contact Us</router-link>
          </div>

          <!-- Mobile Toggle -->
          <div class="md:hidden mt-2 ml-1">
            <button @click="toggleMenu" class="text-white focus:outline-none cursor-pointer">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Dropdown -->
    <transition name="slide" mode="out-in">
      <div v-if="isMobileMenuOpen" class="md:hidden bg-white border-t border-gray-200 shadow">
        <div class="flex flex-col px-4 py-4 space-y-3 text-sm uppercase tracking-wide">
          <router-link to="/" class="hover:text-black">Home</router-link>
          <router-link to="/categories" class="hover:text-black">Categories</router-link>
          <router-link to="/catalogue" class="hover:text-black">Catalogue</router-link>
          <router-link to="/about" class="hover:text-black">About Us</router-link>
          <router-link to="/contact" class="hover:text-black">Contact Us</router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  background: #4A6052;
  /* خلفية شفافة داكنة مثل الهيدر */
  box-shadow: 0 2px 10px #00000022;
}
</style>
