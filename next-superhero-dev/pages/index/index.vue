<template>
	<view class="page">
		<swiper :indicator-dots="true" :autoplay="true" :circular="true" class="swip_list">
			<swiper-item v-for="(img,key) of img_list" :key="key">
				<view class="swiper-item">
					<image :src="img.img_src" class="swip_item_img"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				'img_list': []
			}
		},
		onLoad() {
			let me = this;
			
			uni.request({
			    url: 'https://m.aidalan.com/api/headimg', // 请求轮播数据
					method:"GET",
			    data: { text: 'uni.request' },
					success:function( res ){
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
/*	
			    success: ( res ) => {
						
						let json = res.data;
						if ( json.ret !== 1 ) { 
							uni.showModal({
								content: 'app异常：数据请求失败，请返回',
								showCancel: false
							}); 
							
							return false;
						}
						
						this.$data.img_list = json.content;
			    }
*/
			});
			
		},
		methods: {

		}
	}
</script>

<style>
	@import url("index.css");
</style>
