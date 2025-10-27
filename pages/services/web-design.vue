<script setup lang="ts">
const capabilities = [
  {
    title: 'Brand storytelling',
    description: 'Workshops, messaging, and style guides that translate your promise into a memorable experience.',
    icon: 'spark'
  },
  {
    title: 'Responsive UX',
    description: 'Mobile-first layouts, accessibility standards, and purposeful animation tuned for engagement.',
    icon: 'layout'
  },
  {
    title: 'Conversion copy',
    description: 'Collaborative content strategy, SEO foundations, and launch-ready messaging support.',
    icon: 'mail'
  }
];

const packages = [
  {
    name: 'Launch-Ready Website',
    details: 'Ideal for new offerings needing a complete website that’s fast, beautiful, and conversion-ready.',
    icon: 'spark',
    inclusions: ['3-5 core pages & landing template', 'Lead capture + scheduling integrations', 'Accessibility & performance audits']
  },
  {
    name: 'Growth Refresh',
    details: 'Reimagine your existing experience with updated UX, visuals, and content tuned to your goals.',
    icon: 'layout',
    inclusions: ['UX research & analytics review', 'Component design system', 'Content migration & training']
  },
  {
    name: 'Care & Optimization',
    details: 'Ongoing enhancements, experiments, and security updates to keep your presence thriving.',
    icon: 'cloud',
    inclusions: ['Experiment roadmap & reporting', 'Performance monitoring', 'Security updates & backups']
  }
];

const outcomes = [
  'Unified design system across web and product',
  'Higher conversion rates with refined user journeys',
  'Faster updates through component-based builds'
];
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container page-grid">
        <div>
          <div class="badge fade-up">Web Design</div>
          <h1 class="fade-up">Friendly websites that feel like home.</h1>
          <p class="fade-up delay-1">
            We craft ocean-inspired, conversion-ready websites that bring clarity to your brand and delight to your audience.
          </p>
          <div class="hero-cta fade-up delay-2">
            <NuxtLink to="/contact" class="btn btn-primary">Request a design audit</NuxtLink>
            <NuxtLink to="/services" class="btn btn-secondary">Back to services</NuxtLink>
          </div>
        </div>
        <div class="page-visual fade-up delay-2">
          <div class="visual-card">
            <img src="/images/design-moodboard.svg" alt="Design moodboard featuring brand colors and interface sketches" />
          </div>
          <div class="highlight-panel">
            <strong>All-inclusive partnership</strong>
            <ul class="checklist">
              <li
                v-for="item in ['No setup fees—transparent monthly pricing', 'Continuous updates, experiments, and support', 'Design systems crafted for long-term scale']"
                :key="item"
              >
                <span class="icon">
                  <AppIcon name="check" size="16" />
                </span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section is-alt">
      <div class="container">
        <div class="section-header">
          <span class="fade-up">Design capabilities</span>
          <h2 class="fade-up">Everything you need to launch with confidence.</h2>
          <p class="fade-up delay-1">From the first moodboard to post-launch experiments, we deliver experiences that move visitors to action.</p>
        </div>
        <div class="feature-grid">
          <article v-for="capability in capabilities" :key="capability.title" class="feature-card fade-up">
            <div class="feature-icon">
              <AppIcon :name="capability.icon" size="24" />
            </div>
            <h3>{{ capability.title }}</h3>
            <p>{{ capability.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section is-contrast">
      <div class="container">
        <div class="section-header">
          <span class="fade-up">Packages</span>
          <h2 class="fade-up">Flexible paths tailored to your stage.</h2>
          <p class="fade-up delay-1">Choose the engagement that fits your timeline—each includes strategy, design, build, and ongoing support.</p>
        </div>
        <div class="service-grid">
          <article v-for="pkg in packages" :key="pkg.name" class="service-card fade-up">
            <div class="feature-icon">
              <AppIcon :name="pkg.icon" size="24" />
            </div>
            <h3>{{ pkg.name }}</h3>
            <p>{{ pkg.details }}</p>
            <ul>
              <li v-for="inclusion in pkg.inclusions" :key="inclusion">
                <span class="icon"><AppIcon name="check" size="16" /></span>
                <span>{{ inclusion }}</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div class="split-copy">
          <div class="section-header">
            <span class="fade-up">Outcomes</span>
            <h2 class="fade-up">The results our clients celebrate.</h2>
            <p class="fade-up delay-1">
              By uniting strategy, design, and development, we create web experiences that perform on day one and grow with you.
            </p>
          </div>
        </div>
        <div class="split-visual fade-up delay-2">
          <img class="split-image" src="/images/design-moodboard.svg" alt="Design deliverables collage highlighting outcomes" />
          <ul class="checklist is-compact">
            <li v-for="outcome in outcomes" :key="outcome">
              <span class="icon">
                <AppIcon name="check" size="16" />
              </span>
              <span>{{ outcome }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container" style="max-width: 900px;">
        <div class="cta-banner fade-up">
          <h2>Let’s shape your next chapter.</h2>
          <p>Share your current website URL, goals, and timeline—we’ll outline a plan tailored to you.</p>
          <NuxtLink to="/contact" class="btn btn-primary">Start your project</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
