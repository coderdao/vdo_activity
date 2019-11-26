[知乎](https://zhuanlan.zhihu.com/p/25303493)
[菜鸟](https://www.runoob.com/w3cnote/flex-grammar.html)

# flex布局

## Flex布局概念
> flex其实非常重要。在小程序、webapp、混合app上，官方都是推荐使用flex来实现自适应的布局。

![](https://www.runoob.com/wp-content/uploads/2015/07/3791e575c48b3698be6a94ae1dbff79d.png)
采用Flex布局的元素，称为Flex容器`container`。它的所有子元素自动成为容器成员，称为Flex单元`item`。<br />
容器中默认存在两条轴，主轴(main axis) 和交叉轴(cross axis)。单元默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。
> 主轴、交叉轴并不能简单粗暴地理解为`横轴竖轴`，因为它们位置可以置换。同理如果`水平`方向是主轴，那么main size 是宽；如果`垂直`方向是主轴，那么main size 是高

```css
.box{
	display: flex;
	display: inline-flex; /* 行内元素 */
	display: -webkit-flex; /* Safari */
}
```

## 容器的6个属性
### flex-direction 决定主轴的方向(即单元的排列方向)
```css
.container {
    flex-direction: row | row-reverse | column | column-reverse;
}
```
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content