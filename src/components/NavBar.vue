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
        class="relative w-full max-w-[var(--spacing-wrapper)] px-[var(--spacing-gutter)] lg:px-0 border-b border-border-30 flex items-center justify-between sm:h-[90px] h-16"
      >
        <!-- Left Section -->
        <div class="flex items-center space-x-20">
          <div class="hidden lg:flex items-center space-x-4">
            <a href="#" class="hover:scale-120 transition-transform">
              <img src="@/assets/images/facebook.svg" alt="Facebook" />
            </a>
            <a href="#" class="hover:scale-120 transition-transform">
              <img src="@/assets/images/twitter.svg" alt="Twitter" />
            </a>
            <a href="#" class="hover:scale-120 transition-transform">
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
            <img src="@/assets/images/brand-logo.svg" alt="Logo" class="h-8" />
          </a>
        </div>

        <!-- Right Section -->
        <div class="flex items-center space-x-14">
          <!-- Right Nav -->
          <div
            class="hidden md:flex items-center space-x-8 text-white uppercase text-sm tracking-wide"
          >
            <a href="#" class="nav-item">About Us</a>
            <a href="#" class="nav-item">Gallery</a>
          </div>

          <!-- Cart Button -->
          <div class="md:flex mr-0">
            <button class="btn-cart flex items-center gap-2">
              <span class="hidden md:block">My Order</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path
                  d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
                />
              </svg>
            </button>
          </div>

          <!-- Mobile Toggle -->
          <div class="md:hidden mt-2 ml-1">
            <button @click="toggleMenu" class="text-white focus:outline-none cursor-pointer">
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
    <transition name="slide" mode="out-in">
      <div v-if="isMobileMenuOpen" class="md:hidden bg-white border-t border-gray-200 shadow">
        <div class="flex flex-col px-4 py-4 space-y-3 text-sm uppercase tracking-wide">
          <a href="#" class="hover:text-black">Shop</a>
          <a href="#" class="hover:text-black">Plan My Kitchen</a>
          <a href="#" class="hover:text-black">About Us</a>
          <a href="#" class="hover:text-black">Gallery</a>
          <a href="#" class="hover:text-black">My Order</a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style lang="scss" scoped></style>
