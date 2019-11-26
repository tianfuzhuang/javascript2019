//创建Tab类
class Tab {
    constructor(that) {
        this.box = that; //jQuery对象
        this.opts = {
            btns: ['按钮一', '按钮二', '按钮三'],
            content: [
                '1111',
                '222',
                '3333'
            ]
        }
        // console.log(this.box);
    }
    init(opts) {
        $.extend(true, this.opts, opts)//深克隆一波 
        console.log(this.opts);
        console.log(opts);
        this.createBtn();//方法调用
        this.createDiv();
        this.events();
    }
    //添加按钮方法
    createBtn() {
        this.opts.btns.forEach((item, i) => {
            this.box.append($(`<button class="${i == 0 ? 'active' : ''}">${item}</button>`))
            //添加初始化默认btn样式
        });
    }
   // 添加tab盒子方法
    createDiv() {
        this.opts.content.forEach((item, i) => {
            this.box.append($(`<div class="${i == 0 ? 'show' : ''}">${item}</div>`))
            //添加tab盒子初始化样式
        });
    }
    events() {
        //获取要操作的元素
        this.btns = this.box.find('button');
        this.divs = this.box.find('div');
        let that = this;
        //btns兄弟元素小清洗
        this.btns.click(function () {
            $(this).addClass('active').siblings('button').removeClass('active');
        //tab盒子选项卡清洗
            that.divs.eq($(this).index('button')).addClass('show').siblings('div').removeClass('show');
        });
    }

}


//构造拖拽class类
class Drag {
    constructor(that) {
        this.box = that;
        this.disX = 0;
        this.disY = 0;
    }
    position() {
        //给盒子添加css样式 (定位)
        this.box.css({
            position: 'absolute',
            top: 0,
            left: 0
        })
    }
    //鼠标按下方法
    mousedown() {
        let that = this;
        this.box.mousedown(function (ev) {
            that.disX = ev.pageX - $(this).offset().left;
            that.disY = ev.pageY - $(this).offset().top;
            that.mousemove();//调用move方法
            that.mouseup();//调用抬起方法

            //return false;
        });
    }
    mousemove() {
        let that = this;
        $(document).mousemove(function (ev) {
            that.box.css({
                top: ev.pageY - that.disY,
                left: ev.pageX - that.disX
            })
        });
    }
    mouseup() {
        $(document).mouseup(function (ev) {
            //解绑移动和抬起事件
            $(this).off('mousemove');
            $(this).off('mouseup');
        })
    }
}
//extend扩展方法
$.fn.extend({
    tabs: function (opts) {
        let t = new Tab(this);
        t.init(opts);
        console.log(this);
   
        //return this;
        //链式调用
    },
    dialog: function () {

        let d = new Drag(this);
        d.position();
        d.mousedown();
    }
});