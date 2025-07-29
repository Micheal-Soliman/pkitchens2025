<template>
  <div class="discover flex flex-col md:flex-row gap-4 lg:gap-8 items-center">
    <div class="w-full cover overflow-hidden">
      <img
        class="w-full h-full object-cover"
        src="https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700387/kitchens/DSC05847.jpg"
        alt="Handmade kitchen"
      />
    </div>

    <div class="w-full info-wrapper mb-2 sm:mb-0">
      <!-- HEADLINE -->
      <h2 class="text-3xl lg:text-4xl font-bold text-title mt-2 mb-4 w-full xl:w-3/5 heading">
        Your Kitchen, Your Story.<br />
        <span style="font-size: 1.2rem; font-weight: 400; display: block; margin-top: 0.5rem"
          >Designed for Living. Built for You.</span
        >
      </h2>
      <!-- DESCRIPTION -->
      <p class="body-text font-normal mb-4 w-full xl:w-3/4">
        We bring your kitchen dreams to life — with smart designs, quality craftsmanship, and
        attention to every detail.<br />
        Where kitchen dreams come true. Designed to fit your life, your space, and your style.<br />
        <span style="display: block; margin-top: 0.5rem"
          >At P.Kitchen, we make kitchen dreams come true - with thoughtful design, quality
          craftsmanship, and a passion for every detail.</span
        >
      </p>

      <router-link to="/about" class="btn-primary btn-discover-small">About Us</router-link>
    </div>
  </div>
</template>

<style scoped>
.discover {
  display: flex;
  align-items: center;
  min-height: 50vh;
}

.heading {
  font-size: 42px;
  letter-spacing: 0;
  line-height: 52px;
  font-family: "Helvetica-Bold", sans-serif;
}

.body-text {
  font-size: 15px;
  letter-spacing: 0;
  line-height: 28px;
}

.cover img {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  height: 100%;
  object-fit: cover;
}

.cover img:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.btn-discover-small {
  min-width: unset !important;
  width: auto !important;
  padding: 1.3em 2em !important;
  font-size: 1.08rem !important;
  border-radius: 20px !important;
  letter-spacing: 1.2px !important;
  display: inline-block !important;
  line-height: 1.2 !important;
  background-color: #8C7B60;
  color: white;
  font-weight: 600;
}

.btn-discover-small:hover {
  background-color: #B5A58A;
}

/* ========== Responsive ========== */

@media (max-width: 991px) {
  .discover {
    min-height: 40vh;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  .heading {
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 1.2rem;
  }

  .body-text {
    font-size: 14.5px;
    line-height: 24px;
    margin: 0 auto 1.5rem auto;
    max-width: 90%;
  }

  .btn-discover-small {
    font-size: 1rem !important;
    padding: 1em 2em !important;
  }
}

@media (max-width: 768px) {
  .heading {
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 1rem;
  }

  .body-text {
    font-size: 13.5px;
    line-height: 22px;
    margin-bottom: 1.2rem;
  }

  .btn-discover-small {
    font-size: 0.95rem !important;
    padding: 0.9em 1.8em !important;
  }
}

@media (max-width: 480px) {
  .discover {
    gap: 1.5rem;
    padding: 1rem;
  }

  .heading {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 0.7rem;
  }

  .body-text {
    font-size: 12.5px;
    line-height: 18px;
    margin-bottom: 1rem;
  }

  .btn-discover-small {
    font-size: 0.85rem !important;
    padding: 0.75em 1.2em !important;
  }

  .info-wrapper {
    text-align: center;
  }
}
</style>
