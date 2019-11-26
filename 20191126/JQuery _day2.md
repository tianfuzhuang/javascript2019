## jQuery day2
### jQ的DOM操作
+ 添加的内容可包含html标签的：
  append（appendTo）：向匹配元素集合中的每个元素结尾插入由参数指定的内容。
  before：在每个匹配的元素之前插入内容。
  prepend（prependTo）：向匹配元素集合中的每个元素开头插入由参数指定的内容

+ jquery中选取兄弟节点的方法
  $('#id').siblings() 当前元素所有的兄弟节点
  $('#id').prev() 当前元素前一个兄弟节点
  $('#id').prevaAll() 当前元素之前所有的兄弟节点
  $('#id').next() 当前元素之后第一个兄弟节点
  $('#id').nextAll() 当前元素之后所有的兄弟节点
   
+ parents() -> 某个元素的所有祖先节点，扩   号中可以精确匹配
+ index('button') 方法  顺序默认基于父     级，也可以精确匹配

### jQuery中的事件
#### 事件包括三大部分:1.事件流 2.都有哪些事件以及都是干嘛的
+ jQ中的所有事件，都是on来二次封装,JQ中的   事件全部都是事件绑定
+ Q的事件对象都是二次封装的，如果要拿到真    正的原生js事件对象 ** ev.originalEvent  （原生事件对象）
+ jQ中阻止冒泡和默认行为，直接return        false即可
+ 事件监听 $('#box').delegate('li',       'click',function(){}//监听子级的事件行   为
+ $('#box').on('mouseenter',function(){} //jQ中的事件监听
+ jQ中的hover是移入移出相于onmouseenter     onouseleave 
   例子:
   ```
   $('#box').hover(function(){
         console.log('移入')
    },function(){
    console.log('移出')});
   ```
### 避开多次绑定事件行为
    并多次触发的大坑( 触发一次hover，就绑定一次click，触发的越多，绑定的就越多，当触发一次click就会执行多次的click事件)
+ 解决:绑一次解绑一次，保持始终一次click 解绑上一次，再添加一次新的
+ 例子:
```
    $('#box').hover(function(){
    $(this).css({background:'skyblue'});
    //解绑上一次，再添加一次新的click
    $('button').off().click(function(){
    console.log('发起了一次请求');
    });
    },function(){
    $(this).css({background:'red'});
    })
```
### jQ 动画
 +  hide/show 都是有动画的 括号里可以加动    画值

 +  toggle()  
    切换 Hide() 和 Show()
    检查每个元素是否可见。
    如果元素已隐藏，则运行 show()。如果元素可见，则元素 hide()。这样就可以创造切换效果。
    语法
    $(selector).toggle(speed,callback) ;
 +  $('#box').slideToggle(200); //改     变高度
    $('#box').fadeToggle(200); //渐隐渐现

### 工具方法
      浅克隆  不改变地址 
      let ary = [1,2,[3,4]];
      let ary2 = $.extend([],ary);
     ***************************** 
      let ary = [1,2,[3,4]];
      let ary2 = $.extend(true,[],ary);true就代表深度克隆 改变空间地址 
### 扩展插件使用
      extend里面写一个对象，对象的属性就是添加的方法名，值就是函数
      $.extend({
      trimLeft:function(str){
      return str.replace(/^\s+/,'');
      }
     });

### ajax 
> ajax() 方法通过 HTTP 请求加载远程数据
$.ajax({
    url:'https://www.baidu.com',
    data:{
        prod:'pc',
        ss:xx
    }
    dataType:'jsonp'
})

### fetch
> fetch是一种HTTP数据请求的方式，是         XMLHttpRequest的一种替代方案。fetch不    是ajax的进一步封装，而是原生js。Fetch函   数就是原生js，没有使用XMLHttpRequest对   象。
 

 语法:fetch('www.baidu.com').then(d=>d.json()).then(data=>{})
        