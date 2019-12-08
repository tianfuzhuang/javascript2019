$move = $('.over');;

$ttx = $('#qd');
$qd = $('#qx');

$('#remove').off().click(function () {
   
    let reData = list.filter(item => item.checked);
    //如果选上提示没有移动文件
    if (!reData.length) {
        alert('没有要移动的文件');
    } else {
        $('#move').show(); //打开移动的框
        //调用树形菜单返回$ul,将其插入$move
        $move.append(createTree(0));
    }
    const qx = $('#move').find('#qx');
    const ttx = $('#move').find('#ttx');
    const ok = $('#move').find('#qd');
    qx.off().click(function () {
        $('#move').hide();   
    })
    ttx.off().click(function () {
        $('#move').hide(); 
    })


    ok.off().click(function () {
        if (okcode === 'error') {
            console.log('非法操作');
            return;
        }
        let id = reData[0].pid; //存一下改之前的pid，为了一会刷新页面
        reData.forEach(item => {
            item.pid = okcode;
            item.checked = false;
        });
        $tree_menu.children().children().append(createTree(0, true));
        render(id);

        $('#move').hide();
    });

});