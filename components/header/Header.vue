<script lang="ts" setup>
import styles from './header.module.css'
import menuItems from '@/utils/menuItems'
</script>

<template>
  <header :class="styles.header">
    <div :class="['container', styles.header__container]">
      <h3 :class="styles.header__logo">Зверева и партнеры</h3>

      <nav class="header__nav">
        <ul :class="[styles.list, 'list-reset']">
          <li v-for="item in menuItems()" :key="item.title">
            <a :class="styles.link" :href="`#${item.link}`">{{ item.title }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
@import './header.module.css';
</style>
