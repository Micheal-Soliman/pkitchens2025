<script setup>
import { ref, nextTick } from "vue";

const isMobileMenuOpen = ref(false);

const toggleMenu = async () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  await nextTick();
};
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-[#4A6052] shadow-md">
    <div class="max-w-[var(--spacing-wrapper)] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16 sm:h-[90px]">
        <!-- Left Nav (Desktop) -->
        <div class="hidden md:flex items-center space-x-6 text-white uppercase text-sm">
          <router-link to="/" class="nav-item" exact-active-class="active-link">Home</router-link>
          <router-link to="/categories" class="nav-item" exact-active-class="active-link">Categories</router-link>
          <router-link to="/catalogue" class="nav-item" exact-active-class="active-link">Catalogue</router-link>
        </div>

        <!-- Center Logo -->
        <div class="flex justify-center flex-1 absolute left-0 right-0 pointer-events-none">
          <router-link to="/" class="pointer-events-auto">
            <img src="@/assets/images/brand-logo.png" alt="Logo" class="h-14 sm:h-20" />
          </router-link>
        </div>

        <!-- Right Nav + Mobile Toggle -->
        <div class="flex items-center space-x-6">
          <div class="hidden md:flex text-white uppercase text-sm space-x-6">
            <router-link to="/about" class="nav-item" exact-active-class="active-link">About Us</router-link>
            <router-link to="/contact" class="nav-item" exact-active-class="active-link">Contact Us</router-link>
          </div>
          <!-- Mobile Toggle -->
          <div class="md:hidden">
            <button @click="toggleMenu" class="text-white focus:outline-none">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="mobile-fade">
      <div v-if="isMobileMenuOpen" class="md:hidden bg-white text-gray-800 shadow-lg">
        <div class="flex flex-col px-4 py-4 space-y-3 text-sm uppercase tracking-wide">
          <router-link to="/" @click="toggleMenu" exact-active-class="mobile-active-link">Home</router-link>
          <router-link to="/categories" @click="toggleMenu" exact-active-class="mobile-active-link">Categories</router-link>
          <router-link to="/catalogue" @click="toggleMenu" exact-active-class="mobile-active-link">Catalogue</router-link>
          <router-link to="/about" @click="toggleMenu" exact-active-class="mobile-active-link">About Us</router-link>
          <router-link to="/contact" @click="toggleMenu" exact-active-class="mobile-active-link">Contact Us</router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped lang="scss">
.nav-item {
  position: relative;
  transition: color 0.3s;
}

.nav-item:hover {
  color: #ddd;
}

// ✅ Link Active Style (Desktop)
.active-link {
  font-weight: bold;
  color: #B5A58A !important;
}

// ✅ Link Active Style (Mobile)
.mobile-active-link {
  font-weight: bold;
  color: #4A6052;
}

// Mobile Menu Transition
.mobile-fade-enter-from,
.mobile-fade-leave-to {
  max-height: 0;
  opacity: 0;
}

.mobile-fade-enter-active,
.mobile-fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.mobile-fade-enter-to,
.mobile-fade-leave-from {
  max-height: 300px;
  opacity: 1;
}
</style>
