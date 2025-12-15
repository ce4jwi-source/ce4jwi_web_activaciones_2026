document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track")
  const slides = document.querySelectorAll(".carousel-slide")
  const prevBtn = document.querySelector(".carousel-btn-prev")
  const nextBtn = document.querySelector(".carousel-btn-next")
  const indicatorsContainer = document.querySelector(".carousel-indicators")

  let currentIndex = 0
  let autoplayInterval
  const autoplayDelay = 5000

  // Crear indicadores dinámicamente
  slides.forEach((_, index) => {
    const indicator = document.createElement("button")
    indicator.classList.add("carousel-indicator")
    indicator.setAttribute("aria-label", `Ir a imagen ${index + 1}`)
    if (index === 0) indicator.classList.add("active")
    indicator.addEventListener("click", () => goToSlide(index))
    indicatorsContainer.appendChild(indicator)
  })

  const indicators = document.querySelectorAll(".carousel-indicator")

  function updateSlide() {
    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentIndex)
    })

    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentIndex)
    })
  }

  function goToSlide(index) {
    currentIndex = index
    updateSlide()
    resetAutoplay()
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length
    updateSlide()
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length
    updateSlide()
  }

  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, autoplayDelay)
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval)
    startAutoplay()
  }

  // Event listeners
  nextBtn.addEventListener("click", () => {
    nextSlide()
    resetAutoplay()
  })

  prevBtn.addEventListener("click", () => {
    prevSlide()
    resetAutoplay()
  })

  // Pausar autoplay al pasar el mouse
  track.addEventListener("mouseenter", () => {
    clearInterval(autoplayInterval)
  })

  track.addEventListener("mouseleave", () => {
    startAutoplay()
  })

  // Soporte para teclado
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      prevSlide()
      resetAutoplay()
    } else if (e.key === "ArrowRight") {
      nextSlide()
      resetAutoplay()
    }
  })

  // Iniciar autoplay
  startAutoplay()
})
