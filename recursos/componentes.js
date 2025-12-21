/**
 * Sistema de componentes reutilizables
 * Los componentes se definen como strings y se inyectan directamente (funciona sin servidor)
 */

const COMPONENTES = {
  header: `
<!-- Header -->
<header class="header">
  <div class="header-content">
    <a href="index.html" class="logo">
      <img src="public/favicon-32x32.png" alt="logo">
      <span>CE4JWI</span>
    </a>
    
    <!-- Botón hamburguesa para móviles -->
    <button class="menu-toggle" id="menuToggle" aria-label="Abrir menú" aria-expanded="false">
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>
    
    <nav class="nav" id="mainNav">
      <a href="index.html" class="nav-link" data-page="index">ACTIVIDADES</a>
      <a href="calendario.html" class="nav-link" data-page="calendario">CALENDARIO</a>
      <a href="QSO_logger.html" class="nav-link" data-page="qso_logger">QSO LOGGER</a>
    </nav>
  </div>
</header>
  `,

  marquee: `
<!-- Marquesina de Novedades -->
<div class="marquee-container">
  <div class="marquee-label">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="16" x2="12" y2="12"/>
      <line x1="12" y1="8" x2="12.01" y2="8"/>
    </svg>
    NOVEDADES
  </div>
  <div class="marquee-wrapper">
    <div class="marquee-content" id="marqueeContent">
      <span class="marquee-item">
        <span class="marquee-badge new">NUEVO</span>
        Actividad Navidad 2025 - 24 de Diciembre 2025
      </span>
     <span class="marquee-separator">★</span>
      <span class="marquee-item">
        <span class="marquee-badge hot">ACTIVO</span>
        Estación CE4JWI operando en el <b>TG 73040 - Modo DMR</b>
      </span>
      
      <span class="marquee-separator">★</span>
      <span class="marquee-item">
        <span class="marquee-badge new">NUEVO</span>
        Actividad especial por el <b>Año Nuevo 2026 - 31 de Diciembre 2025</b>
      </span>  
      <span class="marquee-separator">★</span>
      <span class="marquee-item">
        <span class="marquee-badge hot">ACTIVO</span>
        Todas las QSLs se enviarán a los mails registrados en QRZ.com.
      </span>
      
      
      <span class="marquee-separator">★</span>
    </div>
  </div>
</div>
  `,

  sidebar: `
<!-- Sidebar -->
<aside class="sidebar">
    
    
  <!-- Widget: Slider de Imágenes -->
    <div class="widget">
      <div class="widget-header">
          <img src="public/walkie-talkie.png" alt="" width="28" height="28">
            <h3>Modos de Contacto</h3>
      </div>
      <div class="widget slider-widget">
        <div class="slider-container">
          <div class="slider-track" id="sliderTrack">
            <div class="slide active">
              <img src="public/bm.png" alt="">
            </div>
            <div class="slide">
              <img src="public/peanut.png" alt="">
            </div>
            
          </div>
          <button class="slider-btn prev" id="sliderPrev" aria-label="Imagen anterior">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <button class="slider-btn next" id="sliderNext" aria-label="Imagen siguiente">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
          <div class="slider-dots" id="sliderDots">
            <span class="dot active" data-slide="0"></span>
            <span class="dot" data-slide="1"></span>
            <span class="dot" data-slide="2"></span>
          </div>
        </div>
      </div>
  </div>
      <br>

  <!-- Widget: Buscar en QRZ.COM -->
  <div class="widget">
    <div class="widget-header">
          <img src="public/qrz_com.png" alt="" width="28" height="28">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
      <h3>Buscar en QRZ.COM</h3>
    </div>
    <div class="widget-content">
      <form id="topcall" action="https://www.qrz.com/lookup" method="post" target="_new">
        <input autocomplete="off" id="tquery" name="tquery" type="text" maxlength="80" value="" placeholder="Ingresa Indicativo"/>
        <input id="mode" name="mode" type="hidden" maxlength="80" value="callsign" />
        <input id="tsubmit" type="submit" value="Buscar" />
      </form>
    </div>
  </div>
  <br>

  <!-- Widget: Estado de la Estación -->
  <div class="widget">
    <div class="widget-header">
      <svg class="widget-icon green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2v20M2 12h20"/>
        <circle cx="12" cy="12" r="4"/>
      </svg>
      <h3>Estado de la Estación</h3>
    </div>
    <div class="widget-content">
      <div class="status-indicator">
        <span class="status-dot online"></span>
        <span class="status-text">CONECTADO</span>
      </div>
      <div class="station-info">
        <p><span class="label">Frecuencia:</span> <b>433.700 MHz</b></p>
        <p><span class="label">Modo:</span> <b>DMR</b></p>
        <p><span class="label">TG </span> <b>73040 GRUPO CORSARIOS</b></p>
      </div>
    </div>
  </div>
  <br>

  <!-- Widget: Reloj local -->
  <div class="widget">
    <div class="widget-header">
      <svg class="widget-icon purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
      <h3>Hora Local</h3>
    </div>
    <div style="text-align:center;padding:1em 0;">
      <h3><a style="text-decoration:none;" href="https://www.zeitverschiebung.net/es/city/3870294">
        <span style="color:gray;">Hora actual en</span><br />Maule, Chile
      </a></h3>
      <iframe src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=es&size=medium&timezone=America%2FSantiago" width="100%" height="115" frameborder="0" seamless></iframe>
    </div>
  </div>
  <br>

  <!-- Widget: Monitoreo tg 73040 BM -->
  <div class="widget">
    <div class="widget-header">
      <svg class="widget-icon yellow" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2"/>
        <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2"/>
        <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2"/>
        <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="2"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2"/>
      </svg>
      <h3>Monitoreo tg 73040 BM</h3>
    </div>
    <div class="widget-content">
      
      <iframe src="widget-brandmeister-sidebar.html" width="100%" height="300px" allow="fullscreen"></iframe>
      
    </div>
  </div>
  

  <!-- Widget: Visitas en la Web! -->
  <div class="widget">
    <div class="widget-header">
      <svg class="widget-icon yellow" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2"/>
        <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2"/>
        <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2"/>
        <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="2"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2"/>
      </svg>
      <h3>Visitas en la Web!</h3>
    </div>
    <div class="widget-content">
      <a href="https://info.flagcounter.com/7pzT">
        <img src="https://s01.flagcounter.com/count/7pzT/bg_FFFFFF/txt_000000/border_CCCCCC/columns_3/maxflags_250/viewers_View/labels_1/pageviews_1/flags_1/percent_0/" alt="Flag Counter" border="0">
      </a>
    </div>
  </div>
</aside>
  `,

  footer: `
<!-- Footer -->
<footer class="footer">
  <div class="footer-content">
    <div class="footer-section">
      <div class="footer-logo">
        <img src="public/favicon-32x32.png" alt="logo">
        <span>CE4JWI</span>
      </div>
      <p class="footer-description">Estación de radioaficionados activa desde Chile, promoviendo la comunicación y el compañerismo entre operadores de todo el mundo.</p>
    </div>
    
    <div class="footer-section">
      <h4>Contacto</h4>
      <ul class="footer-list">
        <li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <a href="mailto:ce4jwi@qsl.net">CE4JWI@gmail.com</a>
        </li>
        <li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          Región del Maule, Chile
        </li>
        <li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          Grid: FF44dl
        </li>
      </ul>
    </div>
    
    <div class="footer-section">
      <h4>Enlaces</h4>
      <ul class="footer-list links">
        <li><a href="https://www.qrz.com/db/CE4JWI" target="_blank">QRZ.com</a></li>
        <li><a href="https://www.eqsl.cc" target="_blank">eQSL.cc</a></li>
        <li><a href="https://lotw.arrl.org" target="_blank">LoTW</a></li>
        <li><a href="https://www.radioclubdechile.cl" target="_blank">Radio Club Chile</a></li>
      </ul>
    </div>
    
    <div class="footer-section">
      <h4>Síguenos</h4>
      <div class="social-links">
        <a href="https://www.facebook.com/ce4jwi" class="social-btn" aria-label="Facebook">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/ce4jwi/" class="social-btn" aria-label="Instagram">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </a>
        <a href="https://wa.me/56982859707" class="social-btn" aria-label="WhatsApp">
          <svg fill="none" viewBox="0 0 360 362"><path fill="#25D366" fill-rule="evenodd" d="M307.546 52.566C273.709 18.684 228.706.017 180.756 0 81.951 0 1.538 80.404 1.504 179.235c-.017 31.594 8.242 62.432 23.928 89.609L0 361.736l95.024-24.925c26.179 14.285 55.659 21.805 85.655 21.814h.077c98.788 0 179.21-80.413 179.244-179.244.017-47.898-18.608-92.926-52.454-126.807v-.008Zm-126.79 275.788h-.06c-26.73-.008-52.952-7.194-75.831-20.765l-5.44-3.231-56.391 14.791 15.05-54.981-3.542-5.638c-14.912-23.721-22.793-51.139-22.776-79.286.035-82.14 66.867-148.973 149.051-148.973 39.793.017 77.198 15.53 105.328 43.695 28.131 28.157 43.61 65.596 43.593 105.398-.035 82.149-66.867 148.982-148.982 148.982v.008Zm81.719-111.577c-4.478-2.243-26.497-13.073-30.606-14.568-4.108-1.496-7.09-2.243-10.073 2.243-2.982 4.487-11.568 14.577-14.181 17.559-2.613 2.991-5.226 3.361-9.704 1.117-4.477-2.243-18.908-6.97-36.02-22.226-13.313-11.878-22.304-26.54-24.916-31.027-2.613-4.486-.275-6.91 1.959-9.136 2.011-2.011 4.478-5.234 6.721-7.847 2.244-2.613 2.983-4.486 4.478-7.469 1.496-2.991.748-5.603-.369-7.847-1.118-2.243-10.073-24.289-13.812-33.253-3.636-8.732-7.331-7.546-10.073-7.692-2.613-.13-5.595-.155-8.586-.155-2.991 0-7.839 1.118-11.947 5.604-4.108 4.486-15.677 15.324-15.677 37.361s16.047 43.344 18.29 46.335c2.243 2.991 31.585 48.225 76.51 67.632 10.684 4.615 19.029 7.374 25.535 9.437 10.727 3.412 20.49 2.931 28.208 1.779 8.604-1.289 26.498-10.838 30.228-21.298 3.73-10.46 3.73-19.433 2.613-21.298-1.117-1.865-4.108-2.991-8.586-5.234l.008-.017Z" clip-rule="evenodd"/></svg>
        </a>
        <a href="https://t.me/ce4jwi" class="social-btn" aria-label="Telegram">
          <svg viewBox="0 0 256 256" preserveAspectRatio="xMidYMid"><defs><linearGradient id="telegram__a" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#2AABEE"/><stop offset="100%" stop-color="#229ED9"/></linearGradient></defs><path fill="url(#telegram__a)" d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51 0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0Z"/><path fill="#FFF" d="M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152 35.56-14.786 42.94-17.354 47.76-17.441 1.06-.017 3.42.245 4.96 1.49 1.28 1.05 1.64 2.47 1.82 3.467.16.996.38 3.266.2 5.038-1.92 20.24-10.26 69.356-14.5 92.026-1.78 9.592-5.32 12.808-8.74 13.122-7.44.684-13.08-4.912-20.28-9.63-11.26-7.386-17.62-11.982-28.56-19.188-12.64-8.328-4.44-12.906 2.76-20.386 1.88-1.958 34.64-31.748 35.26-34.45.08-.338.16-1.598-.6-2.262-.74-.666-1.84-.438-2.64-.258-1.14.256-19.12 12.152-54 35.686-5.1 3.508-9.72 5.218-13.88 5.128-4.56-.098-13.36-2.584-19.9-4.708-8-2.606-14.38-3.984-13.82-8.41.28-2.304 3.46-4.662 9.52-7.072Z"/></svg>
        </a>
        <a href="https://x.com/CE4JWI" class="social-btn" aria-label="X">
          <svg fill="none" viewBox="0 0 1200 1227"><path fill="#fff" d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"/></svg>
        </a>
      </div>
    </div>
  </div>
  
  <div class="footer-bottom">
    <p>&copy; 2025 CE4JWI - Todos los derechos reservados</p>
    <p class="footer-tagline">73 de CE4JWI - ¡Nos escuchamos en el aire!</p>
  </div>
</footer>
  `,
}

