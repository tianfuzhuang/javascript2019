// 刷新
$('#clear').click(function(){ 
    render(0);
    // createTree(0);
    createMenu(0);
})


const $del = $('#del');
$del.click(function(){
  //判断至少有一个被选中
  checkedAll.classList.remove('checked');
  if(list.some(item=>item.checked)){
      let {pid} = list[0];
      list.forEach(item => {
          if(item.checked){
              delete data[item.id]
          }
     
      });
 
  render(pid);
 
//$tree_menu.children().children().append( createTree(0) );

   
}else{
    alert('请选择文件')
}

});