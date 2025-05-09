<template>
  <section :class="styles.hero">
    <ClientOnly>
      <AnimatedSection>
        <div :class="['container', styles.container]">
          <h1 :class="styles.title">
            {{ companyName }}
          </h1>
          <p :class="styles.description">
            {{ description }}
          </p>
          <div :class="styles.swiperWrapper" style="width: 100%" id="practice">
            <CommonSwiper
              @instance="setInstanceSwiper"
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
                    <h3 :class="styles.titleSlider">{{ item.name }}</h3>
                  </div>
                  <p :class="styles.descriptionSlider">
                    {{ item.description }}
                  </p>
                </div>
              </template>
            </CommonSwiper>
            <SwiperNavigation
              @next="instanceSwiper.slideNext()"
              @prev="instanceSwiper.slidePrev()"
            />
          </div>

          <button
            @click="rootStore.setValueModalWindow(true)"
            :class="styles.button"
          >
            Оставить заявку
          </button>
        </div>
      </AnimatedSection>
    </ClientOnly>
  </section>
</template>

<script lang="ts" setup>
import styles from './hero.module.css'
import AnimatedSection from '~/components/common/AnimatedSection.vue'
import type { BaseInfoDTO } from '~/types/app'
import { useRootStore } from '@/stores/root'
import SwiperNavigation from '~/components/common/swiperNavigation/SwiperNavigation.vue'
const rootStore = useRootStore()
const instanceSwiper = ref()

const setInstanceSwiper = (params: any) => {
  instanceSwiper.value = params
}

// const disabledPrev = computed(() => {
//   if (instanceSwiper.value) {
//     console.log(instanceSwiper.value.isBeginning)
//     return instanceSwiper.value.isBeginning
//   }
//   return false
// })

// const disabledNext = computed(() => {
//   if (instanceSwiper.value) {
//     return instanceSwiper.value.isEnd
//   }
//   return false
// })
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
  320: {
    slidesPerView: 1,
  },
}
</script>

<style scoped lang="scss">
.swiper-wrapper {
  display: flex !important;
}
</style>
