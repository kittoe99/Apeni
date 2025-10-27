<script setup lang="ts">
const safeguards = [
  {
    title: 'Security Assessments',
    description: 'In-depth evaluations of your applications, infrastructure, and team practices to uncover and prioritize risks.',
    icon: 'shield'
  },
  {
    title: 'Threat Monitoring',
    description: 'Continuous monitoring with alerts, incident response playbooks, and tabletop exercises to keep teams ready.',
    icon: 'spark'
  },
  {
    title: 'Compliance Guidance',
    description: 'Support for SOC 2, HIPAA, GDPR, and other frameworks with documentation, training, and remediation.',
    icon: 'layers'
  }
];

const assurances = [
  {
    text: 'Security woven into every stage of our development lifecycle.',
    icon: 'shield'
  },
  {
    text: 'Denver-based consultants with remote capabilities across time zones.',
    icon: 'location'
  },
  {
    text: 'Actionable reporting that your leadership and technical teams can act on immediately.',
    icon: 'check'
  }
];
</script>

<template>
  <div>
    <section class="hero service-hero">
      <div class="hero-content">
        <div class="hero-text">
          <div class="badge fade-up">Cybersecurity</div>
          <h1 class="fade-up">Protect your growth with proactive security.</h1>
          <p class="fade-up delay-1">
            A resilient digital presence depends on vigilance. We help you anticipate threats, respond quickly, and maintain trust with your customers.
          </p>
          <div class="hero-actions fade-up delay-2">
            <NuxtLink to="/contact" class="btn btn-primary">Book a security review</NuxtLink>
            <NuxtLink to="/services" class="btn btn-outline">Back to services</NuxtLink>
          </div>
        </div>
        <div class="hero-media">
          <div class="floating-card fade-up delay-2">
            <span class="eyebrow">Confidence for your team</span>
            <ul>
              <li>
                <span class="list-icon">
                  <AppIcon name="spark" size="16" />
                </span>
                <span>Collaborative workshops across dev, ops, and leadership</span>
              </li>
              <li>
                <span class="list-icon">
                  <AppIcon name="check" size="16" />
                </span>
                <span>Actionable playbooks tailored to your threat landscape</span>
              </li>
              <li>
                <span class="list-icon">
                  <AppIcon name="phone" size="16" />
                </span>
                <span>Rapid response support when incidents occur</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section light">
      <div class="container">
        <h2 class="fade-up">Safeguards tailored to your organization</h2>
        <div class="grid grid-3">
          <div v-for="(safeguard, index) in safeguards" :key="safeguard.title" class="card fade-up" :class="`delay-${index + 1}`">
            <div class="card-icon">
              <AppIcon :name="safeguard.icon" size="26" />
            </div>
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
        <ul class="list-check fade-up delay-2">
          <li v-for="assurance in assurances" :key="assurance.text">
            <span class="list-icon">
              <AppIcon :name="assurance.icon" size="16" />
            </span>
            <span>{{ assurance.text }}</span>
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
