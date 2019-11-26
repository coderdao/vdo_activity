<template>
	<view>
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			这是首页
			<text class="title">{{title}}</text>
		</view>
		<navigator url="../search/search">搜索页面</navigator>
		<navigator url="../me/me">个人页面</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	
</style>
