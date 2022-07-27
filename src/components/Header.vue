<template>
  <header class="bg-c-red-500">
    <div class="container">
      <div class="flex">
        <h1 class="text-[0rem]">
          眼鏡
          <a href="#">
            <img
              src="../assets/images/logo/logo-new_工作區域 1.png"
              alt="logo-new_工作區域"
            />
          </a>
        </h1>

        <i-charm-menu-hamburger class="text-white" />

        <ul>
          <li v-for="nav in navList" :key="nav">
            <a href="#" class="text-white">
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
