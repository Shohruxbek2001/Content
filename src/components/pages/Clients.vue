<script setup>
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
</script>
<template>
  <div id="partners" class="md:m-36 m-5 p-5 md:pb-10 shadow-lg bg-white rounded">
    <div class="flex justify-center text-2xl font-medium py-5 md:py-16 md:text-4xl">
      <div>Partners</div>
    </div>
    <Vue3Marquee :pauseOnHover="true" :duration="25">
      <div class="flex flex-col items-center mx-5 md:mx-14 space-y-2 md:space-y-5 2xl:w-64 md:w-40 w-32 h-auto">
        <img src="../../../public/photo.jpg" class="object-cover h-24 2xl:h-56 md:h-36 w-full"  alt="">
        <div>Korzinka.uz</div>
      </div>
      <div class="flex flex-col items-center mx-5 md:mx-14 space-y-2 md:space-y-5 2xl:w-64 md:w-40 w-32 h-auto">
        <img src="../../../public/photo.jpg" class="object-cover h-24 2xl:h-56 md:h-36 w-full"  alt="">
        <div>Korzinka.uz</div>
      </div>
      <div class="flex flex-col items-center mx-5 md:mx-14 space-y-2 md:space-y-5 2xl:w-64 md:w-40 w-32 h-auto">
        <img src="../../../public/photo.jpg" class="object-cover h-24 2xl:h-56 md:h-36 w-full"  alt="">
        <div>Korzinka.uz</div>
      </div>
      <div class="flex flex-col items-center mx-5 md:mx-14 space-y-2 md:space-y-5 2xl:w-64 md:w-40 w-32 h-auto">
        <img src="../../../public/photo.jpg" class="object-cover h-24 2xl:h-56 md:h-36 w-full"  alt="">
        <div>Korzinka.uz</div>
      </div>
      <div class="flex flex-col items-center mx-5 md:mx-14 space-y-2 md:space-y-5 2xl:w-64 md:w-40 w-32 h-auto">
        <img src="../../../public/photo.jpg" class="object-cover h-24 2xl:h-56 md:h-36 w-full"  alt="">
        <div>Korzinka.uz</div>
      </div>
      <div class="flex flex-col items-center mx-5 md:mx-14 space-y-2 md:space-y-5 2xl:w-64 md:w-40 w-32 h-auto">
        <img src="../../../public/photo.jpg" class="object-cover h-24 2xl:h-56 md:h-36 w-full"  alt="">
        <div>Korzinka.uz</div>
      </div>
    </Vue3Marquee>
  </div>
</template>