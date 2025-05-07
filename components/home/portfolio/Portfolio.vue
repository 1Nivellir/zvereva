<script lang="ts" setup>
import AnimatedSection from '~/components/common/AnimatedSection.vue'
import styles from './portfolio.module.css'
import type { ProjectDTO } from '~/types/app'
import SwiperNavigation from '~/components/common/swiperNavigation/SwiperNavigation.vue'
const instanceSwiper = ref()
const imagesUrls = ref<Record<string, string>>({})

const props = defineProps<{
  projects: ProjectDTO[]
}>()

onMounted(async () => {
  for (const item of props.projects) {
    if (item.imageId) {
      const url = await fetchImageBlob(item.imageId)
      if (url) {
        imagesUrls.value[item.imageId] = url
      }
    }
  }
})
const breakpoints = {
  992: {
    slidesPerView: 2,
  },
}
</script>

<template>
  <section :class="styles.portfolio" id="projects">
    <div :class="['container', styles.container]">
      <ClientOnly>
        <AnimatedSection>
          <h2 class="section__title">Наши проекты</h2>
          <div :class="styles.projects">
            <CommonSwiper
              @instance="(e) => (instanceSwiper = e)"
              :breakpoints="breakpoints"
              :slides-per-view="1"
              generic="ProjectDTO"
              :slideCard="projects"
            >
              <template #slide="{ item }">
                <div :class="styles.project">
                  <img
                    :src="imagesUrls[item.imageId as string] || '/img/card-vue.jpg'"
                    :alt="item.name"
                    :class="styles.project__image"
                  />
                  <div :class="styles.project__info">
                    <h3 :class="styles.project__title">{{ item.name }}</h3>
                    <p :class="styles.project__description">
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </template>
            </CommonSwiper>
            <SwiperNavigation
              @next="instanceSwiper.slideNext()"
              @prev="instanceSwiper.slidePrev()"
            />
          </div>
        </AnimatedSection>
      </ClientOnly>
    </div>
  </section>
</template>
