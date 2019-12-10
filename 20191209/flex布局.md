#### 1、 flex 布局的出现
> 布局的传统解决方案，基于盒状模型，依赖 display属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。
> 2009年，W3C提出了一种新的方案—-Flex布局，可以简便、完整、响应式地实现各种页面布局。

#### 2、flex 布局的基本概念
采用Flex布局的元素，称为Flex容器（flex container），简称”容器”。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称”项目”容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。
#### 3、容器的属性

- flex-direction<br />
- flex-wrap<br />
- flex-flow<br />
- justify-content<br />
- align-items<br />
- align-content<br />

3.1 flex-direction属性: 设置主轴的方向

- row：主轴的方向是水平，从从左到右<br />
- column：主轴的方向是垂直的，从上到下<br />
- row-reverse：主轴的方向是水平，从右到左<br />
- column-reverse：主轴的方向是垂直的，从下到上<br />

3.2 flex-wrap:

- wrap: 换行<br />
- nowrap: 不换行（默认）<br />
- wrap-reverse：换行，不过第一行在最下面<br />
3.3 flex-flow <br />flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

3.4 justify-content属性定义了项目在主轴上的对齐方式。 <br />justify-content: flex-start | flex-end | center | space-between | space-around| space-evenly;

以下6个属性设置在项目上。

- order<br />
- flex-grow<br />
- flex-shrink<br />
- flex-basis<br />
- flex<br />
- align-self<br />