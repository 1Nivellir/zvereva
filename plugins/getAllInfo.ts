import type { AllInfoDTO } from '@/types/app'
export default defineNuxtPlugin(async (nuxtApp) => {
	const {data} = await useCustomFetch<AllInfoDTO>('main')

	nuxtApp.provide('allInfo', data.value)
})
