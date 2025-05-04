<script lang="ts" setup>
import AnimatedSection from '~/components/common/AnimatedSection.vue'
import styles from './portfolio.module.css'
import type { ProjectDTO } from '~/types/app'

defineProps<{
  projects: ProjectDTO[]
}>()

const breakpoints = {
  992: {
    slidesPerView: 2,
  },
}
</script>

<template>
  <AnimatedSection>
    <section :class="styles.portfolio" id="projects">
      <div :class="['container', styles.container]">
        <h2 :class="styles.title">Наши проекты</h2>

        <div :class="styles.projects">
          <CommonSwiper
            :breakpoints="breakpoints"
            :slides-per-view="1"
            generic="ProjectDTO"
            :slideCard="projects"
          >
            <template #slide="{ item }">
              <div :class="styles.project">
                <img
                  :src="item.imageId || '/img/card-vue.jpg'"
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
        </div>
      </div>
    </section>
  </AnimatedSection>
</template>
