<template>
  <section class="categories-wrapper">
    <div class="container">
      <h1 class="categories-title" data-aos="fade-down">Categories</h1>
      <div class="categories-grid">
        <div
          v-for="category in categories"
          :key="category.id"
          class="category-card"
          :data-aos="category.aos"
          :data-aos-delay="category.delay"
        >
          <img :src="category.image" :alt="category.name" class="category-image" />
          <h2 class="category-name">{{ category.name }}</h2>
          <router-link :to="`/category/${category.id}`" class="btn-primary mt-2">View Items</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useHead } from '@vueuse/head';

const categories = ref([
  { 
    id: 'kitchens', 
    name: 'Kitchens', 
    image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700387/kitchens/DSC05847.jpg", 
    aos: 'fade-up', 
    delay: '100' 
  },
  { 
    id: 'furniture', 
    name: 'Furniture', 
    image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753699870/furniture/30bc4637-8d5a-4d7f-96cb-cc45ed93b5bc.jpg", 
    aos: 'fade-up', 
    delay: '200' 
  },
  { 
    id: 'dressing-room', 
    name: 'Dressing Room', 
    image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753697931/dressing-room/A67I6969-Edit.jpg", 
    aos: 'fade-up', 
    delay: '300' 
  },
  { 
    id: 'tv-unit', 
    name: 'TV Units', 
    image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753697931/dressing-room/A67I6969-Edit.jpg", // Placeholder
    aos: 'fade-up', 
    delay: '400' 
  },
]);

useHead({
  title: 'Categories | P Kitchen',
  meta: [
    { name: 'description', content: 'Browse our kitchen categories: Modern, Classic, Outdoor and more. Find your perfect kitchen style at P Kitchen.' }
  ]
});
</script>

<style scoped>
.categories-wrapper {
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
.categories-title {
  font-size: 2.5rem;
  font-family: 'Helvetica-Bold', sans-serif;
  color: var(--color-title);
  text-align: center;
  margin-bottom: 2.5rem;
  letter-spacing: 1px;
}
.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 1.5rem;
  justify-content: center;
}
.category-card {
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
.category-card:hover {
  transform: translateY(-8px) scale(1.04);
}
.category-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 0.75rem;
  margin-bottom: 1.2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.category-name {
  font-size: 1.2rem;
  color: var(--color-title);
  font-family: 'Helvetica-Bold', sans-serif;
  margin-bottom: 0.7rem;
  text-align: center;
}
.btn-primary {
  margin-top: 1rem;
}
@media (max-width: 991px) {
  .container {
    padding: 1.5rem 0.5rem;
  }
  .categories-grid {
    gap: 1.2rem;
  }
}
@media (max-width: 576px) {
  .categories-title {
    font-size: 1.5rem;
  }
  .category-card {
    width: 100%;
    padding: 1.2rem 0.5rem;
  }
}
</style>