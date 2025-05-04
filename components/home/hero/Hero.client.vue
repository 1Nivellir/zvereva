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
        <div style="width: 100%">
          <CommonSwiper
            @instance="(instance) => (swiperInstance = instance)"
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
              :class="[styles.customButtonPrev, 'btn-reset']"
              @click.prevent="prev"
              :disabled="!swiperInstance || swiperInstance.activeIndex === 0"
            ></button>
            <button
              :class="[styles.customButtonNext, 'btn-reset']"
              :disabled="!swiperInstance || swiperInstance.isEnd"
              @click.prevent="next"
            ></button>
          </div> -->
        </div>
        <button :class="styles.button">Оставить заявку</button>
      </div>
    </section>
  </AnimatedSection>
</template>

<script lang="ts" setup>
import styles from './hero.module.css'
import AnimatedSection from '~/components/common/AnimatedSection.vue'
import type { BaseInfoDTO } from '~/types/app'
import type { Swiper as SwiperType } from 'swiper/types'

const swiperInstance = ref<SwiperType>()
defineProps<{
  practice: BaseInfoDTO[]
  companyName: string
  description: string
}>()

const next = () => {
  console.log(swiperInstance.value)
  swiperInstance.value?.slideNext()
}

const prev = () => {
  swiperInstance.value?.slidePrev()
}
</script>

<style scoped lang="scss">
.swiper-wrapper {
  display: flex !important;
}
</style>
