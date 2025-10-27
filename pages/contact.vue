<script setup lang="ts">
const contactInfo = [
  {
    label: 'Email',
    value: 'kofikittoe35@gmail.com',
    href: 'mailto:kofikittoe35@gmail.com'
  },
  {
    label: 'Phone',
    value: '720-842-9167',
    href: 'tel:17208429167'
  },
  {
    label: 'Service Area',
    value: 'Denver, Colorado · Remote within 67 km radius'
  }
];
</script>

<template>
  <div>
    <section class="hero service-hero">
      <div class="hero-content">
        <div class="hero-text">
          <div class="badge fade-up">Contact</div>
          <h1 class="fade-up">Let’s create your next digital wave.</h1>
          <p class="fade-up delay-1">
            Tell us about your goals, timeline, and what success looks like for your team. We’ll respond via email—our preferred channel—within one business day.
          </p>
        </div>
        <div class="hero-media">
          <div class="floating-card fade-up delay-2">
            <span class="eyebrow">Prefer email?</span>
            <small>Drop us a line at</small>
            <p class="floating-emphasis">kofikittoe35@gmail.com</p>
            <small>We’ll schedule a call that fits your calendar.</small>
          </div>
        </div>
      </div>
    </section>

    <section class="section light">
      <div class="container">
        <div class="contact-card">
          <div class="contact-details fade-up">
            <h2>How to reach us</h2>
            <p>We collaborate remotely with clients across Denver and beyond. Let us know if you prefer video calls, async updates, or in-person workshops.</p>
            <div v-for="item in contactInfo" :key="item.label">
              <strong>{{ item.label }}</strong>
              <div v-if="item.href">
                <a :href="item.href">{{ item.value }}</a>
              </div>
              <div v-else>{{ item.value }}</div>
            </div>
          </div>
          <form class="contact-form fade-up delay-1" @submit.prevent>
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
            <p style="margin: 0; font-size: 0.9rem; color: var(--color-ink-soft);">
              We respond within one business day. Prefer a direct email? Reach us at <a href="mailto:kofikittoe35@gmail.com">kofikittoe35@gmail.com</a>.
            </p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
