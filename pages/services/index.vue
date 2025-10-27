<script setup lang="ts">
const services = [
  {
    title: 'Web Design',
    description:
      'Craft a polished, responsive website that connects your brand story to measurable results across every touchpoint.',
    href: '/services/web-design',
    icon: 'layout',
    bullets: ['Conversion-focused UX and copy', 'Design systems & CMS integrations', 'Launch plans and optimization']
  },
  {
    title: 'Software Development',
    description:
      'Ship modern applications with a collaborative team handling architecture, sprints, QA, and deployment.',
    href: '/services/software-development',
    icon: 'code',
    bullets: ['Product strategy & roadmapping', 'API design and automation workflows', 'Testing, documentation, and support']
  },
  {
    title: 'Cybersecurity',
    description: 'Protect your product, data, and users with proactive assessments, monitoring, and incident response.',
    href: '/services/cybersecurity',
    icon: 'shield',
    bullets: ['Security audits & hardening', 'DevSecOps pipeline integration', 'Training and compliance guidance']
  }
];

const collaboration = [
  {
    title: 'Shared strategy',
    copy: 'Align on goals, metrics, and milestones so every sprint produces tangible business outcomes.'
  },
  {
    title: 'Iterative delivery',
    copy: 'Weekly touchpoints, demos, and feedback loops keep work transparent and collaborative.'
  },
  {
    title: 'Long-term partnership',
    copy: 'Post-launch optimization, security monitoring, and support retainers keep momentum moving.'
  }
];
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container page-grid">
        <div>
          <div class="badge fade-up">Services</div>
          <h1 class="fade-up">A single partner for design, engineering, and security.</h1>
          <p class="fade-up delay-1">
            From launch-ready websites to mission-critical platforms, Apeni.co delivers cross-functional expertise so you can
            move faster without sacrificing quality.
          </p>
        </div>
        <div class="highlight-panel fade-up delay-2">
          <strong>What you can expect</strong>
          <small>Every engagement includes:</small>
          <ul style="margin: 0; padding: 0; display: grid; gap: 0.7rem;">
            <li v-for="item in ['Strategy workshops & roadmaps', 'Weekly progress touchpoints', 'Security baked into every sprint']" :key="item" style="list-style: none; display: flex; align-items: center; gap: 0.7rem;">
              <span class="icon" style="width: 28px; height: 28px; border-radius: 50%; background: rgba(0, 128, 96, 0.12); display: inline-flex; align-items: center; justify-content: center; color: var(--color-primary);">
                <AppIcon name="check" size="16" />
              </span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section is-alt">
      <div class="container">
        <div class="section-header">
          <span class="fade-up">What we do</span>
          <h2 class="fade-up">Choose the focus area that accelerates your roadmap.</h2>
          <p class="fade-up delay-1">
            Work with a dedicated, multidisciplinary team that adapts to your tools, cadence, and internal workflows.
          </p>
        </div>
        <div class="service-grid">
          <article v-for="service in services" :key="service.title" class="service-card fade-up">
            <div class="feature-icon">
              <AppIcon :name="service.icon" size="24" />
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <ul>
              <li v-for="bullet in service.bullets" :key="bullet">
                <span class="icon"><AppIcon name="check" size="16" /></span>
                <span>{{ bullet }}</span>
              </li>
            </ul>
            <NuxtLink :to="service.href" class="btn btn-secondary" style="justify-self: flex-start;">Explore {{
              service.title
            }}</NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <section class="section is-contrast">
      <div class="container">
        <div class="section-header" style="text-align: center; margin: 0 auto 3rem;">
          <span class="fade-up">How we collaborate</span>
          <h2 class="fade-up">Transparent delivery that feels in-house.</h2>
          <p class="fade-up delay-1" style="margin: 0 auto; max-width: 640px;">
            We integrate with your team through shared channels, planning tools, and a proactive communications rhythm.
          </p>
        </div>
        <div class="feature-grid">
          <article v-for="step in collaboration" :key="step.title" class="feature-card fade-up">
            <h3>{{ step.title }}</h3>
            <p>{{ step.copy }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container" style="max-width: 900px;">
        <div class="cta-banner fade-up">
          <h2>Let’s map the engagement that fits your team.</h2>
          <p>Tell us about your goals, timeline, and must-haves—we’ll share a tailored plan within one business day.</p>
          <NuxtLink to="/contact" class="btn btn-primary">Start the conversation</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
