### 指令
+ 为了方便开发者开发,vue中使用了指令,这些指令包含了很多元素
v-text ---->innerText
v-html ---->innerHTML
v-show ---->displayblock (v-show="false") 布尔值 或b:false
v-if ---->看一下boolen之是否为true根据条件进行渲染  紧接着->v-else 中间不能放东西
v-on:(缩写@)---->绑事件 事件名-'事件函数|简单方法' @click="click"
methods---->专门放函数(一般放事件函数)
+ $event
 如果不传参,第一个参数就是事件对象
 *** 如果传了参数还想拿到事件对象,需要在模板中的事件函数内传一个
+ 修饰符 .13 .enter 
+解除事件可以使用
```
@mousedown = "onoff && down(event)"
当onoff是真的就添加时间,假的就解除事件
```
v-for = "val,key in 数据"遍历对象或数组
   如果是数组val就是数组的成员,key就是索引 
   如果时对象val是键值,key 是健名

v-bind:如果说属性需**动态操作**,name就使用v-bind:xx
缩写:  :
:style="{属性名:属性值(可以为数据)}"
:style="[{属性名1(可以为数据)},属性名2:属性值2(可以为数据)]
:class="类名:布尔值"
v-bind="{data:1}" 没有具体属性的属性也可以使用v-bind=对象(批量设置属性)


