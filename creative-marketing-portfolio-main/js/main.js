/* =========================================================
   PORTFOLIO DE EDICIÓN & MARKETING – FERMnke
   Core Engine: i18n, Apple Coverflow 3D Carousel & Theater Player
   ========================================================= */

/* --- 1. Video Data Collection --- */
const portfolioVideos = [
  {
    id: 'gamexzonee',
    driveId: '1CE0A-vtdnEWtZ6tSFYn4cLvGSkpcLVqv',
    title: 'Expo GamexZonee',
    category: 'commercial',
    orientation: 'horizontal',
    tag_es: 'Spot Promocional',
    tag_en: 'Promo Commercial',
    subtitle_es: 'Evento Gamer · Montaje Cinemático & Color Grading',
    subtitle_en: 'Gaming Event · Cinematic Edit & Color Grading',
    desc_es: 'Video promocional para evento gamer con montaje cinematográfico y color grading.',
    desc_en: 'Promotional spot for gaming expo with cinematic grading and motion flow.',
    meta: [
      { label_es: 'Categoría', label_en: 'Category', val: 'Comercial' },
      { label_es: 'Formato', label_en: 'Format', val: '16:9 Widescreen' },
      { label_es: 'Edición', label_en: 'Editing', val: 'VFX & Speed Ramping' }
    ]
  },
  {
    id: '4bm-s7-v2',
    driveId: '1OJUouH2igKnfMXl687AvoE2CVsw7WrKc',
    title: '4bienmancos S7 V2',
    category: 'reels',
    orientation: 'vertical',
    tag_es: 'Reel / TikTok 9:16',
    tag_en: 'Reel / TikTok 9:16',
    subtitle_es: 'Formato Vertical · Retención & Hooks',
    subtitle_en: 'Vertical Format · High Retention & Hooks',
    desc_es: 'Formato vertical optimizado para retención y consumo en móviles.',
    desc_en: 'Vertical format optimized for high retention and mobile viewing.',
    meta: [
      { label_es: 'Categoría', label_en: 'Category', val: 'Short Form' },
      { label_es: 'Ratio', label_en: 'Ratio', val: '9:16 Mobile' },
      { label_es: 'Enfoque', label_en: 'Focus', val: 'Viral Hooks' }
    ]
  },
  {
    id: '4bm-s15-v7',
    driveId: '1N3RaHGhBVHo6RKrWGj8S36Q0jfK1i1SQ',
    title: '4bienmancos S15 V7',
    category: 'reels',
    orientation: 'vertical',
    tag_es: 'Reel / TikTok 9:16',
    tag_en: 'Reel / TikTok 9:16',
    subtitle_es: 'Subtítulos Dinámicos & Ritmo Acelerado',
    subtitle_en: 'Dynamic Captions & Fast Rhythm',
    desc_es: 'Clips cortos de alta energía con subtitulado y transiciones rápidas.',
    desc_en: 'High-energy short clips featuring dynamic captions and quick transitions.',
    meta: [
      { label_es: 'Categoría', label_en: 'Category', val: 'Short Form' },
      { label_es: 'Ratio', label_en: 'Ratio', val: '9:16 Mobile' },
      { label_es: 'Estilo', label_en: 'Style', val: 'Motion Captions' }
    ]
  },
  {
    id: '4bm-m2-v1',
    driveId: '1nTbqlI8_jR54IopPgU2oDCtLji_WJUlz',
    title: '4bienmancos M2 V1',
    category: 'gaming',
    orientation: 'horizontal',
    tag_es: 'Gameplay & Cortes',
    tag_en: 'Gameplay & Cuts',
    subtitle_es: 'Montaje Gaming · Efectos de Sonido',
    subtitle_en: 'Gaming Montage · SFX & Pacing',
    desc_es: 'Edición dinámica de gameplay con ritmo acelerado y efectos de sonido.',
    desc_en: 'Fast-paced gameplay montage with sound effects and tight pacing.',
    meta: [
      { label_es: 'Categoría', label_en: 'Category', val: 'Gaming' },
      { label_es: 'Formato', label_en: 'Format', val: '16:9 HD' },
      { label_es: 'Sonido', label_en: 'Sound', val: 'Custom SFX' }
    ]
  },
  {
    id: 'januelo-gameplay',
    driveId: '11mCxek7LyYiHRA7WMJVpOWRT9MLLhmhu',
    title: 'JanueloGamer Gameplay',
    category: 'gaming',
    orientation: 'horizontal',
    tag_es: 'Gaming & YouTube',
    tag_en: 'Gaming & YouTube',
    subtitle_es: 'Edición para YouTube · Puntos Clave',
    subtitle_en: 'YouTube Format · Highlight Edit',
    desc_es: 'Narrativa entretenida para YouTube, balance de música y momentos clave.',
    desc_en: 'Entertaining YouTube narrative with balanced audio mixing and key highlights.',
    meta: [
      { label_es: 'Categoría', label_en: 'Category', val: 'YouTube' },
      { label_es: 'Formato', label_en: 'Format', val: '16:9 Widescreen' },
      { label_es: 'Técnica', label_en: 'Technique', val: 'Story Pacing' }
    ]
  },
  {
    id: 'leon-gto-ad',
    driveId: '1ENn49w4Dy3uqNiTu0OodDczk4JTbQGfG',
    title: 'León, Gto – Anuncio Publicitario',
    category: 'commercial',
    orientation: 'horizontal',
    tag_es: 'Spot Comercial',
    tag_en: 'Brand Commercial',
    subtitle_es: 'Campaña de Marca · Alta Producción',
    subtitle_en: 'Brand Campaign · High Production',
    desc_es: 'Spot comercial de promoción con enfoque publicitario y tomas de impacto.',
    desc_en: 'Commercial promotional spot with advertising focus and high-impact shots.',
    meta: [
      { label_es: 'Categoría', label_en: 'Category', val: 'Comercial' },
      { label_es: 'Formato', label_en: 'Format', val: '16:9 4K' },
      { label_es: 'Objetivo', label_en: 'Goal', val: 'Brand Awareness' }
    ]
  },
  {
    id: 'uepca-ad-final',
    driveId: '1OB0MeUBD76EAiHKd3KGsGtr-BIaQFOQs',
    title: 'UEPCA – Anuncio Institucional',
    category: 'commercial',
    orientation: 'horizontal',
    tag_es: 'Spot Institucional',
    tag_en: 'Institutional Spot',
    subtitle_es: 'Campaña Universitaria · Posicionamiento',
    subtitle_en: 'University Campaign · Brand Identity',
    desc_es: 'Campaña universitaria orientada a captación de alumnos y posicionamiento de marca.',
    desc_en: 'University campaign aimed at student enrollment and brand positioning.',
    meta: [
      { label_es: 'Categoría', label_en: 'Category', val: 'Institucional' },
      { label_es: 'Formato', label_en: 'Format', val: '16:9 Full HD' },
      { label_es: 'Enfoque', label_en: 'Focus', val: 'Marketing Funnel' }
    ]
  }
];

