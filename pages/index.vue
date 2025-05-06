<template>
  <main>
    <div :class="[styles.homeBg]"></div>
    <HomeHero
      :companyName="allInfo.companyName"
      :description="allInfo.description"
      :practice="allInfo.practice"
    />
    <HomePortfolio :projects="allInfo.portfolio" />
    <HomeTeam :team="allInfo.employees" />
    <ModalWindow />
  </main>
</template>

<script lang="ts" setup>
import type { AllInfoDTO } from '@/types/app'
import styles from './index.module.css'
const data = useNuxtApp().$allInfo as AllInfoDTO
const allInfo = computed(() => data)
const ModalWindow = defineAsyncComponent(
  () => import('@/components/common/modal/Modal.vue')
)
</script>

<style></style>
