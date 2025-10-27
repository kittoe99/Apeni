<script setup lang="ts">
const safeguards = [
  {
    title: 'Security Assessments',
    description: 'In-depth evaluations of your applications, infrastructure, and team practices to uncover and prioritize risks.'
  },
  {
    title: 'Threat Monitoring',
    description: 'Continuous monitoring with alerts, incident response playbooks, and tabletop exercises to keep teams ready.'
  },
  {
    title: 'Compliance Guidance',
    description: 'Support for SOC 2, HIPAA, GDPR, and other frameworks with documentation, training, and remediation.'
  }
];

const assurances = [
  'Security woven into every stage of our development lifecycle.',
  'Denver-based consultants with remote capabilities across time zones.',
  'Actionable reporting that your leadership and technical teams can act on immediately.'
];
</script>

<template>
  <div>
    <section class="hero" style="padding-bottom: 4rem;">
      <div class="hero-content">
        <div class="hero-text">
          <div class="badge fade-up">Cybersecurity</div>
          <h1>Protect your growth with proactive security.</h1>
          <p>
            A resilient digital presence depends on vigilance. We help you anticipate threats, respond quickly, and maintain trust with your customers.
          </p>
          <div class="hero-actions fade-up delay-1">
            <NuxtLink to="/contact" class="btn btn-primary">Book a security review</NuxtLink>
            <NuxtLink to="/services" class="btn btn-outline">Back to services</NuxtLink>
          </div>
        </div>
        <div class="hero-card fade-up delay-2">
          <h3>Confidence for your entire team</h3>
          <p>Security is more than a checklist. We partner with your developers, operations, and leadership to build a sustainable security culture.</p>
        </div>
      </div>
    </section>

    <section class="section light">
      <div class="container">
        <h2 class="fade-up">Safeguards tailored to your organization</h2>
        <div class="grid grid-3">
          <div v-for="(safeguard, index) in safeguards" :key="safeguard.title" class="card fade-up" :class="`delay-${index + 1}`">
            <h3>{{ safeguard.title }}</h3>
            <p>{{ safeguard.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section ocean">
      <div class="container">
        <h2 class="fade-up">What you can expect</h2>
        <p class="section-lead fade-up delay-1">
          We make security approachable for stakeholders at every level of your organization.
        </p>
        <ul class="card" style="list-style: none; margin: 0;">
          <li v-for="assurance in assurances" :key="assurance" class="fade-up" style="margin-bottom: 1rem; display: flex; gap: 0.75rem; align-items: flex-start;">
            <span style="color: var(--color-medium); font-weight: 700;">✓</span>
            <span>{{ assurance }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="section light">
      <div class="container" style="text-align: center;">
        <h2 class="fade-up">Let’s strengthen your defenses.</h2>
        <p class="section-lead fade-up delay-1">
          Share your current challenges and we’ll send a tailored roadmap within two business days.
        </p>
        <NuxtLink to="/contact" class="btn btn-primary fade-up delay-2">Talk with a specialist</NuxtLink>
      </div>
    </section>
  </div>
</template>
