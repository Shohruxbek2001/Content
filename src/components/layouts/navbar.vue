<script setup>
import { ref } from "@vue/reactivity";
import { useDark, useToggle } from "@vueuse/core";
import $ from "jquery";
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from "../../components/LanguageSwitcher.vue"


const { t } = useI18n()

const switchLanguage = (lang) => {
    isOpenNavbarToggle.value = false

}
const isOpenNavbarToggle = ref(false)
const x = window.matchMedia("(min-width: 700px)")
const md = (x) => {
  if(x.matches) {
    isOpenNavbarToggle.value = true
  }
}
const toggleNavbar = () => {
    
    isOpenNavbarToggle.value = !isOpenNavbarToggle.value
}
const onClickOutsideNavbar = ref(null)

</script>
<template>
    <header class="fixed z-10 top-0 block w-screen bg-black/60 backdrop-blur-md">
        <div class="flex justify-between w-screen container items-center px-20 py-4">
            <div class="block text-2xl text-white">
                Content
            </div>
            <div class="block">
                <div>
                    <nav class="">
                        <ul class="lg:flex space-x-10">
                            <li><a class="flex text-xl text-white" href="#">{{ $t("nav.home") }}</a></li>
                            <li><a class="flex text-xl text-white" href="#">{{ $t("nav.products") }}</a></li>
                            <li><a class="flex text-xl text-white" href="#">{{ $t("nav.services") }}</a></li>
                            <li><a class="flex text-xl text-white" href="#">{{ $t("nav.about") }}</a></li>
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