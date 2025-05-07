<script lang="ts" setup>
import type { TeamDTO } from '@/types/app'
import styles from './team.module.css'
import AnimatedSection from '~/components/common/AnimatedSection.vue'
import TeamCard from './Card.vue'
import SwiperNavigation from '~/components/common/swiperNavigation/SwiperNavigation.vue'
defineProps<{
  team: TeamDTO[]
}>()
const instanceSwiper = ref()
const breakpoints = {
  992: {
    slidesPerView: 3,
  },
}

const list = [
  {
    name: 'Иван Петров Александрович',
    jobTitle: 'Специалист',
    imageId: '/img/default.jpg',
  },
  {
    name: 'Иван Иванов Александрович',
    jobTitle: 'Замдиректора',
    imageId: '/img/default.jpg',
  },
  {
    name: 'Иван Иванов Александрович',
    jobTitle: 'Замдиректора',
    imageId: '/img/default.jpg',
  },
  {
    name: 'Иван Иванов Александрович',
    jobTitle: 'Замдиректора',
    imageId: '/img/default.jpg',
  },
  {
    name: 'Иван Иванов Александрович',
    jobTitle: 'Замдиректора',
    imageId: '/img/default.jpg',
  },
]
</script>

<template>
  <section :class="styles.team" id="team">
    <ClientOnly>
      <AnimatedSection>
        <div :class="['container', styles.container]">
          <h2 class="section__title">Команда</h2>
          <div :class="styles.team__list" v-if="team.length > 3">
            <CommonSwiper
              @instance="(e) => (instanceSwiper = e)"
              :breakpoints="breakpoints"
              :slides-per-view="1"
              generic="TeamDTO"
              :slideCard="team"
            >
              <template #slide="{ item }">
                <TeamCard :item="item" />
              </template>
            </CommonSwiper>
            <SwiperNavigation
              @next="instanceSwiper.slideNext()"
              @prev="instanceSwiper.slidePrev()"
            />
          </div>
          <div :class="styles.team__listCustom" v-else>
            <TeamCard v-for="(item, index) in team" :key="index" :item="item" />
          </div>
        </div>
      </AnimatedSection>
    </ClientOnly>
  </section>
</template>

<style></style>
