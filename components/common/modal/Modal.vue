<template>
  <ClientOnly>
    <Transition name="slide-fade">
      <Teleport to="#teleports">
        <div v-if="isOpen" :class="styles.modal" @click="handleCLickClose">
          <Political
            :text="textPolitic"
            @update:resultPolitic="getResultPolitic"
            :isOpen="isOpenPotical"
            @update:isOpen="handleClickPolitic"
          />
          <div :class="styles.modal__content">
            <button
              @click="rootStore.setValueModalWindow(false)"
              :class="[styles.modal__close, 'btn-reset']"
            >
              <Icon name="mdi:close" size="24" />
            </button>
            <div v-if="!success">
              <h3 :class="styles.modal__title">Оставить заявку</h3>

              <form :class="styles.form">
                <div :class="styles.formItem">
                  <label for="nameInput" :class="styles.label">Имя</label>
                  <PrimeInputText
                    v-model="dataForm.name"
                    :class="styles.modal__input"
                    id="nameInput"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div :class="styles.formItem">
                  <label for="basic" :class="styles.label">Телефон</label>
                  <PrimeInputMask
                    :class="styles.modal__input"
                    id="basic"
                    v-model="dataForm.mobileNumber"
                    mask="+7 (999) 999-99-99"
                    :auto-clear="false"
                    placeholder="+7 (__) ___-__-__"
                  />
                </div>

                <div :class="styles.formItem">
                  <label for="nameInput" :class="styles.label">Сообщение</label>
                  <textarea
                    :class="styles.textarea"
                    id="nameInput"
                    placeholder="Опишите ваш вопрос"
                    v-model="dataForm.description"
                  />
                </div>
                <div :class="styles.checkBoxWrapper">
                  <input
                    v-model="policy"
                    type="checkbox"
                    name="policy"
                    id="policy"
                  />
                  <button
                    type="button"
                    @click.prevent="fetchPolitical"
                    :class="styles.btnOpenPolitical"
                  >
                    Я согласен с политикой конфиденциальности
                  </button>
                </div>
                <button
                  type="button"
                  @click="submitForm"
                  :disabled="!policy"
                  :class="styles.button"
                >
                  Отправить
                </button>
              </form>
            </div>
            <div v-else :class="styles.successWrapper">
              <h3 :class="styles.modal__title">{{ successText }}</h3>
            </div>
          </div>
        </div>
      </Teleport>
    </Transition>
  </ClientOnly>
</template>

<script lang="ts" setup>
import Political from '../modalPotical/Political.vue'
import styles from './modal.module.css'
import { useRootStore } from '@/stores/root'
const rootStore = useRootStore()
const policy = ref(false)
const success = ref(false)
const isOpenPotical = ref(false)
const textPolitic = ref('')
const successText = ref('')

const handleClickPolitic = (value: boolean) => {
  isOpenPotical.value = value
}

const setDefaultState = () => {
  dataForm.value = {
    name: '',
    mobileNumber: '',
    description: '',
  }
  policy.value = false
  success.value = false
  isOpenPotical.value = false
  successText.value = ''
  textPolitic.value = ''
}
watch(
  () => rootStore.isShowModal,
  (newValue) => {
    if (!newValue) {
      setDefaultState()
    }
  }
)
const { $api } = useNuxtApp()
const isOpen = computed(() => rootStore.isShowModal)

const getResultPolitic = (value: boolean) => {
  policy.value = value
  isOpenPotical.value = false
}
const handleCLickClose = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    rootStore.setValueModalWindow(false)
  }
}

const fetchPolitical = async () => {
  try {
    const response = await $api('main/agreement')
    textPolitic.value = response as string
    isOpenPotical.value = true
  } catch (error) {
    console.log(error)
  }
}
const dataForm = ref({
  name: '',
  mobileNumber: '',
  description: '',
})

const getCorrectNumber = (params: string) => {
  const numbers = params.match(/\d+/g)
  if (numbers) {
    numbers[0] = '8'
  }
  return numbers?.join('') || ''
}

const submitForm = async () => {
  const body = { ...dataForm.value }
  body.mobileNumber = getCorrectNumber(dataForm.value.mobileNumber)
  try {
    const response = await $api('client/rq', {
      method: 'POST',
      body,
    })
    if (!response) {
      successText.value = 'Ошибка при отправке заявки'
      success.value = true
    }
    successText.value = response as string
    success.value = true
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped lang="scss">
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-200px);
  opacity: 0;
}
</style>
