let box = document.querySelector('#kuang');
//框选
//console.log(box);
document.onmousedown = function(ev) {
    //console.log(2);
    box.style.display = 'block';
    let downX = ev.pageX;
    let downY = ev.pageY;

    document.onmousemove = function (ev) {

        box.style.top = Math.min(ev.pageY, downY) + 'px';
        box.style.left = Math.min(ev.pageX, downX) + 'px';
        // 边界判断 宽高判断
        let l = Math.min(ev.pageX, downX);
        let t = Math.min(ev.pageY, downY);
        if (t < bignewBox.offsetTop) {
            t = bignewBox.offsetTop;
            box.style.height = ev.pageY - bignewBox.offsetTop + 'px';

        } else {
            t = Math.min(ev.pageY, downY);
            box.style.height = Math.abs(ev.pageY - downY) + 'px';

        }
        if (l < bignewBox.offsetLeft) {
            l = bignewBox.offsetLeft;
            box.style.width = ev.pageX - bignewBox.offsetLeft + 'px';
        } else {
            l = Math.min(ev.pageX, downX);
            box.style.width = Math.abs(ev.pageX - downX) + 'px';
        }

        box.style.top = t + 'px';
        box.style.left = l + 'px';


        let b = document.querySelectorAll('#newBox .file-item')
        b.forEach((ele, i) => {
            if (bong(box, ele)) {


                list.forEach((item) => {
                    if (item.id === ele.getAttribute('did') * 1) {
                        item.checked = true;
                        ele.children[3].classList.add('checked');
                        ele.classList.add('active');

                        //绑定id;  
                    }
                });
            } else {
                list.forEach((item) => {
                    if (item.id === ele.getAttribute('did') * 1) {
                        item.checked = false;
                        ele.children[3].classList.remove('checked');
                        ele.classList.remove('active');
                        //绑定id;  
                    }
                });

            }
            //如果全部勾选中,否则取消全选.
            if (list.every(el => el.checked)) {
                checkedAll.classList.add('checked');
                every = true;
            } else {
                checkedAll.classList.remove('checked');
                //every = false;
            }

        })
        return false;
    }
    document.onmouseup = function (ev) {
        box.style.height = box.style.width = 0;
        box.style.display = 'none';
        document.onmousemove = null;
        document.onmouseup = null;


        let aa = document.querySelectorAll('#newBox .file-item')
        //避免点击删除 重名名按钮时进该条件 增加 一个判断条件
        if (downY > bignewBox.offsetTop && ev.pageX === downX && ev.pageY === downY && !returnVal) {

            list.forEach(item => item.checked = false);
            aa.forEach((item) => {
                item.children[3].classList.remove('checked');
                checkedAll.classList.remove('checked');
                every = false;
            });

        }

    }
    //灵活阻止默认行为
    // ev.originalEvent.returnValue jQuery 方法

   ev.returnValue = returnVal;
}