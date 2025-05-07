<template>
  <button
    :class="[styles.buttonsSwiperPrev, 'btn-reset']"
    @click="emit('prev')"
    :disabled="disabledPrev"
  >
    <Icon
      name="material-symbols:arrow-back-ios-new-rounded"
      :class="styles.iconSwiper"
    />
  </button>
  <button
    :disabled="disabledNext"
    :class="[styles.buttonsSwiperNext, 'btn-reset']"
    @click="emit('next')"
  >
    <Icon
      name="material-symbols:arrow-forward-ios-rounded"
      :class="styles.iconSwiper"
    />
  </button>
</template>

<script lang="ts" setup>
import styles from './swiper-navigation.module.css'

const emit = defineEmits(['next', 'prev'])

defineProps<{
  disabledPrev?: boolean
  disabledNext?: boolean
}>()
</script>

<style></style>
