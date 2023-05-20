<template>
  <div id="product">
    <div class="bg-product 2xl:px-40 md:px-10 md:py-20 px-10 py-10 mt-24 md:mt-0 md:mb-20 mb-5">
      <div class="md:text-4xl tracking-wide text-white font-medium md:pl-48 text-xl">PRODUCTS</div>
      <div class="justify-between items-center grid grid-cols-12 md:space-y-36 pt-5 space-y-10">
        <div
            class="md:col-span-6 order-1 col-span-12 p-7 md:p-0 bg-blue-500 md:bg-none md:shadow-none shadow-xl place-content-center">
          <div class="md:text-xl text-lg md:w-3/5 mx-auto text-white text-justify content-center">Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
            Aspernatur minima vero quos dolorem reprehenderit odit cum facilis, tenetur asperiores quia, rerum
            consectetur quaerat delectus laudantium possimus corrupti odio. Assumenda, autem.
          </div>
        </div>

        <div class="md:col-span-6 mx-auto order-2 col-span-12">
          <div class="md:block md:w-96 md:h-96 md:bg-blue-500 md:relative">
            <img src="../../../public/photo.jpg"
                 class="md:w-96 md:h-96 w-full shadow-[0_0_25px_5px_rgba(0,0,0,0.4)] object-cover md:absolute md:-translate-x-[25%] md:translate-y-[25%]"
                 alt="">
          </div>
        </div>


        <div class="md:col-span-6 mx-auto md:order-3 order-4  col-span-12">
          <div class="md:block md:w-96 md:h-96 md:bg-white md:relative">
            <img src="../../../public/photo.jpg"
                 class="md:w-96 md:h-96 w-full shadow-[0_0_25px_5px_rgba(0,0,0,0.4)] object-cover md:absolute md:-translate-x-[25%] md:translate-y-[25%]"
                 alt="">
          </div>
        </div>


        <div
            class="md:col-span-6 col-span-12 p-7 md:order-4 order-3 md:p-0 md:bg-none md:shadow-none shadow-xl bg-white place-content-center">
          <div class="md:text-xl text-lg md:w-3/5 mx-auto   text-blue-500 md:text-slate-900 text-justify content-center">Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
            Aspernatur minima vero quos dolorem reprehenderit odit cum facilis, tenetur asperiores quia, rerum
            consectetur quaerat delectus laudantium possimus corrupti odio. Assumenda, autem.
          </div>
        </div>


        <div
            class="md:col-span-6 col-span-12 p-7 md:p-0 bg-blue-500 order-5 md:bg-none md:shadow-none shadow-xl place-content-center">
          <div class="md:text-xl text-lg md:w-3/5 mx-auto text-white text-justify content-center">Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
            Aspernatur minima vero quos dolorem reprehenderit odit cum facilis, tenetur asperiores quia, rerum
            consectetur quaerat delectus laudantium possimus corrupti odio. Assumenda, autem.
          </div>
        </div>
        <div class="md:col-span-6 mx-auto col-span-12 order-6">
          <div class="md:block md:w-96 md:h-96 md:bg-blue-500 md:relative">
            <img src="../../../public/photo.jpg"
                 class="md:w-96 md:h-96 w-full shadow-[0_0_25px_5px_rgba(0,0,0,0.4)] object-cover md:absolute md:-translate-x-[25%] md:translate-y-[25%]"
                 alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.bg-product {
  background: linear-gradient(270deg, rgb(255, 255, 255), rgb(255, 255, 255) 50%, rgba(59, 130, 246) 50%, rgba(59, 130, 246) 100%);
}
</style>

<script setup>
</script>