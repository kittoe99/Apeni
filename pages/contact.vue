<script setup lang="ts">
const contactInfo = [
  {
    label: 'Email',
    value: 'kofikittoe35@gmail.com',
    href: 'mailto:kofikittoe35@gmail.com',
    icon: 'mail'
  },
  {
    label: 'Phone',
    value: '720-842-9167',
    href: 'tel:17208429167',
    icon: 'phone'
  },
  {
    label: 'Service Area',
    value: 'Denver, Colorado · Remote within 67 km radius',
    icon: 'location'
  }
];

const highlights = [
  'Preferred contact via email with a one-business-day response',
  'Remote-friendly workshops, strategy sessions, and project delivery',
  'Flexible retainers or fixed-scope engagements tailored to your goals'
];
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container page-grid">
        <div>
          <div class="badge fade-up">Contact</div>
          <h1 class="fade-up">Let’s create your next digital wave.</h1>
          <p class="fade-up delay-1">
            Tell us about your goals, timeline, and what success looks like for your team. We’ll respond via email—our preferred channel—within one business day.
          </p>
        </div>
        <div class="page-visual fade-up delay-2">
          <div class="visual-card">
            <img src="/images/contact-team.svg" alt="Team collaboration visuals representing Apeni.co support" />
          </div>
          <div class="highlight-panel">
            <strong>Working with Apeni.co</strong>
            <ul class="checklist">
              <li v-for="item in highlights" :key="item">
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
      <div class="container contact-grid">
        <div class="contact-card fade-up">
          <h2>How to reach us</h2>
          <p>We collaborate remotely with clients across Denver and beyond. Let us know if you prefer video calls, async updates, or in-person workshops.</p>
          <div class="contact-info">
            <div v-for="item in contactInfo" :key="item.label" class="contact-info-item">
              <span>
                <AppIcon :name="item.icon" size="18" />
              </span>
              <div>
                <strong>{{ item.label }}</strong>
                <div v-if="item.href">
                  <a :href="item.href">{{ item.value }}</a>
                </div>
                <div v-else>{{ item.value }}</div>
              </div>
            </div>
          </div>
        </div>
        <form class="contact-card fade-up delay-1 contact-form" @submit.prevent>
          <div>
            <label for="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your name" required />
          </div>
          <div>
            <label for="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
          <div>
            <label for="company">Company</label>
            <input id="company" name="company" type="text" placeholder="Your organization" />
          </div>
          <div>
            <label for="timeline">Ideal timeline</label>
            <input id="timeline" name="timeline" type="text" placeholder="e.g., Launch in 8 weeks" />
          </div>
          <div>
            <label for="message">Project details</label>
            <textarea id="message" name="message" placeholder="Share your goals, challenges, and must-haves" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send message</button>
          <p style="margin: 0; font-size: 0.9rem; color: var(--color-muted);">
            Prefer direct email? Reach us at <a href="mailto:kofikittoe35@gmail.com">kofikittoe35@gmail.com</a>.
          </p>
        </form>
      </div>
    </section>
  </div>
</template>
