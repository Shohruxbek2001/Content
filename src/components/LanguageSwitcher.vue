<script setup>
import {useI18n} from 'vue-i18n'
import {ref} from 'vue'
import Tr from "../i18n/translation"
import i18n from '../i18n/index.js'
import {onClickOutside} from '@vueuse/core'

const currentLang = ref('en')
const {t, locale} = useI18n()
const supportedLocales = Tr.supportedLocales
const switchLanguage = (lang) => {
  localStorage.setItem('lang', lang)
  i18n.global.locale.value = lang
  isOpenLangDropDown.value = false
}
const isOpenLangDropDown = ref(false)
const toggleLangDropDown = () => {
  // let elem = document.getElementById('langs')
  // if (hid === true)   {
  //     elem.classList.toggle("block")
  // }   else    {
  //     elem.classList.toggle("hidden")
  // }
  // hid = !hid
  isOpenLangDropDown.value = !isOpenLangDropDown.value
}
const onClickOutsideDropDown = ref(null)
onClickOutside(onClickOutsideDropDown, (event) => isOpenLangDropDown.value = false)
</script>
<template>
  <!-- <select @change="switchLanguage" v-model="currentLang" class="items-center justify-center hidden w-40 h-10 text-base font-semibold border rounded-full sm:flex border-slate-500 text-slate-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-blue-600">
          <option :class="p-5" v-for="sLocale in supportedLocales" :key="`locale-${sLocale}`" :value="sLocale"
              :selected="locale === sLocale">
              {{ t(`locale.${sLocale}`) }}
          </option>
      </select>  -->
  <div class="box-border grid" ref="onClickOutsideDropDown">
    <label @click="toggleLangDropDown()" for="langs"
           class="grid content-center md:text-xl text-lg select-none bg-blue-500 dark:bg-[#131B4D] w-36 text-white rounded justify-items-center hover:bg-white hover:text-blue-500">{{
        t(`locale.${i18n.global.locale.value}`)
      }}</label>
    <ul v-if="isOpenLangDropDown"
        class="absolute z-10 mt-12 font-medium rounded-lg w-36 bg-blue-500/60 backdrop-blur dark:bg-[#131B4D]">
      <div v-for="(sLocale, idx) in supportedLocales" :key="idx">
        <li @click="switchLanguage(sLocale)"
            class="p-1 pl-3 hover:bg-white cursor-pointer select-none text-white text-md hover:text-blue-500">
          {{ t(`locale.${sLocale}`) }}
        </li>
      </div>
      <!-- <li class="pl-2 m-1 bg-white rounded-md hover:bg-blue-500 hover:text-white">ru</li>
          <li class="pl-2 m-1 bg-white rounded-md hover:bg-blue-500 hover:text-white">uz</li> -->
    </ul>

  </div>
</template>