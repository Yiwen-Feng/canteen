<template>
  <div id="hot-goods">
    <section class="title">
      <span class="name">猜你喜欢</span>
    </section>
    <ul>
      <li
        class="hot-goods-item"
        v-for="item of hotGoods"
        :key="item.goodsId"
        @click="goGoodsDetails(item)"
      >
        <img v-lazy="item.image" height="180" width="300" class="hot-goods-img" />
        <p class="name">{{ item.name }}</p>
        <p class="price">
          <span class="code">￥</span>
          <span class="mall-price">{{ item.mallPrice }}</span>
          <span class="min-price">{{ item.price }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { GoodsMixin } from "@/mixins/goodsMixin";

export default {
  name: "HotGoods",
  mixins: [GoodsMixin],
  props: {
    //hotGoods: { type: Array, default: () => [] }
  },
  data() {
    return {
      hotGoods: [
        {
          mallPrice: 7.00,
          image: require("@/assets/imgs/hot1.jpg"),
          goodsId: "1",
          price: 7.00,
          name: "肠粉"
        },
        {
          mallPrice: 14.00,
          image: require("@/assets/imgs/hot2.jpg"),
          goodsId: "5ee043a9f6a000000a7b191b",
          price: 14.00,
          name: "牛肉面"
        },
        {
          mallPrice: 10.00,
          image: require("@/assets/imgs/hot3.jpg"),
          goodsId: "3",
          price: 12.00,
          name: "兰州拉面"
        },
        {
          mallPrice: 14.00,
          image: require("@/assets/imgs/hot4.jpg"),
          goodsId: "4",
          price: 15.00,
          name: "鸡扒饭"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
