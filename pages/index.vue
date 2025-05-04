<template>
  <main>
    <div :class="[styles.homeBg]"></div>
    <LazyHomeHero
      :companyName="allInfo.companyName"
      :description="allInfo.description"
      :practice="allInfo.practice"
    />
    <LazyHomePortfolio :projects="allInfo.portfolio" />
    <LazyHomeTeam :team="allInfo.employees" />
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
