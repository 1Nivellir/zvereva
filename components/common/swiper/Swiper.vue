<template>
  <ClientOnly>
    <Swiper
      :modules="[Navigation]"
      :slides-per-view="3"
      navigation
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

<script lang="ts" setup>
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { BaseInfoDTO } from '~/types/app'
import type { Swiper as SwiperType } from 'swiper/types'

const swiperInstance = ref<SwiperType>()

const emit = defineEmits(['instance'])

const initSwiper = (instance: SwiperType) => {
  swiperInstance.value = instance
  emit('instance', instance)
}

defineProps<{
  slideCard?: BaseInfoDTO[]
  slidesPerView?: number
  customButtonNext?: string
  customButtonPrev?: string
  breakpoints?: any
}>()
</script>
