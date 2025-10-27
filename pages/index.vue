<script setup lang="ts">
const highlights = [
  {
    title: 'Software Development',
    description: 'Custom applications engineered to scale with your business, built with clean code, modern tooling, and human-centered UX.'
  },
  {
    title: 'Web Design',
    description: 'Ocean-inspired digital experiences that balance beauty and performance, optimized for conversions and accessibility.'
  },
  {
    title: 'Cybersecurity',
    description: 'Layered security programs and proactive monitoring to keep your data, customers, and reputation safe online.'
  }
];

const benefits = [
  'Strategy-first approach with clear milestones and transparent communication.',
  'Flexible retainers and launch packages tailored to your growth goals.',
  'Security baked into every sprint, not bolted on at the end.',
  'Dedicated Denver-based partner delivering results to clients worldwide.'
];
</script>

<template>
  <div>
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <div class="badge fade-up">Friendly, secure &amp; ocean-inspired</div>
          <h1>Transforming ideas into resilient digital experiences.</h1>
          <p>
            Apeni.co blends elegant design, reliable software engineering, and proactive cybersecurity to help Denver businesses grow with confidence.
          </p>
          <div class="hero-actions fade-up delay-1">
            <NuxtLink to="/contact" class="btn btn-primary">Start a project</NuxtLink>
            <NuxtLink to="/services" class="btn btn-outline">Explore our services</NuxtLink>
          </div>
        </div>
        <div class="hero-card fade-up delay-2">
          <h3>Why teams choose Apeni.co</h3>
          <p>"The Apeni.co team delivered a launch-ready product in record time, with thoughtful details we never would have caught ourselves."</p>
        </div>
      </div>
    </section>

    <section class="section light">
      <div class="container">
        <h2 class="fade-up">Design, build, and secure with one trusted partner.</h2>
        <p class="section-lead fade-up delay-1">
          We combine strategy, design, development, and cybersecurity into a cohesive flow so you can move from idea to launch without juggling multiple vendors.
        </p>
        <div class="grid grid-3">
          <div v-for="(highlight, index) in highlights" :key="highlight.title" class="card fade-up" :class="`delay-${index + 1}`">
            <h3>{{ highlight.title }}</h3>
            <p>{{ highlight.description }}</p>
            <NuxtLink :to="highlight.title === 'Software Development' ? '/services/software-development' : highlight.title === 'Cybersecurity' ? '/services/cybersecurity' : '/services'" class="btn btn-primary" style="margin-top: 1.5rem; width: fit-content;">
              Learn more
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section ocean">
      <div class="container">
        <h2 class="fade-up">A proven framework for measurable outcomes.</h2>
        <p class="section-lead fade-up delay-1">
          Our five-phase approach keeps projects clear, collaborative, and on course—from kickoff to post-launch optimization.
        </p>
        <div class="grid grid-3">
          <div class="card fade-up">
            <h3>1. Discover</h3>
            <p>We immerse ourselves in your brand, audience, and goals to design a roadmap that aligns your team and ours.</p>
          </div>
          <div class="card fade-up delay-1">
            <h3>2. Design</h3>
            <p>Experience-first interfaces with motion, accessibility, and conversion in mind. Every pixel has a purpose.</p>
          </div>
          <div class="card fade-up delay-2">
            <h3>3. Build</h3>
            <p>Modern frameworks, scalable architecture, and clean documentation deliver maintainable products that evolve with you.</p>
          </div>
          <div class="card fade-up delay-3">
            <h3>4. Secure</h3>
            <p>Threat modeling, penetration testing, and monitoring baked into every sprint to protect your investment.</p>
          </div>
          <div class="card fade-up delay-2">
            <h3>5. Launch &amp; Grow</h3>
            <p>Post-launch analytics, experiments, and continuous improvements keep momentum and ROI rising.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section light">
      <div class="container">
        <h2 class="fade-up">What working with us feels like.</h2>
        <p class="section-lead fade-up delay-1">
          We build relationships on clarity, warmth, and results. Here’s what clients often say after launching with Apeni.co.
        </p>
        <div class="testimonial fade-up delay-2">
          <p>
            “From the very first strategy workshop, we knew we were in excellent hands. Apeni.co delivered a website that our customers love, implemented automations that save hours each week, and provided security audits that help us sleep at night.”
          </p>
          <p><strong>— Jamie Carter, COO, Mountain Coast Ventures</strong></p>
        </div>
        <ul class="card" style="margin-top: 2rem; list-style: none;" aria-label="Engagement benefits">
          <li v-for="benefit in benefits" :key="benefit" class="fade-up" style="margin-bottom: 0.75rem; display: flex; gap: 0.75rem; align-items: flex-start;">
            <span style="color: var(--color-medium); font-weight: 700;">✦</span>
            <span>{{ benefit }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="section ocean">
      <div class="container" style="text-align: center;">
        <h2 class="fade-up">Ready to launch something meaningful?</h2>
        <p class="section-lead fade-up delay-1" style="margin-inline: auto;">
          Whether you need a new product, a refreshed website, or hardened security posture, our team is ready.
        </p>
        <NuxtLink to="/contact" class="btn btn-primary fade-up delay-2">Book a strategy call</NuxtLink>
      </div>
    </section>
  </div>
</template>