/* --- 2. Multi-Language (i18n) Dictionary --- */
const translations = {
  es: {
    nav_home: 'Inicio',
    nav_about: 'Sobre mí',
    nav_skills: 'Habilidades',
    nav_videos: 'Videos',
    nav_contact: 'Contacto',

    hero_badge: 'Marketing Digital · Edición Visual · UEPCA',
    hero_title: 'PORTAFOLIO DE EDICIÓN:<br /><span class="brand-highlight">FERMnke</span>',
    hero_subtitle: 'Creación de contenido visual de alto impacto, edición de video estratégica y narrativas orientadas a retención.',
    hero_btn_videos: 'Explorar Videos',
    hero_btn_contact: 'Iniciar Proyecto',

    about_eyebrow: 'Perfil Creativo',
    about_title: 'Sobre <span>mí</span>',
    about_subtext: 'Estrategia de marketing aplicada a cada corte y fotograma.',
    stat_craft: 'Dedicación',
    stat_formats: 'Multi-formato',
    stat_edu: 'Marketing',
    about_p1: 'Hola, soy <strong>FERMnke</strong>, creador de contenido y estudiante de <strong>Marketing</strong> en la <strong>UEPCA</strong>.',
    about_p2: 'Me especializo en la edición de video con un enfoque centrado en engagement, ritmo dinámico y retención de audiencia. Combino principios psicológicos del marketing con técnicas de montaje y diseño sonoro para potenciar marcas personales y comerciales.',
    about_p3: 'Este portafolio reúne mis producciones más destacadas: desde contenido viral de formato corto hasta anuncios publicitarios y gameplays de ritmo acelerado.',
    highlight_hook_title: 'Hooks de Alta Retención',
    highlight_hook_desc: 'Primeros 3 segundos diseñados para detener el scroll.',
    highlight_sound_title: 'Diseño de Audio & SFX',
    highlight_sound_desc: 'Mezcla inmersiva de efectos para elevar cada transición.',

    skills_eyebrow: 'Stack & Capacidades',
    skills_title: 'Habilidades <span>Técnicas</span>',
    skills_subtext: 'Especialización en herramientas y metodologías de producción audiovisual.',
    bento_edit_title: 'Edición de Video de Ritmo Rápido',
    bento_edit_subtitle: 'Montaje dinámico, transiciones precisas y control de curvas de velocidad.',
    bento_edit_desc: 'Estructuración de cortes milimétricos sincronizados con el ritmo musical, eliminando tiempos muertos y maximizando la retención segundo a segundo.',
    bento_motion_title: 'Motion Graphics & VFX',
    bento_motion_desc: 'Subtítulos animados con seguimiento, gráficos cinemáticos, llamadas a la acción y efectos de cámara.',
    bento_short_title: 'Formato Corto (TikTok & Reels)',
    bento_short_desc: 'Adaptación vertical 9:16 nativa, composición de zonas seguras y formatos virales de alta rotación.',
    bento_mkt_title: 'Estrategia de Marketing & Conversión',
    bento_mkt_subtitle: 'Pensamiento analítico alineado con objetivos comerciales.',
    bento_mkt_desc: 'Creación de contenido fundamentado en funnel de conversión, segmentación de audiencia y estructura persuasiva de storytelling (AIDA: Atención, Interés, Deseo, Acción).',

    videos_eyebrow: 'Trabajos Seleccionados',
    videos_title: 'Carrusel <span>Coverflow 3D</span>',
    videos_subtext: 'Arrastra lateralmente o usa las flechas. Haz clic en la tarjeta central para reproducir el video.',
    filter_all: 'Todos',
    filter_reels: 'Reels & TikTok (9:16)',
    filter_commercial: 'Comerciales & Spots',
    filter_gaming: 'Gaming & YouTube',
    card_watch: 'Reproducir Video',
    btn_play_now: 'Ver Video en Reproductor Cinemático',

    player_prev: 'Anterior',
    player_next: 'Siguiente',
    player_drive_link: 'Ver en Drive ↗',

    contact_eyebrow: 'Contacto & Colaboraciones',
    contact_title: 'Iniciemos un <span>Proyecto</span>',
    contact_subtext: '¿Tienes una idea o necesitas elevar la calidad de tu contenido? Escríbeme y lo hacemos realidad.',
    contact_lead: 'Canales directos de comunicación',
    contact_desc: 'Respondo habitualmente en menos de 24 horas.',

    footer_text: '© 2026 FERMnke · Edición de Video & Estrategia de Marketing · UEPCA'
  },
  en: {
    nav_home: 'Home',
    nav_about: 'About me',
    nav_skills: 'Skills',
    nav_videos: 'Videos',
    nav_contact: 'Contact',

    hero_badge: 'Digital Marketing · Video Editing · UEPCA',
    hero_title: 'EDITING PORTFOLIO:<br /><span class="brand-highlight">FERMnke</span>',
    hero_subtitle: 'High-impact visual storytelling, strategic video editing, and retention-focused content creation.',
    hero_btn_videos: 'Explore Videos',
    hero_btn_contact: 'Start a Project',

    about_eyebrow: 'Creative Profile',
    about_title: 'About <span>me</span>',
    about_subtext: 'Marketing strategy applied to every cut and frame.',
    stat_craft: 'Dedication',
    stat_formats: 'Multi-format',
    stat_edu: 'Marketing',
    about_p1: 'Hi, I\'m <strong>FERMnke</strong>, content creator and <strong>Marketing</strong> student at <strong>UEPCA</strong>.',
    about_p2: 'I specialize in video editing focused on engagement, rapid rhythm, and audience retention. I combine psychological marketing principles with dynamic cuts and sound design to elevate personal and commercial brands.',
    about_p3: 'This portfolio showcases my top productions: from viral short-form content to commercials and fast-paced gameplays.',
    highlight_hook_title: 'High Retention Hooks',
    highlight_hook_desc: 'First 3 seconds crafted to stop the scroll.',
    highlight_sound_title: 'Audio Design & SFX',
    highlight_sound_desc: 'Immersive sound mixing to elevate every scene.',

    skills_eyebrow: 'Stack & Capabilities',
    skills_title: 'Technical <span>Skills</span>',
    skills_subtext: 'Mastery over industry-standard audiovisual production tools.',
    bento_edit_title: 'Fast-Paced Video Editing',
    bento_edit_subtitle: 'Dynamic montage, tight cuts, and precise speed ramping.',
    bento_edit_desc: 'Structuring millisecond-accurate cuts in sync with music, eliminating dead air, and maximizing viewer retention rate.',
    bento_motion_title: 'Motion Graphics & VFX',
    bento_motion_desc: 'Dynamic animated captions, cinematic callouts, action overlays, and camera motion effects.',
    bento_short_title: 'Short-Form Content (TikTok & Reels)',
    bento_short_desc: 'Native 9:16 vertical composition, safe-zone awareness, and viral content formats.',
    bento_mkt_title: 'Marketing Strategy & Conversion',
    bento_mkt_subtitle: 'Analytical thinking aligned with business and engagement goals.',
    bento_mkt_desc: 'Content built upon conversion funnels, audience segmentation, and persuasive storytelling (AIDA model).',

    videos_eyebrow: 'Selected Work',
    videos_title: '3D Coverflow <span>Carousel</span>',
    videos_subtext: 'Drag horizontally or use arrows. Click the center card to play the video.',
    filter_all: 'All',
    filter_reels: 'Reels & TikTok (9:16)',
    filter_commercial: 'Commercials & Spots',
    filter_gaming: 'Gaming & YouTube',
    card_watch: 'Play Video',
    btn_play_now: 'Watch Video in Theater Player',

    player_prev: 'Previous',
    player_next: 'Next',
    player_drive_link: 'Open Drive ↗',

    contact_eyebrow: 'Contact & Inquiries',
    contact_title: 'Let\'s Start a <span>Project</span>',
    contact_subtext: 'Have a project in mind or looking to scale your video retention? Send a message and let\'s build it.',
    contact_lead: 'Direct Communication Channels',
    contact_desc: 'I usually respond within 24 hours.',

    footer_text: '© 2026 FERMnke · Video Editing & Content Marketing · UEPCA'
  }
};

