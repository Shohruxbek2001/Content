<script setup>
import { ref } from "@vue/reactivity";
import { useDark, useToggle } from "@vueuse/core";
import MenuIcon from "../icons/MenuIcon.vue";
import $ from "jquery";
import { useI18n } from 'vue-i18n'
import { onClickOutside } from '@vueuse/core'
import LanguageSwitcher from "../../components/LanguageSwitcher.vue"


const { t } = useI18n()

const switchLanguage = (lang) => {
     isOpenNavbarToggle.value = false

}
const isOpenNavbarToggle = ref(false)
const x = window.matchMedia("(min-width: 700px)")
// const lg = (x) => {
  if(x.matches) {
    isOpenNavbarToggle.value = true
  } else {
    const onClickOutsideNavbar = ref(null)
        onClickOutside(onClickOutsideNavbar, (event) => isOpenNavbarToggle.value = false)
  }
//} 
const toggleNavbar = () => {
    isOpenNavbarToggle.value = !isOpenNavbarToggle.value
}


</script>
<template>
    <header class="fixed z-10 top-0 block w-screen bg-blue-500 flex justify-center">
        <div class="md:flex justify-between w-4/5 container items-center px-20">
            <div class="block text-2xl text-white">
                Content
            </div>
            <div class="block">
                <div  ref="onClickOutsideNavbar">
                    <button @click="toggleNavbar()" class="absolute top-0 block p-1 sm:p-1.5 right-4 rounded-xl text-slate-700 dark:text-white focus:ring lg:hidden">
                        <MenuIcon class="w-7 h-7" />
                    </button>
                    <nav class="block" v-show="isOpenNavbarToggle" :class="{isOpenNavbarToggle: true}">
                        <ul class="md:flex md:items-center space-x-3 md:static absolute md:bg-inherit md:backdrop-blur-none bg-blue-500/60 backdrop-blur-md duration-700 ease-in">
                            <li><a class="flex text-xl text-white px-10 py-4 hover:bg-white hover:text-blue-500" href="#">{{ $t("nav.home") }}</a></li>
                            <li><a class="flex text-xl text-white px-10 py-4 hover:bg-white hover:text-blue-500" href="#">{{ $t("nav.products") }}</a></li>
                            <li><a class="flex text-xl text-white px-10 py-4 hover:bg-white hover:text-blue-500" href="#">{{ $t("nav.services") }}</a></li>
                            <li><a class="flex text-xl text-white px-10 py-4 hover:bg-white hover:text-blue-500" href="#">{{ $t("nav.about") }}</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div>
                <LanguageSwitcher />
            </div>
        </div>
    </header>
</template>
