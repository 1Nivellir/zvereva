<template>
  <footer :class="styles.footer">
    <div :class="['container', styles.footer__container]">
      <div :class="styles.footer__info">
        <h3 :class="styles.footerName">{{ footerInfo.companyName }}</h3>
      </div>
      <div :class="styles.footer__contacts">
        <h4 :class="styles.footer__title">Контакты</h4>
        <address :class="styles.footer__address">
          {{ footerInfo.contactInfo.address }}
        </address>
        <a
          :class="styles.footer__phone"
          href="tel:{{ footerInfo.contactInfo.mobilePhone }}"
          >{{ footerInfo.contactInfo.mobilePhone }}
        </a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import styles from './footer.module.css'
import type { AllInfoDTO } from '@/types/app'
const allInfo = useNuxtApp().$allInfo as AllInfoDTO

const footerInfo = computed(() => allInfo)
</script>
