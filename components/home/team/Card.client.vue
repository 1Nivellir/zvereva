<template>
  <div :class="styles.team__item">
    <img
      :src="imageUrl[item.imageId] || '/img/default-image.png'"
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

const imageUrl = ref<Record<string, string>>({})
const props = defineProps<{
  item: TeamDTO
}>()

onMounted(async () => {
  if (props.item.imageId) {
    const url = await fetchImageBlob(props.item.imageId)
    console.log(url)
    if (url) {
      imageUrl.value[props.item.imageId] = url
    }
  }
})

const getString = (name: string) => {
  const nameArray = name.split(' ')
  return nameArray
}
</script>

<style></style>
