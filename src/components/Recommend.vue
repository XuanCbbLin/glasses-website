<template>
  <section class="py-10 md:py-20">
    <div class="container">
      <h2 class="text-center text-c-red-700 mb-6 text-2xl md:mb-12 md:text-4xl">
        顧客推薦
      </h2>
      <div class="md:flex md:flex-wrap md:-mx-2">
        <div
          class="pb-6 md:w-3/6 md:px-4 lg:px-2 lg:w-1/4"
          v-for="recommend in recommendList"
          :key="recommend"
        >
          <div class="shadow md:box-border md:flex md:flex-col md:h-full">
            <div>
              <img
                :src="`https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/${recommend.pic}`"
                :alt="recommend.pic"
              />
            </div>
            <div class="py-3 px-3 md:h-full md:flex md:flex-col">
              <h3 class="mb-3">{{ recommend.title }}</h3>
              <p class="mb-20">{{ recommend.desc }}</p>
              <time class="text-c-zinc-600 md:mt-auto">{{
                recommend.date
              }}</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const recommendList = [
  {
    pic: "home-section5-1.png",
    title: "Jessy",
    desc: "眼鏡品質優良，下次還會想來這邊購買！",
    date: "2021/06/20",
  },
  {
    pic: "home-section5-2.png",
    title: "凱倫",
    desc: "做工細緻、鏡架很輕盈，待久也不會覺得有負擔，推薦給大家！",
    date: "2021/04/18",
  },
  {
    pic: "home-section5-3.png",
    title: "悠悠",
    desc: "  謝謝客服人員的詳細回答，成功買到了喜歡的眼鏡，下次會再回購！",
    date: "2020/12/25",
  },
  {
    pic: "home-section5-4.png",
    title: "Kyuan",
    desc: "服務很好，品質沒有任何問題，非常喜歡。",
    date: "2020/10/31",
  },
];
</script>

<style lang="scss" scoped></style>
