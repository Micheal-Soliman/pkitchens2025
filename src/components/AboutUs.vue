<template>
  <section class="about-us-wrapper">
    <div class="container about-us-section">
      <h1 class="about-title" data-aos="fade-down">About Us</h1>
      <p class="about-description" data-aos="fade-up" data-aos-delay="200">
        Welcome to P Kitchen!<br />
        From custom kitchens and dressing rooms to TV units and bedroom pieces, every project is a
        reflection of smart design, fine materials, and a deep passion for details. <br />
        We believe that great design begins with listening, and we’re here to bring your vision to life —
        beautifully and practically.
      </p>
      <div class="about-content">
        <div class="about-image" data-aos="zoom-in-right" data-aos-delay="400">
          <img src="https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700387/kitchens/DSC05847.jpg"
            alt="Our Team" />
        </div>
        <div class="about-text" data-aos="fade-left" data-aos-delay="600">
          <h2>Dreams Come True</h2>
          <p>
            We specialize in custom kitchens, dressing rooms, TV units, and bedroom solutions — all
            crafted to reflect your unique taste and lifestyle. <br />
            This is where ideas become designs, and dreams come true — with every detail made just for
            you.
          </p>
          <h2>Our Values</h2>
          <ul>
            <li>✔️ We design more than just kitchens.</li>
            <li>✔️ We create personal spaces tailored to your lifestyle.</li>
            <li>✔️ We bring style, functionality, and heart into every corner of your space.</li>
          </ul>
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
  title: 'About Us | P Kitchen',
  meta: [
    { name: 'description', content: 'Learn more about P Kitchen, our story, values, and expert team behind our bespoke kitchen designs.' }
  ]
});
</script>

<style scoped>
.about-us-wrapper {
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
  margin-top: 40px;
}

.about-title {
  font-size: 3rem;
  font-family: 'Helvetica-Bold', sans-serif;
  color:white;
  text-align: center;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
}

.about-description {
  font-size: 1.25rem;
  color:white;
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
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}

.about-text {
  flex: 2 1 400px;
}

.about-text h2 {
  font-size: 2rem;
  color:white;
  margin-bottom: 0.5rem;
  font-family: 'Helvetica-Bold', sans-serif;
}

.about-text p {
  font-size: 1.1rem;
  color:white;
  margin-bottom: 1.2rem;
}

.about-text ul {
  list-style: none;
  padding: 0;
}

.about-text li {
  font-size: 1rem;
  color:white;
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
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07);
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