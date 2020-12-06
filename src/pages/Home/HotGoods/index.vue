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
        <img
          v-lazy="item.image"
          height="180"
          width="300"
          class="hot-goods-img"
        />
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
          mallPrice: 7.0,
          image: require("@/assets/imgs/hot1.jpg"),
          goodsId: "5fcb72d99d442703897478f6",
          price: 7.0,
          name: "肠粉",
        },
        {
          mallPrice: 14.0,
          image: require("@/assets/imgs/hot2.jpg"),
          goodsId: "5fcb899509254b0216b30496",
          price: 14.0,
          name: "重庆小面",
        },
        {
          mallPrice: 10.0,
          image: require("@/assets/imgs/hot3.jpg"),
          goodsId: "5fcb723409254b0216b30463",
          price: 12.0,
          name: "兰州拉面",
        },
        {
          mallPrice: 14.0,
          image: require("@/assets/imgs/hot4.jpg"),
          goodsId: "5fcb71b409254b0216b3045d",
          price: 15.0,
          name: "鸡扒饭",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
