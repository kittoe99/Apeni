<script setup lang="ts">
const capabilities = [
  'Brand workshops that translate your story into digital style guides',
  'Responsive layouts optimized for mobile-first experiences',
  'Copywriting support, content strategy, and SEO fundamentals',
  'Interactive prototypes and micro-animations that boost engagement'
];

const packages = [
  {
    name: 'Launch-Ready Website',
    details: 'Perfect for new businesses that need a fast, beautiful site with essential integrations.',
    inclusions: ['3-5 core pages', 'Lead capture & booking integrations', 'Accessibility & performance audits']
  },
  {
    name: 'Growth Refresh',
    details: 'Revitalize your existing site with updated visuals, improved UX flows, and SEO upgrades.',
    inclusions: ['UX and analytics review', 'Component design system', 'Content migration & training']
  },
  {
    name: 'Care & Optimization',
    details: 'Ongoing enhancements, experiments, and security updates to keep your presence thriving.',
    inclusions: ['Monthly experiment roadmap', 'Performance monitoring', 'Security updates & backups']
  }
];
</script>

<template>
  <div>
    <section class="hero service-hero">
      <div class="hero-content">
        <div class="hero-text">
          <div class="badge fade-up">Web Design</div>
          <h1 class="fade-up">Friendly websites that feel like home.</h1>
          <p class="fade-up delay-1">
            We craft ocean-inspired, conversion-ready websites that bring clarity to your brand and delight to your audience.
          </p>
          <div class="hero-actions fade-up delay-2">
            <NuxtLink to="/contact" class="btn btn-primary">Request a design audit</NuxtLink>
            <NuxtLink to="/services" class="btn btn-outline">Back to services</NuxtLink>
          </div>
        </div>
        <div class="hero-media">
          <div class="floating-card fade-up delay-2">
            <span class="eyebrow">All-inclusive partnership</span>
            <ul>
              <li>No setup fees and transparent monthly pricing</li>
              <li>Continuous updates, experiments, and support</li>
              <li>Design systems crafted for long-term scale</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section light">
      <div class="container">
        <h2 class="fade-up">Design capabilities you can rely on</h2>
        <div class="grid grid-3">
          <div v-for="(capability, index) in capabilities" :key="capability" class="card fade-up feature-step" :class="`delay-${index + 1}`">
            <p>{{ capability }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section ocean">
      <div class="container">
        <h2 class="fade-up">Flexible packages built around growth</h2>
        <div class="grid grid-3 process-grid">
          <article v-for="(pkg, index) in packages" :key="pkg.name" class="card fade-up" :class="`delay-${index + 1}`">
            <h3>{{ pkg.name }}</h3>
            <p>{{ pkg.details }}</p>
            <ul>
              <li v-for="inclusion in pkg.inclusions" :key="inclusion">{{ inclusion }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section light">
      <div class="container" style="text-align: center;">
        <h2 class="fade-up">Let’s shape your next chapter.</h2>
        <p class="section-lead fade-up delay-1">Share your current website URL, goals, and timeline—we’ll outline a plan tailored to you.</p>
        <NuxtLink to="/contact" class="btn btn-primary fade-up delay-2">Start your project</NuxtLink>
      </div>
    </section>
  </div>
</template>
