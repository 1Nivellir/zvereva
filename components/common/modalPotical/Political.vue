<template>
  <div :class="styles.political" v-if="isOpen">
    <div :class="styles.political__content">
      <h3 :class="styles.political__title">Политика конфиденциальности</h3>
      <button :class="[styles.close, 'btn-reset']" @click="handleCLick(false)">
        <Icon name="mdi:close" size="24" />
      </button>
      <div :class="styles.textWrapper">
        <div :class="styles.text" v-html="formattedText"></div>
      </div>
      <div :class="styles.buttonWrapper">
        <button
          :class="[styles.button, 'btn-reset']"
          @click="getPolitical(true)"
        >
          Принять
        </button>
        <button
          :class="[styles.button, styles.btnCancel, 'btn-reset']"
          @click="getPolitical(false)"
        >
          Отклонить
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import styles from './political.module.css'
import { computed } from 'vue'

const emit = defineEmits(['update:isOpen', 'update:resultPolitic'])

const handleCLick = (value: boolean) => {
  emit('update:isOpen', value)
}

const getPolitical = (value: boolean) => {
  emit('update:resultPolitic', value)
}

const props = defineProps<{
  isOpen: boolean
  text: string
}>()

const formattedText = computed(() => {
  if (!props.text) return ''

  return props.text
    .split('\n')
    .map((line) => {
      if (line.match(/^\d+\./)) {
        return `<p>${line}</p>`
      }
      if (line.match(/^\d+\.\d+\./)) {
        return `<p>${line}</p>`
      }
      return `<p>${line}</p>`
    })
    .join('')
})
</script>

<style scoped></style>
