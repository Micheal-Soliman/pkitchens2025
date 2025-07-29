<template>
  <footer class="footer">
    <div class="footer-container mx-auto relative z-2">
      <!-- brand-logo -->
      <div class="brand-logo-wrapper">
        <div class="brand-logo flex items-center gap-4">
          <img src="@/assets/images/brand-logo.png" alt="Logo" class="h-20" />
        </div>
      </div>

      <!-- Footer links -->
      <div class="grid-container">
        <!-- Main Sections -->
        <div>
          <h4 class="footer-heading">Sections</h4>
          <ul class="footer-list footer-list-columns">
            <li class="footer-link"><router-link to="/" @click="scrollToTop">Home</router-link></li>
            <li class="footer-link"><router-link to="/category/tv-unit" @click="scrollToTop">TV Units</router-link></li>
            <li class="footer-link"><router-link to="/category/dressing-room" @click="scrollToTop">Dressing Rooms</router-link></li>
            <li class="footer-link"><router-link to="/contact" @click="scrollToTop">Contact Us</router-link></li>
            <li class="footer-link"><router-link to="/category/furniture" @click="scrollToTop">Furniture</router-link></li>
            <li class="footer-link"><router-link to="/about" @click="scrollToTop">About Us</router-link></li>
            <li class="footer-link"><router-link to="/category/kitchens" @click="scrollToTop">Kitchens</router-link></li>
          </ul>
        </div>
        <!-- Contact Info -->
        <div>
          <h4 class="footer-heading">Contact</h4>
          <ul class="footer-list">
            <li class="footer-link">
              <a href="https://wa.me/+201153002700" target="_blank" rel="noopener" aria-label="WhatsApp">
                Phone: +20 1153002700
              </a>
            </li>
            <li class="footer-link">
              <a href="https://www.google.com/maps?q=Furniture+Point+Mall,1st+Settlement,New+Cairo" target="_blank" rel="noopener" aria-label="Location">
                Address: Furniture Point Mall, 1st Settlement, New Cairo
              </a>
            </li>
            <li class="footer-link">
              <a href="mailto:P.kitchen.eg@gmail.com" aria-label="Email">
                Email: P.kitchen.eg@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="copyright-section">
        <p>All rights reserved © P Kitchen 2025</p>
        <p class="mt-1">Responsive website design, development & hosting by Signature.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<style scoped>
.footer {
  background-image: url("https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700387/kitchens/DSC05847.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  padding: 1.5rem 1rem;
}

.footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(74, 96, 82, 0.94);
  z-index: 1;
}

.footer-container {
  max-width: 700px;
}

.brand-logo-wrapper {
  margin-bottom: 1.5rem;
}

.brand-logo::before,
.brand-logo::after {
  content: "";
  flex-grow: 1;
  height: 1px;
  background-color: var(--color-border-20);
}

.grid-container {
  max-width: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  text-align: left;
}

.footer-link:hover {
  color: #ffffff;
}

.social-icons {
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
}

.social-icon {
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease-in-out;
}

.social-icon:hover {
  transform: scale(1.1);
}

.copyright-section {
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border-20);
  letter-spacing: 0;
  line-height: 22px;
  font-size: 12px;
  color: black;
}

.footer-list-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.4rem 1.5rem;
  padding: 0;
}
@media (max-width: 900px) {
  .footer-list-columns {
    grid-template-columns: 1fr;
    gap: 0.4rem 0;
  }
}
@media (max-width: 480px) {
  .footer-list-columns {
    grid-template-columns: 1fr;
    gap: 0.6rem 0;
  }
  .footer-link {
    font-size: 1rem;
    padding: 0.3rem 0;
  }
}
</style>
