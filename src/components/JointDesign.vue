<template>
  <section class="join-design py-10 lg:py-20">
    <div class="container">
      <h2 class="text-center text-white text-2xl mb-8 md:text-5xl">
        聯名設計鏡框
      </h2>
      <div class="text-center flex flex-wrap">
        <div class="mb-7 lg:w-1/2 lg:mb-0">
          <img
            src="../assets/images/home-section4-1-sm.png"
            alt="home-section4-1-sm"
          />
          <h3 class="text-c-red-500 bg-white py-4 text-4xl">DOUBLE A+</h3>
        </div>
        <div class="lg:w-1/2">
          <img
            src="../assets/images/home-section4-2-sm.png"
            alt="home-section4-2-sm"
          />
          <h3 class="text-c-red-500 bg-white py-4 text-4xl">YOUTH</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.join-design {
  background: url("../assets/images/index-bg-sm.png") no-repeat;
}

@media (min-width: 768px) {
  .join-design {
    background-size: cover;
    background-image: url("../assets/images/index-bg-md.png");
  }
}

@media (min-width: 1024px) {
  .join-design {
    background-image: url("../assets/images/index-bg.png");
  }
}
</style>
