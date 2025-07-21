<template>
  <section class="item-gallery-wrapper">
    <div class="container">
      <h1 class="gallery-title" data-aos="fade-down">Item Gallery</h1>
      <div class="gallery-grid">
        <div
          v-for="(img, idx) in images"
          :key="idx"
          class="gallery-img-wrapper"
          :data-aos="'zoom-in'"
          :data-aos-delay="100 * idx"
        >
          <img :src="img" class="gallery-img" @click="showLightbox(idx)" />
        </div>
      </div>
      <vue-easy-lightbox :visible="visible" :imgs="images" :index="index" @hide="hideLightbox" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox';
import img1 from '@/assets/images/img-4.png';
import img2 from '@/assets/images/img-5.png';
import img3 from '@/assets/images/img-6.png';
import { useHead } from '@vueuse/head';

const images = ref([
  img1, img2, img3, img1, img2, img3
]);

const visible = ref(false);
const index = ref(0);

const showLightbox = (i) => {
  index.value = i;
  visible.value = true;
};
const hideLightbox = () => {
  visible.value = false;
};

useHead({
  title: 'Item Gallery | MK Kitchens',
  meta: [
    { name: 'description', content: 'View high-quality images of our kitchen items in the gallery. Discover luxury kitchen designs at MK Kitchens.' }
  ]
});
</script>

<style scoped>
.item-gallery-wrapper {
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
.gallery-title {
  font-size: 2.2rem;
  font-family: 'Helvetica-Bold', sans-serif;
  color: var(--color-title);
  text-align: center;
  margin-bottom: 2.5rem;
  letter-spacing: 1px;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  justify-content: center;
}
.gallery-img-wrapper {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 16px #00000014, 0 0 0 2px #d4b25433;
  background: var(--color-inactive);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}
.gallery-img-wrapper:hover {
  transform: scale(1.04) translateY(-6px);
  box-shadow: 0 8px 32px #d4b25466, 0 0 0 2px #d4b254;
}
.gallery-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  transition: filter 0.3s;
  filter: brightness(0.95) contrast(1.08);
}
@media (max-width: 991px) {
  .container {
    padding: 1.5rem 0.5rem;
  }
  .gallery-grid {
    gap: 1.2rem;
  }
}
@media (max-width: 576px) {
  .gallery-title {
    font-size: 1.3rem;
  }
  .gallery-img {
    height: 150px;
  }
}
</style> 