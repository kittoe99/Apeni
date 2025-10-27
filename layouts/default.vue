<script setup lang="ts">
import { ref } from 'vue';

const mobileOpen = ref(false);

const links = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Web Design', to: '/services/web-design' },
  { label: 'Software Development', to: '/services/software-development' },
  { label: 'Cybersecurity', to: '/services/cybersecurity' },
  { label: 'Contact', to: '/contact' }
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
            @click="closeNav"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer class="footer">
      <div class="container">
        <NuxtLink to="/" class="logo">
          <span>A</span>
          <span>Apeni.co</span>
        </NuxtLink>
        <p class="tagline">Transforming ideas into secure, high-performing digital experiences.</p>
        <nav>
          <NuxtLink to="/services">Services</NuxtLink>
          <NuxtLink to="/services/web-design">Web Design</NuxtLink>
          <NuxtLink to="/services/software-development">Software Development</NuxtLink>
          <NuxtLink to="/services/cybersecurity">Cybersecurity</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </nav>
        <small>&copy; {{ new Date().getFullYear() }} Apeni.co. All rights reserved.</small>
      </div>
    </footer>
  </div>
</template>
