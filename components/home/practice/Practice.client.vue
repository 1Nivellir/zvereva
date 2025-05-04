<script lang="ts" setup>
import styles from './practice.module.css'
import AnimatedSection from '~/components/common/AnimatedSection.vue'
</script>

<template>
  <AnimatedSection>
    <section :class="styles.practice" id="practice">
      <div class="practice__container container">
        <h2 class="practice__title">Practice</h2>
      </div>
    </section>
  </AnimatedSection>
</template>

<style></style>
