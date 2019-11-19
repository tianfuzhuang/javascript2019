const box = document.querySelector('.body');
const lis = box.querySelectorAll('li');
const head = document.querySelector('.head');

//求最高度最矮的li值
function minEle(lis) {
    //ary就是每个li被内容撑开的高度
    let ary = [...lis].map(ele => ele.scrollHeight);
    //找到li高度最短的值
    let min = Math.min(...ary);
    //根据最短的值，对应的索引，有了这个索引就能对应li
    let index = ary.findIndex(item => item === min);
    return {
        ele: lis[index],//最短的元素
        index,//最短的索引
        min//最矮的高度
    }
}
//防抖
function debounce(aa, time) {
    let timer;
    return function (...arg) {
        //当事件触发的时候就先关闭上次的timer
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            aa.call(this, ...arg);
        }, time);
    }
}

function render() {
    fetch('./data.json')
        .then(d => d.json())
        .then(ary => {
             console.log(ary);
            //在循环数组的过程当中去计算每个li的高度，找到最短的li
            ary.forEach((item, i) => {
                let { ele } = minEle(lis);
                let div = document.createElement('div');
                div.className = 'img_box';
                let img = document.createElement('img');
                img.src = item.pic;
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                p1.className = 'desc';
                p1.innerText = item.desc;
                p2.className = 'author';
                p2.innerText = item.author;
                div.append(img);
                div.append(p1);
                div.append(p2);
                ele.append(div);
                setTimeout(() => {
                    img.style.opacity = 1;
                });
            });
        });
}
render();

//滚轮的时候判断触底
let iH = window.innerHeight; //可视区的高度
window.onscroll = debounce(fn, 200);
function fn() {
    //判断ul的高度是否比可视区要大，如果小于可视区高度，那么就终止加载代码执行
    if (box.scrollHeight < iH) return;
    console.log(box.scrollHeight);
    console.log(iH);
    let { min } = minEle(lis);  //最短的距离
    let scroll = window.pageYOffset; //滚动条距离
    if (iH + scroll >= min + head.offsetHeight) {
        console.log('触底了');
        render();
    }



}