<template>
  <div id="swiper-wrapper">
    <p class="title">为你推荐</p>
    <swiper :options="swiperOption">
      <swiper-slide
        class="recommend-item"
        v-for="item of recommend"
        :key="item.goodsId"
      >
        <img
          v-lazy="item.image"
          class="recommend-img"
          width="30"
          height="100"
          @click="goGoodsDetails(item)"
        />
        <p class="name">{{ item.goodsName }}</p>
        <p class="price">
          <span class="code">￥</span>
          <span class="mall-price">{{ item.mallPrice }}</span>
          <span class="min-price">￥{{ item.price }}</span>
        </p>
        <div class="bottom-btn">
          <section class="left" @click="addToShopCart(item.goodsId)">
            <van-icon name="shopping-cart" />
          </section>
          <section class="right" @click="goGoodsDetails(item)">
            查看详情
          </section>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import { GoodsMixin } from "@/mixins/goodsMixin";
import ajax from "@/api";

export default {
  name: "Recommend",
  mixins: [GoodsMixin],
  components: { swiper, swiperSlide },
  props: {
    //recommend: { type: Array, default: () => [] }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      recommend: [
        {
          image: require("@/assets/imgs/recommend1.jpg"),
          mallPrice: 15.0,
          //! problematic: goodsId should be _id
          goodsId: "5fcb73c709254b0216b30487",
          price: 18.0,
          goodsName: "五谷渔粉",
        },
        {
          image: require("@/assets/imgs/recommend2.jpg"),
          mallPrice: 15.0,
          goodsId: "5fcb738009254b0216b3047e",
          price: 15.0,
          goodsName: "咖喱牛肉饭",
        },
        {
          image: require("@/assets/imgs/recommend3.jpg"),
          mallPrice: 13.8,
          goodsId: "5fcb732a09254b0216b30470",
          price: 13.8,
          goodsName: "麻辣烫",
        },
        {
          image: require("@/assets/imgs/recommend4.jpg"),
          mallPrice: 12.0,
          goodsId: "5fcb899909254b0216b30498",
          price: 12.8,
          goodsName: "炒饭",
        },
        {
          image: require("@/assets/imgs/recommend5.jpeg"),
          mallPrice: 18.0,
          goodsId: "5fcb899c09254b0216b3049b",
          price: 20.0,
          goodsName: "酸菜鱼",
        },
        {
          image: require("@/assets/imgs/recommend6.jpg"),
          mallPrice: 16.0,
          goodsId: "5fcb899509254b0216b30496",
          price: 16.8,
          goodsName: "重庆小面",
        },
        {
          image: require("@/assets/imgs/recommend7.jpg"),
          mallPrice: 13.0,
          goodsId: "5fcb899e9d4427038974791a",
          price: 13.0,
          goodsName: "烤鱼饭",
        },
      ],
    };
  },
  methods: {
    /**
     * 加入购物车
     */
    async addToShopCart(goodsId) {
      if (!this.userToken) {
        this.$router.push({ name: "Login" });
        return;
      }
      if (!goodsId) return;

      try {
        let res = await ajax.addToShopCart(goodsId);
        this.$toast(res.msg);
      } catch (error) {
        // eslint-disable-next-line no-constant-condition
        if ((error.response && error.response.status === 401) || 400)
          this.$router.push({ name: "Login" });
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
