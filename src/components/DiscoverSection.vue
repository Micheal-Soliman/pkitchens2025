<template>
  <div class="discover flex flex-col md:flex-row gap-4 lg:gap-8 items-center">
    <div class="w-full cover overflow-hidden">
      <img
        class="w-full h-full object-cover"
        src="@/assets/images/img-1.png"
        alt="Handmade kitchen"
      />
    </div>

    <div class="w-full info-wrapper mb-2 sm:mb-0">
      <p class="font-normal font-body text-highlight uppercase">
        Quality Craftmanship from build to delivery
      </p>

      <h2 class="text-3xl lg:text-4xl font-bold text-title mt-2 mb-4 w-full xl:w-3/5 heading">
        Discover the beauty of a handmade kitchen
      </h2>

      <p class="body-text font-normal mb-4 w-full xl:w-3/4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget est sit amet sapien
        venenatis maximus vel ut urna. Nam mauris ante, feugiat in finibus vitae, sollicitudin id
        purus. Ut imperdiet, magna eu pharetra tincidu, mauris.
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
}

@media (max-width: 991px) {
  .discover {
    min-height: 40vh;
  }
  .heading {
    font-size: 32px;
    line-height: 32px;
  }
}

@media (max-width: 768px) {
  .discover {
    padding: 1rem;
  }

  .heading {
    font-size: 28px;
  }
}
</style>
