<script setup>
import {ref} from "@vue/reactivity";
import {useDark, useToggle} from "@vueuse/core";
import MenuIcon from "../icons/MenuIcon.vue";
import $ from "jquery";
import {useI18n} from 'vue-i18n'
import {onClickOutside} from '@vueuse/core'
import LanguageSwitcher from "../../components/LanguageSwitcher.vue"


const {t} = useI18n()

const switchLanguage = (lang) => {
  isOpenNavbarToggle.value = false

}
const onClickOutsideNavbar = ref(null)
const isOpenNavbarToggle = ref(false)
const x = window.matchMedia("(min-width: 700px)")
// const lg = (x) => {
if (x.matches) {
  isOpenNavbarToggle.value = true
} else {
  onClickOutside(onClickOutsideNavbar, (event) => isOpenNavbarToggle.value = false)
}


//}
const toggleNavbar = () => {
  isOpenNavbarToggle.value = !isOpenNavbarToggle.value
}


</script>
<template>
  <header class="fixed z-10 top-0 w-screen bg-blue-500 flex justify-center">
    <div class="flex justify-between w-9/10 container items-center lg:px-20 px-5 py-3 md:py-0">
      <div class="block md:text-2xl text-lg text-white">
        <a href="/#header">Content</a>

      </div>
      <div class="block">
        <div ref="onClickOutsideNavbar">
          <nav class="block" v-show="isOpenNavbarToggle" :class="{isOpenNavbarToggle: true}">
            <ul class="md:flex md:items-center lg:space-x-3 space-x-0 md:static right-0 top-14 absolute md:bg-inherit md:backdrop-blur-none bg-blue-500/60 backdrop-blur-md duration-700 ease-in">
              <li><a class="flex text-xl text-white px-6 py-4 hover:bg-white hover:text-blue-500"
                     href="/#header">{{ $t("nav.home") }}</a></li>
              <li><a class="flex text-xl text-white px-6 py-4 hover:bg-white hover:text-blue-500"
                     href="/#product">{{ $t("nav.products") }}</a></li>
              <li><a class="flex text-xl text-white px-6 py-4 hover:bg-white hover:text-blue-500"
                     href="/#services">{{ $t("nav.services") }}</a></li>
              <li><a class="flex text-xl text-white px-6 py-4 hover:bg-white hover:text-blue-500"
                     href="/#partners">{{ $t("nav.partners") }}</a></li>
              <li><a class="flex text-xl text-white px-6 py-4 hover:bg-white hover:text-blue-500"
                     href="/#about">{{ $t("nav.about") }}</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="ml-20 md:ml-0">
        <LanguageSwitcher/>
      </div>
      <button @click="toggleNavbar()" class="block sm:p-1.5 rounded-xl text-white focus:ring md:hidden">
        <MenuIcon class="w-7 h-7"/>
      </button>
    </div>
  </header>
</template>
