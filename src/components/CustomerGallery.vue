<template>
  <div class="gallery-section">
    <h2 class="heading font-bold text-title">Customer Gallery</h2>
    <div class="image-grid">
      <div 
        v-for="(item, idx) in galleryItems" 
        :key="idx" 
        class="gallery-item"
      >
        <img
          :src="item.image"
          class="gallery-image"
          :alt="`${item.name} gallery`"
          @click="() => showLightbox(idx)"
        />
        <div class="item-overlay">
          <h3 class="item-title">{{ item.name }}</h3>
        </div>
      </div>
    </div>
    <router-link to="/categories" class="btn-primary">View More</router-link>

    <vue-easy-lightbox
      :visible="visible"
      :imgs="lightboxImages"
      :index="index"
      @hide="hideLightbox"
    ></vue-easy-lightbox>
  </div>
</template>

<script setup>
import VueEasyLightbox from "vue-easy-lightbox";
import { ref, computed } from "vue";

const visible = ref(false);
const index = ref(0);

const galleryItems = ref([
  { 
    id: 'kitchens', 
    name: 'Kitchens', 
    image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700387/kitchens/DSC05847.jpg",
    gallery: [
      "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700387/kitchens/DSC05847.jpg",
      "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700399/kitchens/DSC05848.jpg",
      "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700408/kitchens/DSC05849.jpg",
      "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700419/kitchens/DSC05850.jpg"
    ]
  },
  { 
    id: 'furniture', 
    name: 'Furniture', 
    image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753699870/furniture/30bc4637-8d5a-4d7f-96cb-cc45ed93b5bc.jpg",
    gallery: [
      "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753699870/furniture/30bc4637-8d5a-4d7f-96cb-cc45ed93b5bc.jpg",
      "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753699872/furniture/40cc26e4-21c5-4421-949b-5be0d5bc02e8.jpg",
      "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753699873/furniture/678e3c81-204c-4c80-8dfe-4590600f95c5.jpg",
      "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753699874/furniture/c75d7bbf-da1f-490b-852f-92608f21098a.jpg"
    ]
  },
  { 
    id: 'dressing-room', 
    name: 'Dressing Room', 
    image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753697931/dressing-room/A67I6969-Edit.jpg",
    gallery: [
      "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753697931/dressing-room/A67I6969-Edit.jpg",
      "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753697966/dressing-room/A67I6979.jpg",
      "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753697999/dressing-room/A67I6989.jpg",
      "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753698064/dressing-room/A67I6992.jpg"
    ]
  },
  { 
    id: 'tv-unit', 
    name: 'TV Units', 
    image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753792111/Copy_of_A29I5892-Edit_st93vm.jpg", // Placeholder
    gallery: [
      "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753792111/Copy_of_A29I5892-Edit_st93vm.jpg"
    ]
  }
]);

const lightboxImages = computed(() => {
  return galleryItems.value.map(item => item.image);
});

const showLightbox = (imageIndex) => {
  index.value = imageIndex;
  visible.value = true;
};

const hideLightbox = () => {
  visible.value = false;
};
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

.heading {
  font-size: 2rem;
  line-height: 1.3;
  margin-bottom: 1.5rem;
  text-align: center;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.2rem;
  width: 100%;
  max-width: 1200px;
}

.gallery-item {
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
}

.gallery-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.05);
}

.item-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  padding: 1.5rem 1rem 1rem;
  color: white;
}

.item-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  text-shadow: 0 1px 3px rgba(0,0,0,0.5);
}

.btn-primary {
  margin-top: 2rem;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  background-color: #8C7B60;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease; /* Changed from background-color to all for smoother transitions */
  border: 1px solid transparent; /* Added initial transparent border to prevent layout shift */
}

.btn-primary:hover {
  background-color: #B5A58A; /* Changed to white for better contrast */
}

@media (max-width: 900px) {
  .image-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  .gallery-image {
    height: 170px;
  }
}
@media (max-width: 600px) {
  .image-grid {
    grid-template-columns: 1fr;
    gap: 0.7rem;
  }
  .gallery-image {
    height: 140px;
  }
  .heading {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
}
</style>