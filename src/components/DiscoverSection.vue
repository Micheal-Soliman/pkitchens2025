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
      <p class="text-xs font-semibold text-highlight uppercase tracking-wider">
        Quality Craftmanship from build to delivery
      </p>

      <h2 class="text-3xl lg:text-4xl font-bold text-icon mt-2 mb-4 w-full xl:w-3/5">
        Discover the beauty of a handmade kitchen
      </h2>

      <p class="leading-relaxed mb-4 w-full xl:w-3/4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget est sit amet sapien
        venenatis maximus vel ut urna. Nam mauris ante, feugiat in finibus vitae, sollicitudin id
        purus. Ut imperdiet, magna eu pharetra tincidu, mauris.
      </p>

      <button class="btn-primary">About Us</button>
    </div>
  </div>
</template>

<style scoped>
.discover {
  display: flex;
  align-items: center;
  min-height: 50vh;
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

@media (max-width: 991px) {
  .discover {
    min-height: 40vh;
  }
}

@media (max-width: 768px) {
  .discover {
    padding: 1rem;
  }
}
</style>
