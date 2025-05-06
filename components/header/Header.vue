<script lang="ts" setup>
import styles from './header.module.css'
import menuItems from '@/utils/menuItems'
import { useRootStore } from '@/stores/root'

const rootStore = useRootStore()
</script>

<template>
  <header :class="styles.header">
    <div :class="['container', styles.header__container]">
      <h3 :class="styles.header__logo">Зверева и партнеры</h3>

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
            <a v-else :class="styles.link" :href="`#${item.link}`">{{
              item.title
            }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
