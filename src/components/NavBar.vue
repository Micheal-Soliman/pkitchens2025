<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <nav class="absolute top-0 left-0 right-0 z-50">
    <div class="flex justify-center">
      <div
        class="relative w-full max-w-[var(--spacing-wrapper)] px-[var(--spacing-gutter)] lg:px-0 border-b border-white flex items-center justify-between sm:h-[90px] h-16"
      >
        <!-- Left Section -->
        <div class="flex items-center space-x-20">
          <div class="hidden lg:flex items-center space-x-4">
            <a href="#">
              <img src="@/assets/images/facebook.svg" alt="Facebook" />
            </a>
            <a href="#">
              <img src="@/assets/images/twitter.svg" alt="Twitter" />
            </a>
            <a href="#">
              <img src="@/assets/images/instagram.svg" alt="Instagram" />
            </a>
          </div>

          <!-- Left Nav -->
          <div
            class="hidden md:flex items-center space-x-10 text-white uppercase text-sm tracking-wide"
          >
            <a href="#" class="nav-item">Shop</a>
            <a href="#" class="nav-item">Plan My Kitchen</a>
          </div>
        </div>

        <!-- Center Logo -->
        <div class="absolute left-4 md:static md:flex-shrink-0 md:mx-auto">
          <a href="#">
            <img src="@/assets/images/brand-logo.svg" alt="Logo" class="h-6" />
          </a>
        </div>

        <!-- Right Section -->
        <div class="flex items-center space-x-20">
          <!-- Right Nav -->
          <div
            class="hidden md:flex items-center space-x-8 text-white uppercase text-sm tracking-wide"
          >
            <a href="#" class="nav-item">About Us</a>
            <a href="#" class="nav-item">Gallery</a>
          </div>

          <!-- Cart Button -->
          <div class="md:flex mr-0 md:mr-2">
            <button class="btn-cart flex items-center gap-2">
              <span class="hidden md:block">My Order</span>
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H17M9 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM20.5 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
            </button>
          </div>

          <!-- Mobile Toggle -->
          <div class="md:hidden mt-1">
            <button @click="toggleMenu" class="text-white focus:outline-none">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Dropdown -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden bg-white text-gray-700 border-t border-gray-200 shadow"
    >
      <div class="flex flex-col px-4 py-4 space-y-3 text-sm uppercase tracking-wide">
        <a href="#" class="hover:text-black">Shop</a>
        <a href="#" class="hover:text-black">Plan My Kitchen</a>
        <a href="#" class="hover:text-black">About Us</a>
        <a href="#" class="hover:text-black">Gallery</a>
        <button class="btn-dark-alt w-max mt-2">My Order</button>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