/**
 * Inyecta un componente en su contenedor
 */
function cargarComponente(nombre, containerId) {
  const container = document.getElementById(containerId)
  if (container && COMPONENTES[nombre]) {
    container.innerHTML = COMPONENTES[nombre]
  }
}

/**
 * Marca el enlace de navegación activo según la página actual
 */
function marcarNavActivo() {
  const pagina = window.location.pathname.split("/").pop().replace(".html", "") || "index"
  const enlaces = document.querySelectorAll(".nav-link")

  enlaces.forEach((enlace) => {
    const paginaEnlace = enlace.getAttribute("data-page")
    if (paginaEnlace === pagina) {
      enlace.classList.add("active")
    } else {
      enlace.classList.remove("active")
    }
  })
}

/**
 * Inicializa el menú móvil responsive
 */
function inicializarMenuMovil() {
  const menuToggle = document.getElementById("menuToggle")
  const mainNav = document.getElementById("mainNav")

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("nav-open")
      menuToggle.classList.toggle("active")
      menuToggle.setAttribute("aria-expanded", isOpen)
    })

    // Cerrar menú al hacer clic en un enlace
    mainNav.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("nav-open")
        menuToggle.classList.remove("active")
        menuToggle.setAttribute("aria-expanded", "false")
      })
    })

    // Cerrar menú al hacer clic fuera
    document.addEventListener("click", (e) => {
      if (!menuToggle.contains(e.target) && !mainNav.contains(e.target)) {
        mainNav.classList.remove("nav-open")
        menuToggle.classList.remove("active")
        menuToggle.setAttribute("aria-expanded", "false")
      }
    })
  }
}

