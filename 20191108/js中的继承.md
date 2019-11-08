## JS中的继承
### 概念
   + 我们通过【某种方式】让一个对象可以访问到另一个对象中的属性和方法，我们把这种方式称之为继承
   + 面向对象的特征:
            封装、继承、多态

   + 继承:
            子类具有父类的一部分特征（这部分相同的特征是从父类继承下来的），自己还有自己的特征
### 为什么要使用继承
   + 有些对象会有方法(动作、行为)，而这些方法都是函数，如果把这些方法和函数都放在构造函数中声明就会导致内存的浪费
### 继承的方式:
   + 原型链式继承
   + 借用构造函数继承
   + 组合继承
   + 原型式继承
   + 寄生式继承
   + 寄生组合式继承
   + 拷贝继承
   + class继承
   + 等
 + 例子:
 ```
   <script>
    //创建一个小汽车车类
    function Cars(name,wheel){
     this.name = name;
     this.wheel =wheel; 
    }
    Cars.prototype.speed = function(){
        alert('非常快')
    }
    
    function Benz(price){
        Cars.call(this,'奔驰','4个')
        this.price = price;
    }
    
    let a1 = new Cars;
    let a2 =new Benz('100万','4个');

    console.log(a2);
    
    ```
+  继承属性:
           + 调用父类，通过call把this变+ 为子类的实例即可(call继承)

### 浅克隆 
  +   浅拷贝(克隆)
    for(let i=0;i<ary.length;i++){
       原始数据类型的赋值就是简单赋值关系，不会赋值地址1,2,3
       ary2[i] = ary[i];  //如果数组中还包有引用类型，那么赋值还是赋址
    }
  + 浅拷贝:
        Object.assign(obj2,obj1,obj0)    

        最后改变的是obj2，obj1是不会被修改的

### 深克隆
function deepclone(obj){
    //看看obj是不是一个对象，不是对象就不执行deepclone
    if(typeof obj !== 'object' && obj !== null)return null;
    // let o = Array.isArray(obj)?[]:{};
    let o = obj.push?[]:{}; //确认传进来的值到底是数组还是对象
    for(let attr in obj){
        //如果碰到了引用类型就继续循环，原始类型才赋值
        if(typeof obj[attr] === 'object'){
            o[attr] = deepclone(obj[attr]);
        }else{
            o[attr] = obj[attr];
        }
    }
    return o;
}

//JSON.parse(JSON.stringify(ary))
let ary2 = deepclone(ary);
console.log(ary2);

###  原型继承
   function Dage (){};
   Dage.prototype = Cars.prototype;
   Benz.prototype = new Dage;

### 寄生式组合
   Benz.prototype = Object.create(Cars.prototype)

### 类继承
 //创建一个小汽车车类
     class Cars{
        constructor(name,wheel){
              this.name = name;
              this.wheel =wheel;   
        }

      speed (){       
        alert('非常快')
         return 1
        }


    }
    class Benz extends Cars{
        constructor(price,...arg){
          super(...arg);
          this.price = price;  
        }
    }         
      

    let a1 = new Cars('汽车','8个');
    let a2 =new Benz('奔驰','100万','4个');
   a1.speed('hha')
     console.log(a1);
       console.log(a2);
      console.log(a2.speed());
   
    