<script setup lang="ts">
const capabilities = [
  {
    text: 'Brand workshops that translate your story into digital style guides',
    icon: 'spark'
  },
  {
    text: 'Responsive layouts optimized for mobile-first experiences',
    icon: 'layout'
  },
  {
    text: 'Copywriting support, content strategy, and SEO fundamentals',
    icon: 'mail'
  },
  {
    text: 'Interactive prototypes and micro-animations that boost engagement',
    icon: 'code'
  }
];

const packages = [
  {
    name: 'Launch-Ready Website',
    details: 'Perfect for new businesses that need a fast, beautiful site with essential integrations.',
    icon: 'spark',
    inclusions: ['3-5 core pages', 'Lead capture & booking integrations', 'Accessibility & performance audits']
  },
  {
    name: 'Growth Refresh',
    details: 'Revitalize your existing site with updated visuals, improved UX flows, and SEO upgrades.',
    icon: 'layout',
    inclusions: ['UX and analytics review', 'Component design system', 'Content migration & training']
  },
  {
    name: 'Care & Optimization',
    details: 'Ongoing enhancements, experiments, and security updates to keep your presence thriving.',
    icon: 'cloud',
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
              <li>
                <span class="list-icon">
                  <AppIcon name="check" size="16" />
                </span>
                <span>No setup fees and transparent monthly pricing</span>
              </li>
              <li>
                <span class="list-icon">
                  <AppIcon name="spark" size="16" />
                </span>
                <span>Continuous updates, experiments, and support</span>
              </li>
              <li>
                <span class="list-icon">
                  <AppIcon name="layers" size="16" />
                </span>
                <span>Design systems crafted for long-term scale</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section light">
      <div class="container">
        <h2 class="fade-up">Design capabilities you can rely on</h2>
        <div class="grid grid-3">
          <div
            v-for="(capability, index) in capabilities"
            :key="capability.text"
            class="card fade-up feature-step"
            :class="`delay-${index + 1}`"
          >
            <div class="card-icon small">
              <AppIcon :name="capability.icon" size="22" />
            </div>
            <p>{{ capability.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section ocean">
      <div class="container">
        <h2 class="fade-up">Flexible packages built around growth</h2>
        <div class="grid grid-3 process-grid">
          <article v-for="(pkg, index) in packages" :key="pkg.name" class="card fade-up" :class="`delay-${index + 1}`">
            <div class="card-icon">
              <AppIcon :name="pkg.icon" size="26" />
            </div>
            <h3>{{ pkg.name }}</h3>
            <p>{{ pkg.details }}</p>
            <ul class="card-list">
              <li v-for="inclusion in pkg.inclusions" :key="inclusion">
                <span class="list-icon">
                  <AppIcon name="check" size="16" />
                </span>
                <span>{{ inclusion }}</span>
              </li>
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
