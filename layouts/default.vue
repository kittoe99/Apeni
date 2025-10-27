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
    <header>
      <div class="navbar">
        <NuxtLink to="/" class="logo" @click="closeNav">
          <span>A</span>
          <span>Apeni.co</span>
        </NuxtLink>
        <button
          class="nav-toggle"
          @click="mobileOpen = !mobileOpen"
          :aria-expanded="mobileOpen"
          aria-controls="site-navigation"
        >
          <span>{{ mobileOpen ? 'Close ✕' : 'Menu ☰' }}</span>
        </button>
        <nav id="site-navigation" :class="['nav-links', { open: mobileOpen }]">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="nav-link"
            :class="{ accent: link.accent }"
            @click="closeNav"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>
    </header>

    <main class="page-shell">
      <slot />
    </main>

    <footer class="footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <NuxtLink to="/" class="logo">
            <span>A</span>
            <span>Apeni.co</span>
          </NuxtLink>
          <p class="tagline">Transforming ideas into secure, high-performing digital experiences.</p>
        </div>
        <div class="footer-contact">
          <h4>Connect</h4>
          <a href="mailto:kofikittoe35@gmail.com">kofikittoe35@gmail.com</a>
          <a href="tel:17208429167">720-842-9167</a>
        </div>
        <div class="footer-links">
          <h4>Explore</h4>
          <NuxtLink to="/services">Services</NuxtLink>
          <NuxtLink to="/services/web-design">Web Design</NuxtLink>
          <NuxtLink to="/services/software-development">Software Development</NuxtLink>
          <NuxtLink to="/services/cybersecurity">Cybersecurity</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </div>
      </div>
      <div class="container footer-bottom">
        <small>&copy; {{ new Date().getFullYear() }} Apeni.co. All rights reserved.</small>
        <span>Denver, Colorado · Remote within 67 km</span>
      </div>
    </footer>
  </div>
</template>
