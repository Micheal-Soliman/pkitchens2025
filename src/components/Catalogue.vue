<template>
  <section class="catalogue-wrapper">
    <div class="container">
      <h1 class="catalogue-title" data-aos="fade-down">Our Catalogues</h1>
      <div class="catalogue-grid">
        <div
          v-for="cat in catalogues"
          :key="cat.id"
          class="catalogue-card"
          :data-aos="'fade-up'"
          :data-aos-delay="cat.delay"
        >
          <img :src="cat.image" :alt="cat.name" class="catalogue-image" />
          <h2 class="catalogue-name">{{ cat.name }}</h2>
          <a :href="cat.link" class="btn-primary mt-2" target="_blank" rel="noopener">View Catalogue</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useHead } from '@vueuse/head';
import img1 from '@/assets/images/img-1.png';
import img2 from '@/assets/images/img-2.png';
import img3 from '@/assets/images/img-3.png';

const catalogues = ref([
  { id: 1, name: 'Modern Kitchens 2024', image: img1, link: 'https://example.com/catalogue1.pdf', delay: 200 },
  { id: 2, name: 'Classic Collection', image: img2, link: 'https://example.com/catalogue2.pdf', delay: 400 },
  { id: 3, name: 'Outdoor Luxury', image: img3, link: 'https://example.com/catalogue3.pdf', delay: 600 },
]);

useHead({
  title: 'Catalogue | MK Kitchens',
  meta: [
    { name: 'description', content: 'Download and view our latest kitchen catalogues. Explore our full range of bespoke kitchen designs.' }
  ]
});
</script>

<style scoped>
.catalogue-wrapper {
  padding-top: 90px;
  min-height: calc(100vh - 0px);
  background: #fff;
  padding-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.07);
  padding: 2.5rem 1.5rem;
}
.catalogue-title {
  font-size: 2.2rem;
  font-family: 'Helvetica-Bold', sans-serif;
  color: var(--color-title);
  text-align: center;
  margin-bottom: 2.5rem;
  letter-spacing: 1px;
}
.catalogue-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
}
.catalogue-card {
  background: var(--color-inactive);
  border-radius: 1rem;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  width: 270px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s;
}
.catalogue-card:hover {
  transform: translateY(-8px) scale(1.04);
}
.catalogue-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 0.75rem;
  margin-bottom: 1.2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.catalogue-name {
  font-size: 1.1rem;
  color: var(--color-title);
  font-family: 'Helvetica-Bold', sans-serif;
  margin-bottom: 0.7rem;
  text-align: center;
}
.btn-primary {
  margin-top: 1rem;
  font-size: 0.95rem;
  padding: 0.5rem 1.2rem;
  min-width: 110px;
  height: 38px;
  border-radius: 22px;
  letter-spacing: 2px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 991px) {
  .container {
    padding: 1.5rem 0.5rem;
  }
  .catalogue-grid {
    gap: 1.2rem;
  }
}
@media (max-width: 576px) {
  .catalogue-title {
    font-size: 1.3rem;
  }
  .catalogue-card {
    width: 100%;
    padding: 1.2rem 0.5rem;
  }
}
</style> 