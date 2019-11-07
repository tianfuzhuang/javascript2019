### 数组的结构赋值
#### 基本用法
   + 解构赋值:让左侧出现和右侧相同的结构,一次快速获取我们需要的内容
   + ES6 允许按照一定模式从数组和对象中提取值,然后对变量进行赋值,这被称之为结构(Destructuying) 以前,为变量赋值只能直接指定.
   let a = 1;
   let b = 2;
   let c = 3;
   + ES6中:
   + let[a,b,c]=[1,2,3]
   + let[a,b, ,c=0]=[1,2,3]    // [1,2,0] 跟函数形参赋值差不多
   + 只要等号两边的模式相同,左边的变量就会被赋予对应的值
   let [a,[[b],c]] = [1,[[2],3]]    a//1 b//2 c//3
   let [x,,y]=[1,2,3] x//1 y//3
   let [a,...b]=[1,2,3,4]  a//1 b//2,3,4  拓展知识点:...x拓展运算符,只能放在最后
   let [x,y,...z] = ['a'] x//1 y = undefined z//[] 如果结构不成功,变量的值就等于undefined
   let [a] = []   a//undefined
   let [a,b]=[1]   a//1 b//undefined
   + 另一种情况是不完全结构,即等号的左边的模式只匹配一部分的等号右边的数组,这种情况下,热然可以结构成功
   let [x,y]=[1,2,3]  x//1 y//2 
   let [a,[b],d]=[1,[2,3],4] a//1  b//2 d//4 这两个例子都属于不完全结构,但是可以成功.

### 对象的结构赋值
 对象的结构与数组有一个重要的不同.数组的元素是按次序排列的,变量的取值是由他的位置决定的,而对象的属性没有次序,变量必须与属性同名才能去到正确的值.
   + 例1:   let obj = {
        name :'Peter',
        age  : 30,
        interest:'swimming'
    } 
  // let {name,age} = obj;
  // console.log(name);//'Peter'
  // let {name:mingzi,age:nianling} = obj;
  // console.log(mingzi,nianling);//Peter 30
  //给获取的结果设置默认值
    let{
        aihao='playbasketball'
        } = obj;
    console.log(aihao);//'playbasketball'
 
   + 例2: var node = {
        loc:{
            start:{
                line:1,
                column:5
            }
        }
    }
var{loc,loc:{start},loc:{start:{line}}}=node  
  console.log(loc);// start:{line:1 column:5 }
  console.log(line);//1
  console.log(start);//Object{line:1,column:5}
  
### 函数的结构赋值
function move({x = 0,y = 0} = { }){
    return [x,y];
}
console.log(move({x : 3,y : 4})); //[3,4]
console.log(move({x : 3})); //[3,0]
console.log(move({})); //[0,0]
console.log(move()); //[0,0]
 
// 分析：
//1、先来看一下 {x = 0,y = 0} = { },只要调用 move 函数 没有传递参数的时候才会执行{x = 0,y = 0} = { } 这一行代码，只要传递了参数 这行代码是不会执行.
//2、接下来，第三个输出，传入的参数是一个空 {}，是不执行 {x = 0,y = 0} = { }这行的输出[0,0]的原因是，es6 会解构传入的 空 {}，发现并没有 X和Y 所以解构失败，使用了默认值
// 第四个输出：根本就没有传入参数，所以执行了 {x = 0,y = 0} = { }，得到的结果是 [0, 0]
    
### Class的基本语法
+ ES6中的class(类)这个概念作为对象的模板.通过class关键字可以定义类,class可以看做知识一个语法糖,他的绝大部分功能,ES5都可以做到,新的class写法知识让对象原型的写法更加清晰,更像面对对象编程的语法而已.
 + class 类名 {
            constructor(){
                //给自身添加属性或者方法，就必须要写constructor
            }
        } 
+ 注意!定义类的方法时,前面不需要加上function这个保留字,直接把函数定义进去就可以了.另外,方法之间不要要逗号分隔,加了会报错.
+ 例:     class Point {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }
            myValue() {
               console.log(  this.x + this.y);
              
            }
            myValue1(){
                let sum = 0;
               sum = this.x - this.y;
               console.log(sum);
               
            }
            //箭头函数代表上下文content中的this
          /*   myIdea(){
                document.onclick = ()=>{
                this.myValue();
                 this.myValue1() ;
                }
            } */
            //换一种写法 普通函数点击事件下的this

               myIdea(){
                   let that = this;
                   document.onclick = function(){
                   //this.myValue();
                   //this.myValue1() ; 此时写法错误 this指代document
                  that.myValue();
                  that.myValue1();
                   }
               }


            innt(){
              this.myIdea()
            }
        }

     var aa = new  Point(1,2) ;
   aa.innt ()
 ### call 
 + 语法:函数.call([context],[paramas1,...]) 
 + 函数基于原型链找到Function.prototype.call这个方法,并且把它执行,在call方法执行的时候完成了一些功能
 + 让当前函数执行
 + 把函数中的this指向改为第一个传递给call的实参
 + 把传递给call的实参当做参数信息传递给当前函数
 + 如果执行call其余的实参都没有传递,非严格的状态下是让函数中的this执行window,严格模式下指向的是undefined 
 + 例:  let obj = {
       name:'OBJ'
   }
   function fn(n,m){
       console.log(this.name);       
   }
   fn()
  // fn(10,20)
fn.call(obj)//OBJ
//call方法让fn中的this强制指向obj
   
   
