const $rename = $('#rename');
$rename.click(function(){
returnVal = true;
//定义reData选中为true的
let reData = list.filter(item=>item.checked)
;
//若选择1项以上进入条件
if(list.some(item =>item.checked )){
    //选择一项的时候
    if(reData.length === 1){
 let $folder = $('#newBox').find('.active');
 let $span = $folder.find('span');
 let $txt = $folder.find('input');
$span.hide();
$txt.css('display','block');
$txt.select();
//当失去焦点的时候进行渲染
$txt.blur(function(){
    let val = $txt.val();
    // 当重名的时候
    if($span.text()=== val){
        $span.show();
        $txt.hide();
    }else{
        if(!val){
            console.log('请填写内容');
           $txt.val($span.text());
           $txt.select();
           return;    
        }
        // 获取父级id
        let {id,pid} = reData[0];
        //找到除了自己的兄弟
        let sibilings = list.filter(item =>item.id != id );
        //如果有一个名字相同 就重名了
        if(sibilings.some(item=>item.title === val)){
            alert('重名了')
            $txt.select();
            
        }else{
            returnVal = false;
            data[id].title = val;
            data[id].checked = false;
            render(pid);         
        }
    }
})

    }else{
        alert('只能选择一个文件')
    }
}else{
    alert('请选择文件夹')
}
});