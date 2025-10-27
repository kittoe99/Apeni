<script setup lang="ts">
const stats = [
  { value: '120+', label: 'products and websites launched' },
  { value: '97%', label: 'client retention over 3 years' },
  { value: '24/7', label: 'security monitoring & response' }
];

const brandNames = ['Harbor & Co.', 'Blue Mesa Ventures', 'Seawind Labs', 'Northshore Tech'];

const heroHighlights = [
  'Strategy-to-launch partnership',
  'Secure by design delivery',
  'Analytics & optimization baked in'
];

const featureCards = [
  {
    title: 'Strategy that converts',
    copy:
      'Build a roadmap that aligns design, development, and security so every sprint moves the metrics that matter.',
    icon: 'spark'
  },
  {
    title: 'Experience-led design',
    copy:
      'Blend brand storytelling with responsive UX, motion, and accessibility standards to delight visitors on any device.',
    icon: 'layout'
  },
  {
    title: 'Security from day one',
    copy:
      'Layer in audits, monitoring, and response plans to keep your data, customers, and reputation protected.',
    icon: 'shield'
  }
];

const services = [
  {
    title: 'Web Design',
    description:
      'High-performing marketing sites and digital experiences that showcase your value, convert leads, and scale with your content.',
    href: '/services/web-design',
    icon: 'layout',
    bullets: ['Research-backed UX flows', 'Component-driven design systems', 'Performance and SEO optimization']
  },
  {
    title: 'Software Development',
    description:
      'Modern applications engineered with clean code, reliable integrations, and automation that supports your team.',
    href: '/services/software-development',
    icon: 'code',
    bullets: ['End-to-end product delivery', 'API design and platform integrations', 'QA, testing, and documentation']
  },
  {
    title: 'Cybersecurity',
    description:
      'Comprehensive protection across your stack with assessments, monitoring, and incident response readiness.',
    href: '/services/cybersecurity',
    icon: 'shield',
    bullets: ['Security assessments & hardening', 'DevSecOps automation', '24/7 monitoring & response playbooks']
  }
];

const processSteps = [
  {
    title: 'Discover & align',
    copy: 'Workshops, research, and success metrics define what winning looks like for your team.'
  },
  {
    title: 'Design & prototype',
    copy: 'Rapid iterations bring concepts to life with a focus on clarity, emotion, and conversions.'
  },
  {
    title: 'Build & secure',
    copy: 'Engineering and security teams collaborate to launch performant, resilient products.'
  }
];

const supportPoints = [
  'Preferred contact via email with one-day response time',
  'Denver-based team collaborating remotely worldwide',
  'Flexible retainers and launch packages tailored to goals'
];
</script>

<template>
  <div>
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <div class="hero-pill fade-up">Friendly experts for growth-focused teams</div>
          <h1 class="fade-up">Build momentum with design, development, and security in sync.</h1>
          <p class="fade-up delay-1">
            Apeni.co helps Denver businesses and remote teams transform their online presence with conversion-driven web design,
            powerful software, and proactive cybersecurity support.
          </p>
          <div class="hero-cta fade-up delay-2">
            <NuxtLink to="/contact" class="btn btn-primary">Start a project</NuxtLink>
            <NuxtLink to="/services" class="btn btn-secondary">Explore services</NuxtLink>
          </div>
          <div class="hero-metrics fade-up delay-3">
            <div v-for="stat in stats" :key="stat.label" class="hero-metric">
              <strong>{{ stat.value }}</strong>
              <span>{{ stat.label }}</span>
            </div>
          </div>
        </div>
        <div class="hero-visual fade-up delay-2">
          <div class="hero-panel">
            <h3>End-to-end partnership</h3>
            <p>Everything you need to launch and scale—managed by one responsive team.</p>
            <div class="panel-list">
              <div v-for="item in heroHighlights" :key="item" class="panel-item">
                <span>
                  <AppIcon name="check" size="16" />
                </span>
                <div>{{ item }}</div>
              </div>
            </div>
            <NuxtLink to="/contact" class="btn btn-primary" style="justify-self: flex-start;">Book a consultation</NuxtLink>
          </div>
        </div>
      </div>
      <div class="logo-strip fade-up delay-3">
        <span v-for="brand in brandNames" :key="brand">{{ brand }}</span>
      </div>
    </section>

    <section class="section is-alt">
      <div class="container">
        <div class="section-header">
          <span class="fade-up">Full-service studio</span>
          <h2 class="fade-up">Design, build, and protect every digital touchpoint.</h2>
          <p class="fade-up delay-1">
            Skip the handoffs between agencies. Our multidisciplinary team leads with strategy, then delivers the design, code,
            and security to make your vision real.
          </p>
        </div>
        <div class="feature-grid">
          <article v-for="feature in featureCards" :key="feature.title" class="feature-card fade-up">
            <div class="feature-icon">
              <AppIcon :name="feature.icon" size="24" />
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.copy }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section is-contrast">
      <div class="container split">
        <div class="split-copy">
          <div class="section-header">
            <span class="fade-up">Your growth partner</span>
            <h2 class="fade-up">Personalized plans that keep launches on track.</h2>
            <p class="fade-up delay-1">
              Whether you’re refreshing your marketing site or rolling out a new product, we map each sprint to measurable
              outcomes and keep stakeholders aligned every step of the way.
            </p>
          </div>
          <ul class="tag-list fade-up delay-2">
            <li v-for="point in supportPoints" :key="point">{{ point }}</li>
          </ul>
        </div>
        <div class="split-visual fade-up delay-3">
          <h4>Inside every engagement</h4>
          <div class="panel-list">
            <div v-for="step in processSteps" :key="step.title" class="panel-item">
              <span>
                <AppIcon name="spark" size="16" />
              </span>
              <div>
                <strong>{{ step.title }}</strong>
                <p style="margin: 0; color: var(--color-muted);">{{ step.copy }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section is-alt">
      <div class="container">
        <div class="section-header">
          <span class="fade-up">Solutions</span>
          <h2 class="fade-up">Pick the service track that fits your goals.</h2>
          <p class="fade-up delay-1">
            Every engagement includes strategy, project management, and security support tailored to your team.
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

    <section class="section">
      <div class="container">
        <div class="section-header" style="margin: 0 auto 2.5rem; text-align: center;">
          <span class="fade-up">Client spotlight</span>
          <h2 class="fade-up">“They operate like an extension of our in-house team.”</h2>
          <p class="fade-up delay-1" style="margin: 0 auto; max-width: 640px;">
            From initial roadmap to launch and post-launch optimization, Apeni.co keeps collaboration high-touch and outcomes
            measurable.
          </p>
        </div>
        <div class="testimonial-card fade-up delay-2">
          <p>
            “Apeni.co gave us a marketing site and product portal that finally work together. Our leads tripled in the first
            quarter, and their security team helped us pass a critical compliance review without stress.”
          </p>
          <p><strong>— Jamie Carter, COO, Mountain Coast Ventures</strong></p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container" style="max-width: 900px;">
        <div class="cta-banner fade-up">
          <h2>Ready to accelerate your next launch?</h2>
          <p>
            Tell us about your goals and we’ll craft a plan that blends design, development, and cybersecurity into one seamless
            engagement.
          </p>
          <div>
            <NuxtLink to="/contact" class="btn btn-primary">Book a discovery call</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
