<template>
  <section :class="styles.hero">
    <div :class="['container', styles.container]">
      <h1 :class="styles.title">
        {{ companyName }}
      </h1>
      <p :class="styles.description">
        {{ description }}
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import styles from './hero.module.css'

defineProps<{
  companyName: string
  description: string
}>()
</script>

<style></style>
