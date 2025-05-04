<template>
  <ClientOnly>
    <Swiper
      :modules="[Navigation]"
      :slides-per-view="slidesPerView"
      navigation
      :breakpoints="breakpoints"
      @swiper="initSwiper"
      :space-between="50"
      :speed="1000"
    >
      <SwiperSlide v-for="(item, index) in slideCard" :key="index">
        <div class="slider__wrapper">
          <slot name="slide" :item="item" :index="index" />
        </div>
      </SwiperSlide>
    </Swiper>
  </ClientOnly>
</template>

<script lang="ts" setup generic="T">
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperType } from 'swiper/types'

const swiperInstance = ref<SwiperType>()

const emit = defineEmits(['instance'])

const initSwiper = (instance: SwiperType) => {
  swiperInstance.value = instance
  emit('instance', instance)
}

defineProps<{
  slideCard?: T[]
  slidesPerView?: number
  customButtonNext?: string
  customButtonPrev?: string
  breakpoints?: any
}>()
</script>
