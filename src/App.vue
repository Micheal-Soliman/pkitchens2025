<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

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
    <router-view />
  </main>
  <Footer />
</template>

<style scoped></style>
