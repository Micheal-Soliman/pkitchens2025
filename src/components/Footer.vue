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
            <li class="footer-link"><router-link to="/category/bath-room" @click="scrollToTop">Bathrooms</router-link></li>
            <li class="footer-link"><router-link to="/category/living-room" @click="scrollToTop">Living Rooms</router-link></li>
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
  padding: 2rem 1rem;
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
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.brand-logo-wrapper {
  margin-bottom: 2rem;
  text-align: center;
}

.brand-logo {
  justify-content: center;
}

.brand-logo img {
  height: 80px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  margin-bottom: 2rem;
}

.footer-heading {
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 1rem;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-list-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem 1rem;
}

.footer-link a,
.footer-link router-link {
  color: #ccc;
  font-size: 0.95rem;
  text-decoration: none;
  transition: color 0.3s ease;
  display: inline-block;
}

.footer-link:hover a,
.footer-link:hover router-link {
  color: #ffffff;
}

.copyright-section {
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border-20);
  color: #aaa;
  font-size: 0.8rem;
  line-height: 1.5;
}

/* Tablet & small screens */
@media (max-width: 900px) {
  .grid-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }

  .footer-list-columns {
    grid-template-columns: 1fr;
    gap: 0.5rem 0;
  }

  .brand-logo {
    justify-content: center;
  }

  .footer-heading {
    font-size: 1.1rem;
  }

  .footer-link {
    font-size: 1rem;
    padding: 0.2rem 0;
  }
}

/* Mobile phones */
@media (max-width: 480px) {
  .footer {
    padding: 2rem 1rem;
  }

  .brand-logo img {
    height: 65px;
  }

  .footer-heading {
    font-size: 1rem;
  }

  .footer-link {
    font-size: 0.9rem;
    padding: 0.25rem 0;
  }

  .footer-list-columns {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 0.4rem;
  }

  .copyright-section {
    font-size: 0.75rem;
  }
}
</style>
