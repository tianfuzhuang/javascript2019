### css3新属性

+ （1）边框：

border-radius：圆角边框，border-radius:25px;

box-shadow：边框阴影，box-shadow: 10px 10px 5px #888888;

border-image：边框图片，border-image:url(border.png) 30 30 round;

+ （2）背景：

background-size：规定背景图片的尺寸，background-size:63px 100px;

background-origin：规定背景图片的定位区域，背景图片可以放置于 content-box、padding-box 或 border-box 区域。background-origin:content-box;

CSS3 允许您为元素使用多个背景图像。background-image:url(bg_flower.gif),url(bg_flower_2.gif);

+ （3）文本效果：

text-shadow：向文本应用阴影，可以规定水平阴影、垂直阴影、模糊距离，以及阴影的颜色。text-shadow: 5px 5px 5px #FF0000;

word-wrap：允许文本进行换行。word-wrap:break-word;

+ （4）字体：CSS3 @font-face 规则可以自定义字体。

+ （5）2D 转换（transform）

translate()：元素从其当前位置移动，根据给定的 left（x 坐标） 和 top（y 坐标） 位置参数。 transform: translate(50px,100px);

rotate()：元素顺时针旋转给定的角度。允许负值，元素将逆时针旋转。transform: rotate(30deg);

scale()：元素的尺寸会增加或减少，根据给定的宽度（X 轴）和高度（Y 轴）参数。transform: scale(2,4);

skew()：元素翻转给定的角度，根据给定的水平线（X 轴）和垂直线（Y 轴）参数。transform: skew(30deg,20deg);

matrix()： 把所有 2D 转换方法组合在一起，需要六个参数，包含数学函数，允许您：旋转、缩放、移动以及倾斜元素。transform:matrix(0.866,0.5,-0.5,0.866,0,0);

+ （6）3D 转换

rotateX()：元素围绕其 X 轴以给定的度数进行旋转。transform: rotateX(120deg);

rotateY()：元素围绕其 Y 轴以给定的度数进行旋转。transform: rotateY(130deg);

+ transform-style 使被转化的子元素保留其3D转换，因为transform和transition变化后都会恢复原来样子。（在父元素中设置）
+ perspective: number元素距离视图的距离,以像素计 | none默认值,与 0 相同,不设置透视; 属性定义 3D 元素距视图的距离，以像素计。该属性允许您改变 3D 元素查看 3D 元素的视图。
+  perspective-origin: x-axis y-axis; 属性定义 3D 元素所基于的 X 轴和 Y 轴。该属性规定了镜头在平面上的的位置，默认放在元素中心。
可设置为length数值 或 百分比 或top、left、right、bottom、center的组合。