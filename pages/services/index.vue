<script setup lang="ts">
const services = [
  {
    title: 'Software Development',
    description: 'Full-cycle product development that covers ideation, architecture, testing, and launch support.',
    href: '/services/software-development',
    points: [
      'Product strategy, UX flows, and technical roadmaps',
      'API design, integrations, and automation',
      'Quality assurance, testing, and documentation'
    ]
  },
  {
    title: 'Web Design',
    description: 'Conversion-optimized websites with responsive, accessible interfaces and delightful motion.',
    href: '/services/web-design',
    points: [
      'Design systems, component libraries, and brand refresh',
      'CMS integration and content migrations',
      'Performance tuning and analytics dashboards'
    ]
  },
  {
    title: 'Cybersecurity',
    description: 'Risk assessments, monitoring, and incident preparedness designed for modern digital teams.',
    href: '/services/cybersecurity',
    points: [
      'Security audits, penetration testing, and hardening',
      'DevSecOps pipelines and secure SDLC',
      'Training, playbooks, and compliance alignment'
    ]
  }
];
</script>

<template>
  <div>
    <section class="section hero" style="padding-bottom: 4rem;">
      <div class="hero-content">
        <div class="hero-text">
          <div class="badge fade-up">Services</div>
          <h1>Strategic services for product-led teams.</h1>
          <p>
            From brand new startups to established enterprises, Apeni.co delivers unified design, development, and security expertise to help you scale without compromise.
          </p>
        </div>
        <div class="hero-card fade-up delay-1">
          <h3>Trusted across Denver &amp; beyond</h3>
          <p>Remote-first collaboration with an in-person presence across Denver, Colorado, supporting partners within a 67 km radius and worldwide.</p>
        </div>
      </div>
    </section>

    <section class="section light">
      <div class="container">
        <h2 class="fade-up">Choose the focus area that fits your goals.</h2>
        <p class="section-lead fade-up delay-1">Engage with a dedicated team that adapts to your preferred workflows, tools, and timelines.</p>
        <div class="grid grid-3">
          <article v-for="(service, index) in services" :key="service.title" class="card fade-up" :class="`delay-${index + 1}`">
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <ul>
              <li v-for="point in service.points" :key="point">{{ point }}</li>
            </ul>
            <NuxtLink :to="service.href" class="btn btn-primary" style="margin-top: 1.5rem; width: fit-content;">
              Explore {{ service.title.toLowerCase() }}
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <section class="section ocean">
      <div class="container">
        <h2 class="fade-up">How we collaborate</h2>
        <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2.5rem;">
          <div class="card fade-up">
            <h3>Discovery Workshops</h3>
            <p>Align stakeholders and translate goals into a shared blueprint covering user journeys, technical architecture, and security posture.</p>
          </div>
          <div class="card fade-up delay-1">
            <h3>Agile Sprints</h3>
            <p>Transparent sprint cycles with demos, retrospectives, and backlog grooming to keep progress visible and collaborative.</p>
          </div>
          <div class="card fade-up delay-2">
            <h3>Growth Partnership</h3>
            <p>Post-launch optimization, monitoring, and proactive updates keep your product, content, and security in harmony.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
