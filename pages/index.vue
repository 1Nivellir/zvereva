<template>
  <main>
    <div :class="[styles.homeBg]"></div>
    <HomeHero
      :companyName="allInfo.companyName"
      :description="allInfo.description"
      :practice="allInfo.practice"
    />
    <HomePractice />
  </main>
</template>

<script lang="ts" setup>
import type { AllInfoDTO } from '@/types/app'
import styles from './index.module.css'
const { data } = await useCustomFetch<AllInfoDTO>('main')

const allInfo = computed(() => data.value as AllInfoDTO)
console.log(data.value)
</script>

<style></style>
