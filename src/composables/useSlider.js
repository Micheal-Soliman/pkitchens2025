import { ref, computed, onMounted, onUnmounted } from 'vue'

export function useSlider(items, options = {}) {
  const {
    autoplay = false,
    interval = 5000,
    transitionType = 'slide',
    onSlideChange = null,
  } = options

  let autoPlayInterval = null
  const currentIndex = ref(0)
  const totalItems = computed(() => items.value?.length || 0)
  const currentItem = computed(() => items.value?.[currentIndex.value] || null)

  // animation transition
  const carouselStyle = computed(() => {
    if (transitionType === 'slide') {
      return {
        transform: `translateX(-${currentIndex.value * 100}%)`,
        transition: 'transform 0.5s ease',
        display: 'flex',
      }
    } else if (transitionType === 'fade') {
      return {
        position: 'relative',
      }
    }
    return {}
  })

  // navigation
  const nextSlide = () => {
    if (totalItems.value === 0) return
    currentIndex.value = (currentIndex.value + 1) % totalItems.value
    onSlideChange?.(currentIndex.value)
  }

  const prevSlide = () => {
    if (totalItems.value === 0) return
    currentIndex.value = (currentIndex.value - 1 + totalItems.value) % totalItems.value
    onSlideChange?.(currentIndex.value)
  }

  const goToSlide = (index) => {
    if (index >= 0 && index < totalItems.value) {
      currentIndex.value = index
      onSlideChange?.(currentIndex.value)
    }
  }

  // autoplay Control
  const startAutoPlay = () => {
    if (!autoplay || totalItems.value <= 1) return
    clearInterval(autoPlayInterval)
    autoPlayInterval = setInterval(nextSlide, interval)
  }

  const pauseAutoPlay = () => {
    if (!autoplay) return
    clearInterval(autoPlayInterval)
  }

  onMounted(() => {
    startAutoPlay()
  })

  onUnmounted(() => {
    pauseAutoPlay()
  })

  return {
    currentIndex,
    currentItem,
    carouselStyle,
    totalItems,
    nextSlide,
    prevSlide,
    goToSlide,
    pauseAutoPlay,
    resumeAutoPlay: startAutoPlay,
  }
}
