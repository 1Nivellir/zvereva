<script lang="ts" setup>
import styles from './header.module.css'
import menuItems from '@/utils/menuItems'
import { useRootStore } from '@/stores/root'
import { NuxtLink } from '#components'

const rootStore = useRootStore()

import type { AllInfoDTO } from '@/types/app'
const allInfo = useNuxtApp().$allInfo as AllInfoDTO

const headerInfo = computed(() => allInfo)
</script>

<template>
  <header :class="styles.header">
    <div :class="['container', styles.header__container]">
      <h3 :class="styles.header__logo">{{ headerInfo.companyName }}</h3>

      <nav :class="styles.header__nav">
        <ul :class="[styles.list, 'list-reset']">
          <li v-for="item in menuItems()" :key="item.title">
            <button
              v-if="item.link === 'leave-request'"
              @click="rootStore.setValueModalWindow(true)"
              :class="[styles.link, 'btn-reset']"
            >
              {{ item.title }}
            </button>
            <NuxtLink v-else :class="styles.link" :to="`#${item.link}`">{{
              item.title
            }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
