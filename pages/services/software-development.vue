<script setup lang="ts">
const deliverables = [
  'Technical strategy, architecture diagrams, and sprint planning',
  'Responsive front-end interfaces powered by modern frameworks',
  'API development, third-party integrations, and automation',
  'Automated testing, CI/CD pipelines, and performance monitoring'
];

const stacks = ['Nuxt.js & Vue', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS & Vercel', 'Docker'];
</script>

<template>
  <div>
    <section class="hero" style="padding-bottom: 4rem;">
      <div class="hero-content">
        <div class="hero-text">
          <div class="badge fade-up">Software Development</div>
          <h1>Build future-ready products with confidence.</h1>
          <p>
            We translate complex requirements into lovable software—balancing elegant UX with scalable, secure engineering practices.
          </p>
          <div class="hero-actions fade-up delay-1">
            <NuxtLink to="/contact" class="btn btn-primary">Schedule a consult</NuxtLink>
            <NuxtLink to="/services" class="btn btn-outline">Back to services</NuxtLink>
          </div>
        </div>
        <div class="hero-card fade-up delay-2">
          <h3>Highlights</h3>
          <p>End-to-end development support with measurable milestones, transparent communication, and built-in security reviews.</p>
        </div>
      </div>
    </section>

    <section class="section light">
      <div class="container">
        <h2 class="fade-up">What we deliver</h2>
        <p class="section-lead fade-up delay-1">
          Launch faster with a dedicated team that treats your roadmap as our own.
        </p>
        <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));">
          <div class="card fade-up" v-for="(deliverable, index) in deliverables" :key="deliverable" :class="`delay-${index + 1}`">
            <h3>0{{ index + 1 }}</h3>
            <p>{{ deliverable }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section ocean">
      <div class="container">
        <h2 class="fade-up">Favorite tools &amp; technologies</h2>
        <p class="section-lead fade-up delay-1">
          Choosing the right stack is critical. We rely on proven, future-friendly technologies that we would happily maintain for years.
        </p>
        <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.5rem;">
          <div v-for="stack in stacks" :key="stack" class="card fade-up" style="text-align: center; padding: 1.75rem 1rem;">
            <h3 style="margin: 0;">{{ stack }}</h3>
          </div>
        </div>
      </div>
    </section>

    <section class="section light">
      <div class="container" style="text-align: center;">
        <h2 class="fade-up">Ready to co-create?</h2>
        <p class="section-lead fade-up delay-1">
          Tell us about your product vision, and we’ll share an action plan with clear next steps.
        </p>
        <NuxtLink to="/contact" class="btn btn-primary fade-up delay-2">Start the conversation</NuxtLink>
      </div>
    </section>
  </div>
</template>