let currentLang = 'es';

function setLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (!dict[key]) return;

    if (el.hasAttribute('data-i18n-html')) {
      el.innerHTML = dict[key];
    } else {
      el.textContent = dict[key];
    }
  });

  document.documentElement.lang = lang;
  const langLabel = document.getElementById('langLabel');
  if (langLabel) {
    langLabel.textContent = lang === 'es' ? 'EN' : 'ES';
  }

  if (typeof updateCoverflowCaption === 'function') {
    updateCoverflowCaption();
  }
}

/* --- 3. Mobile Navigation Drawer --- */
(function initNav() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNavOverlay = document.getElementById('mobileNavOverlay');
  const langToggle = document.getElementById('langToggle');

  if (hamburgerBtn && mobileNavOverlay) {
    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('active');
      mobileNavOverlay.classList.toggle('open');
      document.body.style.overflow = mobileNavOverlay.classList.contains('open') ? 'hidden' : '';
    });

    mobileNavOverlay.querySelectorAll('.mobile-link').forEach((link) => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        mobileNavOverlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const nextLang = currentLang === 'es' ? 'en' : 'es';
      setLanguage(nextLang);
    });
  }
})();

/* =========================================================
   4. APPLE-STYLE 3D COVERFLOW CAROUSEL ENGINE (Vanilla JS)
   ========================================================= */

