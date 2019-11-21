class Tools {
    getMinIndex(obj){
        if(!Array.isArray(obj)){
            obj = [...obj].map((item)=>{
                return item.scrollHeight;
            })
        }
        let min = Math.min(...obj);
        let index = obj.findIndex(item=>item ===min);
        
        return{
            min,index
        }

    }
    debounce(cb,time){
        let timer;
        return function(...ary){
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(()=>{
            cb.call(this,...ary)
        },time)
        }
    }
}
class Waterfall extends Tools{
    constructor(name){
        super();
        this.box = document.querySelector(name);
        this.list = this.box.children;
        this.wh = window.innerHeight;
        this.bodyT = this.box.offsetTop;
}
//获取data
api(url,cb){
    let that = this;
    fetch(url)
    .then(d=>d.json())
    .then((data)=>{
       cb.call(that,data)
    })
}

render(){
    this.api('./data.json',function(data){
        data.forEach((d,i)=>{
            let {index} = this.getMinIndex(this.list);
            let div = this.create(d);
            this.list[index].append(div);
            setTimeout(()=>{
                div.children[0].style.opacity = 1;
            },i*100);

            
        })
    })
}
create({pic,desc,author,height}){
    let div = document.createElement('div');
    div.className = 'img_box';
    div.innerHTML = 
  ` 
    <img height="${height}" src="${pic}" alt="">
    <p class="desc">${desc}</p>
    <p class="author">${author}</p>

    `
    return div;
}
scroll(){
   //如果可视区的高度+滚动条滚动的高度>最短li被撑开的高度+最顶上图片的距离就render函数
   let fn = ()=>{
   let {index} = this.getMinIndex(this.list);
    if(this.wh+ window.pageYOffset > this.bodyT+this.list[index].scrollHeight ){
        this.render();
    }
    }
    window.onscroll = this.debounce(fn,200);
    window.onresize = ()=> {this.wh = window.innerHeight}
}


}
let w = new Waterfall('.body');
w.render();
w.scroll();