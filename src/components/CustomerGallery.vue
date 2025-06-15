<template>
  <div class="gallery-section">
    <h2 class="text-[32px] font-bold text-title">Customer Gallery</h2>
    <div class="image-grid">
      <img
        v-for="(image, idx) in images"
        :key="idx"
        :src="image"
        class="gallery-image"
        alt="Customer kitchen gallery"
        @click="() => showLightbox(idx)"
      />
    </div>
    <button class="btn-primary">View More</button>

    <vue-easy-lightbox
      :visible="visible"
      :imgs="images"
      :index="index"
      @hide="hideLightbox"
    ></vue-easy-lightbox>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import image1 from '@/assets/images/img-6.png'
import image2 from '@/assets/images/img-3.png'
import image3 from '@/assets/images/img-4.png'
import image4 from '@/assets/images/img-5.png'
import VueEasyLightbox from 'vue-easy-lightbox'

const visible = ref(false)
const index = ref(0)

const images = ref([image4, image1, image2, image3])

const showLightbox = (imageIndex) => {
  index.value = imageIndex
  visible.value = true
}

const hideLightbox = () => {
  visible.value = false
}
</script>

<style scoped>
.gallery-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 6rem 0;
  padding: 0 1rem;
  background-color: var(--color-white);
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 1100px;
}

.gallery-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.gallery-image:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .image-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .image-grid {
    grid-template-columns: 1fr;
  }
  .gallery-image {
    height: 300px;
  }
}
</style>
