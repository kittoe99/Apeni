<script setup lang="ts">
const deliverables = [
  {
    title: 'Strategy & architecture',
    description: 'Product vision mapping, technical roadmaps, and sprint planning to align every stakeholder.',
    icon: 'layers'
  },
  {
    title: 'Experience engineering',
    description: 'Responsive interfaces powered by modern frameworks and component systems.',
    icon: 'layout'
  },
  {
    title: 'Integrations & automation',
    description: 'API development, third-party integrations, and workflow automation that scales.',
    icon: 'cloud'
  },
  {
    title: 'Reliability & security',
    description: 'Automated testing, CI/CD, monitoring, and DevSecOps baked into every release.',
    icon: 'shield'
  }
];

const stacks = ['Nuxt.js & Vue', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS & Vercel', 'Docker'];

const commitments = [
  'Transparent roadmaps & measurable milestones',
  'Security reviews embedded into every sprint',
  'Dedicated Denver-based product squad'
];
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container page-grid">
        <div>
          <div class="badge fade-up">Software Development</div>
          <h1 class="fade-up">Build future-ready products with confidence.</h1>
          <p class="fade-up delay-1">
            We translate complex requirements into lovable software—balancing elegant UX with scalable, secure engineering practices.
          </p>
          <div class="hero-cta fade-up delay-2">
            <NuxtLink to="/contact" class="btn btn-primary">Schedule a consult</NuxtLink>
            <NuxtLink to="/services" class="btn btn-secondary">Back to services</NuxtLink>
          </div>
        </div>
        <div class="page-visual fade-up delay-2">
          <div class="visual-card">
            <img src="/images/dev-workflow.svg" alt="Application workflow illustration with code and collaboration" />
          </div>
          <div class="highlight-panel">
            <strong>Highlights</strong>
            <ul class="checklist">
              <li v-for="item in commitments" :key="item">
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
          <span class="fade-up">What we deliver</span>
          <h2 class="fade-up">Engineering partnerships that scale with you.</h2>
          <p class="fade-up delay-1">Launch faster with a dedicated squad treating your roadmap as our own.</p>
        </div>
        <div class="feature-grid">
          <article v-for="deliverable in deliverables" :key="deliverable.title" class="feature-card fade-up">
            <div class="feature-icon">
              <AppIcon :name="deliverable.icon" size="24" />
            </div>
            <h3>{{ deliverable.title }}</h3>
            <p>{{ deliverable.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section is-contrast">
      <div class="container">
        <div class="section-header">
          <span class="fade-up">Our toolkit</span>
          <h2 class="fade-up">Future-friendly stacks we love.</h2>
          <p class="fade-up delay-1">We rely on modern technologies we trust to maintain for years—stable, secure, and ready to scale.</p>
        </div>
        <div class="feature-grid">
          <article v-for="stack in stacks" :key="stack" class="feature-card fade-up">
            <h3>{{ stack }}</h3>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container" style="max-width: 900px;">
        <div class="cta-banner fade-up">
          <h2>Ready to co-create?</h2>
          <p>Tell us about your product vision, and we’ll share an action plan with clear next steps.</p>
          <NuxtLink to="/contact" class="btn btn-primary">Start the conversation</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