let currentFilter = 'all';
let filteredVideos = [...portfolioVideos];
let activeIndex = 0;

// Dynamic Coverflow settings responsive to viewport
function getCoverflowConfig() {
  const isMobile = window.innerWidth <= 768;
  return {
    rotate: isMobile ? 24 : 38,       // Milder rotate on mobile to prevent edge overflowing
    depth: isMobile ? 0.45 : 0.55,
    perspective: isMobile ? 2.6 : 3,
    falloff: 0.56,
    fade: 0.14,
    gap: isMobile ? 0.05 : 0.08,
    loop: true
  };
}

let posRef = 0;
let targetRef = 0;
let cardWidth = 320;
let rafId = null;
let dragRef = null;

const stage = document.getElementById('coverflowStage');
const track = document.getElementById('coverflowTrack');
const captionBox = document.getElementById('coverflowCaption');
const dotsContainer = document.getElementById('coverflowDots');
const filterBtns = document.querySelectorAll('#videoFilters .filter-btn');
const cfPrevBtn = document.getElementById('cfPrevBtn');
const cfNextBtn = document.getElementById('cfNextBtn');

let cardEls = [];

function measureCardWidth() {
  if (cardEls[0]) {
    cardWidth = cardEls[0].offsetWidth || (window.innerWidth <= 768 ? 240 : 320);
  }
}

