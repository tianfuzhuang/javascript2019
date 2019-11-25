

## jQuery
> jQuery是一个快速、简洁的JavaScript框架，是继Prototype之后又一个优秀的JavaScript代码库（或  JavaScript框架）。jQuery设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。它封装JavaScript常用的功能代码，提供一种简便的JavaScript设计模式，优化HTML文档操作、事件处理、动画设计和Ajax交互。

### 选择器
```
    $('#box')  获取id
    $('li')  获取所有li元素
    $('.active') 获取所有的.active元素
    $('#ul1 li')
    $('input[type="button"]')  属性选择器
    $('input[type!="button"]')
    $('li:even')   偶数，js从0开始计数
    $('li:odd')   奇数，js从0开始计数
    $(':button')  伪类选择器（获取type为button的元素）
    $('div:eq(0)')  代表找第1个div
```
+ 例子
``` 
   <script>
   $('#box').css({width:"100px",height:'100px',background:'yellow'});//选择id
   $('.haha').css({width:'100px',height:'100px',background:'green'});//选择class='haha'的元素
   $('span').css('background','tomato')//获取span标签
   $('[index="1"]').css('background','pink');
   $('#ul li').css('background','blue');
   $('#ul li').eq(1).css('background','pink');
   $('#ul li:eq(2)').css('background','pink');//第几个li
   $('#ul li:odd').css('background','black');//奇数行
   $('#ul li:even').css('background','green');//偶数行
   $('button:eq(0)').css('background','orange');
   $(':text').css('background','black')//伪类选择
   </script>

```
### 属性操作
    + attr  -> getAttribute,setAttribute
    + removeAttr   -> removeAttribute
    + prop  -> 表单的状态布尔值（表单元素用）
    + val   -> value
    + html()     -> innerHTML
    + text()    -> innerText
### 样式操作
    + css()   设置行间的样式 -> style
    $('#box').css('width')   -> 获取style的宽度
    $('#box').css('width',200) -> 设置宽度
    $('#box').css({
    'width':200,
    'background':'red'
     })      
    -> 批量添加 
    + 显示:  show()
    +  隐藏:  hide()

### jquery对象转原生对象，原生对象转jquery对象
```
    原生对象转jquery只需要包$()即可
    box - >  $(box)  就变成了jquery对象
    jquery对象转原生对象
    $box ->  $box.get(0)  ||  $box[0]             
```
