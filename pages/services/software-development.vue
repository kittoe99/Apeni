<script setup lang="ts">
const deliverables = [
  {
    title: 'Strategy & Architecture',
    description: 'Technical strategy, architecture diagrams, and sprint planning',
    icon: 'layers'
  },
  {
    title: 'Front-end Craftsmanship',
    description: 'Responsive interfaces powered by modern frameworks and component systems',
    icon: 'layout'
  },
  {
    title: 'Integrations & Automation',
    description: 'API development, third-party integrations, and workflow automation',
    icon: 'cloud'
  },
  {
    title: 'Quality & Reliability',
    description: 'Automated testing, CI/CD pipelines, and performance monitoring',
    icon: 'shield'
  }
];

const stacks = ['Nuxt.js & Vue', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS & Vercel', 'Docker'];
</script>

<template>
  <div>
    <section class="hero service-hero">
      <div class="hero-content">
        <div class="hero-text">
          <div class="badge fade-up">Software Development</div>
          <h1 class="fade-up">Build future-ready products with confidence.</h1>
          <p class="fade-up delay-1">
            We translate complex requirements into lovable software—balancing elegant UX with scalable, secure engineering practices.
          </p>
          <div class="hero-actions fade-up delay-2">
            <NuxtLink to="/contact" class="btn btn-primary">Schedule a consult</NuxtLink>
            <NuxtLink to="/services" class="btn btn-outline">Back to services</NuxtLink>
          </div>
        </div>
        <div class="hero-media">
          <div class="floating-card fade-up delay-2">
            <span class="eyebrow">Highlights</span>
            <ul>
              <li>
                <span class="list-icon">
                  <AppIcon name="spark" size="16" />
                </span>
                <span>Transparent roadmaps &amp; measurable milestones</span>
              </li>
              <li>
                <span class="list-icon">
                  <AppIcon name="shield" size="16" />
                </span>
                <span>Security reviews embedded into every sprint</span>
              </li>
              <li>
                <span class="list-icon">
                  <AppIcon name="location" size="16" />
                </span>
                <span>Dedicated Denver-based product squad</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section light">
      <div class="container">
        <h2 class="fade-up">What we deliver</h2>
        <p class="section-lead fade-up delay-1">
          Launch faster with a dedicated team that treats your roadmap as our own.
        </p>
        <div class="grid grid-3">
          <div
            class="card feature-step fade-up"
            v-for="(deliverable, index) in deliverables"
            :key="deliverable.title"
            :class="`delay-${index + 1}`"
          >
            <div class="card-icon small">
              <AppIcon :name="deliverable.icon" size="22" />
            </div>
            <h3>{{ deliverable.title }}</h3>
            <p>{{ deliverable.description }}</p>
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
        <div class="grid stack-grid">
          <div v-for="stack in stacks" :key="stack" class="card stack-card fade-up">
            <h3>{{ stack }}</h3>
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
