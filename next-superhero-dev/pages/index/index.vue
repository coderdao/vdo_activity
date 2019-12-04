<template>
	<view class="page">
		<!-- 轮播图 V -->
		<swiper :indicator-dots="true" :autoplay="true" :circular="true" class="swip_list">
			<swiper-item v-for="(img,key) of img_list" :key="key">
				<view class="swiper-item">
					<navigator :url="img.jump_url" open-type="redirect">
						<image :src="img.img_src" class="swip_item_img"></image>
					</navigator>
				</view>
			</swiper-item>
		</swiper>
		<!-- 轮播图 ^ -->
		
		
		<!-- 热门超英 V -->
		<view class="page-block super-hot">
			<view class="hot-title-wapper">
				<image src="../../static/icos/hot.png" class="hot-ico"></image>
				<view class="hot-title">
					热门超英
				</view>
			</view>
		</view>
		
		<scroll-view scroll-x="true" class="hot">
					<view class="single-positer">
						<view class="positer-wapper">
							<image src="../../static/poster/civilwar.jpg" class="positer"></image>
							<view class="movie-name">
								蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠
							</view>
							<view class=""></view>
						</view>
					</view>
					
					<view class="single-positer">
						<view class="positer-wapper">
							<image src="../../static/poster/civilwar.jpg" class="positer"></image>
							<view class="movie-name">
								蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠
							</view>
							<view class=""></view>
						</view>
					</view>
					
					<view class="single-positer">
						<view class="positer-wapper">
							<image src="../../static/poster/civilwar.jpg" class="positer"></image>
							<view class="movie-name">
								蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠
							</view>
							<view class=""></view>
						</view>
					</view>
		</scroll-view>
		
		<!-- 热门超英 ^ -->
		
	</view>
</template>

<script>
	import config_app from "../../config/app.js";
	
	export default {
		data() {
			return {
				title: 'Hello',
				'img_list': []
			}
		},
		onLoad() {
			let me = this;	// 避免this 调用混乱了
			var SERVER_URL = config_app.SERVER_URL;
			
			uni.request({
			    url: SERVER_URL+'/api/headimg', // 请求轮播数据
					method:"GET",
			    data: { text: 'uni.request' },
			    success: ( res ) => {
						
						let json = res.data;
						if ( json.ret !== 1 ) { 
							uni.showModal({
								content: 'app异常：数据请求失败，请返回',
								showCancel: false
							}); 
							
							return false;
						}
						
						me.$data.img_list = json.content;
			    }
			});
			
		},
		methods: {

		}
	}
</script>

<style>
	@import url("index.css");
</style>
