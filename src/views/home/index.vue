<template>
  <div class="home">
    <van-swipe :autoplay="3000" lazy-render indicator-color="white">
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="utils.getAssetURL(`imgs/${image}`)" alt="" />
      </van-swipe-item>
    </van-swipe>


    <div class="content">
      <div class="title">About GoldenCoin</div>
      <p class="text">
        Behind GoldenCoin are a group of early adopters of blockchain technology
        and believers in the future development of blockchain. Vision:We believe
        the crypto revolution will create a fairer future world. mission:We
        create the ultimate trading products to make future finance accessible,
        safe and efficient.
      </p>
    </div>

    <div class="content">
      <div class="title">Our perspective</div>
      <ul>
        <li v-for="v in lists" :key="v.name">
          <div class="name">
            <img :src="utils.getAssetURL(`imgs/${v.icon}.png`)" alt="" />
          </div>
          <div class="info">
            <p>{{ v.name }}</p>
            <p class="info">{{ v.content }}</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="content" style="padding-bottom: 100px">
      <div class="title">Our team</div>
      <p class="text">
        The GoldenCoin team has more than 1,500 employees from 60 countries,
        coming from every corner of the planet, giving us a truly global reach.
      </p>
    </div>
    <div class="btn">
      <a href="https://wa.me/919774407496">
        <image src="/btn.png" style="position: fixed;bottom: 0;left: 0;margin: 20;text-align:center;width: auto;height: auto;max-width: 100%;max-height:100%"/>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Carousel from "@/components/Carousel/index.vue";
const images = ["banner_1.png", "banner_2.png", "banner_3.png"];

const msgs = ref([
  "1. xxx累计邀请xx人，赚取收益xxxx",
  "2. xxx累计邀请xx人，赚取收益xxxx",
  "3. xxx累计邀请xx人，赚取收益xxxx",
  "4. xxx累计邀请xx人，赚取收益xxxx",
]);

const lists = [
  {
    name: "User first",
    content: "We always pay attention to the needs and voices of every user.",
    icon: "home_icon1",
  },
  {
    name: "Integrity and honesty",
    content:
      "We have earned the trust of the market by adhering to higher ethical and legal standards and practicing responsible initiatives.",
    icon: "home_icon2",
  },
  {
    name: "Honest communication",
    content:
      "We communicate and share information proactively, objectively, promptly and openly.",
    icon: "home_icon3",
  },
  {
    name: "Get results",
    content:
      "Change doesn't happen by itself, we deliver results and create change with hard work and drive.",
    icon: "home_icon4",
  },
];
</script>

<style src="./index.scss" scoped="scss"></style>