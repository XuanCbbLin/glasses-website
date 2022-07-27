<template>
  <header class="bg-c-red-500 relative">
    <div class="container py-4 px-[0.9375rem]">
      <div class="flex items-center">
        <h1 class="text-[0rem]">
          眼鏡
          <a href="#">
            <img
              src="../assets/images/logo/logo-new_工作區域 1.png"
              alt="logo-new_工作區域"
            />
          </a>
        </h1>

        <i-charm-menu-hamburger
          class="text-white cursor-pointer text-2xl ml-auto md:hidden"
        />

        <ul
          class="absolute top-full left-0 bg-c-red-500 h-[100vh] w-[70%] hidden"
        >
          <li v-for="nav in navList" :key="nav">
            <a href="#" class="inline-block py-8 pl-3 text-white">
              {{ nav }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
const navList = ["系列鏡框", "門市據點", "部落格", "常見問題"];
</script>

<style lang="scss" scoped></style>
