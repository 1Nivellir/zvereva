<template>
  <div :class="styles.team__item">
    <img
      :src="item.imageId || '/img/default-image.png'"
      :alt="item.name"
      :class="[styles.imageSlider, item.imageId ? '' : styles.default]"
    />
    <div :class="styles.team__item__info">
      <span
        :class="styles.team__item__name"
        v-for="name in getString(item.name)"
        :key="name"
      >
        {{ name }}
      </span>
      <p :class="styles.team__item__jobTitle">
        {{ item.jobTitle }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import styles from './team.module.css'
import type { TeamDTO } from '@/types/app'
defineProps<{
  item: TeamDTO
}>()

const getString = (name: string) => {
  const nameArray = name.split(' ')
  return nameArray
}
</script>

<style></style>
