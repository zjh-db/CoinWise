<template>
  <div class="carousel">
    <ul
      ref="carouselRef"
      :style="{ transform: `translateX(-${translateX}px)` }"
    >
      <li v-for="v in data" :key="v">{{ v }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const props = defineProps(["data"]);

const carouselRef = ref();
const translateX = ref(0); // 水平移动距离
let index = 0; // 跑马灯走过的数据索引
let totalWidth = 0; // 跑马灯走过的数据总长度
let firstDom = null; // 第1条跑马灯dom
let timeoutId = null; // 定时器

onMounted(() => {
  // console.log("onMounted");
  firstDom = carouselRef.value.querySelectorAll("li")[index];
  // console.log(`第${index}条数据的宽度`, firstDom.offsetWidth);
  totalWidth = firstDom.offsetWidth;

  function carousel() {
    translateX.value += 2;

    // 获取列表的第1条数据的宽度，当移动距离达到这个宽度时，则该条数据移动到列表的最后位置
    if (translateX.value >= totalWidth) {
      props.data.push(props.data[index]);

      index++;
      // console.log("跑马灯索引", index);

      // console.log(carouselRef.value);

      firstDom = carouselRef.value.querySelectorAll("li")[index];
      // console.log(`第${index}条数据的宽度`, firstDom.offsetWidth);
      totalWidth += firstDom.offsetWidth;
    }

    timeoutId = setTimeout(carousel, 20);
  }
  carousel();
});

onUnmounted(() => {
  clearTimeout(timeoutId);
});
</script>

<style src="./index.scss" lang="scss" scoped></style>
