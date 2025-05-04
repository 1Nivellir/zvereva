<template>
  <div
    ref="sectionRef"
    :class="[styles.section, { [styles.visible]: isVisible }]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import styles from './animatedSection.module.css'

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    })
  },
  {
    threshold: 0.1,
  }
)

onMounted(() => {
  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  observer.disconnect()
})
</script>
