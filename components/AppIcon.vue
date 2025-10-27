<script setup lang="ts">
const iconPaths = {
  menu: ['M4 6h16', 'M4 12h16', 'M4 18h16'],
  close: ['M6 6l12 12', 'M6 18L18 6'],
  code: ['M9.75 6l-6 6 6 6', 'M14.25 6l6 6-6 6', 'M12 4.5l-3 15'],
  layout: ['M5.25 5.25h13.5a1.5 1.5 0 0 1 1.5 1.5v10.5a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V6.75a1.5 1.5 0 0 1 1.5-1.5z', 'M3 11.5h18', 'M12 5.25v13.5'],
  shield: ['M12 3 19.5 6v6c0 4.28-3.16 8.32-7.5 9-4.34-.68-7.5-4.72-7.5-9V6z'],
  check: ['m5.25 12 3.5 3.5L18.75 5.5'],
  spark: ['M12 3v4', 'M12 17v4', 'M4.22 4.22l2.83 2.83', 'M16.95 16.95l2.83 2.83', 'M3 12h4', 'M17 12h4', 'M4.22 19.78l2.83-2.83', 'M16.95 7.05l2.83-2.83'],
  mail: ['M4.5 5.25h15a1.5 1.5 0 0 1 1.5 1.5v10.5a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5V6.75a1.5 1.5 0 0 1 1.5-1.5z', 'm3 7.5 9 6 9-6'],
  phone: ['M6.75 4.5h2.25a1.5 1.5 0 0 1 1.5 1.29l.36 2.53a1.5 1.5 0 0 1-.88 1.6l-1.35.56a11.7 11.7 0 0 0 6.24 6.24l.56-1.35a1.5 1.5 0 0 1 1.6-.88l2.53.36a1.5 1.5 0 0 1 1.29 1.5v2.25a1.5 1.5 0 0 1-1.62 1.5 15.74 15.74 0 0 1-14.13-14.13A1.5 1.5 0 0 1 6.75 4.5z'],
  location: ['M12 21c-4.5-5-7.5-8.5-7.5-12a7.5 7.5 0 0 1 15 0c0 3.5-3 7-7.5 12z', 'M12 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5z'],
  layers: ['m4 8 8-4 8 4-8 4-8-4z', 'm4 12 8 4 8-4', 'm4 16 8 4 8-4'],
  cloud: ['M6.75 18a4.5 4.5 0 0 1-.54-8.976 5.25 5.25 0 0 1 10.29-1.74 3.75 3.75 0 0 1 1.5 7.216z']
} as const;

type IconName = keyof typeof iconPaths;

const props = withDefaults(defineProps<{ name: IconName; size?: number }>(), {
  size: 22
});
</script>

<template>
  <svg
    v-if="iconPaths[props.name]"
    :width="props.size"
    :height="props.size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <g stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path v-for="d in iconPaths[props.name]" :key="d" :d="d" />
    </g>
  </svg>
</template>
