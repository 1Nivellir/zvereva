<script lang="ts" setup>
import AnimatedSection from '~/components/common/AnimatedSection.vue'
import styles from './portfolio.module.css'
import type { ProjectDTO } from '~/types/app'
import { onMounted, ref } from 'vue'

const props = defineProps<{
  projects: ProjectDTO[]
}>()

const cardRefs = ref<HTMLElement[]>([])
const visibleCards = ref(props.projects.map(() => false))

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = cardRefs.value.findIndex((el) => el === entry.target)
          if (index !== -1) {
            console.log('Card visible:', index)
            visibleCards.value[index] = true
            observer.unobserve(entry.target)
          }
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  )

  // Подождем немного, чтобы DOM полностью загрузился
  setTimeout(() => {
    cardRefs.value.forEach((el) => {
      if (el) {
        console.log('Observing element')
        observer.observe(el)
      }
    })
  }, 50)
})
</script>

<template>
  <AnimatedSection>
    <section :class="styles.portfolio">
      <div :class="['container', styles.container]">
        <h2 :class="styles.title">Наши проекты</h2>

        <div :class="styles.projects">
          <div
            v-for="(project, index) in projects"
            :key="index"
            :ref="el => { if (el) cardRefs[index] = el as HTMLElement }"
            :class="[styles.project, { [styles.visible]: visibleCards[index] }]"
            :style="{
              transitionDelay: `${index * 50}ms`,
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
            }"
          >
            <img
              :src="project.imageId || '/img/card-vue.jpg'"
              :alt="project.name"
              :class="styles.project__image"
            />
            <div :class="styles.project__info">
              <h3 :class="styles.project__title">{{ project.name }}</h3>
              <p :class="styles.project__description">
                {{ project.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </AnimatedSection>
</template>
