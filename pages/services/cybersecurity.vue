<script setup lang="ts">
const safeguards = [
  {
    title: 'Security assessments',
    description: 'In-depth evaluations of applications, infrastructure, and team practices to uncover and prioritize risks.',
    icon: 'shield'
  },
  {
    title: 'Threat monitoring',
    description: 'Continuous monitoring with alerts, response playbooks, and tabletop exercises to keep teams ready.',
    icon: 'spark'
  },
  {
    title: 'Compliance guidance',
    description: 'Support for SOC 2, HIPAA, GDPR, and more with documentation, training, and remediation.',
    icon: 'layers'
  }
];

const assurances = [
  'Security woven into every stage of our development lifecycle',
  'Denver-based consultants with remote capabilities across time zones',
  'Actionable reporting that leadership and technical teams can act on immediately'
];

const confidencePoints = [
  'Collaborative workshops across dev, ops, and leadership',
  'Actionable playbooks tailored to your threat landscape',
  'Rapid response support when incidents occur'
];
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container page-grid">
        <div>
          <div class="badge fade-up">Cybersecurity</div>
          <h1 class="fade-up">Protect your growth with proactive security.</h1>
          <p class="fade-up delay-1">
            A resilient digital presence depends on vigilance. We help you anticipate threats, respond quickly, and maintain trust with your customers.
          </p>
          <div class="hero-cta fade-up delay-2">
            <NuxtLink to="/contact" class="btn btn-primary">Book a security review</NuxtLink>
            <NuxtLink to="/services" class="btn btn-secondary">Back to services</NuxtLink>
          </div>
        </div>
        <div class="highlight-panel fade-up delay-2">
          <strong>Confidence for your team</strong>
          <ul style="margin: 0; padding: 0; display: grid; gap: 0.7rem;">
            <li v-for="point in confidencePoints" :key="point" style="list-style: none; display: flex; gap: 0.7rem; align-items: center;">
              <span class="icon" style="width: 28px; height: 28px; border-radius: 50%; background: rgba(0, 128, 96, 0.12); display: inline-flex; align-items: center; justify-content: center; color: var(--color-primary);">
                <AppIcon name="check" size="16" />
              </span>
              <span>{{ point }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section is-alt">
      <div class="container">
        <div class="section-header">
          <span class="fade-up">Safeguards</span>
          <h2 class="fade-up">Layered protection tailored to your organization.</h2>
          <p class="fade-up delay-1">We embed alongside your teams to prioritize risk, close gaps, and build resilience.</p>
        </div>
        <div class="feature-grid">
          <article v-for="safeguard in safeguards" :key="safeguard.title" class="feature-card fade-up">
            <div class="feature-icon">
              <AppIcon :name="safeguard.icon" size="24" />
            </div>
            <h3>{{ safeguard.title }}</h3>
            <p>{{ safeguard.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section is-contrast">
      <div class="container split">
        <div class="split-copy">
          <div class="section-header">
            <span class="fade-up">What you can expect</span>
            <h2 class="fade-up">Security that’s approachable for every stakeholder.</h2>
            <p class="fade-up delay-1">
              We translate complex threats into plain language, then deliver the tools and training to keep your organization ready.
            </p>
          </div>
        </div>
        <div class="split-visual fade-up delay-2">
          <ul style="margin: 0; padding: 0; display: grid; gap: 0.9rem;">
            <li v-for="assurance in assurances" :key="assurance" style="list-style: none; display: flex; gap: 0.8rem; align-items: center;">
              <span class="icon" style="width: 32px; height: 32px; border-radius: 50%; background: rgba(0, 128, 96, 0.12); display: inline-flex; align-items: center; justify-content: center; color: var(--color-primary);">
                <AppIcon name="check" size="16" />
              </span>
              <span>{{ assurance }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container" style="max-width: 900px;">
        <div class="cta-banner fade-up">
          <h2>Let’s strengthen your defenses.</h2>
          <p>Share your current challenges and we’ll send a tailored roadmap within two business days.</p>
          <NuxtLink to="/contact" class="btn btn-primary">Talk with a specialist</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