/**
 * Inicializa el slider de imágenes del sidebar
 */
function inicializarSlider() {
  const slides = document.querySelectorAll(".slide")
  const dots = document.querySelectorAll(".dot")
  const prevBtn = document.getElementById("sliderPrev")
  const nextBtn = document.getElementById("sliderNext")

  if (!slides.length) return

  let currentSlide = 0
  let autoSlideInterval

  function showSlide(index) {
    // Ajustar índice si sale de rango
    if (index >= slides.length) currentSlide = 0
    else if (index < 0) currentSlide = slides.length - 1
    else currentSlide = index

    // Actualizar slides
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === currentSlide)
    })

    // Actualizar dots
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide)
    })
  }

  function nextSlide() {
    showSlide(currentSlide + 1)
  }

  function prevSlide() {
    showSlide(currentSlide - 1)
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 4000)
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval)
  }

  // Event listeners
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide()
      stopAutoSlide()
      startAutoSlide()
    })
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide()
      stopAutoSlide()
      startAutoSlide()
    })
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      showSlide(Number.parseInt(dot.dataset.slide))
      stopAutoSlide()
      startAutoSlide()
    })
  })

  // Iniciar auto-slide
  startAutoSlide()
}

/**
 * Inicializa todos los componentes de la página
 */
function inicializarComponentes() {
  // Cargar componentes
  cargarComponente("header", "header-container")
  cargarComponente("marquee", "marquee-container")
  cargarComponente("sidebar", "sidebar-container")
  cargarComponente("footer", "footer-container")

  // Marcar navegación activa
  marcarNavActivo()

  // Inicializar menú móvil
  inicializarMenuMovil()

  // Inicializar slider del sidebar
  inicializarSlider()
}

// Ejecutar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", inicializarComponentes)
