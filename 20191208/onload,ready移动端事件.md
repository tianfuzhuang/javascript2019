### onload 
    + 当静态文件加载完之后执行事件中的代码（适合游戏开发）

    弊端:
     当静态资源比较大，加载慢的时候，会影响用户体验

 ### ready事件  
    + 当DOM加载完成时触发，只管标签，不管静态资源(适合网页开发)

    原生的ready高版本浏览器使用
    DOMContentLoaded
            
    低版本IE浏览器中是通过onreadystatechange事件去监听的,监听在
    IE下只要DOM加载成功，会有一个叫做doScroll('left')一个方法
    但是如果DOM没有加载成功是没有这个方法的，那么会报错，所以使用try去监听
     function ready(){
                try{
                    document.documentElement.doScroll('left')
                    onready(function(){
                        fn()
                    })
                }cath(e){
                    setTimeout(ready,500)
                }
            }

            onready(function(){
                
            })

### 移动端事件

- ontouchstart 手指按下
- ontouchmove 手指滑动
- ontouched 手指抬起
  > 他们比鼠标事件更加快捷,大大提升用户体验
  > 以上三大事件,是一套事件,也就是说,在某个元素按下之后,在屏幕的任意位置 move 或者 end 都会触发

移动端的 300 毫秒问题(点透)
因为手机浏览器认为用户在 300 毫秒之内，如果在某个坐标点上连续触发了 2 次，
判定为双击,浏览器就会在某个坐标点上监听，这个时候，如果上层元素消失或者偏移，
正好下层元素是一个焦点元素(a,input...)，这个时候就会触发焦点行为

1.超过300ms之后再让上层元素消失或者偏移
2.下层元素不用焦点元素即可
a href="可以进行搜索引擎优化"
3.直接在document身上阻止默认行为，然后在焦点元素身上添加事件，阻止冒泡   √

>DOM的事件绑定在某些浏览器模拟器上面是没有效果的，但是在真机上是OK的
一般开发的时候，使用DOM2的方式去绑定，每个浏览器都吃

