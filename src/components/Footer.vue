<template>
  <footer class="footer">
    <div class="footer-container mx-auto relative z-2">
      <!-- brand-logo -->
      <div class="brand-logo-wrapper">
        <div class="brand-logo flex items-center gap-4">
          <img src="@/assets/images/brand-logo.svg" alt="Logo" class="h-8" />
        </div>
      </div>

      <!-- Footer links -->
      <div class="grid-container">
        <!-- About Column -->
        <div>
          <h4 class="footer-heading">About</h4>
          <ul class="footer-list">
            <li class="footer-link"><a href="#">SHOP</a></li>
            <li class="footer-link"><a href="#">PLAN MY KITCHEN</a></li>
            <li class="footer-link"><a href="#">ABOUT US</a></li>
            <li class="footer-link"><a href="#">GALLERY</a></li>
          </ul>
        </div>

        <!-- Service Column -->
        <div>
          <h4 class="footer-heading">Service</h4>
          <ul class="footer-list">
            <li class="footer-link"><a href="#">FAQ</a></li>
            <li class="footer-link"><a href="#">CONTACT</a></li>
            <li class="footer-link"><a href="#">HOW TO BUY</a></li>
            <li class="footer-link"><a href="#">DOWNLOADS</a></li>
          </ul>
        </div>

        <!-- Info Column -->
        <div>
          <h4 class="footer-heading">Info</h4>
          <ul class="footer-list">
            <li class="footer-link">
              <a href="#">DELIVERY</a>
            </li>
            <li class="footer-link"><a href="#">TERMS</a></li>
            <li class="footer-link"><a href="#">PRIVACY</a></li>
          </ul>
        </div>

        <!-- Follow Column -->
        <div>
          <h4 class="footer-heading">Follow</h4>
          <div class="social-icons">
            <a href="#" aria-label="Facebook" class="social-icon">
              <img src="@/assets/images/facebook-alt.svg" alt="Facebook" />
            </a>
            <a href="#" aria-label="Instagram" class="social-icon">
              <img src="@/assets/images/instagram-alt.svg" alt="Instagram" />
            </a>
            <a href="#" aria-label="Twitter" class="social-icon">
              <img src="@/assets/images/twitter-alt.svg" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="copyright-section">
        <p>Copyright &copy; MK Kitchens 2019 - All rights reserved.</p>
        <p class="mt-1">Responsive website design, Development & Hosting by Me.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-image: url('../assets/images/cover.png');
  background-size: cover;
  background-position: center;
  position: relative;
  padding: 3rem 1.5rem;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.94);
  z-index: 1;
}

.footer-container {
  max-width: 1100px;
}

.brand-logo-wrapper {
  margin-bottom: 3rem;
}

.brand-logo::before,
.brand-logo::after {
  content: '';
  flex-grow: 1;
  height: 1px;
  background-color: var(--color-border-20);
}

.grid-container {
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
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
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border-20);
  letter-spacing: 0;
  line-height: 26px;
  font-size: 13px;
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
    text-align: left;
  }

  .social-icons {
    justify-content: flex-start;
  }
}

@media (max-width: 480px) {
  .grid-container {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .footer {
    padding: 3rem 1rem;
  }

  .brand-logo-wrapper {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
}
</style>
