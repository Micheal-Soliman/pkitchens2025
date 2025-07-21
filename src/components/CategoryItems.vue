<template>
  <section class="category-items-wrapper">
    <div class="container">
      <h1 class="category-items-title" data-aos="fade-down">{{ categoryName }}</h1>
      <div class="items-grid">
        <div
          v-for="item in items"
          :key="item.id"
          class="item-card"
          :data-aos="item.aos"
          :data-aos-delay="item.delay"
        >
          <img :src="item.image" :alt="item.name" class="item-image" />
          <h2 class="item-name">{{ item.name }}</h2>
          <router-link :to="`/item/${item.id}`" class="btn-primary mt-2">View Images</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import img1 from '@/assets/images/img-4.png';
import img2 from '@/assets/images/img-5.png';
import img3 from '@/assets/images/img-6.png';
import { useHead } from '@vueuse/head';

const route = useRoute();
const categoryId = route.params.id;

// بيانات تجريبية للكاتيجوريز
const categories = [
  { id: '1', name: 'Modern Kitchens' },
  { id: '2', name: 'Classic Kitchens' },
  { id: '3', name: 'Outdoor Kitchens' },
];

const allItems = {
  '1': [
    { id: 101, name: 'Modern White', image: img1, aos: 'fade-up', delay: '200' },
    { id: 102, name: 'Modern Black', image: img2, aos: 'fade-up', delay: '400' },
    { id: 103, name: 'Modern Wood', image: img3, aos: 'fade-up', delay: '600' },
  ],
  '2': [
    { id: 201, name: 'Classic Oak', image: img2, aos: 'fade-up', delay: '200' },
    { id: 202, name: 'Classic Cream', image: img3, aos: 'fade-up', delay: '400' },
  ],
  '3': [
    { id: 301, name: 'Outdoor BBQ', image: img1, aos: 'fade-up', delay: '200' },
    { id: 302, name: 'Outdoor Bar', image: img3, aos: 'fade-up', delay: '400' },
  ],
};

const categoryName = computed(() => {
  const cat = categories.find(c => c.id === categoryId);
  return cat ? cat.name : 'Category';
});

const items = computed(() => allItems[categoryId] || []);

useHead({
  title: `${categoryName.value} | MK Kitchens`,
  meta: [
    { name: 'description', content: `Explore items in the ${categoryName.value} category at MK Kitchens.` }
  ]
});
</script>

<style scoped>
.category-items-wrapper {
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
.category-items-title {
  font-size: 2.2rem;
  font-family: 'Helvetica-Bold', sans-serif;
  color: var(--color-title);
  text-align: center;
  margin-bottom: 2.5rem;
  letter-spacing: 1px;
}
.items-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
}
.item-card {
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
.item-card:hover {
  transform: translateY(-8px) scale(1.04);
}
.item-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 0.75rem;
  margin-bottom: 1.2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.item-name {
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
  .items-grid {
    gap: 1.2rem;
  }
}
@media (max-width: 576px) {
  .category-items-title {
    font-size: 1.3rem;
  }
  .item-card {
    width: 100%;
    padding: 1.2rem 0.5rem;
  }
}
</style> 