function indexAt(pos) {
  const count = filteredVideos.length;
  if (!count) return 0;
  return ((Math.round(pos) % count) + count) % count;
}

function paintCoverflow() {
  const count = filteredVideos.length;
  if (!count || !cardEls.length) return;

  const cfg = getCoverflowConfig();
  const pitch = cardWidth * (1 + cfg.gap);
  const pos = posRef;

  cardEls.forEach((card, index) => {
    if (!card) return;

    let offset = index - pos;
    if (cfg.loop) {
      offset = ((offset % count) + count) % count;
      if (offset > count / 2) offset -= count;
    }

    const distance = Math.abs(offset);
    const ramp = Math.pow(distance, cfg.falloff);
    const tilt = Math.min(cfg.rotate * ramp, 82) * Math.sign(offset);

    const translateX = offset * pitch;
    const translateZ = -cfg.depth * cardWidth * ramp;
    const rotateY = -tilt;

    card.style.transform = `translateX(calc(-50% + ${translateX}px)) translateZ(${translateZ}px) rotateY(${rotateY}deg)`;

    const edge = cfg.loop ? Math.min(1, Math.max(0, count / 2 - distance)) : 1;
    card.style.opacity = String(Math.max(0, 1 - cfg.fade * distance) * edge);
    card.style.zIndex = String(100 - Math.round(distance));

    const isCurrent = Math.abs(offset) < 0.4;
    card.classList.toggle('is-active', isCurrent);
  });
}

function settleCoverflow(target) {
  if (rafId !== null) cancelAnimationFrame(rafId);
  targetRef = target;
  
  const newIndex = indexAt(target);
  if (newIndex !== activeIndex) {
    activeIndex = newIndex;
    updateCoverflowCaption();
    updateCoverflowDots();
  }

  const step = () => {
    const remaining = targetRef - posRef;
    if (Math.abs(remaining) < 0.0004) {
      posRef = targetRef;
      paintCoverflow();
      rafId = null;
      return;
    }
    posRef += remaining * 0.16;
    paintCoverflow();
    rafId = requestAnimationFrame(step);
  };
  rafId = requestAnimationFrame(step);
}

function goToCoverflowIndex(index) {
  const count = filteredVideos.length;
  if (!count) return;

  const target = CF_CONFIG.loop
    ? index + Math.round((targetRef - index) / count) * count
    : index;
  settleCoverflow(target);
}

function nudgeCoverflow(by) {
  const count = filteredVideos.length;
  if (!count) return;
  const target = Math.round(targetRef) + by;
  settleCoverflow(target);
}

function updateCoverflowCaption() {
  if (!captionBox || !filteredVideos.length) return;
  const video = filteredVideos[activeIndex];
  if (!video) return;

  const subText = currentLang === 'es' ? video.subtitle_es : video.subtitle_en;
  const btnText = translations[currentLang].btn_play_now || 'Reproducir Video';

  let metaHtml = '';
  if (video.meta && video.meta.length) {
    metaHtml = `
      <div class="cf-meta-list">
        ${video.meta.map(m => {
          const label = currentLang === 'es' ? m.label_es : m.label_en;
          return `
            <div class="cf-meta-item">
              <span class="cf-meta-label">${label}:</span>
              <span class="cf-meta-val">${m.val}</span>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  captionBox.innerHTML = `
    <h3 class="cf-caption-title">${video.title}</h3>
    <p class="cf-caption-subtitle">${subText}</p>
    ${metaHtml}
    <button class="btn btn-primary cf-caption-play-btn" onclick="launchActiveVideo()">
      <span>${btnText}</span>
      <span class="btn-icon-wrapper">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      </span>
    </button>
  `;
}

function launchActiveVideo() {
  const video = filteredVideos[activeIndex];
  if (!video) return;
  const globalIdx = portfolioVideos.findIndex(v => v.id === video.id);
  openTheaterPlayer(globalIdx >= 0 ? globalIdx : activeIndex);
}

function updateCoverflowDots() {
  if (!dotsContainer) return;
  dotsContainer.innerHTML = '';
  filteredVideos.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = `cf-dot ${i === activeIndex ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Ir al slide ${i + 1}`);
    dot.addEventListener('click', () => goToCoverflowIndex(i));
    dotsContainer.appendChild(dot);
  });
}

