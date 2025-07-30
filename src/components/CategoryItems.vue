<template>
  <section class="category-items-wrapper">
    <div class="container">
      <div class="stepper">
        <div v-for="(category, index) in categories" :key="category.id"
          :class="['step', category.id === categoryId ? 'active' : '']">
          <router-link :to="`/category/${category.id}`">{{ index + 1 }}. {{ category.name }}</router-link>
        </div>
      </div>

      <h1 class="category-items-title" data-aos="fade-down">{{ categoryName }}</h1>
      <div class="items-grid">
        <div v-for="item in items" :key="item.id" class="item-card" :data-aos="item.aos" :data-aos-delay="item.delay">
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
import { useHead } from '@vueuse/head';

const route = useRoute();
const categoryId = route.params.id;

// Categories data
const categories = [
  { id: 'kitchens', name: 'Kitchens' },
  { id: 'furniture', name: 'Furniture' },
  { id: 'dressing-room', name: 'Dressing Rooms' },
  { id: 'tv-unit', name: 'TV Units' },
  { id: 'bath-room', name: 'Bathrooms' },
  { id: 'living-room', name: 'Living Rooms' },
];

// Complete data from your JSON
const allItems = {
  'kitchens': [
    {
      id: 'ARKOPA_Olive green',
      name: 'ARKOPA Olive green',
      image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700387/kitchens/DSC05847.jpg",
      aos: 'fade-up',
      delay: '100'
    },
    {
      id: 'Glossy Kitchen',
      name: 'Glossy Kitchen',
      image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700585/kitchens/1.jpg",
      aos: 'fade-up',
      delay: '200'
    },
    {
      id: 'LG MATT FROM _COUNTER GOODWOOD',
      name: 'LG Matt Counter Goodwood',
      image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700678/kitchens/DSC05594.jpg",
      aos: 'fade-up',
      delay: '300'
    },
    {
      id: 'Matt plus _',
      name: 'Matt Plus',
      image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700781/kitchens/IMG_6671.jpg",
      aos: 'fade-up',
      delay: '400'
    },
    {
      id: 'SoftTouch Material_Gray',
      name: 'SoftTouch Gray',
      image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700969/kitchens/Copy_of_A29I5740-Edit.jpg",
      aos: 'fade-up',
      delay: '500'
    },
    {
      id: 'UV-LAK _Material_showroom',
      name: 'UV LAK Material Showroom',
      image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789478/Copy_of_DSC06030_o8r8l6.jpg",
      aos: 'fade-up',
      delay: '600'
    },
    {
      id: 'UV-LAK Material _',
      name: 'UV LAK Material',
      image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753791783/Copy_of_Copy_of_CANO9657_z4jabs.jpg",
      aos: 'fade-up',
      delay: '700'
    },
    {
      id: 'Lumber-J Matt',
      name: 'Lumber-J Matt',
      image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753884726/TFQ00018_xhymwl.jpg",
      aos: 'fade-up',
      delay: '800'
    },
  ],
  'furniture': [
    {
      id: 'furniture-collection',
      name: 'Furniture Collection',
      image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753699870/furniture/30bc4637-8d5a-4d7f-96cb-cc45ed93b5bc.jpg",
      aos: 'fade-up',
      delay: '100'
    }
  ],
  'dressing-room': [
    {
      id: 'Dressing_Kronospan',
      name: 'Kronospan Material',
      image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753697931/dressing-room/A67I6969-Edit.jpg",
      aos: 'fade-up',
      delay: '100'
    },
    {
      id: 'Dressing_Starwood',
      name: 'Starwood',
      image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753698180/dressing-room/DSC05213.jpg",
      aos: 'fade-up',
      delay: '200'
    }
  ],
  'tv-unit': [
    {
      id: 'Tv-Unit',
      name: 'TV Unit Collection',
      image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753697931/dressing-room/A67I6969-Edit.jpg", // Placeholder
      aos: 'fade-up',
      delay: '100'
    },
  ],
  'bath-room': [
    {
      id: 'Bath-Rooms',
      name: 'Bathrooms Collection',
      image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753878536/TFQ00049_ljlae2.jpg", // Placeholder
      aos: 'fade-up',
      delay: '100'
    },
  ],
  'living-room': [
    {
      id: 'Living-Rooms',
      name: 'Living Rooms Collection',
      image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753879227/TFQ00037_v5vadm.jpg", // Placeholder
      aos: 'fade-up',
      delay: '100'
    },
  ],
};

const categoryName = computed(() => {
  const cat = categories.find(c => c.id === categoryId);
  return cat ? cat.name : 'Category';
});

const items = computed(() => allItems[categoryId] || []);

useHead({
  title: `${categoryName.value} | P Kitchen`,
  meta: [
    { name: 'description', content: `Explore items in the ${categoryName.value} category at P Kitchen.` }
  ]
});
</script>

<style scoped>
.category-items-wrapper {
  padding-top: 90px;
  min-height: calc(100vh - 0px);
  background: linear-gradient(to bottom, #8C7B60, #B5A58A);
  padding-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  background: #B5A58A;
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px rgba(255, 255, 255, 0.1);
  padding: 2.5rem 1.5rem;
  margin-top: 50px;
}

.category-items-title {
  font-size: 2.2rem;
  font-family: 'Helvetica-Bold', sans-serif;
  color:white;
  text-align: center;
  margin-bottom: 2.5rem;
  letter-spacing: 1px;
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  justify-content: center;
}

.item-card {
  background: var(--color-inactive);
  border-radius: 1rem;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  width: 270px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07);
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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
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

.stepper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.step {
  padding: 0.6rem 1.2rem;
  border-radius: 2rem;
  background-color: #f1f1f1;
  color: #333;
  font-weight: bold;
  font-size: 0.95rem;
  transition: all 0.3s;
}

.step a {
  text-decoration: none;
  color: inherit;
}

.step.active {
  background-color: #8C7B60;
  color: #fff;
}

.step:hover {
  background-color: #8C7B60;
  color: #fff;
}
</style>