<template>
  <section class="about-us-wrapper">
    <div class="container about-us-section">
      <h1 class="about-title" data-aos="fade-down">About Us</h1>
      <p class="about-description" data-aos="fade-up" data-aos-delay="200">
        Welcome to MK Kitchens!<br />
        We are passionate about creating bespoke, handmade kitchens that combine beauty, functionality, and sustainability. With over 35 years of experience, our team of expert craftsmen and designers work closely with you to bring your dream kitchen to life.
      </p>
      <div class="about-content">
        <div class="about-image" data-aos="zoom-in-right" data-aos-delay="400">
          <img src="@/assets/images/img-2.png" alt="Our Team" />
        </div>
        <div class="about-text" data-aos="fade-left" data-aos-delay="600">
          <h2>Our Story</h2>
          <p>
            Founded in 1988, MK Kitchens has grown from a small workshop to a leading provider of luxury kitchens across the UK. Our commitment to quality, attention to detail, and customer satisfaction sets us apart.
          </p>
          <h2>Our Values</h2>
          <ul>
            <li>✔️ Exceptional Craftsmanship</li>
            <li>✔️ Sustainable Materials</li>
            <li>✔️ Personalized Service</li>
            <li>✔️ Innovative Design</li>
          </ul>
        </div>
      </div>
      <div class="team-section" data-aos="fade-up" data-aos-delay="800">
        <h2>Meet Our Team</h2>
        <div class="team-grid">
          <div class="team-member" v-for="member in team" :key="member.name" :data-aos="member.aos" :data-aos-delay="member.delay">
            <img :src="member.image" :alt="member.name" />
            <h3>{{ member.name }}</h3>
            <p>{{ member.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import img1 from '@/assets/images/img-3.png';
import img2 from '@/assets/images/img-4.png';
import img3 from '@/assets/images/img-5.png';
import { useHead } from '@vueuse/head';

const team = ref([
  { name: 'Ben Smith', role: 'Founder & Master Craftsman', image: img1, aos: 'fade-up', delay: '1000' },
  { name: 'Sarah Lee', role: 'Lead Designer', image: img2, aos: 'fade-up', delay: '1200' },
  { name: 'John Doe', role: 'Project Manager', image: img3, aos: 'fade-up', delay: '1400' },
]);

useHead({
  title: 'About Us | MK Kitchens',
  meta: [
    { name: 'description', content: 'Learn more about MK Kitchens, our story, values, and expert team behind our bespoke kitchen designs.' }
  ]
});
</script>

<style scoped>
.about-us-wrapper {
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
.about-title {
  font-size: 3rem;
  font-family: 'Helvetica-Bold', sans-serif;
  color: var(--color-title);
  text-align: center;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
}
.about-description {
  font-size: 1.25rem;
  color: var(--color-body);
  text-align: center;
  margin-bottom: 3rem;
  line-height: 2.2rem;
}
.about-content {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  align-items: center;
  margin-bottom: 3rem;
}
.about-image {
  flex: 1 1 300px;
  text-align: center;
}
.about-image img {
  width: 100%;
  max-width: 350px;
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
}
.about-text {
  flex: 2 1 400px;
}
.about-text h2 {
  font-size: 2rem;
  color: var(--color-highlight);
  margin-bottom: 0.5rem;
  font-family: 'Helvetica-Bold', sans-serif;
}
.about-text p {
  font-size: 1.1rem;
  color: var(--color-body);
  margin-bottom: 1.2rem;
}
.about-text ul {
  list-style: none;
  padding: 0;
}
.about-text li {
  font-size: 1rem;
  color: var(--color-title);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}
.team-section {
  margin-top: 2rem;
  text-align: center;
}
.team-section h2 {
  font-size: 2rem;
  color: var(--color-highlight);
  margin-bottom: 1.5rem;
  font-family: 'Helvetica-Bold', sans-serif;
}
.team-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
.team-member {
  background: var(--color-inactive);
  border-radius: 1rem;
  padding: 1.5rem 1rem;
  width: 220px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.07);
  transition: transform 0.3s;
}
.team-member:hover {
  transform: translateY(-8px) scale(1.04);
}
.team-member img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 3px solid var(--color-highlight);
}
.team-member h3 {
  font-size: 1.1rem;
  color: var(--color-title);
  margin-bottom: 0.3rem;
  font-family: 'Helvetica-Bold', sans-serif;
}
.team-member p {
  font-size: 0.95rem;
  color: var(--color-body);
}
@media (max-width: 991px) {
  .about-content {
    flex-direction: column;
    gap: 1.5rem;
  }
  .container {
    padding: 1.5rem 0.5rem;
  }
}
@media (max-width: 576px) {
  .about-title {
    font-size: 2rem;
  }
  .about-description {
    font-size: 1rem;
  }
  .team-member {
    width: 100%;
  }
}
</style> 