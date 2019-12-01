
//新建文件夹
let ary = [];
//console.log(ary);
let b = document.querySelectorAll('#newBox .folder');
//数据渲染
let $create = $('#create');
//console.log($create); 
function render(arr) {
    $('#newBox').html('');
    $.each(arr, (i, item) => {
        //创建文件夹
        //console.log(item);   
        let $div = $(`
                <div class="folder">
                    <img src="./images/wjj.jpg">
                    <input type="text"/>
                    <p>${item.title}</p>
                </div>
            `);
        //console.log(item.title);       
        $div.find('input').hide();

        $('#newBox').append($div);
    });
}
render(ary);

$create.click(function () {
    //console.log(1);
    let $div = $(`<div class="folder">
    <img src="./images/wjj.jpg">
    <input type="text" placeholder="请设置文件名"  value="新建文件夹"/>
</div>`)
    $('#newBox').append($div);
    let $ipt = $div.find('input');
    $ipt.select();
    $ipt.blur(function () {
        let val = $ipt.val();
        let bool = ary.map(item => item.title).includes(val);
        let nval = '';
        let num = 1;
        nval = val;
        while (bool) {
            let s = val.replace(/\(\d\)$/, '') + '(' + num++ + ')';
            bool = ary.map(item => item.title).includes(s);
            nval = s;
            // console.log(s);           
        }
        ary.push({
            id: +new Date,
            title: nval
        });
        render(ary);

    });
});

//删除
del.onclick = function () {
    let b = document.querySelectorAll('#newBox .folder')  
// $('.folder')
    quanxuan.innerText = '';
    let ary2 = [];
   b.forEach((item,i) => {
        console.log(item.backgroundColor);
        //console.log(item);
        //let cc = item.getAttribute('id');
         let cc = item.id;

        console.log(cc);
        //console.log(cc);   
        if (cc) {
          ary2.push(i)
        } 
    })
    ary2.forEach((ele, i) => {
        ary.splice(ele - i, 1)
    })
    render(ary);
}

//console.log(ary);
let box = document.querySelector('#kuang');
//框选
//console.log(box);

document.onmousedown = function (ev) {
    //console.log(2);
    box.style.display = 'block';
    let downX = ev.pageX;
    let downY = ev.pageY;
    document.onmousemove = function (ev) {
        // console.log(3);       
        box.style.width = Math.abs(ev.pageX - downX) + 'px';
        box.style.height = Math.abs(ev.pageY - downY) + 'px';
        //console.log( Math.abs(ev.pageY - downY) + 'px');
        box.style.top = Math.min(ev.pageY, downY) + 'px';
        box.style.left = Math.min(ev.pageX, downX) + 'px';
        let b = document.querySelectorAll('#newBox .folder')
        //碰撞
        b.forEach((ele, i) => {
            if (bong(box, ele)){
                ele.style.background = 'pink';
                //绑定id;  
                ele.id = i; 
                        
            } else {
                ele.style.background = ''; 
                ele.dataset.haha=i;   
               // ele.id ='';
            }
           // console.log(ele.id);
            
        })
        return false;
    }
    document.onmouseup = function (ev) {
        box.style.height = box.style.width = 0;
        box.style.display = 'none';
        //console.log(1); 
        // document.onmousedown =null;
        document.onmousemove = null;
        document.onmouseup = null;
        return false;
    }
    //return false;
}
//全选 
let quanxuan = document.getElementById('quanxuan');
quanxuan.onclick = function () {
    let b = document.querySelectorAll('#newBox .folder')
    // console.log(b);
    if (quanxuan.innerText == '') {
        quanxuan.innerText = '√';
    } else {
        quanxuan.innerText = '';
    }
    b.forEach((item, i) => {
        if (quanxuan.innerText == '√') {
            item.id = i;
            item.style.backgroundColor = 'pink';
        } else {
            item.style.backgroundColor = '';
        }
    })
}

//重命名

// rename.onclick = function () {
//     let b = document.querySelectorAll('#newBox .folder');
//     let ary2 = [];
//     b.forEach(item => {
//         let cc = item.getAttribute('id');
//         //console.log(cc);   
//         if (cc == null) {
//             return;
//         } else {
//             ary2.push(+cc)
//         }
//     })
//     if(ary2.length == 1){
//     let $ipt = $div.find('input');
//     $ipt.select();
//     console.log(1);
    
//     }
  

//     render(ary);
// }

