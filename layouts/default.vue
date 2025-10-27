<script setup lang="ts">
import { ref } from 'vue';

const mobileOpen = ref(false);

const links = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Web Design', to: '/services/web-design' },
  { label: 'Software Development', to: '/services/software-development' },
  { label: 'Cybersecurity', to: '/services/cybersecurity' },
  { label: 'Contact', to: '/contact', accent: true }
];

const closeNav = () => {
  mobileOpen.value = false;
};
</script>

<template>
  <div>
    <header class="site-header">
      <div class="top-bar">Now booking new software, web, and security engagements for Q3.</div>
      <div class="container nav-container">
        <NuxtLink to="/" class="brand" @click="closeNav">
          <span class="brand-badge">A</span>
          <span>Apeni.co</span>
        </NuxtLink>
        <button
          class="nav-toggle"
          @click="mobileOpen = !mobileOpen"
          :aria-expanded="mobileOpen"
          aria-controls="site-navigation"
          aria-label="Toggle navigation"
        >
          <AppIcon :name="mobileOpen ? 'close' : 'menu'" />
          <span>{{ mobileOpen ? 'Close' : 'Menu' }}</span>
        </button>
        <nav
          id="site-navigation"
          :class="['nav-links', { open: mobileOpen }]"
          :aria-hidden="mobileOpen ? 'false' : 'true'"
        >
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="nav-link"
            :class="{ cta: link.accent }"
            @click="closeNav"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>
    </header>

    <div class="nav-overlay" :class="{ visible: mobileOpen }" @click="closeNav"></div>

    <main class="page-shell">
      <slot />
    </main>

    <footer class="footer">
      <div class="container footer-grid">
        <div>
          <NuxtLink to="/" class="brand">
            <span class="brand-badge">A</span>
            <span>Apeni.co</span>
          </NuxtLink>
          <p style="margin-top: 1rem; max-width: 260px;">
            Transforming your online presence with conversion-ready design, reliable development, and round-the-clock security.
          </p>
        </div>
        <div>
          <h4>Services</h4>
          <NuxtLink to="/services/web-design">Web Design</NuxtLink>
          <NuxtLink to="/services/software-development">Software Development</NuxtLink>
          <NuxtLink to="/services/cybersecurity">Cybersecurity</NuxtLink>
        </div>
        <div>
          <h4>Company</h4>
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/services">Services Overview</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="mailto:kofikittoe35@gmail.com">kofikittoe35@gmail.com</a>
          <a href="tel:17208429167">720-842-9167</a>
          <span>Denver, Colorado · Remote within 67 km</span>
        </div>
      </div>
      <div class="container footer-bottom">
        <small>&copy; {{ new Date().getFullYear() }} Apeni.co. All rights reserved.</small>
        <span>Preferred contact: Email</span>
      </div>
    </footer>
  </div>
</template>
