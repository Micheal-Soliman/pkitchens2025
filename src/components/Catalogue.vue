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
  { id: 1, name: 'Mattplus Catalogue', image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753783185/1_brxnap.png", link: 'https://drive.google.com/file/d/1IAOv-qlcwA8-3ivToD6avtCd-Iysoa9j/view?usp=sharing', delay: 200 },
  { id: 2, name: 'ARKOPA Catalogue', image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753783186/2_hkasno.png", link: 'https://drive.google.com/file/d/1NNhH5X-dOwpeowweccTPuTyRWjYTCdoP/view?usp=sharing', delay: 400 },
  { id: 3, name: 'Agt-Genel Catalogue', image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753783193/3_bytxfc.png", link: 'https://drive.google.com/file/d/1LrdavktUNEyxZpCBGE5MJF-6Nul7jTzM/view?usp=sharing', delay: 600 },
  { id: 4, name: 'Al Nada Counter + MDF Catalogue', image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753783189/4_cbuic4.png", link: 'https://drive.google.com/file/d/1DpmVvqfZtk1E_TZYhBUTUhaHN0_e-uz4/view?usp=sharing', delay: 600 },
  { id: 5, name: 'WOOD & WOOD Catalogue', image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753783186/5_rrd3bp.png", link: 'https://drive.google.com/file/d/1ETjwODSPBABLRxGa3H0Vpvz3NHJcSina/view?usp=sharing', delay: 600 },
  { id: 6, name: 'Decorestart Kronospan Catalogue', image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753783186/6_sz18y9.png", link: 'https://drive.google.com/file/d/1YKLdjxXDWLkQnZhy_3VmTeoQjZPLtH56/view?usp=sharing', delay: 600 },
  { id: 7, name: 'Evogloss Catalogue', image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753783187/7_z1qhae.png", link: 'https://drive.google.com/file/d/18U6KzdO_peeGiRyVOQ4zYS-UxZ-NVCuv/view?usp=sharing', delay: 600 },
  { id: 8, name: 'Glossmax Pro Catalogue', image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753783191/8_etrhic.png", link: 'https://drive.google.com/file/d/1d1ZuS7IxH0BtE1XX5myXFKAPl5MF9Q0y/view?usp=sharing', delay: 600 },
  { id: 9, name: 'GoodWood Catalogue', image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753783192/9_dharp4.png", link: 'https://drive.google.com/file/d/1QbAQOElZb-7DBpGNKXKdZRiH-bqIPyHe/view?usp=sharing', delay: 600 },
  { id: 10, name: 'Kastamonu WoodTexture Catalogue', image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753783192/10_fbiwr2.png", link: 'https://drive.google.com/file/d/1jYIxyQl7SeHuJbsJauwJkWLMrtry0COd/view?usp=sharing', delay: 600 },
  { id: 11, name: 'Lumberj PET Catalogue', image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753783192/11_calq0m.png", link: 'https://drive.google.com/file/d/10M3B5D98pghdBn8UPLQY8oV04ZrW-zc3/view?usp=sharing', delay: 600 },
  { id: 12, name: 'N-LAM Catalogue', image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753783195/12_x8ifow.png", link: 'https://drive.google.com/file/d/1z3TkmZ4VskWaLHkU_GpCfBK2MjGO6M73/view?usp=sharing', delay: 600 },
  { id: 13, name: 'POLYLAC BRO Egypt Catalogue', image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753783197/13_ocmf1o.png", link: 'https://drive.google.com/file/d/1Thca5oDLBaQj3_009PA3jQPF8UiEOkje/view?usp=sharing', delay: 600 },
  { id: 14, name: 'Superior Matt YILDIZ Catalogue', image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753783197/14_us5xit.png", link: 'https://drive.google.com/file/d/1sj6mju5e4qkZTvVdT0QOnXQYSoZ7magl/view?usp=sharing', delay: 600 },
  { id: 15, name: 'UV-LAK YILDIZ Catalogue', image: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753783196/15_cxy3xv.png", link: 'https://drive.google.com/file/d/1UOWW-cxebbHNNpp_YayNcEu4EiJ27Xii/view?usp=sharing', delay: 600 },
]);

useHead({
  title: 'Catalogue | P Kitchen',
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