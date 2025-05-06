<template>
  <AnimatedSection>
    <section :class="styles.hero">
      <div :class="['container', styles.container]">
        <h1 :class="styles.title">
          {{ companyName }}
        </h1>
        <p :class="styles.description">
          {{ description }}
        </p>
        <div style="width: 100%" id="practice">
          <CommonSwiper
            :breakpoints="breakpoints"
            generic="BaseInfoDTO"
            :slides-per-view="3"
            :custom-button-next="styles.customButtonNext"
            :custom-button-prev="styles.customButtonPrev"
            :slideCard="practice"
          >
            <template #slide="{ item }">
              <div :class="styles.practice__item">
                <div :class="styles.descriptionWrapper">
                  <img src="/svg/ok.svg" alt="ok" :class="styles.icon" />

                  <h3 :class="styles.titleSlider">{{ item.name }}</h3>
                </div>
                <p :class="styles.descriptionSlider">{{ item.description }}</p>
              </div>
            </template>
          </CommonSwiper>
          <!-- <div :class="styles.custom__buttonWrapper">
            <button
              :class="[styles.button, 'btn-reset']"
              @click="prev"
              :disabled="swiperInstance?.isBeginning"
            >
              <Icon name="mdi:arrow-left-bold" style="color: white" size="20" />
            </button>
            <button
              :class="[styles.button, 'btn-reset']"
              @click="next"
              :disabled="swiperInstance?.isEnd"
            >
              <Icon
                name="mdi:arrow-right-bold"
                style="color: white"
                size="20"
              />
            </button>
          </div> -->
        </div>
        <button
          @click="rootStore.setValueModalWindow(true)"
          :class="styles.button"
        >
          Оставить заявку
        </button>
      </div>
    </section>
  </AnimatedSection>
</template>

<script lang="ts" setup>
import styles from './hero.module.css'
import AnimatedSection from '~/components/common/AnimatedSection.vue'
import type { BaseInfoDTO } from '~/types/app'
import { useRootStore } from '@/stores/root'

const rootStore = useRootStore()
defineProps<{
  practice: BaseInfoDTO[]
  companyName: string
  description: string
}>()

const breakpoints = {
  1200: {
    slidesPerView: 3,
  },
  768: {
    slidesPerView: 2,
  },
  480: {
    slidesPerView: 1,
  },
}
</script>

<style scoped lang="scss">
.swiper-wrapper {
  display: flex !important;
}
</style>