function buildCoverflowCards() {
  if (!track) return;
  track.innerHTML = '';
  cardEls = [];

  filteredVideos.forEach((video, index) => {
    const card = document.createElement('div');
    card.className = 'cf-card';
    card.setAttribute('data-orientation', video.orientation);
    card.setAttribute('data-index', index);

    const tagText = currentLang === 'es' ? video.tag_es : video.tag_en;
    // High quality poster thumbnail URL from Google Drive
    const posterUrl = `https://lh3.googleusercontent.com/d/${video.driveId}=w800`;
    const fallbackPosterUrl = `https://drive.google.com/thumbnail?id=${video.driveId}&sz=w800`;

    card.innerHTML = `
      <div class="cf-thumb">
        <img class="cf-poster-img" src="${posterUrl}" alt="${video.title}" onerror="this.onerror=null; this.src='${fallbackPosterUrl}'" />
        <span class="cf-badge">${tagText}</span>
        <div class="cf-play-btn" aria-label="Reproducir">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </div>
        <div class="cf-card-title-overlay">
          ${video.title}
        </div>
      </div>
    `;

    card.addEventListener('click', (e) => {
      const clickedIdx = index;
      if (clickedIdx === activeIndex) {
        const globalIdx = portfolioVideos.findIndex(v => v.id === video.id);
        openTheaterPlayer(globalIdx >= 0 ? globalIdx : clickedIdx);
      } else {
        goToCoverflowIndex(clickedIdx);
      }
    });

    track.appendChild(card);
    cardEls.push(card);
  });

  posRef = 0;
  targetRef = 0;
  activeIndex = 0;

  measureCardWidth();
  paintCoverflow();
  updateCoverflowCaption();
  updateCoverflowDots();
}

// Pointer & Drag handlers
function initCoverflowDrag() {
  if (!stage) return;

  stage.addEventListener('pointerdown', (e) => {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    stage.setPointerCapture(e.pointerId);
    targetRef = posRef;
    dragRef = {
      id: e.pointerId,
      x: e.clientX,
      pos: posRef,
      v: 0,
      t: performance.now()
    };
  });

  stage.addEventListener('pointermove', (e) => {
    if (!dragRef || dragRef.id !== e.pointerId) return;
    const cfg = getCoverflowConfig();
    const pitch = cardWidth * (1 + cfg.gap);
    if (!pitch) return;

    const now = performance.now();
    const prevPos = posRef;
    posRef = dragRef.pos - (e.clientX - dragRef.x) / pitch;

    dragRef.v = ((posRef - prevPos) / Math.max(now - dragRef.t, 1)) * 1000;
    dragRef.t = now;

    const idx = indexAt(posRef);
    if (idx !== activeIndex) {
      activeIndex = idx;
      updateCoverflowCaption();
      updateCoverflowDots();
    }
    paintCoverflow();
  });

  const endDrag = (e) => {
    if (!dragRef || dragRef.id !== e.pointerId) return;
    dragRef = null;
    const carried = Math.max(-2, Math.min(2, dragRef?.v ? dragRef.v * 0.18 : 0));
    settleCoverflow(Math.round(posRef + carried));
  };

  stage.addEventListener('pointerup', endDrag);
  stage.addEventListener('pointercancel', endDrag);
}

// Filter button logic
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.getAttribute('data-filter');

    if (currentFilter === 'all') {
      filteredVideos = [...portfolioVideos];
    } else {
      filteredVideos = portfolioVideos.filter(v => v.category === currentFilter);
    }
    buildCoverflowCards();
  });
});

if (cfPrevBtn) cfPrevBtn.addEventListener('click', () => nudgeCoverflow(-1));
if (cfNextBtn) cfNextBtn.addEventListener('click', () => nudgeCoverflow(1));

/* --- 5. Cinematic Theater Modal Controller --- */
const theaterModal = document.getElementById('theaterModal');
const theaterFrameContainer = document.getElementById('theaterFrameContainer');
const theaterTitle = document.getElementById('theaterTitle');
const theaterBadge = document.getElementById('theaterBadge');
const theaterCounter = document.getElementById('theaterCounter');
const theaterCloseBtn = document.getElementById('theaterCloseBtn');
const theaterPrevBtn = document.getElementById('theaterPrevBtn');
const theaterNextBtn = document.getElementById('theaterNextBtn');
let currentTheaterIndex = 0;

function openTheaterPlayer(index) {
  if (!theaterModal || index < 0 || index >= portfolioVideos.length) return;
  currentTheaterIndex = index;
  const video = portfolioVideos[currentTheaterIndex];

  theaterTitle.textContent = video.title;
  theaterBadge.textContent = video.orientation === 'vertical' ? '9:16 Vertical' : '16:9 4K Widescreen';
  theaterCounter.textContent = `${currentTheaterIndex + 1} / ${portfolioVideos.length}`;

  // Configure modal direct Google Drive link for mobile fallback
  let actionsBox = document.getElementById('theaterActions');
  if (!actionsBox) {
    const topbar = theaterModal.querySelector('.theater-topbar');
    if (topbar) {
      actionsBox = document.createElement('div');
      actionsBox.id = 'theaterActions';
      actionsBox.className = 'theater-topbar-actions';
      topbar.insertBefore(actionsBox, theaterCloseBtn);
    }
  }

  const driveUrl = `https://drive.google.com/file/d/${video.driveId}/view?usp=sharing`;
  const directText = translations[currentLang].player_drive_link || 'Ver en Drive ↗';
  if (actionsBox) {
    actionsBox.innerHTML = `
      <a class="theater-direct-link" href="${driveUrl}" target="_blank" rel="noopener noreferrer">
        ${directText}
      </a>
    `;
  }

  theaterFrameContainer.className = 'theater-frame-container ' + 
    (video.orientation === 'vertical' ? 'aspect-vertical' : 'aspect-horizontal');

  // Inject Google Drive embed iframe with full permissions
  theaterFrameContainer.innerHTML = `
    <iframe class="theater-iframe"
      src="https://drive.google.com/file/d/${video.driveId}/preview"
      allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
      allowfullscreen
      loading="eager">
    </iframe>
  `;

  theaterModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeTheaterPlayer() {
  if (!theaterModal) return;
  theaterModal.classList.remove('active');
  theaterFrameContainer.innerHTML = '';
  document.body.style.overflow = '';
}

function navigateTheater(step) {
  const newIndex = (currentTheaterIndex + step + portfolioVideos.length) % portfolioVideos.length;
  openTheaterPlayer(newIndex);
}

if (theaterCloseBtn) theaterCloseBtn.addEventListener('click', closeTheaterPlayer);
if (theaterPrevBtn) theaterPrevBtn.addEventListener('click', (e) => { e.stopPropagation(); navigateTheater(-1); });
if (theaterNextBtn) theaterNextBtn.addEventListener('click', (e) => { e.stopPropagation(); navigateTheater(1); });

if (theaterModal) {
  theaterModal.addEventListener('click', (e) => {
    if (e.target === theaterModal) closeTheaterPlayer();
  });
}

document.addEventListener('keydown', (e) => {
  if (theaterModal && theaterModal.classList.contains('active')) {
    if (e.key === 'Escape') closeTheaterPlayer();
    if (e.key === 'ArrowLeft') navigateTheater(-1);
    if (e.key === 'ArrowRight') navigateTheater(1);
    return;
  }
  if (e.key === 'ArrowLeft') nudgeCoverflow(-1);
  if (e.key === 'ArrowRight') nudgeCoverflow(1);
});

// Resize observer for responsive coverflow cards
window.addEventListener('resize', () => {
  measureCardWidth();
  paintCoverflow();
});

/* --- 6. Initial Hydration --- */
document.addEventListener('DOMContentLoaded', () => {
  buildCoverflowCards();
  initCoverflowDrag();
});
